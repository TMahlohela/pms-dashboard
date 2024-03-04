import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  Circle,
  // Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture
} from '@react-three/drei';
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imageUrl]);
  
  return (
    <Float speed={3}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh 
        scale={2.75}>        
        <Circle
          rotation={[2 * Math.PI, 0, 2]}
          map={decal.imageUrl}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas
      frameLoop="demand"
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
        />
        <Ball imageUrl={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas