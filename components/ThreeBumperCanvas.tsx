'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export type ThreeSceneKind =
  | 'cinemascope' // Movies, Film, Documentaries
  | 'cybermatrix' // Tech, Industry, Coding
  | 'synthwave'   // Games, Arcade, Retro
  | 'resonator'   // Music, Beats, Sound
  | 'quantum'     // Science, Learning, Space, Religion
  | 'architect'   // Design, Architecture, Art
  | 'velocity'    // Cars, Sports, Fitness
  | 'broadcast'   // News, Business, Entertainment
  | 'aurora'      // Travel, Nature, Food
  | 'field'       // Instanced spatial ripple field
  | 'plasma';     // Cartoons, Pop, Abstract

export interface ThreeBumperCanvasProps {
  kind: ThreeSceneKind;
  hue: number;
  channelNumber?: number;
  channelName?: string;
  categoryId?: string;
  showStationPlate?: boolean;
}

export function getSceneKindForCategory(categoryId: string): ThreeSceneKind {
  switch (categoryId) {
    case 'movies':
    case 'film':
    case 'documentaries':
      return 'cinemascope';
    case 'tech':
    case 'industry':
      return 'cybermatrix';
    case 'games':
      return 'synthwave';
    case 'music':
      return 'resonator';
    case 'science':
    case 'learning':
    case 'religion':
      return 'quantum';
    case 'design':
    case 'architecture':
    case 'art':
      return 'architect';
    case 'cars':
    case 'sports':
    case 'fitness':
      return 'velocity';
    case 'news':
    case 'business':
    case 'entertainment':
      return 'broadcast';
    case 'travel':
    case 'nature':
    case 'food':
      return 'aurora';
    case 'cartoons':
    default:
      return 'plasma';
  }
}

// ---------------- Shaders ----------------

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

