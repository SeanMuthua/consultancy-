export default function Loading() {
    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-t-2 border-red-600 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-r-2 border-red-900 rounded-full animate-spin reverse"></div>
                </div>
                <p className="text-red-600 font-mono text-xs uppercase tracking-widest animate-pulse">Loading RedShift...</p>
            </div>
        </div>
    )
}
