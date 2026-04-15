export interface Service {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    location: string;
}

export const SERVICES: Service[] = [
    {
        id: 1,
        title: "Herbal Technology",
        subtitle: "RESEARCH",
        description: "High-end laboratory research focused on Himalayan medicinal herbal plants and phytochemical analysis for industrial and therapeutic applications.",
        image: "/images/hero2.webp",
        location: "Centre of Excellence"
    },
    {
        id: 2,
        title: "Phytochemical Evaluation",
        subtitle: "EVALUATION",
        description: "Advanced laboratory equipment and protocols for accurate extraction and characterization of medicinal plant principal active ingredients.",
        image: "/images/forestry.jpg",
        location: "Specialized Lab Unit"
    },
    {
        id: 3,
        title: "Digital Test Booking",
        subtitle: "SYSTEM",
        description: "A seamless, glassmorphic online booking system for laboratory testing, designed to streamline collaboration between researchers and industry.",
        image: "/images/hero3.jpg",
        location: "Scientific Portal"
    },

];

// Footer Types
export interface FooterLink {
    id: number;
    label: string;
    href: string;
}

export interface FooterSection {
    id: number;
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    id: number;
    name: string;
    href: string;
    icon: string;
}

export interface ContactInfo {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    email: string;
    phone: string;
}

// Footer Data
export const FOOTER_SECTIONS: FooterSection[] = [
    {
        id: 1,
        title: "Services",
        links: [
            { id: 1, label: "Mobile Development", href: "/services" },
            { id: 2, label: "Cyber Security", href: "/services" },
            { id: 3, label: "Cloud Solutions", href: "/services" },
            { id: 4, label: "AI Integration", href: "/services" }
        ]
    },
    {
        id: 2,
        title: "Company",
        links: [
            { id: 1, label: "About Us", href: "/about" },
            { id: 2, label: "Contact", href: "/contact" },
            { id: 3, label: "Products", href: "/products" }
        ]
    },
    {
        id: 3,
        title: "Legal",
        links: [
            { id: 1, label: "Privacy Policy", href: "#privacy" },
            { id: 2, label: "Terms of Service", href: "#terms" },
            { id: 3, label: "Cookie Policy", href: "#cookies" }
        ]
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    // { id: 1, name: "GitHub", href: "https://github.com", icon: "github" },
    // { id: 2, name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { id: 3, name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { id: 4, name: "Facebook", href: "https://facebook.com", icon: "facebook" }
];

export const CONTACT_INFO: ContactInfo = {
    address: "7QFM+JVH, Benhama, Jammu and Kashmir 191201",
    // city: "Al Seeb",
    // state: "Muscat Governorate",
    // zip: "P.O. Box 34",
    // country: "Sultanate of Oman",
    email: "coehtfof@skuastkashmir.ac.in",
    phone: "+91-99067 26920",
    city: "",
    state: "",
    zip: "",
    country: ""
};

export const COMPANY_INFO = {
    name: "FACULTY OF FORESTRY, SKUAST-KASHMIR",
    logo: "/images/holistics-nobg.png",
    logos: [
        "/images/holistics-nobg.png",
        "/images/skuast-logo.png"
    ],
    tagline: "Excellence in Research & Innovation",
    description: "Centre of excellence on herbal technology (CoEHT) is a state-of-the-art laboratory established in 2023 at FOF SKUAST-K Srinagar.CoEHT RCRQA is the only laboratory in the UTs of J&K with muiltidisciplinary facilities under one roof "
};

export const STATS_DATA = [
    { id: 1, label: "Species Conserved", value: "51", icon: "Flower2" },
    { id: 2, label: "Germplasm Accessions", value: "44", icon: "Dna" },
    { id: 3, label: "RET Species", value: "15", icon: "Leaf" },
    { id: 4, label: "Tech Developed", value: "10+", icon: "Cpu" }
];

export const ABOUT_INFO = {
    badge: "Integrated Institutional Model",
    title: "Centre of Excellence",
    subtitle: "on Herbal Technology",
    description: "The Centre of Excellence on Herbal Technology (CoEHT), established under the prestigious HADP scheme of the Government of J&K in 2023-24, is dedicated to advancing research, fostering innovation, and supporting incubation in the Medicinal and Aromatic Plants (MAPs) sector to build a technology-driven bioeconomy. \n\nEquipped with state-of-art research facilities, a MAPs germplasm bank, herbarium specimens, and a crude drug repository, the centre provides advanced analytical and technological support for the herbal sector. CoEHT holds the distinction of authenticating temperate MAP species and raw herbal drugs through traditional macroscopic examination and advanced molecular techniques, ensuring the credibility and reliability of resources for research and pharmaceutical applications.",
    points: [
        "Temperate MAP Species Authentication",
        "Himalayan Germplasm Bank & Repository",
        "HADP Scheme Government Integration",
        "Translational Bioeconomy Development"
    ]
};

// About Page Vision & Mission
export const ABOUT_VISION = {
    title: "Our Vision",
    badge: "Future Perspective",
    content: "Reimagining the herbal traditions of North-Western Himalaya to drive global health and wellness innovations, socio-ecological resilience, and economic prosperity.",
    image: "/images/hero2.webp"
};

export const ABOUT_MISSION = {
    title: "Our Mission",
    badge: "Core Purpose",
    content: "Strengthen the MAPs sector through translational research, innovation, and incubation for transforming the traditional raw botanical trade into high-value herbal extracts and products.",
    points: [
        "Translational Research Leadership",
        "Innovation in MAPs Sector",
        "Incubation for High-value Trade",
        "Traditional Heritage Transformation"
    ],
    image: "/images/hero2.webp"
};

// Institutional data relocated to bottom of file

export const RD_PRIORITIES_DATA = [
    {
        id: 1,
        title: "Conservation of RET Species",
        desc: "Resource assessment, collection, characterization, and conservation of rare, endangered and threatened (RET) species of MAPs and wildedibles.",
        icon: "Shield"
    },
    {
        id: 2,
        title: "Sustainable Mass Production",
        desc: "Developing mass-production, sustainable harvesting, extraction and processing technologies for medicinal and aromatic plants.",
        icon: "Factory"
    },
    {
        id: 3,
        title: "Molecular Authentication",
        desc: "Molecular and chemotaxonomic studies for species authentication and quality assurance to ensure market credibility.",
        icon: "Dna"
    },
    {
        id: 4,
        title: "Ecological Transformations",
        desc: "Studying ecological transformations and their influence on the variability of bioactive compounds in Himalayan flora.",
        icon: "Leaf"
    },
    // {
    //     id: 5,
    //     title: "Bioactive Isolation",
    //     desc: "Phytochemical evaluation of crude extracts for quantification, characterization and isolation of bioactive compounds for industrial use.",
    //     icon: "Beaker"
    // },
    // {
    //     id: 6,
    //     title: "Safety & Efficacy Models",
    //     desc: "Evaluating efficacy and safety of novel therapeutic agents through in-vitro and in-vivo models.",
    //     icon: "Stethoscope"
    // },
    // {
    //     id: 7,
    //     title: "Traditional Validation",
    //     desc: "Documentation and scientific validation of indigenous herbal practices and integration of traditional knowledge through R&D.",
    //     icon: "History"
    // },
    // {
    //     id: 8,
    //     title: "Certification Protocols",
    //     desc: "Development of comprehensive contamination screening and certification protocols to ensure safety and market readiness.",
    //     icon: "FileCheck"
    // }
];

export const PROCESS_DATA = [
    {
        id: 1,
        title: "Digital Test Booking",
        description: "Access our seamless online portal to select required analytical services and schedule a virtual consultation.",
        iconName: "Settings2"
    },
    {
        id: 2,
        title: "Sample Submission",
        description: "Securely ship or drop off your medicinal plant samples following our standardized packaging protocols.",
        iconName: "FileCheck"
    },
    {
        id: 3,
        title: "Phytochemical Evaluation",
        description: "Rigorous laboratory testing using LC-MS/MS and chromatography to identify active principal ingredients.",
        iconName: "Users"
    },
    {
        id: 4,
        title: "Certified Reporting",
        description: "Receive comprehensive, industry-standard analytical reports and certificates of purity for your harvest.",
        iconName: "Handshake"
    }
];

export const WHY_CHOOSE_DATA = [
    {
        id: 1,
        title: "Authenticity & Trust",
        desc: "Validated germplasm ensures genuine, reliable plant material and institutional credibility.",
        icon: "ShieldCheck"
    },
    {
        id: 2,
        title: "State-of-the-Art Labs",
        desc: "End-to-end capabilities from sample preparation to high-end instrumentation halls.",
        icon: "Cpu"
    },
    {
        id: 3,
        title: "Interdisciplinary Expertise",
        desc: "Integration of botany, phytochemistry, and pharmacology under one institutional roof.",
        icon: "Network"
    },
    {
        id: 4,
        title: "Innovation & Linkages",
        desc: "Encouraging collaborative research, product development, and global value-chain linkages.",
        icon: "Lightbulb"
    },
    {
        id: 5,
        title: "Internships & Training",
        desc: "Specialized practical training and workshops on MAPs instrumentation for global stakeholders.",
        icon: "GraduationCap"
    },
    {
        id: 6,
        title: "21-Day Turnaround",
        desc: "Rapid analytical results ensuring you win the market quicker through high-velocity data.",
        icon: "Timer"
    },
    {
        id: 7,
        title: "Cost-Efficient Services",
        desc: "Highest precision analytical services at significantly lower industrial operational costs.",
        icon: "BadgeDollarSign"
    }
];

// Product Types
export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    features: string[];
    link: string;
}

