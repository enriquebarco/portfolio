import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';


export default function Three() {
  return (
    <Canvas style={{ height: '100vh', background: 'black' }}>
      <Suspense fallback={<></>}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshStandardMaterial color="white" />
        </mesh>
      </Suspense>
    </Canvas>
  )
}
