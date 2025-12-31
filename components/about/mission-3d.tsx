"use client"

import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, Float, PresentationControls } from "@react-three/drei"
import { Suspense } from "react"

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#b10202" />

            <PresentationControls
                global
                zoom={0.8}
                rotation={[0, -Math.PI / 4, 0]}
                polar={[-Math.PI / 4, Math.PI / 4]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
                <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                    <mesh scale={2}>
                        <sphereGeometry args={[1.2, 64, 64]} />
                        <MeshDistortMaterial
                            color="#b10202"
                            attach="material"
                            distort={0.3}
                            speed={1.5}
                            wireframe
                            roughness={0}
                            metalness={0.5}
                        />
                    </mesh>
                    {/* Inner Core */}
                    <mesh scale={2}>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <meshStandardMaterial color="#330000" transparent opacity={0.8} />
                    </mesh>
                </Float>
            </PresentationControls>
        </>
    )
}

export function Mission3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4] }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    )
}
