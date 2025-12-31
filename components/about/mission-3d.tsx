"use client"

import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, Float, PresentationControls } from "@react-three/drei"
import { Suspense, useEffect, useState } from "react"

function Scene({ scale = 2 }: { scale?: number }) {
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
                    <mesh scale={scale}>
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
                    <mesh scale={scale}>
                        <sphereGeometry args={[0.8, 32, 32]} />
                        <meshStandardMaterial color="#330000" transparent opacity={0.8} />
                    </mesh>
                </Float>
            </PresentationControls>
        </>
    )
}

export function Mission3D() {
    const [scale, setScale] = useState(2)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale(1.2) // Scaled down for mobile
            } else {
                setScale(2)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4] }}>
                <Suspense fallback={null}>
                    <Scene scale={scale} />
                </Suspense>
            </Canvas>
        </div>
    )
}
