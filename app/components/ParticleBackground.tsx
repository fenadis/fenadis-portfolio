'use client'

import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../contexts/ThemeContext'


function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const { theme } = useTheme()

  const particleCount = 300 // Reduced from 500

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [particleCount])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.03 // Slowed down further
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.035 // Slowed down further
    }
  })

  useEffect(() => {
    if (ref.current && ref.current.material) {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim()
      const [r, g, b] = primaryColor.split(',').map(Number)
      const material:any = ref.current.material
      material.color.setRGB(r / 255, g / 255, b / 255)
    }
  }, [theme])

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.05} // Reduced size
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3} // Reduced opacity
      />
    </Points>
  )
}

function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1]" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  )
}

export default ParticleBackground

