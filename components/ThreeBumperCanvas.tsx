'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export type ThreeSceneKind = 'aurora' | 'field' | 'plasma';

interface ThreeBumperCanvasProps {
  kind: ThreeSceneKind;
  hue: number;
  channelNumber?: number;
  channelName?: string;
}

const AURORA_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const AURORA_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = rot * p * 2.05;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv - 0.5;
    float t = uTime * 0.28;
    float n1 = fbm(uv * 2.6 + vec2(t, -t * 0.6));
    float n2 = fbm(uv * 3.8 + vec2(-n1 * 1.4, t * 0.8));
    float ribbon = smoothstep(0.28, 0.82, n2);

    vec3 base = vec3(0.012, 0.01, 0.014);
    vec3 col = mix(base, uColorA * 0.55, ribbon * 0.65);
    col += uColorB * pow(max(0.0, ribbon - 0.35), 2.2) * 1.15;

    float vignette = smoothstep(0.95, 0.22, length(uv * vec2(1.2, 1.0)));
    col *= 0.35 + 0.65 * vignette;

    float grain = (hash(vUv * 900.0 + uTime) - 0.5) * 0.018;
    gl_FragColor = vec4(max(col + grain, 0.0), 1.0);
  }
`;

const PLASMA_VERT = /* glsl */ `
  uniform float uTime;
  varying vec3 vNormalDir;
  varying vec3 vViewDir;
  varying float vDisp;

  void main() {
    float wave1 = sin(position.x * 2.8 + uTime * 1.7) * cos(position.y * 2.4 - uTime * 1.3);
    float wave2 = sin(position.z * 3.6 - uTime * 2.1) * 0.5;
    float disp = (wave1 + wave2) * 0.14;
    vec3 displaced = position + normal * disp;

    vec4 mvPos = modelViewMatrix * vec4(displaced, 1.0);
    vNormalDir = normalize(normalMatrix * normal);
    vViewDir = normalize(-mvPos.xyz);
    vDisp = disp;
    gl_Position = projectionMatrix * mvPos;
  }
`;

const PLASMA_FRAG = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying vec3 vNormalDir;
  varying vec3 vViewDir;
  varying float vDisp;

  void main() {
    float fresnel = pow(1.0 - max(dot(normalize(vNormalDir), normalize(vViewDir)), 0.0), 2.8);
    float crest = smoothstep(-0.08, 0.18, vDisp);

    vec3 core = vec3(0.025, 0.02, 0.028);
    vec3 rimCol = mix(uColorA, uColorB, crest);
    vec3 col = mix(core, rimCol * 0.48, crest * 0.45) + rimCol * fresnel * 1.45;
    gl_FragColor = vec4(col, 1.0);
  }
`;

