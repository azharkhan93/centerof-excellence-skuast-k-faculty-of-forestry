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
    city: "San Francisco",
    state: "CA",
    zip: "94102",
    country: "United States",
    email: "contact@foxico.com",
    phone: "+1 (555) 123-4567"
};

export const COMPANY_INFO = {
    name: "Foxico",
    tagline: "Building Tomorrow's Digital Solutions",
    description: "We are a leading technology company specializing in cutting-edge digital solutions, from mobile applications to enterprise security systems."
};

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
        testimonial: "Foxico transformed our mobile app vision into reality. Their expertise in cutting-edge technologies and attention to detail resulted in a product that exceeded our expectations. The team's professionalism and commitment to excellence are unmatched.",
        projectType: "Mobile Development"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CEO",
        company: "SecureNet Solutions",
        image: "/images/testimonials/avatar2.jpg",
        rating: 5,
        testimonial: "Working with Foxico on our cybersecurity infrastructure was a game-changer. They implemented enterprise-grade security protocols that gave us peace of mind. Their proactive approach to threat detection is exceptional.",
        projectType: "Cyber Security"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Product Manager",
        company: "CloudScale Systems",
        image: "/images/testimonials/avatar3.jpg",
        rating: 5,
        testimonial: "The cloud infrastructure solution Foxico delivered was seamless and scalable. Their team understood our complex requirements and delivered a robust system that handles our growing demands effortlessly.",
        projectType: "Cloud Solutions"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Founder",
        company: "AI Innovations Lab",
        image: "/images/testimonials/avatar4.jpg",
        rating: 5,
        testimonial: "Foxico's AI integration expertise helped us stay ahead of the competition. They delivered intelligent solutions that transformed our business processes and improved efficiency by 40%. Truly innovative work!",
        projectType: "AI Integration"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        role: "VP of Engineering",
        company: "DataFlow Technologies",
        image: "/images/testimonials/avatar5.jpg",
        rating: 5,
        testimonial: "Outstanding work from start to finish. Foxico's development team is highly skilled, responsive, and dedicated to delivering quality. They turned our complex requirements into an elegant, user-friendly solution.",
        projectType: "Custom Development"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Director of IT",
        company: "Enterprise Solutions Group",
        image: "/images/testimonials/avatar6.jpg",
        rating: 5,
        testimonial: "Foxico's comprehensive approach to our digital transformation was impressive. From planning to execution, they demonstrated deep technical knowledge and excellent project management skills.",
        projectType: "Digital Transformation"
    }
];
