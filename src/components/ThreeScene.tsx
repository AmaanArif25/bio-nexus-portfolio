
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If THREE.js is not available (during SSR for example)
    if (typeof window === 'undefined') return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    if (mountRef.current) {
      // Clear any existing canvas
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
    }

    // DNA Helix parameters
    const dnaStrands = 2;
    const dnaPoints = 80;
    const dnaRadius = 4;
    const dnaHeight = 20;
    const basePairLength = 1.2;
    
    const purpleLight = new THREE.PointLight(0x8b5cf6, 100);
    purpleLight.position.set(5, 5, 5);
    scene.add(purpleLight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    // DNA Helix 
    const dnaMaterial = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6,
      emissive: 0x4c1d95,
      shininess: 80,
      specular: 0xffffff
    });
    
    const basePairMaterial = new THREE.MeshPhongMaterial({
      color: 0x6d28d9,
      emissive: 0x4c1d95,
      shininess: 80,
      specular: 0xffffff
    });
    
    // Create DNA strands
    const dnaGroup = new THREE.Group();
    
    for (let strand = 0; strand < dnaStrands; strand++) {
      for (let i = 0; i < dnaPoints; i++) {
        const angle = (i / dnaPoints) * Math.PI * 8 + (strand * Math.PI);
        const x = Math.cos(angle) * dnaRadius;
        const y = (i / dnaPoints) * dnaHeight - dnaHeight / 2;
        const z = Math.sin(angle) * dnaRadius;
        
        const sphereGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const sphere = new THREE.Mesh(sphereGeometry, dnaMaterial);
        
        sphere.position.set(x, y, z);
        dnaGroup.add(sphere);
        
        // Add base pairs between strands
        if (strand === 0 && i % 4 === 0) {
          const oppositeAngle = angle + Math.PI;
          const oppositeX = Math.cos(oppositeAngle) * dnaRadius;
          const oppositeZ = Math.sin(oppositeAngle) * dnaRadius;
          
          const basePairGeometry = new THREE.CylinderGeometry(0.05, 0.05, basePairLength * 2 * dnaRadius, 8);
          basePairGeometry.rotateX(Math.PI / 2);
          const basePair = new THREE.Mesh(basePairGeometry, basePairMaterial);
          
          basePair.position.set((x + oppositeX) / 2, y, (z + oppositeZ) / 2);
          basePair.lookAt(new THREE.Vector3(oppositeX, y, oppositeZ));
          
          dnaGroup.add(basePair);
        }
      }
    }
    
    scene.add(dnaGroup);

    // Position camera
    camera.position.z = 15;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      dnaGroup.rotation.y += 0.005;
      dnaGroup.rotation.x = Math.sin(Date.now() * 0.001) * 0.2;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Dispose of Three.js resources
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default ThreeScene;
