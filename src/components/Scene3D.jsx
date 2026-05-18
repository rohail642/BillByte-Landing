import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const count = 1200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 10 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#16a34a" size={0.03} sizeAttenuation depthWrite={false} opacity={0.4} />
    </Points>
  )
}

function FloatingRing({ radius, speed, tilt, opacity }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * speed
    }
  })
  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.006, 16, 200]} />
      <meshBasicMaterial color="#16a34a" transparent opacity={opacity} />
    </mesh>
  )
}

function FloatingOrb() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.4
      ref.current.rotation.y = clock.getElapsedTime() * 0.4
    }
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#16a34a" wireframe transparent opacity={0.07} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 14], fov: 55 }} gl={{ antialias: true, alpha: true }}>
        <ParticleField />
        <FloatingOrb />
        <FloatingRing radius={5}  speed={0.12}  tilt={0.6}  opacity={0.15} />
        <FloatingRing radius={7}  speed={-0.08} tilt={1.2}  opacity={0.08} />
        <FloatingRing radius={9}  speed={0.05}  tilt={0.3}  opacity={0.05} />
      </Canvas>
    </div>
  )
}