// Product Data
export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: "Be In Control",
        description: "Enhance your achievements in record time and with less effort, all within your budget and timeline. ISHRAFF offers a variety of project management options that make it easy to communicate with your team, assign tasks, and track expenses.",
        image: "/images/img34.webp",
        features: [
            "Communicate with your team",
            "Assign tasks",
            "Track expenses"
        ],
        link: "/products/ishraff"
    }
];

// Testimonial Types
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    testimonial: string;
    projectType: string;
}

// Testimonial Data
export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Mr Bashir Ahmad",
        role: "Farmer",
        company: "Kashmir Herbal Growers",
        image: "/images/testimonials/avatar1.jpg",
        rating: 5,
        testimonial: "The extraction protocols provided by the Centre helped me verify the purity of my lavender oil harvest, which increased its market value by 40%.",
        projectType: "Herbal Production"
    },
    {
        id: 2,
        name: "Ms Zoya Khan",
        role: "Entrepreneur",
        company: "Nature's Essence Startups",
        image: "/images/testimonials/avatar2.jpg",
        rating: 5,
        testimonial: "Validating our herbal formulations at the Centre's laboratory gave our startup the scientific credibility needed to secure our first international export deal.",
        projectType: "Industrial Formulation"
    },
    {
        id: 3,
        name: "Mr Ishfaq Mir",
        role: "Research Student",
        company: "Faculty of Forestry",
        image: "/images/testimonials/avatar3.jpg",
        rating: 5,
        testimonial: "The hands-on experience with phytochemical analysis here has been invaluable for my research on Himalayan medicinal plants and sustainable forestry conservation.",
        projectType: "Research & Analysis"
    }
];

