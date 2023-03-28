import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Particle_background from './particle_background';

const Background = styled.div`
  perspective: 1000px;
  width: 100vw;
  height: 100vh;
  background: none;
  position: relative;
  overflow: hidden;
  transition: transform 0.1s;
`;

const ParticlesContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const RotatingBackground = () => {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const xPercentage = (clientX / window.innerWidth) * 100;
      const yPercentage = (clientY / window.innerHeight) * 100;

      setXRotation(-1 * (yPercentage - 50));
      setYRotation(xPercentage - 50);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Background
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`
      }}
    >
    </Background>
  );
};

export default RotatingBackground;