function createChannelPlateTexture(channelNumber: number, channelName: string, hue: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Subtle brushed dark glass card background
    const grad = ctx.createLinearGradient(0, 0, 1024, 512);
    grad.addColorStop(0, 'rgba(18, 15, 14, 0.92)');
    grad.addColorStop(1, 'rgba(8, 7, 8, 0.96)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(24, 24, 976, 464, 42);
    ctx.fill();

    // Accent border gleam
    ctx.strokeStyle = `hsla(${hue}, 82%, 62%, 0.45)`;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Red broadcast dot + tuned mark
    ctx.fillStyle = '#ff5544';
    ctx.beginPath();
    ctx.arc(92, 104, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.86)';
    ctx.font = '700 32px sans-serif';
    ctx.fillText('TUNED', 120, 115);

    ctx.fillStyle = `hsl(${hue}, 85%, 64%)`;
    ctx.font = '700 42px monospace';
    ctx.fillText(`CH ${String(channelNumber).padStart(2, '0')}`, 80, 260);

    ctx.fillStyle = '#ffffff';
    ctx.font = '800 94px sans-serif';
    ctx.fillText(channelName.toUpperCase().slice(0, 14), 80, 376);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}

export const ThreeBumperCanvas: React.FC<ThreeBumperCanvasProps> = ({
  kind,
  hue,
  channelNumber = 1,
  channelName = 'Tuned',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040305);
    scene.fog = new THREE.FogExp2(0x040305, 0.055);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 5.6);

    const colorA = new THREE.Color().setHSL((hue % 360) / 360, 0.85, 0.56);
    const colorB = new THREE.Color().setHSL(((hue + 38) % 360) / 360, 0.88, 0.62);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];

    let updateScene: (t: number) => void = () => {};

    if (kind === 'aurora') {
      // Scene 1: Custom GLSL FBM Liquid Aurora Shader + Spline Tube Filaments
      const backdropGeo = new THREE.PlaneGeometry(18, 10);
      geometries.push(backdropGeo);
      const backdropMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColorA: { value: colorA },
          uColorB: { value: colorB },
        },
        vertexShader: AURORA_VERT,
        fragmentShader: AURORA_FRAG,
        depthWrite: false,
      });
      materials.push(backdropMat);
      const backdrop = new THREE.Mesh(backdropGeo, backdropMat);
      backdrop.position.z = -3.2;
      scene.add(backdrop);

      const hemi = new THREE.HemisphereLight(0xf6f2eb, 0x0a080a, 0.6);
      const rim = new THREE.PointLight(colorA, 150, 20, 2);
      rim.position.set(-2.5, 2.0, 2.5);
      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(3.5, 4.5, 4.0);
      scene.add(hemi, rim, key);

      const splinePtsA: THREE.Vector3[] = [];
      const splinePtsB: THREE.Vector3[] = [];
      for (let i = 0; i <= 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        splinePtsA.push(
          new THREE.Vector3(Math.cos(a) * 2.15, Math.sin(a * 2) * 0.62, Math.sin(a) * 1.1)
        );
        splinePtsB.push(
          new THREE.Vector3(Math.sin(a) * 2.55, Math.cos(a * 2) * 0.78, Math.cos(a) * 1.25)
        );
      }

      const curveA = new THREE.CatmullRomCurve3(splinePtsA, true);
      const curveB = new THREE.CatmullRomCurve3(splinePtsB, true);
      const tubeGeoA = new THREE.TubeGeometry(curveA, 160, 0.026, 16, true);
      const tubeGeoB = new THREE.TubeGeometry(curveB, 160, 0.018, 16, true);
      geometries.push(tubeGeoA, tubeGeoB);

      const chromeMat = new THREE.MeshPhysicalMaterial({
        color: 0xe6e0da,
        metalness: 0.92,
        roughness: 0.14,
        clearcoat: 1.0,
      });
      const filamentMat = new THREE.MeshStandardMaterial({
        color: colorB,
        emissive: colorB,
        emissiveIntensity: 1.9,
        roughness: 0.25,
      });
      materials.push(chromeMat, filamentMat);

      const ribbonA = new THREE.Mesh(tubeGeoA, chromeMat);
      const ribbonB = new THREE.Mesh(tubeGeoB, filamentMat);
      const ribbonGroup = new THREE.Group();
      ribbonGroup.add(ribbonA, ribbonB);
      scene.add(ribbonGroup);

      updateScene = (t) => {
        backdropMat.uniforms.uTime.value = t;
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.4), 3);
        ribbonGroup.rotation.y = t * 0.24 - 0.35;
        ribbonGroup.rotation.x = 0.22 + Math.sin(t * 0.45) * 0.08;
        camera.position.set(Math.sin(t * 0.25) * 0.32, 0.1, 6.2 - intro * 0.9);
        camera.lookAt(0, 0, 0);
      };
    } else if (kind === 'field') {
      // Scene 2: 180-fin InstancedMesh Ripple Array + Curved CanvasTexture Station Plate
      const hemi = new THREE.HemisphereLight(0xf8f4ee, 0x0b090a, 0.55);
      const key = new THREE.DirectionalLight(0xffffff, 2.0);
      key.position.set(3, 5, 5);
      const accent = new THREE.PointLight(colorA, 180, 22, 2);
      accent.position.set(-2.2, 1.4, 3.2);
      scene.add(hemi, key, accent);

      const cols = 18;
      const rows = 10;
      const count = cols * rows;
      const finGeo = new THREE.CapsuleGeometry(0.038, 0.52, 4, 8);
      geometries.push(finGeo);
      const finMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        roughness: 0.22,
        metalness: 0.55,
        clearcoat: 0.9,
      });
      materials.push(finMat);

      const instanced = new THREE.InstancedMesh(finGeo, finMat, count);
      const instColor = new THREE.Color();
      for (let i = 0; i < count; i++) {
        const c = i % cols;
        const l = 0.28 + (c / cols) * 0.44;
        instColor.setHSL(((hue + c * 2) % 360) / 360, 0.72, l);
        instanced.setColorAt(i, instColor);
      }
      if (instanced.instanceColor) instanced.instanceColor.needsUpdate = true;
      instanced.position.z = -1.8;
      scene.add(instanced);

      // Curved glass station emblem using SRGB CanvasTexture centered in front of the ripple field
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.CylinderGeometry(3.4, 3.4, 1.75, 48, 1, true, -0.48, 0.96);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
        side: THREE.FrontSide,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.position.set(0, 0, -2.5);
      scene.add(plate);

      const dummy = new THREE.Object3D();
      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.1), 3);
        let idx = 0;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = (c - (cols - 1) / 2) * 0.48;
            const y = (r - (rows - 1) / 2) * 0.44;
            const wave = Math.sin(c * 0.42 - t * 2.4) * Math.cos(r * 0.5 - t * 1.5);
            dummy.position.set(x, y, wave * 0.42);
            dummy.rotation.set(wave * 0.42, wave * 0.25, 0);
            dummy.scale.setScalar(0.85 + (wave + 1) * 0.16);
            dummy.updateMatrix();
            instanced.setMatrixAt(idx++, dummy.matrix);
          }
        }
        instanced.instanceMatrix.needsUpdate = true;

        plate.rotation.y = (1 - intro) * 0.22 + Math.sin(t * 0.6) * 0.05;
        camera.position.set(Math.sin(t * 0.35) * 0.28, 0.08, 4.9 - intro * 0.35);
        camera.lookAt(0, 0, 0);
      };
    } else {
      // Scene 3: Custom GLSL Vertex-Displaced Acoustic Sphere + Fresnel Rim Shader
      const sphereGeo = new THREE.SphereGeometry(1.52, 96, 96);
      geometries.push(sphereGeo);
      const plasmaMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColorA: { value: colorA },
          uColorB: { value: colorB },
        },
        vertexShader: PLASMA_VERT,
        fragmentShader: PLASMA_FRAG,
      });
      materials.push(plasmaMat);
      const orb = new THREE.Mesh(sphereGeo, plasmaMat);
      scene.add(orb);

      updateScene = (t) => {
        plasmaMat.uniforms.uTime.value = t;
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.25), 3);
        orb.rotation.y = t * 0.22;
        orb.scale.setScalar(0.9 + intro * 0.1);
        camera.position.set(Math.sin(t * 0.25) * 0.25, 0.08, 5.2 - intro * 0.4);
        camera.lookAt(0, 0, 0);
      };
    }

    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: 4,
    });
    const composer = new EffectComposer(renderer, renderTarget);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      kind === 'field' ? 0.34 : 0.48,
      0.45,
      0.72
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    const handleResize = () => {
      if (disposed || !container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      composer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const timer = new THREE.Timer();
    timer.connect(document);

    if (reducedMotion) {
      updateScene(1.2);
      composer.render();
    } else {
      renderer.setAnimationLoop(() => {
        if (disposed) return;
        timer.update();
        updateScene(timer.getElapsed());
        composer.render();
      });
    }

    return () => {
      disposed = true;
      window.removeEventListener('resize', handleResize);
      renderer.setAnimationLoop(null);
      timer.dispose?.();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderTarget.dispose();
      composer.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [kind, hue, channelNumber, channelName]);

  return <div ref={containerRef} className="bm-three-canvas" aria-hidden />;
};
