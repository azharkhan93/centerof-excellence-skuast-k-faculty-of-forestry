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
    { id: 1, name: "GitHub", href: "https://github.com", icon: "github" },
    { id: 2, name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { id: 3, name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { id: 4, name: "Facebook", href: "https://facebook.com", icon: "facebook" }
];

export const CONTACT_INFO: ContactInfo = {
    address: "Knowledge Oasis Muscat, KOM / Al Seeb / Muscat Governorate, Head Quarters P.O.Box : 34",
    // city: "Al Seeb",
    // state: "Muscat Governorate",
    // zip: "P.O. Box 34",
    // country: "Sultanate of Oman",
    email: "support@ishraff.com​",
    phone: "+968 99449403",
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

export const OBJECTIVES_DATA = [
    {
        id: 1,
        title: "Sustainable Production",
        description: "To identify elite germplasm of MAPs for sustainable production and efficient commercialization.",
        iconName: "Sprout"
    },
    {
        id: 2,
        title: "Industrial Applications",
        description: "To explore species for Active Principal Ingredients (APIs) and formulations for different industrial applications.",
        iconName: "FlaskConical"
    },
    {
        id: 3,
        title: "Knowledge Sharing",
        description: "To foster knowledge-sharing among communities, industries and researchers to drive herbal innovations.",
        iconName: "Users"
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
    { href: "/book-test", labelKey: "bookTest" },
    { href: "/contact", labelKey: "contact" }
];


// About Page Constants
export const ABOUT_MISSION = {
    id: "mission",
    image: "/images/about/mission.jpg"
};

export const CORE_VALUES = [
    { id: 1, icon: "Lightbulb", key: "innovation" },
    { id: 2, icon: "Shield", key: "quality" },
    { id: 3, icon: "Users", key: "collaboration" },
    { id: 4, icon: "Trophy", key: "excellence" }
];

export const COMPANY_JOURNEY = [
    { id: 1, year: "2018", key: "foundation" },
    { id: 2, year: "2020", key: "growth" },
    { id: 3, year: "2022", key: "innovation_hub" },
    { id: 4, year: "2024", key: "global_reach" }
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