const PROJECTOR_CONE_VERT = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vWorldPos;
  void main() {
    vUv = uv;
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorldPos = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const PROJECTOR_CONE_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColor;
  varying vec2 vUv;
  varying vec3 vWorldPos;

  void main() {
    float beam = pow(1.0 - vUv.y, 1.6);
    float dust = sin(vUv.x * 32.0 + uTime * 1.8) * cos(vWorldPos.y * 8.0 - uTime * 2.2);
    float flicker = 0.94 + 0.06 * sin(uTime * 32.0);
    float intensity = beam * (0.28 + 0.12 * dust) * flicker;
    gl_FragColor = vec4(uColor * intensity, intensity * 0.85);
  }
`;

const RETRO_SUN_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const RETRO_SUN_FRAG = /* glsl */ `
  uniform float uTime;
  uniform vec3 uColorTop;
  uniform vec3 uColorBottom;
  varying vec2 vUv;

  void main() {
    float y = vUv.y;
    // Horizontal retro raster blinds with widening gaps near bottom
    float stripes = sin((y + uTime * 0.05) * 44.0);
    float gapWidth = smoothstep(0.7, 0.1, y) * 0.55;
    if (stripes < gapWidth && y < 0.72) discard;

    vec3 col = mix(uColorBottom, uColorTop, pow(y, 1.4));
    gl_FragColor = vec4(col, 0.95);
  }
`;

// Helper: high-res CanvasTexture for 3D station badge
function createChannelPlateTexture(channelNumber: number, channelName: string, hue: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Deep brushed dark glass card
    const grad = ctx.createLinearGradient(0, 0, 1024, 512);
    grad.addColorStop(0, 'rgba(16, 14, 18, 0.94)');
    grad.addColorStop(1, 'rgba(6, 6, 8, 0.98)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(24, 24, 976, 464, 42);
    ctx.fill();

    // Accent border glow
    ctx.strokeStyle = `hsla(${hue}, 86%, 64%, 0.55)`;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Station Live Indicator dot + Tuned wordmark
    ctx.fillStyle = '#ff3333';
    ctx.beginPath();
    ctx.arc(88, 104, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(255,255,255,0.92)';
    ctx.font = '800 32px sans-serif';
    ctx.fillText('TUNED BROADCAST', 116, 114);

    // Station identification callsign
    ctx.fillStyle = `hsl(${hue}, 88%, 66%)`;
    ctx.font = '800 44px monospace';
    ctx.fillText(`CH ${String(channelNumber).padStart(2, '0')}`, 76, 260);

    ctx.fillStyle = '#ffffff';
    ctx.font = '900 96px sans-serif';
    ctx.fillText(channelName.toUpperCase().slice(0, 15), 76, 380);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

export const ThreeBumperCanvas: React.FC<ThreeBumperCanvasProps> = ({
  kind,
  hue,
  channelNumber = 1,
  channelName = 'Tuned',
  categoryId,
  showStationPlate = false,
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
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040305);
    scene.fog = new THREE.FogExp2(0x040305, 0.05);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 5.6);

    const colorA = new THREE.Color().setHSL((hue % 360) / 360, 0.88, 0.58);
    const colorB = new THREE.Color().setHSL(((hue + 42) % 360) / 360, 0.9, 0.64);
    const goldAccent = new THREE.Color(0xffca58);
    const cyanAccent = new THREE.Color(0x00f0ff);
    const magentaAccent = new THREE.Color(0xff007f);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];

    let updateScene: (t: number) => void = () => {};

    // -------------------------------------------------------------
    // SCENE 1: CINEMASCOPE (Movies, Film, Documentaries)
    // -------------------------------------------------------------
    if (kind === 'cinemascope') {
      scene.background = new THREE.Color(0x060405);
      scene.fog = new THREE.FogExp2(0x060405, 0.045);

      const hemi = new THREE.HemisphereLight(0xfff0e4, 0x10080c, 0.7);
      const rim = new THREE.DirectionalLight(0xffdfa0, 4.8);
      rim.position.set(0, 3.5, -4.5);
      const fill = new THREE.DirectionalLight(0xa0c8ff, 1.4);
      fill.position.set(-3.5, 2.0, 3.5);
      scene.add(hemi, rim, fill);

      // 1. Volumetric projector light cone cutting through the darkness
      const coneGeo = new THREE.CylinderGeometry(0.3, 5.4, 9.5, 32, 1, true);
      geometries.push(coneGeo);
      const coneMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColor: { value: goldAccent },
        },
        vertexShader: PROJECTOR_CONE_VERT,
        fragmentShader: PROJECTOR_CONE_FRAG,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      materials.push(coneMat);
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.rotation.x = Math.PI / 2.15;
      cone.position.set(0, 0.8, -1.8);
      scene.add(cone);

      // 2. Swirling floating 35mm projector dust motes
      const dustCount = 220;
      const dustPositions = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dustPositions[i * 3] = (Math.random() - 0.5) * 4.5;
        dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
        dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 5.0 - 0.5;
      }
      const dustGeo = new THREE.BufferGeometry();
      dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      geometries.push(dustGeo);
      const dustMat = new THREE.PointsMaterial({
        color: 0xfff4d0,
        size: 0.038,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      materials.push(dustMat);
      const dust = new THREE.Points(dustGeo, dustMat);
      scene.add(dust);

      // 3. Floating monolithic obsidian studio monument
      const monolithGroup = new THREE.Group();
      const monoGeo = new THREE.BoxGeometry(2.2, 1.35, 0.28);
      geometries.push(monoGeo);

      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);

      const monoMat = new THREE.MeshPhysicalMaterial({
        color: 0x141012,
        metalness: 0.94,
        roughness: 0.16,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });
      const faceMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(monoMat, faceMat);

      // Multi-material box: front face has channel plate, sides are polished obsidian
      const monoMesh = new THREE.Mesh(monoGeo, [
        monoMat, monoMat, monoMat, monoMat, faceMat, monoMat,
      ]);
      monoMesh.visible = showStationPlate;
      monolithGroup.add(monoMesh);

      // Anamorphic horizontal lens flare streak
      const streakGeo = new THREE.PlaneGeometry(16, 0.045);
      geometries.push(streakGeo);
      const streakMat = new THREE.MeshBasicMaterial({
        color: 0xffdf88,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      materials.push(streakMat);
      const streak = new THREE.Mesh(streakGeo, streakMat);
      streak.position.z = 0.18;
      monolithGroup.add(streak);

      scene.add(monolithGroup);

      updateScene = (t) => {
        coneMat.uniforms.uTime.value = t;
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.3), 3);

        // Gentle floating drift
        monolithGroup.position.set(0, Math.sin(t * 0.8) * 0.08, -0.6);
        monolithGroup.rotation.y = Math.sin(t * 0.35) * 0.14;
        monolithGroup.rotation.x = 0.04 + Math.cos(t * 0.4) * 0.03;

        // Cinematic camera push-in
        camera.position.set(Math.sin(t * 0.2) * 0.22, 0.12, 5.8 - intro * 0.85);
        camera.lookAt(0, 0, -0.6);

        // Dust motes drift in the beam
        const pos = dustGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < dustCount; i++) {
          pos[i * 3 + 1] += Math.sin(t * 1.5 + i) * 0.0025;
          pos[i * 3] += Math.cos(t * 0.8 + i) * 0.0018;
        }
        dustGeo.attributes.position.needsUpdate = true;
      };
    }

    // -------------------------------------------------------------
    // SCENE 2: CYBERMATRIX (Tech, Industry, Coding)
    // -------------------------------------------------------------
    else if (kind === 'cybermatrix') {
      scene.background = new THREE.Color(0x020810);
      scene.fog = new THREE.FogExp2(0x020810, 0.055);

      const hemi = new THREE.HemisphereLight(0x00f0ff, 0x020810, 0.8);
      const key = new THREE.DirectionalLight(0xffffff, 2.2);
      key.position.set(4, 5, 4);
      const accent = new THREE.PointLight(colorA, 180, 25, 2);
      accent.position.set(-2, 2, 2);
      scene.add(hemi, key, accent);

      // 1. Instanced silicon microprocessor chip array
      const cols = 9;
      const rows = 8;
      const chipCount = cols * rows;
      const chipGeo = new THREE.BoxGeometry(0.38, 0.22, 0.38);
      geometries.push(chipGeo);
      const chipMat = new THREE.MeshPhysicalMaterial({
        color: 0x091424,
        metalness: 0.88,
        roughness: 0.22,
        clearcoat: 0.9,
      });
      materials.push(chipMat);
      const chips = new THREE.InstancedMesh(chipGeo, chipMat, chipCount);
      chips.position.set(0, -1.1, -1.8);
      scene.add(chips);

      // 2. Sweeping laser plane
      const laserGeo = new THREE.PlaneGeometry(8, 0.04);
      geometries.push(laserGeo);
      const laserMat = new THREE.MeshBasicMaterial({
        color: cyanAccent,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      materials.push(laserMat);
      const laser = new THREE.Mesh(laserGeo, laserMat);
      laser.rotation.x = Math.PI / 2;
      laser.position.y = -0.92;
      scene.add(laser);

      // 3. Ascending fiber-optic vertical data particles
      const pCount = 140;
      const pPositions = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        pPositions[i * 3] = (Math.random() - 0.5) * 5.5;
        pPositions[i * 3 + 1] = Math.random() * 3.5 - 1.2;
        pPositions[i * 3 + 2] = (Math.random() - 0.5) * 4.5 - 1.5;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
      geometries.push(pGeo);
      const pMat = new THREE.PointsMaterial({
        color: cyanAccent,
        size: 0.045,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      materials.push(pMat);
      const particles = new THREE.Points(pGeo, pMat);
      scene.add(particles);

      // 4. Floating holographic station plate
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.4, 1.2);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
        side: THREE.DoubleSide,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0.35, -0.6);
      scene.add(plate);

      const dummy = new THREE.Object3D();
      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.1), 3);
        let idx = 0;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const x = (c - (cols - 1) / 2) * 0.52;
            const z = (r - (rows - 1) / 2) * 0.52;
            const wave = Math.sin(c * 0.55 + t * 3.2) * Math.cos(r * 0.65 - t * 2.1);
            dummy.position.set(x, wave * 0.28, z);
            dummy.scale.set(1.0, 1.0 + Math.max(0, wave) * 1.4, 1.0);
            dummy.updateMatrix();
            chips.setMatrixAt(idx++, dummy.matrix);
          }
        }
        chips.instanceMatrix.needsUpdate = true;

        // Laser scan sweep
        laser.position.z = Math.sin(t * 2.0) * 2.4 - 1.8;

        // Ascending data particles
        const pos = pGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < pCount; i++) {
          pos[i * 3 + 1] += 0.025;
          if (pos[i * 3 + 1] > 2.5) pos[i * 3 + 1] = -1.2;
        }
        pGeo.attributes.position.needsUpdate = true;

        plate.position.y = 0.35 + Math.sin(t * 1.2) * 0.05;
        plate.rotation.y = Math.sin(t * 0.4) * 0.12;

        camera.position.set(Math.sin(t * 0.3) * 0.35, 0.4, 5.2 - intro * 0.6);
        camera.lookAt(0, 0.1, -1.0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 3: SYNTHWAVE (Games, Arcade, Retro)
    // -------------------------------------------------------------
    else if (kind === 'synthwave') {
      scene.background = new THREE.Color(0x0a0216);
      scene.fog = new THREE.FogExp2(0x0a0216, 0.048);

      const hemi = new THREE.HemisphereLight(0xff007f, 0x0a0216, 0.85);
      const dir = new THREE.DirectionalLight(0x00ffff, 2.0);
      dir.position.set(2, 4, 3);
      scene.add(hemi, dir);

      // 1. Undulating wireframe terrain highway
      const terrainGeo = new THREE.PlaneGeometry(16, 22, 28, 40);
      geometries.push(terrainGeo);
      const terrainMat = new THREE.MeshBasicMaterial({
        color: magentaAccent,
        wireframe: true,
      });
      materials.push(terrainMat);
      const terrain = new THREE.Mesh(terrainGeo, terrainMat);
      terrain.rotation.x = -Math.PI / 2.25;
      terrain.position.set(0, -1.2, -4.5);
      scene.add(terrain);

      // 2. Retro sliced horizon sun
      const sunGeo = new THREE.PlaneGeometry(5.2, 5.2);
      geometries.push(sunGeo);
      const sunMat = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uColorTop: { value: new THREE.Color(0xfff055) },
          uColorBottom: { value: magentaAccent },
        },
        vertexShader: RETRO_SUN_VERT,
        fragmentShader: RETRO_SUN_FRAG,
        transparent: true,
        depthWrite: false,
      });
      materials.push(sunMat);
      const sun = new THREE.Mesh(sunGeo, sunMat);
      sun.position.set(0, 0.6, -11.0);
      scene.add(sun);

      // 3. Floating spinning low-poly icosahedron monolith
      const gemGeo = new THREE.IcosahedronGeometry(0.9, 0);
      geometries.push(gemGeo);
      const gemMat = new THREE.MeshPhysicalMaterial({
        color: 0x180b2a,
        metalness: 0.95,
        roughness: 0.12,
        clearcoat: 1.0,
      });
      const wireMat = new THREE.MeshBasicMaterial({
        color: cyanAccent,
        wireframe: true,
      });
      materials.push(gemMat, wireMat);
      const gem = new THREE.Mesh(gemGeo, gemMat);
      const wire = new THREE.Mesh(gemGeo, wireMat);
      wire.scale.setScalar(1.02);
      const gemGroup = new THREE.Group();
      gemGroup.add(gem, wire);
      gemGroup.position.set(0, 0.45, -1.5);
      scene.add(gemGroup);

      // 4. Station badge in front
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, -0.4, 0.2);
      scene.add(plate);

      const posAttr = terrainGeo.attributes.position;
      updateScene = (t) => {
        sunMat.uniforms.uTime.value = t;
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.2), 3);

        // Infinite forward undulating terrain wave
        for (let i = 0; i < posAttr.count; i++) {
          const x = posAttr.getX(i);
          const y = posAttr.getY(i);
          const distFromCenter = Math.abs(x);
          const mountain = distFromCenter > 2.2 ? Math.pow(distFromCenter - 2.2, 1.3) * 0.42 : 0;
          const wave = Math.sin(y * 0.8 + t * 4.5) * 0.18;
          posAttr.setZ(i, mountain + wave);
        }
        posAttr.needsUpdate = true;

        gemGroup.rotation.x = t * 0.65;
        gemGroup.rotation.y = t * 0.85;
        gemGroup.position.y = 0.55 + Math.sin(t * 1.5) * 0.12;

        plate.position.y = -0.4 + (1 - intro) * -0.5;

        // Dynamic forward banking
        camera.position.set(Math.sin(t * 0.7) * 0.28, 0.15, 5.0 - intro * 0.5);
        camera.rotation.z = Math.sin(t * 0.7) * 0.035;
        camera.lookAt(0, 0.2, -3.0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 4: RESONATOR (Music, Beats, Audio)
    // -------------------------------------------------------------
    else if (kind === 'resonator') {
      scene.background = new THREE.Color(0x06030c);
      scene.fog = new THREE.FogExp2(0x06030c, 0.05);

      const hemi = new THREE.HemisphereLight(0xda96ff, 0x06030c, 0.8);
      const rim = new THREE.PointLight(colorA, 220, 20, 2);
      rim.position.set(-2, 3, 2);
      scene.add(hemi, rim);

      // 1. Iridescent central chrome resonator core
      const coreGeo = new THREE.SphereGeometry(1.0, 64, 64);
      geometries.push(coreGeo);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: 0x120822,
        metalness: 0.95,
        roughness: 0.1,
        clearcoat: 1.0,
        iridescence: 0.9,
      });
      materials.push(coreMat);
      const core = new THREE.Mesh(coreGeo, coreMat);
      scene.add(core);

      // 2. Concentric audio equalizer rings
      const rings: THREE.Mesh[] = [];
      const ringRadii = [1.5, 2.0, 2.5, 3.0];
      ringRadii.forEach((r, idx) => {
        const ringGeo = new THREE.TorusGeometry(r, 0.024, 16, 96);
        geometries.push(ringGeo);
        const ringCol = new THREE.Color().setHSL(((hue + idx * 30) % 360) / 360, 0.9, 0.6);
        const ringMat = new THREE.MeshStandardMaterial({
          color: ringCol,
          emissive: ringCol,
          emissiveIntensity: 2.2,
          roughness: 0.2,
        });
        materials.push(ringMat);
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2.3 + idx * 0.15;
        scene.add(ring);
        rings.push(ring);
      });

      // 3. Radial laser spokes
      const spokeCount = 12;
      const spokeLines = new Float32Array(spokeCount * 6);
      for (let i = 0; i < spokeCount; i++) {
        const a = (i / spokeCount) * Math.PI * 2;
        spokeLines[i * 6] = 0;
        spokeLines[i * 6 + 1] = 0;
        spokeLines[i * 6 + 2] = 0;
        spokeLines[i * 6 + 3] = Math.cos(a) * 4.8;
        spokeLines[i * 6 + 4] = Math.sin(a) * 4.8;
        spokeLines[i * 6 + 5] = (Math.random() - 0.5) * 2.0;
      }
      const spokeGeo = new THREE.BufferGeometry();
      spokeGeo.setAttribute('position', new THREE.BufferAttribute(spokeLines, 3));
      geometries.push(spokeGeo);
      const spokeMat = new THREE.LineBasicMaterial({
        color: colorB,
        transparent: true,
        opacity: 0.45,
        blending: THREE.AdditiveBlending,
      });
      materials.push(spokeMat);
      const spokes = new THREE.LineSegments(spokeGeo, spokeMat);
      scene.add(spokes);

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0, 1.4);
      scene.add(plate);

      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.1), 3);
        const beat = Math.pow(Math.sin(t * 3.8), 4.0);

        core.scale.setScalar(0.92 + beat * 0.16);
        core.rotation.y = t * 0.35;

        rings.forEach((ring, idx) => {
          const wave = Math.sin(t * 3.0 + idx * 0.7);
          ring.rotation.z = t * (0.2 + idx * 0.08);
          ring.scale.setScalar(0.95 + wave * 0.08 + beat * 0.05);
        });

        spokes.rotation.z = t * 0.15;
        plate.position.z = 1.4 - (1 - intro) * 0.6;

        camera.position.set(Math.sin(t * 0.3) * 0.3, 0.1, 5.2 - intro * 0.4);
        camera.lookAt(0, 0, 0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 5: QUANTUM (Science, Learning, Space, Religion)
    // -------------------------------------------------------------
    else if (kind === 'quantum') {
      scene.background = new THREE.Color(0x020208);
      scene.fog = new THREE.FogExp2(0x020208, 0.04);

      const hemi = new THREE.HemisphereLight(0x7090ff, 0x020208, 0.75);
      const centerPoint = new THREE.PointLight(colorA, 250, 30, 2);
      centerPoint.position.set(0, 0, 0);
      scene.add(hemi, centerPoint);

      // 1. Kerr Black Hole Event Horizon (pitch black core)
      const holeGeo = new THREE.SphereGeometry(1.1, 48, 48);
      geometries.push(holeGeo);
      const holeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
      materials.push(holeMat);
      const blackHole = new THREE.Mesh(holeGeo, holeMat);
      scene.add(blackHole);

      // 2. Blazing Photon Sphere Ring
      const ringGeo = new THREE.RingGeometry(1.15, 1.48, 64);
      geometries.push(ringGeo);
      const ringMat = new THREE.MeshBasicMaterial({
        color: goldAccent,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });
      materials.push(ringMat);
      const photonRing = new THREE.Mesh(ringGeo, ringMat);
      photonRing.rotation.x = Math.PI / 2.2;
      scene.add(photonRing);

      // 3. Logarithmic spiral accretion particle disk
      const pCount = 550;
      const pPos = new Float32Array(pCount * 3);
      const pAngles = new Float32Array(pCount);
      const pRadii = new Float32Array(pCount);
      for (let i = 0; i < pCount; i++) {
        const r = 1.35 + Math.pow(Math.random(), 1.6) * 3.2;
        const a = Math.random() * Math.PI * 2;
        pRadii[i] = r;
        pAngles[i] = a;
        pPos[i * 3] = Math.cos(a) * r;
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 0.18;
        pPos[i * 3 + 2] = Math.sin(a) * r;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      geometries.push(pGeo);
      const pMat = new THREE.PointsMaterial({
        color: colorB,
        size: 0.042,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
      });
      materials.push(pMat);
      const accretionDisk = new THREE.Points(pGeo, pMat);
      accretionDisk.rotation.x = Math.PI / 2.2;
      scene.add(accretionDisk);

      // 4. Distant twinkling stars
      const starCount = 180;
      const starPos = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        starPos[i * 3] = (Math.random() - 0.5) * 20;
        starPos[i * 3 + 1] = (Math.random() - 0.5) * 15;
        starPos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
      }
      const starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      geometries.push(starGeo);
      const starMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.028,
        transparent: true,
        opacity: 0.65,
      });
      materials.push(starMat);
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0, 1.5);
      scene.add(plate);

      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.25), 3);

        // Orbital particle dynamics around black hole
        const pos = pGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < pCount; i++) {
          const r = pRadii[i];
          const speed = (2.2 / Math.sqrt(r)) * 0.45;
          pAngles[i] += speed * 0.03;
          const a = pAngles[i];
          pos[i * 3] = Math.cos(a) * r;
          pos[i * 3 + 2] = Math.sin(a) * r;
        }
        pGeo.attributes.position.needsUpdate = true;

        photonRing.rotation.z = t * 0.35;
        plate.position.z = 1.5 - (1 - intro) * 0.6;

        // Cinematic 3D orbital crane
        camera.position.set(
          Math.sin(t * 0.25) * 1.4,
          1.2 - Math.sin(t * 0.3) * 0.4,
          5.6 - intro * 0.8
        );
        camera.lookAt(0, 0, 0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 6: ARCHITECT / MINIMALIST (Design, Architecture, Art)
    // High-concept Swiss/Bauhaus kinetic sculpture: precision golden-ratio rings,
    // floating refractive crystal octahedron, and razor-thin architectural drafting planes.
    // -------------------------------------------------------------
    else if (kind === 'architect') {
      scene.background = new THREE.Color(0x0a090c);
      scene.fog = new THREE.FogExp2(0x0a090c, 0.04);

      // Studio Gallery Lighting (soft key, cool rim, warm floor bounce)
      const keyLight = new THREE.DirectionalLight(0xfff5ea, 3.8);
      keyLight.position.set(5, 8, 6);
      const fillLight = new THREE.DirectionalLight(0x7890b0, 1.2);
      fillLight.position.set(-6, -3, 3);
      const accentSpot = new THREE.PointLight(colorA, 120, 16, 2);
      accentSpot.position.set(0, 0, 3);
      const hemi = new THREE.HemisphereLight(0xffffff, 0x080709, 0.6);
      scene.add(keyLight, fillLight, accentSpot, hemi);

      const kineticGroup = new THREE.Group();

      // 1. Primary Precision Architectural Ring (Brushed Golden Ratio Torus)
      const ringGeoA = new THREE.TorusGeometry(1.68, 0.052, 32, 120);
      geometries.push(ringGeoA);
      const ringMatA = new THREE.MeshPhysicalMaterial({
        color: 0xf5f3ee,
        metalness: 0.94,
        roughness: 0.14,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
      });
      materials.push(ringMatA);
      const ringMeshA = new THREE.Mesh(ringGeoA, ringMatA);
      ringMeshA.rotation.x = Math.PI / 3.4;
      kineticGroup.add(ringMeshA);

      // 2. Secondary Gimbal Ring (Accent Tone)
      const ringGeoB = new THREE.TorusGeometry(1.42, 0.038, 24, 96);
      geometries.push(ringGeoB);
      const ringMatB = new THREE.MeshStandardMaterial({
        color: colorB,
        metalness: 0.85,
        roughness: 0.22,
        emissive: colorB,
        emissiveIntensity: 0.28,
      });
      materials.push(ringMatB);
      const ringMeshB = new THREE.Mesh(ringGeoB, ringMatB);
      ringMeshB.rotation.y = Math.PI / 2.6;
      kineticGroup.add(ringMeshB);

      // 3. Central Suspended Refractive Crystal (Precision Octahedron)
      const crystalGeo = new THREE.OctahedronGeometry(0.85, 0);
      geometries.push(crystalGeo);
      const crystalMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.04,
        roughness: 0.08,
        transmission: 0.92,
        thickness: 0.85,
        ior: 1.54,
        clearcoat: 1.0,
      });
      materials.push(crystalMat);
      const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
      kineticGroup.add(crystalMesh);

      // 4. Razor-fine Wireframe Framing of the Crystal
      const crystalEdges = new THREE.EdgesGeometry(crystalGeo);
      geometries.push(crystalEdges);
      const edgeMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.65,
      });
      materials.push(edgeMat);
      const edgeMesh = new THREE.LineSegments(crystalEdges, edgeMat);
      crystalMesh.add(edgeMesh);

      // 5. Architectural Drafting Grids (Golden Ratio calibration marks & axes)
      const gridGroup = new THREE.Group();
      const circlePts: THREE.Vector3[] = [];
      const circleRad = 2.15;
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        circlePts.push(new THREE.Vector3(Math.cos(theta) * circleRad, Math.sin(theta) * circleRad, 0));
      }
      const circleGeo = new THREE.BufferGeometry().setFromPoints(circlePts);
      geometries.push(circleGeo);
      const circleMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.18,
      });
      materials.push(circleMat);
      const circleLine = new THREE.Line(circleGeo, circleMat);
      gridGroup.add(circleLine);

      // Subtle crosshair drafting ticks
      const tickGeo = new THREE.BufferGeometry();
      const tickPos = new Float32Array([
        -0.18, 0, 0,  0.18, 0, 0,
        0, -0.18, 0,  0, 0.18, 0,
        -circleRad - 0.1, 0, 0, -circleRad + 0.1, 0, 0,
        circleRad - 0.1, 0, 0, circleRad + 0.1, 0, 0,
        0, -circleRad - 0.1, 0, 0, -circleRad + 0.1, 0,
        0, circleRad - 0.1, 0, 0, circleRad + 0.1, 0,
      ]);
      tickGeo.setAttribute('position', new THREE.BufferAttribute(tickPos, 3));
      geometries.push(tickGeo);
      const tickMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.4,
      });
      materials.push(tickMat);
      const ticks = new THREE.LineSegments(tickGeo, tickMat);
      gridGroup.add(ticks);

      scene.add(kineticGroup);
      scene.add(gridGroup);

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, -0.2, 1.2);
      scene.add(plate);

      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.2), 3);

        // Harmonic kinetic rotation (Euler gimbal breathing)
        ringMeshA.rotation.x = Math.PI / 3.4 + t * 0.22;
        ringMeshA.rotation.z = Math.sin(t * 0.3) * 0.15;

        ringMeshB.rotation.y = Math.PI / 2.6 - t * 0.28;
        ringMeshB.rotation.x = Math.cos(t * 0.25) * 0.18;

        crystalMesh.rotation.y = t * 0.42;
        crystalMesh.rotation.x = Math.sin(t * 0.35) * 0.25;

        gridGroup.rotation.z = -t * 0.08;
        gridGroup.position.z = -0.4;

        kineticGroup.scale.setScalar(0.92 + intro * 0.08);
        plate.position.z = 1.2 - (1 - intro) * 0.5;

        // Smooth architectural slow-motion camera glide
        camera.position.set(
          Math.sin(t * 0.16) * 0.45,
          0.15 + Math.cos(t * 0.2) * 0.1,
          5.6 - intro * 0.4
        );
        camera.lookAt(0, 0, 0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 7: VELOCITY (Cars, Sports, Fitness)
    // -------------------------------------------------------------
    else if (kind === 'velocity') {
      scene.background = new THREE.Color(0x0c0303);
      scene.fog = new THREE.FogExp2(0x0c0303, 0.06);

      const hemi = new THREE.HemisphereLight(0xff3333, 0x0c0303, 0.9);
      const key = new THREE.DirectionalLight(0xffea40, 2.5);
      key.position.set(2, 4, 3);
      scene.add(hemi, key);

      // 1. Aerodynamic wind-tunnel slipstream ribbons
      const ribbonCount = 8;
      const ribbons: THREE.Mesh[] = [];
      for (let r = 0; r < ribbonCount; r++) {
        const angle = (r / ribbonCount) * Math.PI * 2;
        const pts: THREE.Vector3[] = [];
        for (let i = 0; i <= 24; i++) {
          const z = (i / 24) * -16 + 2;
          const rad = 2.0 + Math.sin(i * 0.35) * 0.4;
          pts.push(new THREE.Vector3(Math.cos(angle + z * 0.15) * rad, Math.sin(angle + z * 0.15) * rad * 0.6, z));
        }
        const curve = new THREE.CatmullRomCurve3(pts);
        const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.024, 8, false);
        geometries.push(tubeGeo);
        const ribCol = new THREE.Color().setHSL(((hue + r * 15) % 360) / 360, 0.95, 0.55);
        const tubeMat = new THREE.MeshBasicMaterial({
          color: ribCol,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
        });
        materials.push(tubeMat);
        const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
        scene.add(tubeMesh);
        ribbons.push(tubeMesh);
      }

      // 2. High-speed kinetic streak lines flying towards camera
      const lineCount = 180;
      const linePositions = new Float32Array(lineCount * 6);
      const lineSpeeds = new Float32Array(lineCount);
      for (let i = 0; i < lineCount; i++) {
        const x = (Math.random() - 0.5) * 6.5;
        const y = (Math.random() - 0.5) * 4.2;
        const z = -Math.random() * 18;
        lineSpeeds[i] = 0.45 + Math.random() * 0.55;
        linePositions[i * 6] = x;
        linePositions[i * 6 + 1] = y;
        linePositions[i * 6 + 2] = z;
        linePositions[i * 6 + 3] = x;
        linePositions[i * 6 + 4] = y;
        linePositions[i * 6 + 5] = z - (0.8 + lineSpeeds[i] * 1.2);
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      geometries.push(lineGeo);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xff4422,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });
      materials.push(lineMat);
      const speedLines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(speedLines);

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0, 0.8);
      scene.add(plate);

      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.0), 3);

        // Update supersonic speed streaks
        const pos = lineGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < lineCount; i++) {
          const spd = lineSpeeds[i];
          pos[i * 6 + 2] += spd;
          pos[i * 6 + 5] += spd;
          if (pos[i * 6 + 2] > 6) {
            pos[i * 6 + 2] = -14;
            pos[i * 6 + 5] = -14 - (0.8 + spd * 1.2);
          }
        }
        lineGeo.attributes.position.needsUpdate = true;

        // Dynamic camera banking into curves
        camera.rotation.z = Math.sin(t * 1.8) * 0.08;
        camera.position.set(Math.sin(t * 1.2) * 0.25, Math.cos(t * 1.0) * 0.12, 5.0 - intro * 0.4);
        camera.lookAt(0, 0, -5);
      };
    }

    // -------------------------------------------------------------
    // SCENE 8: BROADCAST (News, Business, Entertainment)
    // -------------------------------------------------------------
    else if (kind === 'broadcast') {
      scene.background = new THREE.Color(0x020612);
      scene.fog = new THREE.FogExp2(0x020612, 0.048);

      const hemi = new THREE.HemisphereLight(0xffffff, 0x020612, 0.8);
      const key = new THREE.DirectionalLight(0xffffff, 2.8);
      key.position.set(4, 5, 4);
      const rubyRim = new THREE.PointLight(0xff2233, 200, 20, 2);
      rubyRim.position.set(-3, 2, 2);
      scene.add(hemi, key, rubyRim);

      const gyroGroup = new THREE.Group();

      // 1. Armillary Gyroscope meridian rings
      const ringA = new THREE.Mesh(
        new THREE.TorusGeometry(2.1, 0.038, 16, 96),
        new THREE.MeshPhysicalMaterial({ color: 0xe0e6ed, metalness: 0.95, roughness: 0.14, clearcoat: 1.0 })
      );
      const ringB = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.032, 16, 96),
        new THREE.MeshPhysicalMaterial({ color: 0xd4af37, metalness: 0.92, roughness: 0.18, clearcoat: 0.9 })
      );
      const ringC = new THREE.Mesh(
        new THREE.TorusGeometry(1.3, 0.026, 16, 96),
        new THREE.MeshBasicMaterial({ color: 0xff2244 })
      );
      geometries.push(ringA.geometry, ringB.geometry, ringC.geometry);
      materials.push(ringA.material, ringB.material, ringC.material);

      gyroGroup.add(ringA, ringB, ringC);

      // 2. Central digital wireframe globe
      const globeGeo = new THREE.SphereGeometry(0.85, 20, 20);
      geometries.push(globeGeo);
      const globeMat = new THREE.MeshBasicMaterial({
        color: 0x4090ff,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      materials.push(globeMat);
      const globe = new THREE.Mesh(globeGeo, globeMat);
      gyroGroup.add(globe);

      scene.add(gyroGroup);

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0, 1.3);
      scene.add(plate);

      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.1), 3);

        ringA.rotation.x = t * 0.45;
        ringA.rotation.y = t * 0.25;
        ringB.rotation.y = -t * 0.55;
        ringB.rotation.z = t * 0.35;
        ringC.rotation.z = t * 0.75;
        globe.rotation.y = t * 0.2;

        plate.position.z = 1.3 - (1 - intro) * 0.5;

        // Television news crane sweep
        camera.position.set(Math.sin(t * 0.28) * 0.5, 0.2 + Math.cos(t * 0.35) * 0.15, 5.2 - intro * 0.4);
        camera.lookAt(0, 0, 0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 9: AURORA (Travel, Nature, Food)
    // -------------------------------------------------------------
    else if (kind === 'aurora') {
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

      // Spline ribbons
      const splinePtsA: THREE.Vector3[] = [];
      const splinePtsB: THREE.Vector3[] = [];
      for (let i = 0; i <= 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        splinePtsA.push(new THREE.Vector3(Math.cos(a) * 2.15, Math.sin(a * 2) * 0.62, Math.sin(a) * 1.1));
        splinePtsB.push(new THREE.Vector3(Math.sin(a) * 2.55, Math.cos(a * 2) * 0.78, Math.cos(a) * 1.25));
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

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0, 0.4);
      scene.add(plate);

      updateScene = (t) => {
        backdropMat.uniforms.uTime.value = t;
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.4), 3);
        ribbonGroup.rotation.y = t * 0.24 - 0.35;
        ribbonGroup.rotation.x = 0.22 + Math.sin(t * 0.45) * 0.08;
        plate.position.z = 0.4 - (1 - intro) * 0.5;
        camera.position.set(Math.sin(t * 0.25) * 0.32, 0.1, 6.2 - intro * 0.9);
        camera.lookAt(0, 0, 0);
      };
    }

    // -------------------------------------------------------------
    // SCENE 10: FIELD (Instanced Spatial Ripple Field)
    // -------------------------------------------------------------
    else if (kind === 'field') {
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
      plate.visible = showStationPlate;
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
    }

    // -------------------------------------------------------------
    // SCENE 11: PLASMA (Cartoons, Pop, Abstract)
    // -------------------------------------------------------------
    else {
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

      // Playful orbiting pop donut
      const donutGeo = new THREE.TorusGeometry(2.2, 0.06, 16, 64);
      geometries.push(donutGeo);
      const donutMat = new THREE.MeshBasicMaterial({ color: goldAccent });
      materials.push(donutMat);
      const donut = new THREE.Mesh(donutGeo, donutMat);
      scene.add(donut);

      // Station badge
      const plateTex = createChannelPlateTexture(channelNumber, channelName, hue);
      textures.push(plateTex);
      const plateGeo = new THREE.PlaneGeometry(2.3, 1.15);
      geometries.push(plateGeo);
      const plateMat = new THREE.MeshBasicMaterial({
        map: plateTex,
        transparent: true,
      });
      materials.push(plateMat);
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.visible = showStationPlate;
      plate.position.set(0, 0, 1.4);
      scene.add(plate);

      updateScene = (t) => {
        plasmaMat.uniforms.uTime.value = t;
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.25), 3);
        orb.rotation.y = t * 0.22;
        orb.scale.setScalar(0.9 + intro * 0.1);

        donut.rotation.x = t * 0.6;
        donut.rotation.y = t * 0.4;

        plate.position.z = 1.4 - (1 - intro) * 0.5;

        camera.position.set(Math.sin(t * 0.25) * 0.25, 0.08, 5.2 - intro * 0.4);
        camera.lookAt(0, 0, 0);
      };
    }

    // ---------------- Post-Processing ----------------
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: 4,
    });
    const composer = new EffectComposer(renderer, renderTarget);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));

    // Dialed-in bloom per scene archetype
    let bloomStrength = 0.42;
    if (kind === 'cinemascope') bloomStrength = 0.55;
    else if (kind === 'synthwave') bloomStrength = 0.62;
    else if (kind === 'quantum') bloomStrength = 0.68;
    else if (kind === 'architect') bloomStrength = 0.28;

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      bloomStrength,
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
  }, [kind, hue, channelNumber, channelName, categoryId, showStationPlate]);

  return <div ref={containerRef} className="bm-three-canvas" aria-hidden />;
};
