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
        title: "Mobile App",
        subtitle: "Development",
        description: "Custom mobile solutions built with cutting-edge technologies. We transform complex ideas into intuitive, high-performance applications.",
        image: "/images/hero/zenix_product_showcase_advanced_slate_1771189952426.png",
        location: "iOS & Android Solutions"
    },
    {
        id: 2,
        title: "Cyber Secruity",
        subtitle: "SECURITY",
        description: "Advanced threat protection and infrastructure monitoring. We secure your digital assets with enterprise-grade security protocols.",
        image: "/images/hero/cybersecurity_advanced_premium_slate_1771190420641.png",
        location: "Threat Detection & Defense"
    },
    {
        id: 3,
        title: "Cloud Infrastructure",
        subtitle: "CLOUD",
        description: "Scalable cloud solutions designed for performance and reliability. Build, deploy, and manage applications with enterprise-grade infrastructure.",
        image: "/images/hero/cloud.png",
        location: "AWS, Azure & GCP"
    },
    {
        id: 4,
        title: "AI & Machine Learning",
        subtitle: "ARTIFICIAL INTELLIGENCE",
        description: "Intelligent automation and predictive analytics powered by cutting-edge AI. Transform data into actionable insights.",
        image: "/images/hero/ai.png",
        location: "ML Models & Automation"
    },
    {
        id: 5,
        title: "Web Development",
        subtitle: "WEB",
        description: "Modern, responsive web applications built with the latest frameworks. Fast, secure, and user-friendly digital experiences.",
        image: "/images/hero/web.png",
        location: "React, Next.js & More"
    },
    {
        id: 6,
        title: "DevOps Solutions",
        subtitle: "OPERATIONS",
        description: "Streamline your development pipeline with automated CI/CD workflows. Deploy faster with confidence and reliability.",
        image: "/images/hero/devops.png",
        location: "CI/CD & Automation"
    }
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
            { id: 1, label: "Mobile Development", href: "#mobile" },
            { id: 2, label: "Cyber Security", href: "#security" },
            { id: 3, label: "Cloud Solutions", href: "#cloud" },
            { id: 4, label: "AI Integration", href: "#ai" }
        ]
    },
    {
        id: 2,
        title: "Company",
        links: [
            { id: 1, label: "About Us", href: "#about" },
            { id: 2, label: "Careers", href: "#careers" },
            { id: 3, label: "Blog", href: "#blog" },
            { id: 4, label: "Contact", href: "#contact" }
        ]
    },
    {
        id: 3,
        title: "Resources",
        links: [
            { id: 1, label: "Documentation", href: "#docs" },
            { id: 2, label: "Case Studies", href: "#cases" },
            { id: 3, label: "Support", href: "#support" },
            { id: 4, label: "Community", href: "#community" }
        ]
    },
    {
        id: 4,
        title: "Legal",
        links: [
            { id: 1, label: "Privacy Policy", href: "#privacy" },
            { id: 2, label: "Terms of Service", href: "#terms" },
            { id: 3, label: "Cookie Policy", href: "#cookies" },
            { id: 4, label: "Compliance", href: "#compliance" }
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
    address: "123 Tech Boulevard",
    city: "Dubai",
    state: "Dubai",
    zip: "94102",
    country: "United Arab Emirates",
    email: "dummytest@gmail.com",
    phone: "+971 50 123 4567"
};

export const COMPANY_INFO = {
    name: "TheTechKey",
    logo: "/images/logo.png",
    tagline: "Building Tomorrow's Digital Solutions",
    description: "We are a leading technology company specializing in cutting-edge digital solutions, from mobile applications to enterprise security systems."
};

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
        name: "Sarah Johnson",
        role: "CTO",
        company: "TechVision Inc.",
        image: "/images/testimonials/avatar1.jpg",
        rating: 5,
        testimonial: "Ishraff Tech transformed our mobile app vision into reality. Their expertise in cutting-edge technologies and attention to detail resulted in a product that exceeded our expectations. The team's professionalism and commitment to excellence are unmatched.",
        projectType: "Mobile Development"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CEO",
        company: "SecureNet Solutions",
        image: "/images/testimonials/avatar2.jpg",
        rating: 5,
        testimonial: "Working with Ishraff Tech on our cybersecurity infrastructure was a game-changer. They implemented enterprise-grade security protocols that gave us peace of mind. Their proactive approach to threat detection is exceptional.",
        projectType: "Cyber Security"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "CloudScale Systems",
        image: "/images/testimonials/avatar3.jpg",
        rating: 5,
        testimonial: "The cloud infrastructure solution Ishraff Tech delivered was seamless and scalable. Their team understood our complex requirements and delivered a robust system that handles our growing demands effortlessly.",
        projectType: "Cloud Solutions"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Founder",
        company: "AI Innovations Lab",
        image: "/images/testimonials/avatar4.jpg",
        rating: 5,
        testimonial: "Ishraff Tech's AI integration expertise helped us stay ahead of the competition. They delivered intelligent solutions that transformed our business processes and improved efficiency by 40%. Truly innovative work!",
        projectType: "AI Integration"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "VP of Engineering",
        company: "DataFlow Technologies",
        image: "/images/testimonials/avatar5.jpg",
        rating: 5,
        testimonial: "Outstanding work from start to finish. Ishraff Tech's development team is highly skilled, responsive, and dedicated to delivering quality. They turned our complex requirements into an elegant, user-friendly solution.",
        projectType: "Custom Development"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Director of IT",
        company: "Enterprise Solutions Group",
        image: "/images/testimonials/avatar6.jpg",
        rating: 5,
        testimonial: "Ishraff Tech's comprehensive approach to our digital transformation was impressive. From planning to execution, they demonstrated deep technical knowledge and excellent project management skills.",
        projectType: "Digital Transformation"
    }
];

// Contact Widget Constants
export const CONTACT_WIDGET_TABS = [
    { id: "contact" as const, label: "Quick Contact", icon: "Mail" },
    { id: "callback" as const, label: "Callback", icon: "Phone" }
];

export const CALLBACK_TIME_SLOTS = [
    { value: "", label: "Select a time" },
    { value: "morning", label: "Morning (9 AM - 12 PM)" },
    { value: "afternoon", label: "Afternoon (12 PM - 5 PM)" },
    { value: "evening", label: "Evening (5 PM - 8 PM)" }
];

export const CONTACT_WIDGET_MESSAGES = {
    header: {
        title: "Get in Touch",
        subtitle: "We're here to help you"
    },
    success: {
        contact: "Message sent successfully! We'll get back to you soon.",
        callback: "Callback request received! We'll call you soon."
    },
    placeholders: {
        name: "Your name",
        email: "your@email.com",
        phone: "+1 (555) 000-0000",
        message: "How can we help you?"
    },
    buttons: {
        sendMessage: "Send Message",
        requestCallback: "Request Callback",
        sending: "Sending...",
        submitting: "Submitting..."
    }
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
    { 
        href: "/products", 
        labelKey: "products",
        subLinks: [
            { href: "/products/ishraff", labelKey: "ishraff", icon: "Boxes" }
        ]
    },
    { href: "/services", labelKey: "services" },
    { href: "/about", labelKey: "about" },
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
