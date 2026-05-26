import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function FloatingShape({ position, geometry, color, speed = 1, distort = 0.3 }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
    }
  })
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  )
}

function MouseTrackingLight() {
  const lightRef = useRef()
  useFrame(({ mouse, viewport }) => {
    if (lightRef.current) {
      lightRef.current.position.x = (mouse.x * viewport.width) / 2
      lightRef.current.position.y = (mouse.y * viewport.height) / 2
    }
  })
  return <pointLight ref={lightRef} intensity={2} color="#C9A96E" distance={8} />
}

export default function HeroScene({ isDark }) {
  const accentColor  = isDark ? '#7C83FD' : '#C9A96E'
  const accent2      = isDark ? '#F08DD2' : '#F2B5C0'
  const accent3      = isDark ? '#4ECDC4' : '#A8D8EA'

  return (
    <>
      <color attach="background" args={[isDark ? '#0D1117' : '#FAF8F5']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color={accentColor} />
      <MouseTrackingLight />

      <Stars
        radius={80}
        depth={50}
        count={isDark ? 1200 : 400}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Main central torus knot */}
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[3.5, 0, -2]} scale={1.1}>
          <torusKnotGeometry args={[0.8, 0.28, 128, 20]} />
          <MeshDistortMaterial
            color={accentColor}
            distort={0.25}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      {/* Icosahedron */}
      <FloatingShape
        position={[-3.5, 1, -3]}
        geometry={<icosahedronGeometry args={[0.9, 1]} />}
        color={accent2}
        speed={0.8}
        distort={0.4}
      />

      {/* Octahedron */}
      <FloatingShape
        position={[2.5, -2, -1.5]}
        geometry={<octahedronGeometry args={[0.7]} />}
        color={accent3}
        speed={1.2}
        distort={0.2}
      />

      {/* Small sphere */}
      <FloatingShape
        position={[-2.5, -1.5, -2]}
        geometry={<sphereGeometry args={[0.45, 32, 32]} />}
        color={accentColor}
        speed={1.8}
        distort={0.5}
      />

      {/* Cone */}
      <FloatingShape
        position={[0.5, 2.5, -3]}
        geometry={<coneGeometry args={[0.5, 1.2, 6]} />}
        color={accent2}
        speed={0.6}
        distort={0.15}
      />
    </>
  )
}
