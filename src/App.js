import React, { useState, useEffect } from 'react';
import { OrbitControls, CameraShake } from '@react-three/drei'
import { Particles } from './Particles'

export default function App() {
  let [t, setT] = useState(false);

  useEffect(() => {
    setTimeout(() => setT(t+1), 100)
  });

  return (
    <>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} />
      <CameraShake yawFrequency={.5} maxYaw={0.03} pitchFrequency={.5} maxPitch={0.03} rollFrequency={0.25} maxRoll={0.3} intensity={0.1} />
      <Particles
        focus={(6+Math.cos(t/30)*.85)} 
        aperture={3.8}
        speed={.1}
        fov={20}
        curl={.6}
        size={380}
        color="rgb(70, 70, 62)" />
    </>
  )
}