export const FACILITIES_DATA = [
    {
        id: "solvent-extraction",
        title: "Automated Solvent Extraction",
        description: "High-throughput extraction system for complex metabolite recovery.",
        features: [
            "Extract 6 samples at once with 21+ solvents",
            "Fast, efficient metabolite recovery",
            "Supports species-specific methods"
        ],
        image: "/images/facilities/extraction.png",
        icon: "FlaskConical"
    },
    {
        id: "parallel-evaporation",
        title: "Parallel Evaporation System",
        description: "Syncore Plus Analyst for simultaneous multi-sample concentration.",
        features: [
            "Simultaneous 6-sample concentration",
            "Efficient solvent reuse",
            "Rapid, maximum recovery"
        ],
        image: "/images/facilities/chromatography.png",
        icon: "Waves"
    },
    {
        id: "lcmsms-q3",
        title: "LC-MS/MS (Triple Quadrupole)",
        description: "High-selectivity tandem mass spectrometry for molecule quantification.",
        features: [
            "High selectivity & sensitivity",
            "Self-cleaning, low contamination",
            "Ultra-fast polarity switching"
        ],
        image: "/images/facilities/lcmsmsq3.png",
        icon: "Zap"
    },
    {
        id: "chromatography",
        title: "Pure Chromatography System",
        description: "Automated high-resolution purification for active compounds.",
        features: [
            "Purifies active compounds (95–98% purity)",
            "UV/ELSD detection for accurate ID",
            "Scalable lab & pilot purification"
        ],
        image: "/images/facilities/chromatography.png",
        icon: "Activity"
    },
    {
        id: "ftir",
        title: "FTIR Spectrometer",
        description: "Molecular fingerprinting for identification of unknowns.",
        features: [
            "Identifies functional groups",
            "Unique IR spectra generation",
            "Molecular fingerprinting"
        ],
        image: "/images/facilities/lcmsms.png",
        icon: "Fingerprint"
    },
    {
        id: "uv-vis",
        title: "UV-Visible Spectrophotometer",
        description: "Double-beam design for stable and accurate UV-Vis measurements.",
        features: [
            "Double-beam optical design",
            "Accurate & stable measurements",
            "Quantitative concentration analysis"
        ],
        image: "/images/facilities/lcmsms.png",
        icon: "Sun"
    },
    {
        id: "freeze-dryer",
        title: "Freeze Dryer",
        description: "Automated sublimation system for stable lab and pilot use.",
        features: [
            "Stable vacuum & temperature",
            "Reproducible drying cycles",
            "Scalable lab & pilot use"
        ],
        image: "/images/facilities/extraction.png",
        icon: "Snowflake"
    },
    {
        id: "spray-dryer",
        title: "Spray Dryer",
        description: "Rapid liquid-to-powder conversion with uniform particle size.",
        features: [
            "Uniform particle size control",
            "Precise airflow & temperature",
            "Analytical formulation support"
        ],
        image: "/images/facilities/extraction.png",
        icon: "Wind"
    },
    {
        id: "rt-pcr",
        title: "Real-Time PCR Machine",
        description: "High-sensitivity nucleic acid quantification in real time.",
        features: [
            "Gene expression analysis",
            "Molecular authentication",
            "Real-time quantification"
        ],
        image: "/images/facilities/lcmsmsq3.png",
        icon: "Dna"
    },
    {
        id: "gel-doc",
        title: "Gel Documentation System",
        description: "High-resolution visualization of DNA, RNA, and proteins.",
        features: [
            "High-res DNA/RNA imaging",
            "Molecular band analysis",
            "USB integration facility"
        ],
        image: "/images/facilities/lcmsmsq3.png",
        icon: "Image"
    }
];

export const LAB_TOUR_DATA = {
    title: "Experience Our Centre",
    subtitle: "Laboratory Tour",
    description: "Step inside the SKUAST-K Centre of Excellence on Herbal Technology. Explore our high-precision analytical halls, specialized extraction units, and collaborative research spaces.",
    mainImage: "/images/tour/wide_view.png",
    hotspots: [
        {
            id: 1,
            title: "Analytical Hall",
            description: "High-precision instrumentation for phytochemical profiling.",
            top: "45%",
            left: "25%"
        },
        {
            id: 2,
            title: "Botanical Archive",
            description: "Curated collection of Himalayan medicinal plant germplasm.",
            top: "35%",
            left: "65%"
        },
        {
            id: 3,
            title: "Extraction Lobby",
            description: "Process-scale active ingredient isolation facility.",
            top: "65%",
            left: "55%"
        },
        {
            id: 4,
            title: "Collaboration Wing",
            description: "Joint research space for industrial and therapeutic analysis.",
            top: "20%",
            left: "40%"
        }
    ]
};




export interface NavLink {
    href: string;
    labelKey: string;
    subLinks?: {
        href: string;
        labelKey: string;
        icon?: string;
    }[];
}

export const NAV_LINKS: NavLink[] = [
    { href: "/", labelKey: "home" },
    { href: "/book-test", labelKey: "bookTest" },
    { href: "/services", labelKey: "services" },
    { href: "/about", labelKey: "about" },
    { href: "/facilities", labelKey: "facilities" },
    { href: "/team", labelKey: "team" },
    { href: "/gallery", labelKey: "gallery" },
    { href: "/contact", labelKey: "contact" }
];



export const CORE_VALUES = [
    { id: 1, icon: "Lightbulb", key: "innovation" },
    { id: 2, icon: "Shield", key: "quality" },
    { id: 3, icon: "Users", key: "collaboration" },
    { id: 4, icon: "Trophy", key: "excellence" }
];

