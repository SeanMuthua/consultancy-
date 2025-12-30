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
    }
]
