import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, ContactShadows, Html } from '@react-three/drei';
import { useControls } from 'leva';
import "./Three.scss";

const MODELS = {
  Beech: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf',
  Lime: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf',
  Spruce: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf'
}


export default function Three({setIsThree}) {
  const { model } = useControls({ model: {value: 'Beech', options: Object.keys(MODELS) } })
  return (
    <Canvas  style={{ height: '100vh' }} camera={{ position: [-10, 10, 40], fov: 50 }}>
      <Suspense fallback={<></>}> 
      <Html>
        <header className="three-header" onClick={() => setIsThree(false)}>This is a {model} Tree</header>
      </Html>
        <hemisphereLight color="white" groundColor="blue" intensity={0.75} />
        <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
        <group onClick={() => console.log("wadup bitch!")} position={[0, -10, 0]}>
          <Model position={[0, 0.25, 0]} url={MODELS[model]} />
          <ContactShadows scale={20} blur={10} far={20} />
        </group>
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}

function Model({ url, ...props }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}