export const COMPANY_JOURNEY = [
    { 
        id: 1, 
        year: "2023-24", 
        title: "Centre Establishment",
        desc: "CoEHT was established at Faculty of Forestry SKUAST-Kashmir under the Holistic Agriculture Development Programme (HADP) to advance herbal technology." 
    },
    { 
        id: 2, 
        year: "2023-24", 
        title: "Germplasm Conservation",
        desc: "Expansion of Himalayan biodiversity through the establishment of a dedicated germplasm bank for rare and endangered medicinal plants." 
    },
    { 
        id: 3, 
        year: "2024", 
        title: "Advanced Lab Setup",
        desc: "Commissioned state-of-the-art analytical facilities and high-precision instrumentation at the Faculty of Forestry SKUAST-K." 
    },
    { 
        id: 4, 
        year: "2024", 
        title: "National Coordination",
        desc: "Appointed as the coordinating centre for RCFC North II and the Research Centre for Residue & Quality Analysis at SKUAST-K." 
    }
];



export const SERVICES_PAGE_DATA = {
    hero: {
        title: "Our Services",
        subtitle: "Testing, Analysis & Consulting",
        description: "The Centre of Excellence on Herbal Technology offers specialized scientific services to researchers, entrepreneurs, and government departments."
    },
    testingAnalysis: {
        title: "Testing and Analysis",
        description: "Our comprehensive testing and analysis services are available to researchers, students, farmers, and entrepreneurs seeking accurate and reliable results. To ensure a smooth and efficient process, please adhere strictly to our established Standard Operating Procedures (SOPs).",
        annexures: [
            {
                id: "annexure-i",
                title: "Researchers and Students Registry",
                label: "ANNEXURE-I",
                sopPath: "#",
                formPath: "#",
                color: "brand"
            },
            {
                id: "annexure-ii",
                title: "Farmers and Entrepreneurs Registry",
                label: "ANNEXURE-II",
                sopPath: "#",
                formPath: "#",
                color: "slate"
            }
        ],
        categories: [
            {
                id: "chemical-profiling",
                title: "Chemical Profiling",
                items: [
                    "Medicinal plants & wild edibles",
                    "Underutilized crops and flora",
                    "Nutraceuticals & Herbal extracts",
                    "Honey and honey products",
                    "Cosmetics and essential oils"
                ],
                icon: "FlaskConical"
            },
            {
                id: "phytochemical",
                title: "Phytochemical Analysis",
                items: [
                    "Secondary metabolites in Plants",
                    "Microbial analysis",
                    "Essential oil characterization"
                ],
                icon: "Microscope"
            },
            {
                id: "herbal-science",
                title: "Herbal Science & Technology",
                items: [
                    "Isolation of bioactive compounds",
                    "Bioanalytical testing",
                    "Drug discovery & Nanomaterials",
                    "Species authentication & Tracing"
                ],
                icon: "Dna"
            },
            {
                id: "agricultural",
                title: "Agricultural & Allied Sciences",
                items: [
                    "Detection of pesticide residues",
                    "Contaminants & Adulterants",
                    "Plant disease identification",
                    "Pathogen detection & Omics"
                ],
                icon: "Sprout"
            },
            {
                id: "medical",
                title: "Medical Sciences",
                items: [
                    "Toxicology screening & Drug testing",
                    "Drug profiling",
                    "Biomarker Identification",
                    "Cell imaging & Bioactivity"
                ],
                icon: "Stethoscope"
            }
        ]
    },
    consulting: {
        title: "Consulting Services",
        items: [
            "Integrated training on cultivation and pre-processing of MAPs",
            "Quality seed and planting material of elite germplasm",
            "Site surveys and techno-economic feasibility reports",
            "Expert guidance on marketing strategies and industrial linkages",
            "Large scale extraction and distillation of MAPs",
            "Qualitative and quantitative testing of MAP extracts"
        ]
    },
    services: SERVICES,
    whatYouGet: {
        title: "Why Choose CoEHT",
        subtitle: "Unmatched scientific precision and institutional support for Himalayan botanical research.",
        values: [
            {
                id: 1,
                title: "Certified Purity",
                description: "Standardized protocols for ensuring MAP harvest quality and industrial credibility.",
                icon: "Award"
            },
            {
                id: 2,
                title: "Expert Consulting",
                description: "Direct access to field scientists and specialized researchers for technical guidance.",
                icon: "Handshake"
            },
            {
                id: 3,
                title: "Rapid Turnaround",
                description: "Efficient analysis workflows designed to accelerate your project timelines significantly.",
                icon: "Lightbulb"
            },
            {
                id: 4,
                title: "Dedicated Support",
                description: "End-to-end guidance from initial sample submission to final certified reporting.",
                icon: "Headphones"
            }
        ]
    }
};

