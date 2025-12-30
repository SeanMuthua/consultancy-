"use client"

import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei"

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#E60000" />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    {/* Main Red Morphing Shape */}
                    <Sphere args={[1, 100, 200]} scale={1.8} position={[2, 0, 0]}>
                        <MeshDistortMaterial
                            color="#E60000"
                            attach="material"
                            distort={0.4}
                            speed={2}
                            roughness={0.2}
                            metalness={0.8}
                        />
                    </Sphere>
                </Float>
                <Float speed={4} rotationIntensity={2} floatIntensity={0.5}>
                    {/* Secondary Dark Shape */}
                    <Sphere args={[1, 100, 200]} scale={1.2} position={[-2, -1, -2]}>
                        <MeshDistortMaterial
                            color="#0A0A0A"
                            attach="material"
                            distort={0.6}
                            speed={3}
                            roughness={0.4}
                            metalness={1}
                            wireframe
                        />
                    </Sphere>
                </Float>
            </Canvas>
        </div>
    )
}
