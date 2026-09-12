"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHomepageBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.set(0, 0, 17);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const particleCount = window.innerWidth < 768 ? 90 : 150;
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color("#3c7abe");
    const colorB = new THREE.Color("#f9bf00");

    for (let index = 0; index < particleCount; index += 1) {
      const i3 = index * 3;

      positions[i3] = (Math.random() - 0.5) * 24;
      positions[i3 + 1] = (Math.random() - 0.5) * 16;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;

      scales[index] = Math.random();

      const mixed = colorA.clone().lerp(colorB, Math.random() * 0.45);
      colors[i3] = mixed.r;
      colors[i3 + 1] = mixed.g;
      colors[i3 + 2] = mixed.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.13 : 0.16,
      transparent: true,
      opacity: 0.4,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const haloGeometry = new THREE.TorusGeometry(6.8, 0.03, 12, 120);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: "#3c7abe",
      transparent: true,
      opacity: 0.12,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI * 0.45;
    halo.rotation.y = Math.PI * 0.12;
    scene.add(halo);

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    let frameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const positionAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let index = 0; index < particleCount; index += 1) {
        const i3 = index * 3;
        const baseX = positions[i3];
        const baseY = positions[i3 + 1];
        const scale = scales[index] + 0.35;

        positionAttr.array[i3] = baseX + Math.sin(elapsed * 0.22 + index) * 0.015 * scale;
        positionAttr.array[i3 + 1] = baseY + Math.cos(elapsed * 0.28 + index * 0.6) * 0.03 * scale;
      }

      positionAttr.needsUpdate = true;
      particles.rotation.z = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.18) * 0.08;
      halo.rotation.z = elapsed * 0.08;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-80 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]"
    />
  );
}