export const ISHRAFF_CONTENT = {
    hero: {
        title: "ISHRAFF",
        subtitle: "SAS platform for remote project and team monitoring",
        description: "Built for organizations that prioritize transparency and structured execution in distributed, multi-stakeholder environments. Simplicity and functionality at its core.",
        image: "/images/img34.webp"
    },
    features: [
        {
            id: "simplicity",
            title: "Simplicity and Functionality",
            description: "Our solutions are designed for simplicity, ensuring effortless use for all skill levels.",
            items: [
                "Effortless use for all skill levels",
                "Seamless collaboration and team connection",
                "Real-time sharing of ideas",
                "Intuitive tools for efficient goals achieved"
            ],
            image: "/images/ihraff1.webp"
        },
        {
            id: "reliability",
            title: "Data Credibility and Reliability",
            description: "Our solutions are designed for effortless usability, ensuring accessibility for users of all skill levels.",
            items: [
                "Effortless usability and accessibility",
                "Connecting teams for seamless collaboration",
                "Real-time idea sharing",
                "Accurate and efficient results every time"
            ],
            image: "/images/ishraff2.webp"
        },
        {
            id: "design",
            title: "Design (Visual and Technical)",
            description: "Our smart dashboard provides instant access to critical data, keeping you informed at a glance.",
            items: [
                "Instant access to critical data",
                "Consolidated key metrics in an intuitive interface",
                "Real-time updates for staying ahead",
                "Effortless decision-making insights"
            ],
            image: "/images/ishraff3.webp"
        }
    ],
    dashboard: {
        title: "Smart Dashboard",
        description: "Instant access to critical data, keeping you informed at a glance. Consolidates key metrics into an intuitive interface, making insights easy to understand.",
        image: "/images/hero/zenix_product_showcase_advanced_slate_1771189952426.png"
    },
    operational: {
        header: "WHAT SETS ISHRAF APART",
        title: "Advanced Project Intelligence",
        subtitle: "Powerful tools that give you complete control — from planning to execution and field monitoring.",
        divider: "OPERATIONAL CONTROL",
        feature: {
            title: "Full Timeline Control with Gantt View",
            description: "Visualize task dependencies, adjust schedules dynamically, and manage project timelines with clarity.",
            image: "/images/ishraff/gantt_final.png"
        }
    },
    strategic: {
        divider: "STRATEGIC OVERSIGHT",
        sCurve: {
            title: "Planned vs Actual Performance (S-Curve)",
            description: "Compare planned performance against actual execution with an interactive S-Curve that highlights variances instantly.",
            image: "/images/ishraff/scurve.png"
        },
        portfolio: {
            title: "Portfolio-Level Project Oversight",
            description: "Monitor all your projects in one dashboard with risk indicators and completion rates for each.",
            image: "/images/ishraff/portfolio.png"
        }
    },
    workflow: {
        title: "Streamline Your Workflow",
        steps: [
            {
                id: 1,
                title: "Create a workspace",
                step: "step 1",
                icon: "LayoutGrid",
                description: "Set up your central hub for project and team management."
            },
            {
                id: 2,
                title: "Invite members",
                step: "step 2",
                icon: "UserPlus",
                description: "Bring your team together in a secure environment."
            },
            {
                id: 3,
                title: "Create project",
                step: "step 3",
                icon: "PlusSquare",
                description: "Start your specific initiatives with structured goals."
            },
            {
                id: 4,
                title: "Form the team",
                step: "step 4",
                icon: "Users",
                description: "Assign roles and responsibilities to project members."
            },
            {
                id: 5,
                title: "Create tasks & assign",
                step: "step 5",
                icon: "CheckSquare",
                description: "Break down execution into clear, trackable actions."
            }
        ]
    },
    modules: {
        title: "Advanced System Modules",
        subtitle: "Powering your enterprise with specialized tools designed for high-stakes environments.",
        items: [
            {
                id: "risk",
                title: "Risk Management",
                description: "Advanced risk assessment, mitigation strategies, and real-time threat monitoring for your projects.",
                tags: ["assessment", "mitigation", "monitoring"],
                status: "coming soon",
                icon: "ShieldAlert"
            },
            {
                id: "timesheet",
                title: "Time Sheet",
                description: "Intelligent time tracking, automated timesheets, and productivity analytics for your team.",
                tags: ["tracking", "analytics", "reports"],
                status: "coming soon",
                icon: "Clock"
            },
            {
                id: "ai",
                title: "AI Configuration",
                description: "Custom AI model training, intelligent automation, and predictive insights for your workflows.",
                tags: ["machine learning", "automation"],
                status: "coming soon",
                icon: "Cpu"
            }
        ]
    }
};

export const PILLARS_DATA = [
    {
        id: 1,
        title: "Conservation & Assessment",
        description: "Resource assessment, collection, characterization, and conservation of rare, endangered and threatened (RET) MAP species.",
        icon: "Shield"
    },
    {
        id: 2,
        title: "Molecular Authentication",
        description: "Molecular and chemotaxonomic studies for species authentication and quality assurance to ensure market credibility.",
        icon: "Fingerprint"
    },
    {
        id: 3,
        title: "Green Extraction",
        description: "Development of innovative, eco-friendly and sustainable extraction and processing techniques for herbal products.",
        icon: "Leaf"
    },
    {
        id: 4,
        title: "Phytochemical Evaluation",
        description: "Phytochemical evaluation of crude extracts for qualitative and quantitative estimations of bioactive compounds.",
        icon: "Beaker"
    },
    {
        id: 5,
        title: "Efficacy & Safety",
        description: "Evaluating efficacy and safety of novel therapeutic agents through in-vitro and in-vivo models.",
        icon: "ShieldCheck"
    },
    {
        id: 6,
        title: "Contamination Screening",
        description: "Development of comprehensive contamination screening and certification protocols to ensure safety.",
        icon: "ScanSearch"
    }
];

// Team & Leadership Data
export const INSTITUTIONAL_LEADERSHIP = [
    {
        id: "hvc",
        name: "Prof. Nazir Ah Ganai",
        role: "Hon'able Vice Chancellor",
        organization: "SKUAST-Kashmir",
        image: "/images/hero2.webp"
    },
    {
        id: "dr",
        name: "Prof. H R Naik",
        role: "Director Research",
        organization: "SKUAST-Kashmir",
        image: "/images/hero2.webp"
    },
    {
        id: "dean",
        name: "Prof. AH Mughal",
        role: "Dean Faculty of Forestry",
        organization: "SKUAST-Kashmir",
        image: "/images/hero2.webp"
    },
    {
        id: "head-fpu",
        name: "Dr. PA Sofi",
        role: "Prof & Head FPU",
        organization: "SKUAST-Kashmir",
        image: "/images/hero2.webp"
    }
];

export const PI_DATA = {
    name: "Dr. Peerzada Ishtiyak Ahmad",
    role: "PI & MAPs Expert",
    specialty: "Expert in Medicinal and Aromatic Plants (MAPs) with specialized expertise in phytochemistry and drug discovery.",
    image: "/images/hero2.webp",
    badges: ["Researcher", "Phytochemist", "Professor"],
    message: "Welcome to the Centre of excellence on herbal technology (CoEHT) at Faculty of Forestry SKUAST-Kashmir. Our centre is dedicated to providing high-quality analytical services to support research, industry, and regulatory compliance in the fields of agriculture, Medical, food safety, and MAPs sector.\n\nOur team is committed to generating reliable and accurate results using state-of-the-art analytical instruments and following international guidelines for sample testing and analysis.\n\nWe invite you to explore our facilities and services, and we look forward to collaborating with you to address your analytical needs."
};

