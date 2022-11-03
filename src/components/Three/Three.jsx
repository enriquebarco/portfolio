import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

const angleToRadians = (angleInDeg) => (Math.PI / 180) * angleInDeg;

console.log(PerspectiveCamera)


export default function Three() {
  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <Suspense fallback={<></>}>
        {/* camera */}
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />

        {/* sphere */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* floor */}
        <mesh rotation={[ (angleToRadians(90)), 0, 0]}>
          <planeGeometry args={[7, 7]}/>
          <meshStandardMaterial color="blue" />
        </mesh> 

        {/* light */}
        <ambientLight args={['white', 1]} />
      </Suspense>
    </Canvas>
  )
}
