"use client"

import { Canvas } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float, PresentationControls } from "@react-three/drei"

export function Mission3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#E60000" />

                <PresentationControls
                    global
                    zoom={0.8}
                    rotation={[0, -Math.PI / 4, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
                        <Sphere args={[1.2, 32, 32]} scale={2}>
                            <MeshDistortMaterial
                                color="#E60000"
                                attach="material"
                                distort={0.3}
                                speed={1.5}
                                wireframe
                                roughness={0}
                                metalness={0.5}
                            />
                        </Sphere>
                        {/* Inner Core */}
                        <Sphere args={[0.8, 32, 32]} scale={2}>
                            <meshStandardMaterial color="#330000" transparent opacity={0.8} />
                        </Sphere>
                    </Float>
                </PresentationControls>
            </Canvas>
        </div>
    )
}