export const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Dr. Tahir Mushtaq",
        role: "Scientist",
        specialty: "Specialist in silviculture and nursery technology of MAPs",
        image: "/images/hero2.webp"
    },
    {
        id: 2,
        name: "Ms. Arfa ji",
        role: "Young Professional III",
        specialty: "Research expertise spanning molecular biology, nanobiotechnology and drug discovery.",
        image: "/images/hero2.webp"
    },
    {
        id: 3,
        name: "Ms. Irtiqa Mohammad",
        role: "Young Professional II",
        specialty: "Researcher with expertise in phytochemistry and MAPs",
        image: "/images/hero2.webp"
    },
    {
        id: 4,
        name: "Mr. Jan Mohammad",
        role: "Field Assistant",
        specialty: "Field and Lab Support Assistant",
        image: "/images/hero2.webp"
    },
    {
        id: 5,
        name: "Research Scholars",
        role: "Collaborative Research Unit",
        specialty: "Ms Iqra, Ms Sabira, Ms Suraya",
        image: "/images/hero2.webp"
    }
];

// Gallery Data
export const GALLERY_CATEGORIES = ["All", "Laboratory", "Research", "Flora", "Facility"];

export const GALLERY_DATA = [
    {
        id: 1,
        title: "LC-MS/MS Analytical Hall",
        category: "Laboratory",
        image: "/images/facilities/lcmsms.png",
        description: "High-precision tandem mass spectrometry for metabolic profiling."
    },
    {
        id: 2,
        title: "Himalayan Medicinal Flora",
        category: "Flora",
        image: "/images/forestry.jpg",
        description: "Documenting biodiversity in the Benhama highlands."
    },
    {
        id: 3,
        title: "Principal Isolation Lab",
        category: "Laboratory",
        image: "/images/facilities/chromatography.png",
        description: "Automated isolation of principal floral ingredients."
    },
    {
        id: 4,
        title: "Field Instrumentation",
        category: "Research",
        image: "/images/hero3.jpg",
        description: "State-of-the-art monitoring in extreme Himalayan environments."
    },
    {
        id: 5,
        title: "Extraction Pilot Unit",
        category: "Facility",
        image: "/images/facilities/extraction.png",
        description: "Scale-up facility for herbal industrial formulation."
    },
    {
        id: 6,
        title: "Phytochemical Screening",
        category: "Research",
        image: "/images/hero2.webp",
        description: "Quantitative estimation of bioactive compounds."
    },
    {
        id: 7,
        title: "Triple Quadrupole Unit",
        category: "Laboratory",
        image: "/images/facilities/lcmsmsq3.png",
        description: "Sensitive quantitation hall for herbal standards."
    },
    {
        id: 8,
        title: "Botanical Observation",
        category: "Research",
        image: "/images/img34.webp",
        description: "In-situ studies of medicinal plant morphology."
    }
];

export const OBJECTIVES_DATA = {
    title: "Bioprospecting Herbal Resources for Bioeconomy",
    items: [
        {
            id: 1,
            title: "Omics-Driven Therapeutics",
            description: "To pioneer novel therapeutics by harnessing omics-driven biomarker identification, nano-technology, and advanced bioanalytics for transformative drug discovery",
            iconName: "FlaskConical"
        },
        {
            id: 2,
            title: "Sustainable Industrial Formulations",
            description: "To explore elite germplasm of MAPs for sustainable production, active principal ingredients (APIs), and formulations for different industrial applications.",
            iconName: "Sprout"
        },
        {
            id: 3,
            title: "Knowledge-Sharing & Innovation",
            description: "To foster knowledge-sharing among communities, industries and researchers in order to drive herbal innovation, commercialization and promotion of quality standards.",
            iconName: "Users"
        }
    ]
};

export const SCOPE_DATA = [
    "Natural Product Chemistry",
    "Phytochemistry",
    "Pharmacognosy",
    "Bio-prospecting Bioresources",
    "Molecular",
    "Chemotaxonomy",
    "Process Optimization",
    "Herbal Formulations",
    "Encapsulation",
    "Quality Assurance and Safety",
    "Contamination and Toxicity testing",
    "Certification",
    "Innovation & Sustainability",
    "Design",
    "Development",
    "Incubation & Entrepreneurship",
    "Mentorship",
    "Networking"
];

export const MANDATE_DATA = {
    title: "Our Mandate",
    subtitle: "Core Institutional Responsibilities",
    items: [
        {
            title: "Conservation & Sustainable Use",
            description: "To conserve priority medicinal and aromatic plant (MAP) species through germplasm banking, documentation, and ensuring long-term availability and sustainability."
        },
        {
            title: "Standardization & Authentication",
            description: "To develop and validate protocols for authentication, quality control, and standardization of herbal raw materials, extracts, and formulations."
        },
        {
            title: "Phyto-chemicals Determination",
            description: "Determination of Phyto-chemicals in agricultural/horticulture crops, medicinal plants and soil including fatty acids, vitamins, sugars, elemental, flavonoids, alkaloids, xanthones, terpenoids, phenols, steroids, plant hormones, etc."
        },
        // {
        //     title: "Capacity Building & Training",
        //     description: "To conduct training programmes, and workshops for students, researchers, entrepreneurs, and local communities in herbal technology and entrepreneurship."
        // },
        // {
        //     title: "Collaboration & Outreach",
        //     description: "To act as a link between academia, industry, and policymakers, fostering collaborations for herbal sector growth, technology transfer, and socio-economic upliftment of communities."
        // }
    ]
};

