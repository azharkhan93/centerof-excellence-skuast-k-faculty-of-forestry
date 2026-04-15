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
    description: "The Centre of Excellence on Herbal Technology at SKUAST-Kashmir is dedicated to advancing the science and technology of herbal products and forestry research."
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
        id: "lcmsmsq3",
        title: "LC-MS/MS Q3",
        description: "Triple Quadrupole Liquid Chromatography Mass Spectrometer for high-sensitivity quantitation.",
        image: "/images/facilities/lcmsmsq3.png",
        icon: "Microscope"
    },
    {
        id: "lcmsms",
        title: "LC-MS/MS",
        description: "Advanced tandem mass spectrometry for comprehensive metabolic profiling.",
        image: "/images/facilities/lcmsms.png",
        icon: "Zap"
    },
    {
        id: "chromatography",
        title: "Pure Chromatography",
        description: "High-performance liquid chromatography for automated principal ingredient isolation.",
        image: "/images/facilities/chromatography.png",
        icon: "Waves"
    },
    {
        id: "extraction",
        title: "Extraction Unit",
        description: "Specialized pilot-scale unit for medicinal plant active ingredient extraction.",
        image: "/images/facilities/extraction.png",
        icon: "FlaskConical"
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
    // {
    //     href: "/products",
    //     labelKey: "products",
    //     subLinks: [
    //         { href: "/products/ishraff", labelKey: "ishraff", icon: "Boxes" }
    //     ]
    // },
    // { href: "/services", labelKey: "services" },
    { href: "/about", labelKey: "about" },
    { href: "/team", labelKey: "team" },
    { href: "/gallery", labelKey: "gallery" },
    { href: "/book-test", labelKey: "bookTest" },
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
        title: "Services",
        subtitle: "The Technology Key (TTK)",
        description: "At The Technology Key (TTK), we specialize in delivering tailored technology services designed to meet the unique needs of your business. Our services are crafted to empower your organization and unlock its full potential. Explore our services and discover how we can help transform your business."
    },
    services: [
        {
            id: "ui-ux",
            title: "UI & UX Design",
            description: "The Technology Key provides UI (User Interface) and UX (User Experience) design services, helping businesses create visually appealing, user-friendly, and intuitive applications, websites, and digital products. The company provides a range of services, from user research and wireframing to prototyping, usability testing, and interaction design.",
            image: "/images/hero/web.png"
        },
        {
            id: "app-dev",
            title: "Application Development",
            description: "One of main service that The Technology Key provide it is application development services, covering everything from mobile apps to custom web applications and enterprise software solutions. The company provides end-to-end services, including planning, design, development, testing, and ongoing support.",
            image: "/images/hero/zenix_product_showcase_advanced_slate_1771189952426.png"
        },
        {
            id: "tech-support",
            title: "Technical Support",
            description: "To help businesses and individuals troubleshoot and resolve various technical issues The Technology Key offer a range of support options, including help desk services, remote assistance, IT consulting, and managed services",
            image: "/images/hero/devops.png"
        },
        {
            id: "cyber-security",
            title: "Cyber Security",
            description: "We are very proud that our products designed to prioritize security, particularly when dealing with sensitive data such as financial information, personal details, or communication by using encryption, multi-factor authentication (MFA), and other security measures to protect our valuable clients from cyber threats.",
            image: "/images/hero/cybersecurity_advanced_premium_slate_1771190420641.png"
        }
    ],
    whatYouGet: {
        title: "What You Get",
        subtitle: "At The technology key (TTK), we believe that our success is what makes us successful. For this reason, we give important to",
        values: [
            {
                id: "commitment",
                title: "Commitment",
                description: "We prioritize dedication and reliability, ensuring that promises are met with unwavering focus and consistency.",
                icon: "Handshake"
            },
            {
                id: "quality",
                title: "Quality",
                description: "We are committed to delivering top-tier technology solutions tailored to your needs.",
                icon: "Award"
            },
            {
                id: "innovation",
                title: "Innovation",
                description: "We embrace creativity and forward-thinking, consistently developing new ideas and solutions to meet evolving needs.",
                icon: "Lightbulb"
            },
            {
                id: "support",
                title: "Support",
                description: "Your journey doesn’t end at implementation. We’re here to guide and support you every step of the way.",
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
