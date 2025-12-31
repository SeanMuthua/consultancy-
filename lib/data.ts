export interface Project {
    slug: string
    title: string
    category: string
    description: string
    challenge: string
    solution: string
    image: string
    scope: string[]
    // Extended fields for Case Study Page
    client: string
    year: string
    stats: { label: string; value: string }[]
    fullDescription: string
    approach: string
    results: string
    technologies: string[]
}

export const projects: Project[] = [
    {
        slug: "nova-banking-app",
        title: "Nova Banking App",
        category: "FinTech",
        client: "Nova Financial",
        year: "2024",
        description: "Redefining the digital banking experience with secure, seamless biometric authentication.",
        challenge: "Nova needed to build trust with a digital-first audience while complying with strict financial regulations. The user experience had to be frictionless yet secure, handling sensitive financial data without compromising performance.",
        solution: "We engineered a React Native mobile application with biometric login (FaceID/TouchID), real-time transaction websockets, and a spending analytics engine powered by Python.",
        fullDescription: "Nova Financial aimed to disrupt the traditional banking sector with a mobile-first approach. The goal was to create an app that felt less like a utility and more like a financial companion. We focused on micro-interactions, speed, and absolute security.",
        approach: "Our approach began with a comprehensive security audit and UX research phase. We decided on a hybrid architecture: a secure, compliant Ruby on Rails backend serving a high-performance React Native frontend. We implemented a custom design system with dark mode support to ensure visual consistency.",
        results: "The app launched to critical acclaim, achieving a 4.9-star rating on the App Store. User retention is 40% higher than industry average, and the secure biometric login reduced fraud attempts by 99%.",
        image: "bg-gradient-to-br from-blue-900 to-black",
        scope: ["Mobile App Development", "UI/UX Design", "Biometric Security", "Real-time Analytics"],
        stats: [
            { label: "App Store Rating", value: "4.9" },
            { label: "Active Users", value: "50k+" },
            { label: "Fraud Reduction", value: "99%" },
            { label: "Uptime", value: "99.99%" }
        ],
        technologies: ["React Native", "TypeScript", "Python", "AWS", "PostgreSQL"]
    },
    {
        slug: "vitality-ai",
        title: "Vitality AI",
        category: "Healthcare",
        client: "Vitality Health",
        year: "2023",
        description: "A predictive analytics engine empowering modern preventative medicine.",
        challenge: "Processing massive streams of patient data in real-time to identify health risks before they become critical issues, without compromising patient privacy or system latency.",
        solution: "We built a HIPAA-compliant cloud architecture on AWS using Kinesis for data streaming and a custom machine learning model for risk scoring, visualized in a high-performance dashboard.",
        fullDescription: "Vitality AI required a system capable of ingesting data from thousands of wearable devices simultaneously. The challenge was not just scale, but meaning—translating raw heart rate and sleep data into actionable health insights for doctors.",
        approach: "We utilized a serverless event-driven architecture to handle the variable load of device data. For the frontend, we built a real-time visualization dashboard using D3.js and WebGL to render complex health trends without lag.",
        results: "The system now monitors over 10,000 patients. Early detection algorithms have successfully flagged cardiac anomalies in 5% of the user base, leading to potentially life-saving interventions.",
        image: "bg-gradient-to-br from-teal-900 to-black",
        scope: ["Data Science", "Cloud Architecture", "HIPAA Compliance", "Dashboard Design"],
        stats: [
            { label: "Data Points/Day", value: "10M+" },
            { label: "Prediction Accuracy", value: "94%" },
            { label: "Patients Monitored", value: "10k" },
            { label: "Latency", value: "<100ms" }
        ],
        technologies: ["AWS Kinesis", "Lambda", "Python", "TensorFlow", "React", "D3.js"]
    },
    {
        slug: "nexus-logistics",
        title: "Nexus Logistics",
        category: "Supply Chain",
        client: "Nexus Global",
        year: "2023",
        description: "Optimizing global freight operations with an AI-driven fleet management dashboard.",
        challenge: "Legacy systems were causing fragmented data visibility, leading to inefficient routing and increased fuel costs for key shipping routes across three continents.",
        solution: "We developed a centralized command center unifying GPS data, weather APIs, and traffic patterns to optimize fleet routing in real-time, reducing operational costs by 22%.",
        fullDescription: "Nexus Logistics was drowning in spreadsheets and disconnected legacy software. They needed a 'Control Tower'—a single source of truth for their global operations. We focused on data unification and map-based visualization.",
        approach: "We built a middleware layer to normalize data from 15 different legacy providers. The frontend is a heavy Mapbox integration with layer controls for weather, traffic, and fleet position. We used WebSocket connections for live vehicle tracking.",
        results: "Fuel costs dropped by 22% in the first quarter. The automated routing system saves dispatchers an average of 15 hours per week, allowing them to focus on exception handling rather than routine scheduling.",
        image: "bg-gradient-to-br from-purple-900 to-black",
        scope: ["Web App Development", "API Integration", "Route Optimization Algorithms", "System Architecture"],
        stats: [
            { label: "Cost Reduction", value: "22%" },
            { label: "Routes Optimized", value: "500+" },
            { label: "Legacy Systems", value: "15" },
            { label: "ROI", value: "300%" }
        ],
        technologies: ["Node.js", "GraphQL", "Mapbox GL", "PostGIS", "Redis", "Docker"]
    },
    {
        slug: "aura-lifestyle",
        title: "Aura Lifestyle",
        category: "E-commerce",
        client: "Aura Luxury",
        year: "2024",
        description: "An immersive digital storefront for high-end sustainable fashion.",
        challenge: "Aura needed a digital presence that matched the sensory experience of their physical boutiques, requiring high-fidelity visuals without sacrificing mobile performance.",
        solution: "We implemented a headless commerce architecture using Shopify Hydrogen and Sanity CMS, featuring WebGL-powered image transitions and a bespoke 3D product viewer.",
        fullDescription: "The challenge was translating 'luxury' into 'latency'. We needed to serve 4K imagery and 3D models while keeping the LCP under 1.2 seconds across all global markets.",
        approach: "We used a multi-region Edge CDN strategy combined with localized asset delivery. For the interactive elements, we built a custom shader-based image transition system that runs at a consistent 120fps.",
        results: "Conversion rates increased by 35% compared to their previous platform. Page load speeds improved by 2.5x, and the 3D product interaction led to a 15% reduction in returns.",
        image: "bg-gradient-to-br from-amber-900 to-black",
        scope: ["Headless E-commerce", "3D WebGL Visualization", "Global Performance Optimization", "Brand Identity"],
        stats: [
            { label: "Conversion Lift", value: "35%" },
            { label: "Load Time", value: "1.2s" },
            { label: "Return Reduction", value: "15%" },
            { label: "Global Reach", value: "120+" }
        ],
        technologies: ["Hydrogen", "Shopify", "Sanity CMS", "Three.js", "Cloudflare"]
    },
    {
        slug: "quantum-analytics",
        title: "Quantum Analytics",
        category: "Big Data",
        client: "Quantum Research",
        year: "2023",
        description: "Transforming raw scientific data into actionable insights for quantum computing research.",
        challenge: "Handling terabytes of experimental data from quantum processors, requiring complex mathematical visualizations that researchers could interact with in real-time.",
        solution: "We built a high-performance data processing pipeline using Rust and Next.js, featuring a custom WebGL visualization engine for multi-dimensional data mapping.",
        fullDescription: "Quantum researchers needed a way to spot patterns in noise-prone data. We provided a set of interactive explorers that allow for filtering and pivoting across massive datasets instantly.",
        approach: "We leveraged WebAssembly to handle heavy computations in the browser. The backend utilizes a ClickHouse database for sub-second query speeds across billions of rows of experimental metrics.",
        results: "Research throughput increased by 50% as data analysis cycles dropped from hours to minutes. Two previously unknown coherence patterns were discovered using the new visualization tools.",
        image: "bg-gradient-to-br from-indigo-900 to-black",
        scope: ["Data Visualization", "WASM Integration", "High-Performance Processing", "Scientific UI Design"],
        stats: [
            { label: "Throughput Increase", value: "50%" },
            { label: "Query Speed", value: "<500ms" },
            { label: "Data Volume", value: "2TB+" },
            { label: "User Adoption", value: "100%" }
        ],
        technologies: ["Next.js", "Rust (WASM)", "ClickHouse", "WebGL", "Apache Arrow"]
    },
    {
        slug: "zenith-real-estate",
        title: "Zenith Real Estate",
        category: "PropTech",
        client: "Zenith Properties",
        year: "2024",
        description: "A luxury property portal featuring 1-on-1 virtual walkthroughs and automated legal staging.",
        challenge: "Connecting global investors with premium real estate during travel restrictions, ensuring the transaction process was as smooth as the property viewing.",
        solution: "An integrated platform featuring 8K virtual tours, real-time video consultation, and an automated document management system for cross-border transactions.",
        fullDescription: "Zenith needed to close the gap between 'interest' and 'investment'. We built a high-trust environment where every detail of the property and the legal process was transparent and accessible.",
        approach: "We integrated a customized WebRTC solution for high-fidelity video calls with shared screen property navigation. The legal backend utilizes an encrypted vault for document signing and verification.",
        results: "Cross-border sales increased by 60%. The average closing time for international transactions was reduced from 45 days to just 14 days.",
        image: "bg-gradient-to-br from-rose-900 to-black",
        scope: ["PropTech Solution", "WebRTC Integration", "Encrypted Document Vault", "8K Virtual Tours"],
        stats: [
            { label: "Sales Increase", value: "60%" },
            { label: "Closing Time", value: "-31 Days" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Total Assets", value: "$2B+" }
        ],
        technologies: ["React", "Go", "WebRTC", "PostgreSQL", "Google Cloud"]
    },
    {
        slug: "vertex-gaming",
        title: "Vertex Gaming",
        category: "Gaming & Social",
        client: "Vertex Esports",
        year: "2023",
        description: "The ultimate competitive hub for esports tournaments and community engagement.",
        challenge: "Supporting massive concurrent traffic during live tournament events while maintaining sub-second latency for live scores and community interactions.",
        solution: "A distributed system built on Elixir/Phoenix for real-time capabilities, supporting thousands of concurrent users with live brackets and integrated chat.",
        fullDescription: "Esports fans expect instant updates. We provided a platform that unifies live streaming, bracket tracking, and social interaction into a single, cohesive high-energy experience.",
        approach: "We choice Elixir for its incredible concurrency model. We implemented a custom CDN layer for live-streaming assets and utilized Redis for ultra-fast caching of tournament statistics.",
        results: "The platform successfully hosted a 50k concurrent user event with zero downtime. Engagement metrics increased by 200% compared to their previous third-party integrations.",
        image: "bg-gradient-to-br from-emerald-900 to-black",
        scope: ["Live Event Scaling", "Real-time Chat Systems", "Dashboard Engineering", "Esports Logistics"],
        stats: [
            { label: "Concurrent Users", value: "50k" },
            { label: "Engagement Lift", value: "200%" },
            { label: "Latency", value: "<50ms" },
            { label: "Uptime", value: "100%" }
        ],
        technologies: ["Elixir", "Phoenix", "LiveView", "PostgreSQL", "Redis"]
    }
]