export const SERVED_AUDIENCE = [
    { title: "Research & Academic Institutions", icon: "GraduationCap" },
    { title: "Farmers & Growers", icon: "Sprout" },
    { title: "Entrepreneurs", icon: "Lightbulb" },
    { title: "Forest & Police Department", icon: "Shield" },
    { title: "Pharmaceutical Industry", icon: "FlaskConical" },
    { title: "Agriculture & Horticulture", icon: "Leaf" },
    { title: "Veterinary & Fisheries", icon: "Waves" },
    { title: "Medical Colleges", icon: "Stethoscope" }
];

export const TRAINING_PAGE_DATA = {
    hero: {
        title: "Practical Trainings and Workshops",
        description: "Specialized short-term practical training programs designed to enhance technical skills and industry knowledge in the herbal sector."
    },
    workshops: {
        overview: "We provide specialized short-term practical training programs and hands-on workshops on 'Instrumentation and Analytical Techniques of Medicinal and Aromatic Plants' designed for professionals, students, and industry stakeholders. These sessions aim to enhance technical skills, industry knowledge, and practical expertise through interactive learning experiences.",
        programs: [
            {
                id: "one-day",
                title: "Program Highlights (One Day)",
                highlights: [
                    "Introduction to key medicinal and aromatic plant species, economic importance, and global market trends.",
                    "Overview to species authentication techniques: DNA barcoding, PCR.",
                    "Overview to basics of plant extraction methods, phytochemical analysis, and quality control techniques.",
                    "Overview to basics of chromatography (LCMS/MS, Flash) and spectroscopy (UV-Vis, IR etc)."
                ],
                details: {
                    eligibility: "Open to graduates and above in Science or Engineering disciplines",
                    seats: "Maximum 20 participants (First come first serve basis)",
                    fee: "INR 2,000 per participant (excluding Tax)",
                    schedule: "Open throughout the year",
                    certification: "Certificate provided on successful completion"
                }
            },
            {
                id: "one-week",
                title: "Program Highlights (One Week)",
                highlights: [
                    "Detailed insights into key species, properties, and commercial demand.",
                    "Understanding industrial relevance and market potential.",
                    "Overview of DNA extraction, Gel electrophoresis, Primer designing and PCR amplification",
                    "Master different methods for plant material extraction and quality checks.",
                    "Advanced chromatography (LCMS/MS, GC-MS, Flash) techniques",
                    "Advanced spectroscopy methods (FTIR, UV).",
                    "Interactive Expert Sessions: Engage with field experts to address queries and challenges.",
                    "Networking opportunities with peers and professionals."
                ],
                details: {
                    eligibility: "Open to graduates and above in Science or Engineering disciplines",
                    seats: "Maximum 20 participants (First come first serve basis)",
                    fee: "INR 10,000 per participant (excluding Tax)",
                    schedule: "Conducted once or twice a year as per requirement",
                    certification: "Certificate provided on successful completion",
                    note: "A special discount of 50% shall be provided to self-funded student researchers."
                }
            }
        ]
    }
};

export const INTERNSHIP_PAGE_DATA = {
    hero: {
        title: "Internship Programs",
        description: "Gain hands-on experience and valuable insights in herbal technology and natural product research alongside leading experts."
    },
    overview: "We offer internship programs designed for students, researchers, and professionals who wish to gain hands-on experience and valuable insights in the field of herbal technology, analytical techniques, product development and natural product research, where you will work alongside experts on cutting-edge projects.",
    highlights: {
        duration: "3 to 6 months",
        mode: "On-site (as per project requirements)",
        eligibility: [
            "Undergraduate, postgraduate, and Ph.D. students in Medicinal and Aromatic Plants, Forestry, Botany, Pharmacy, Biotechnology, Chemistry, Agriculture, AYUSH or related disciplines.",
            "Professionals seeking industrial or research exposure in herbal technology."
        ],
        areasOfWork: [
            "Extraction & standardization of herbal compounds",
            "Herbal formulations & product development",
            "Quality control & analytical techniques",
            "Pharmacological & toxicological studies",
            "Cultivation & conservation of medicinal plants",
            "Regulatory aspects & intellectual property rights"
        ]
    }
};

export const TEST_CATEGORIES = [
    { id: "gen", label: "General Assays" },
    { id: "phyto", label: "Phytochemical Analysis" },
    { id: "instr", label: "Instrumental Analysis" },
    { id: "nutri", label: "Nutritional Analysis" },
    { id: "nano", label: "Nanomaterial Synthesis" },
    { id: "qual", label: "Quality Testing" },
    { id: "bio", label: "Biological Activity" }
];

