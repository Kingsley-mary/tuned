'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export type ThreeSceneKind = 'monolith' | 'orbital' | 'ribbon' | 'dust';

interface ThreeBumperCanvasProps {
  kind: ThreeSceneKind;
  hue: number;
}

export const ThreeBumperCanvas: React.FC<ThreeBumperCanvasProps> = ({ kind, hue }) => {
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
    const bgHex = kind === 'dust' ? 0x000000 : 0x060507;
    scene.background = new THREE.Color(bgHex);
    scene.fog = new THREE.FogExp2(bgHex, kind === 'dust' ? 0.045 : 0.065);

    const camera = new THREE.PerspectiveCamera(44, width / height, 0.1, 100);
    camera.position.set(0, 0.25, 6.2);

    const accentColor = new THREE.Color().setHSL((hue % 360) / 360, 0.82, 0.56);
    const warmColor = new THREE.Color().setHSL(((hue + 28) % 360) / 360, 0.75, 0.62);

    // Three-point studio lighting calibrated per threejs-lighting skill
    const hemi = new THREE.HemisphereLight(0xf6f2eb, 0x120d0c, 0.75);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 6, 5);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(accentColor, 140, 22, 2);
    rimLight.position.set(-3.2, 2.2, 2.5);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(warmColor, 90, 20, 2);
    fillLight.position.set(3.4, -1.8, 3.0);
    scene.add(fillLight);

    // Track disposable resources cleanly
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    const root = new THREE.Group();
    scene.add(root);

    let updateScene: (t: number, dt: number) => void = () => {};

    if (kind === 'monolith') {
      // Sculpted smoked-glass studio monolith + luminous channel halo
      const slabGeo = new THREE.BoxGeometry(1.75, 2.55, 0.32, 4, 4, 2);
      geometries.push(slabGeo);
      const slabMat = new THREE.MeshPhysicalMaterial({
        color: 0x161214,
        roughness: 0.14,
        metalness: 0.35,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
        iridescence: 0.55,
        iridescenceIOR: 1.4,
      });
      materials.push(slabMat);
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.rotation.set(0.08, -0.32, -0.04);
      root.add(slab);

      const frameGeo = new THREE.TorusGeometry(2.05, 0.022, 24, 140);
      geometries.push(frameGeo);
      const frameMat = new THREE.MeshStandardMaterial({
        color: accentColor,
        emissive: accentColor,
        emissiveIntensity: 2.1,
        roughness: 0.2,
        metalness: 0.6,
      });
      materials.push(frameMat);
      const halo = new THREE.Mesh(frameGeo, frameMat);
      halo.position.z = -0.55;
      root.add(halo);

      const dotGeo = new THREE.SphereGeometry(0.11, 24, 24);
      geometries.push(dotGeo);
      const dotMat = new THREE.MeshStandardMaterial({
        color: 0xff5544,
        emissive: 0xff5544,
        emissiveIntensity: 2.6,
        roughness: 0.15,
      });
      materials.push(dotMat);
      const redDot = new THREE.Mesh(dotGeo, dotMat);
      redDot.position.set(1.22, 1.45, 0.25);
      root.add(redDot);

      updateScene = (t) => {
        const ease = 1 - Math.pow(1 - Math.min(1, t / 1.4), 3);
        slab.rotation.y = -0.55 + ease * 0.34 + Math.sin(t * 0.7) * 0.08;
        slab.rotation.x = 0.14 - ease * 0.08 + Math.cos(t * 0.55) * 0.04;
        slab.position.y = (1 - ease) * -0.25 + Math.sin(t * 1.1) * 0.06;

        halo.rotation.z = t * 0.35;
        halo.rotation.x = 0.28 + Math.sin(t * 0.8) * 0.12;
        halo.scale.setScalar(0.88 + ease * 0.12);

        camera.position.x = Math.sin(t * 0.35) * 0.42;
        camera.position.y = 0.18 + Math.cos(t * 0.4) * 0.12;
        camera.position.z = 6.6 - ease * 0.65;
        camera.lookAt(0, 0, 0);
      };
    } else if (kind === 'orbital') {
      // Nested satin-chrome gimbal rings + radiant channel core
      const coreGeo = new THREE.IcosahedronGeometry(0.68, 2);
      geometries.push(coreGeo);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x1c181b,
        emissive: accentColor,
        emissiveIntensity: 1.5,
        roughness: 0.25,
        metalness: 0.8,
        flatShading: true,
      });
      materials.push(coreMat);
      const core = new THREE.Mesh(coreGeo, coreMat);
      root.add(core);

      const rings: THREE.Mesh[] = [];
      const ringSpecs = [
        { r: 1.35, tube: 0.028, tiltX: 0.6, tiltY: 0.2 },
        { r: 1.82, tube: 0.022, tiltX: -0.5, tiltY: 0.8 },
        { r: 2.32, tube: 0.016, tiltX: 0.9, tiltY: -0.4 },
      ];
      const chromeMat = new THREE.MeshPhysicalMaterial({
        color: 0xe6e2dc,
        roughness: 0.16,
        metalness: 0.92,
        clearcoat: 0.8,
      });
      materials.push(chromeMat);

      ringSpecs.forEach((spec, idx) => {
        const g = new THREE.TorusGeometry(spec.r, spec.tube, 24, 140);
        geometries.push(g);
        const m = idx === 1 ? chromeMat : chromeMat;
        const ring = new THREE.Mesh(g, m);
        ring.rotation.set(spec.tiltX, spec.tiltY, 0);
        root.add(ring);
        rings.push(ring);
      });

      updateScene = (t) => {
        const intro = 1 - Math.pow(1 - Math.min(1, t / 1.2), 3);
        root.scale.setScalar(0.86 + intro * 0.14);
        core.rotation.y = t * 0.6;
        core.rotation.x = t * 0.35;
        rings.forEach((ring, i) => {
          ring.rotation.x += 0.004 * (i % 2 === 0 ? 1 : -1);
          ring.rotation.y += 0.006 * (i + 1) * 0.5;
        });
        camera.position.set(Math.sin(t * 0.3) * 0.5, 0.22, 6.4 - intro * 0.5);
        camera.lookAt(0, 0, 0);
      };
    } else if (kind === 'ribbon') {
      // Undulating velvet studio ribbon behind split-screen schedule
      const planeGeo = new THREE.PlaneGeometry(14, 7, 72, 36);
      geometries.push(planeGeo);
      const planeMat = new THREE.MeshPhysicalMaterial({
        color: 0x151113,
        emissive: accentColor,
        emissiveIntensity: 0.28,
        roughness: 0.36,
        metalness: 0.55,
        clearcoat: 0.6,
        side: THREE.DoubleSide,
      });
      materials.push(planeMat);
      const mesh = new THREE.Mesh(planeGeo, planeMat);
      mesh.rotation.x = -0.45;
      mesh.position.set(0, -0.4, -1.2);
      root.add(mesh);

      const posAttr = planeGeo.attributes.position as THREE.BufferAttribute;
      const baseZ = new Float32Array(posAttr.count);
      for (let i = 0; i < posAttr.count; i++) baseZ[i] = posAttr.getZ(i);

      updateScene = (t) => {
        for (let i = 0; i < posAttr.count; i++) {
          const x = posAttr.getX(i);
          const y = posAttr.getY(i);
          const z =
            baseZ[i] +
            Math.sin(x * 0.55 + t * 1.15) * 0.42 +
            Math.cos(y * 0.8 - t * 0.9) * 0.25;
          posAttr.setZ(i, z);
        }
        posAttr.needsUpdate = true;
        planeGeo.computeVertexNormals();
        camera.position.set(-0.3, 0.35, 5.8);
        camera.lookAt(0, 0, -0.5);
      };
    } else {
      // 'dust': Subtle low-key atmospheric dust motes for minimal black cards
      const count = 90;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometries.push(pGeo);
      const pMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.035,
        transparent: true,
        opacity: 0.32,
      });
      materials.push(pMat);
      const points = new THREE.Points(pGeo, pMat);
      root.add(points);

      updateScene = (t) => {
        points.rotation.y = t * 0.035;
        points.position.y = Math.sin(t * 0.3) * 0.12;
        camera.position.set(0, 0, 5.5);
        camera.lookAt(0, 0, 0);
      };
    }

    // EffectComposer with MSAA + subtle UnrealBloomPass + OutputPass
    const renderTarget = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: 4,
    });
    const composer = new EffectComposer(renderer, renderTarget);
    composer.setSize(width, height);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      kind === 'dust' ? 0.18 : 0.48,
      0.42,
      0.74
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
      updateScene(0.9, 0);
      composer.render();
    } else {
      renderer.setAnimationLoop(() => {
        if (disposed) return;
        timer.update();
        const elapsed = timer.getElapsed();
        const delta = timer.getDelta();
        updateScene(elapsed, delta);
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
      renderTarget.dispose();
      composer.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [kind, hue]);

  return <div ref={containerRef} className="bm-three-canvas" aria-hidden />;
};
