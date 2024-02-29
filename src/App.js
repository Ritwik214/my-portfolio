// src/App.js
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import './App.css';

const Skull = () => {
  const skullRef = useRef();

  useFrame(() => {
    if (skullRef.current) {
      skullRef.current.rotation.x += 0.01;
      skullRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={skullRef}>
      <GLTFLoader url="/path/to/skull.gltf" />
    </group>
  );
};

const Sword = () => {
  const swordRef = useRef();

  useFrame(() => {
    if (swordRef.current) {
      swordRef.current.rotation.x += 0.01;
      swordRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={swordRef}>
      <GLTFLoader url="/path/to/sword.gltf" />
    </group>
  );
};

const App = () => {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="app">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Skull />
          <Sword />
        </Suspense>
      </Canvas>
      <div className="home-section">
        <button onClick={toggleAbout}>About</button>
      </div>
      <div className={`about-section ${showAbout ? 'show' : ''}`}>
        <button onClick={toggleAbout}>Close</button>
        <p>Your About Me content goes here</p>
      </div>
    </div>
  );
};

export default App;