export const PRICING_DATABASE = [
    // General
    { id: "dna", cat: "gen", title: "DNA Barcoding", prices: { entrepreneur: 4500, scientist: 4000, student: 3500, farmer: 3000 }, unit: "sample" },
    { id: "ext", cat: "gen", title: "Extraction", prices: { entrepreneur: 1000, scientist: 700, student: 500, farmer: 300 }, unit: "solvent" },
    
    // Phytochemical
    { id: "phy_scr", cat: "phyto", title: "Qualitative Phytochemical Screening", prices: { entrepreneur: 3000, scientist: 2500, student: 2000, farmer: 1500 }, unit: "sample" },
    { id: "tot_phe", cat: "phyto", title: "Total Phenolic Content", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "sample" },
    { id: "tot_fla", cat: "phyto", title: "Total Flavonoid Content", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "sample" },
    { id: "tot_alk", cat: "phyto", title: "Total Alkaloid Content", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "sample" },

    // Instrumental
    { id: "lcms", cat: "instr", title: "LC-MS/MS", prices: { entrepreneur: 6500, scientist: 6000, student: 5500, farmer: 5000 }, unit: "compound" },
    { id: "flash", cat: "instr", title: "FLASH/PREP Chromatography", prices: { entrepreneur: 14000, scientist: 13500, student: 13000, farmer: 12500 }, unit: "compound" },
    { id: "uv_vis", cat: "instr", title: "UV-Visible Spectrophotometry", prices: { entrepreneur: 1200, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "ftir", cat: "instr", title: "FTIR Analysis", prices: { entrepreneur: 1200, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },

    // Nutritional
    { id: "ash", cat: "nutri", title: "Ash content", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },
    { id: "mst_n", cat: "nutri", title: "Moisture content", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },
    { id: "fat", cat: "nutri", title: "Crude fat", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },
    { id: "prot", cat: "nutri", title: "Crude protein", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },
    { id: "enrg", cat: "nutri", title: "Energy", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },
    { id: "fibr", cat: "nutri", title: "Fiber", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },
    { id: "carb", cat: "nutri", title: "Carbohydrate", prices: { entrepreneur: 400, scientist: 350, student: 300, farmer: 250 }, unit: "sample" },

    // Nanomaterial
    { id: "ag_np", cat: "nano", title: "Silver Nanoparticles", prices: { entrepreneur: 3500, scientist: 3000, student: 2500, farmer: 2000 }, unit: "sample" },
    { id: "zn_np", cat: "nano", title: "Zinc Nanoparticles", prices: { entrepreneur: 3500, scientist: 3000, student: 2500, farmer: 2000 }, unit: "sample" },
    { id: "cu_np", cat: "nano", title: "Copper Nanoparticles", prices: { entrepreneur: 3500, scientist: 3000, student: 2500, farmer: 2000 }, unit: "sample" },
    { id: "mg_np", cat: "nano", title: "Magnesium Nanoparticles", prices: { entrepreneur: 3500, scientist: 3000, student: 2500, farmer: 2000 }, unit: "sample" },
    { id: "mn_np", cat: "nano", title: "Manganese Nanoparticles", prices: { entrepreneur: 3500, scientist: 3000, student: 2500, farmer: 2000 }, unit: "sample" },
    { id: "nano_em", cat: "nano", title: "Nano emulsions", prices: { entrepreneur: 3500, scientist: 3000, student: 2500, farmer: 2000 }, unit: "sample" },

    // Quality Testing
    { id: "ph", cat: "qual", title: "pH", prices: { entrepreneur: 400, scientist: 300, student: 250, farmer: 200 }, unit: "sample" },
    { id: "sp_gr", cat: "qual", title: "Specific Gravity", prices: { entrepreneur: 1000, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "ref_ind", cat: "qual", title: "Refractive Index", prices: { entrepreneur: 1000, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "tfm", cat: "qual", title: "Total Fatty Matter", prices: { entrepreneur: 1000, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "mst_q", cat: "qual", title: "Moisture content (Quality)", prices: { entrepreneur: 800, scientist: 600, student: 450, farmer: 400 }, unit: "sample" },
    { id: "acid", cat: "qual", title: "Free acidity", prices: { entrepreneur: 1000, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "red_sug", cat: "qual", title: "Total reducing sugar", prices: { entrepreneur: 1500, scientist: 1100, student: 900, farmer: 700 }, unit: "sample" },
    { id: "sucr", cat: "qual", title: "Sucrose", prices: { entrepreneur: 1500, scientist: 1100, student: 900, farmer: 700 }, unit: "sample" },
    { id: "opt_den", cat: "qual", title: "Optical density", prices: { entrepreneur: 800, scientist: 600, student: 450, farmer: 400 }, unit: "sample" },
    { id: "fiehe", cat: "qual", title: "Fiehe's test", prices: { entrepreneur: 1000, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "organo", cat: "qual", title: "Organoleptic tests", prices: { entrepreneur: 1000, scientist: 800, student: 700, farmer: 500 }, unit: "sample" },
    { id: "tox", cat: "qual", title: "Toxicity analysis", prices: { entrepreneur: 4000, scientist: 3500, student: 3000, farmer: 2500 }, unit: "sample" },

    // Biological
    { id: "dpph", cat: "bio", title: "DPPH Antioxidant assay", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "sample" },
    { id: "frap", cat: "bio", title: "FRAP Antioxidant assay", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "sample" },
    { id: "antidiab", cat: "bio", title: "alpha-amylase antidiabetic assay", prices: { entrepreneur: 3000, scientist: 2500, student: 2000, farmer: 1500 }, unit: "sample" },
    { id: "anti_disc", cat: "bio", title: "Antimicrobial disc diffusion", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "Strain/sample" },
    { id: "mic", cat: "bio", title: "MIC determination", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "Strain/sample" },
    { id: "mbc", cat: "bio", title: "MBC determination", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "Strain/sample" },
    { id: "poison", cat: "bio", title: "Poison food technique", prices: { entrepreneur: 2000, scientist: 1500, student: 1200, farmer: 1000 }, unit: "Strain/sample" }
];

export const BOOKING_TERMS = [
    "Submit duly-filled, signed and complete application form to PI, CoEHT, SKUAST-K Kashmir.",
    "Incomplete application, improperly filled, or lacking essential sample details are liable to be rejected.",
    "Samples must be in sufficient quantity (Extract Min. 250g, Raw Material Min. 500g), properly labelled and of good quality.",
    "Processing of samples granted only after full payment is made in advance. Payments are non-refundable.",
    "Applicants must follow all lab rules and use equipment responsibly. User bears all costs for any damage.",
    "Applicants shall duly acknowledge the CoEHT facility in all publications, patents, and reports.",
    "Samples analyzed on first-come, first-served basis. Time required depends on complexity.",
    "Results shared via email. Queries must be raised within 5 days of report generation.",
    "Results are strictly for academic/research purposes and hold no legal validity.",
    "The PI, CoEHT reserves the right to accept or reject any application without assigning reasons."
];
