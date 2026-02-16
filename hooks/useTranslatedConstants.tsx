"use client";

import { useLocale } from 'next-intl';
import { createContext, useContext, ReactNode } from 'react';
import * as originalConstants from '@/constants';

// Comprehensive translation mappings
const TRANSLATIONS: Record<string, Record<string, string>> = {
  ar: {
    // Services
    "Mobile App": "تطبيق الجوال",
    "Development": "التطوير",
    "Custom mobile solutions built with cutting-edge technologies. We transform complex ideas into intuitive, high-performance applications.": "حلول جوال مخصصة مبنية بتقنيات متطورة. نحول الأفكار المعقدة إلى تطبيقات بديهية عالية الأداء.",
    "iOS & Android Solutions": "حلول iOS و Android",

    "Cyber Secruity": "الأمن السيبراني",
    "SECURITY": "الأمان",
    "Advanced threat protection and infrastructure monitoring. We secure your digital assets with enterprise-grade security protocols.": "حماية متقدمة من التهديدات ومراقبة البنية التحتية. نؤمن أصولك الرقمية ببروتوكولات أمنية على مستوى المؤسسات.",
    "Threat Detection & Defense": "كشف التهديدات والدفاع",

    "Cloud Infrastructure": "البنية التحتية السحابية",
    "CLOUD": "السحابة",
    "Scalable cloud solutions designed for performance and reliability. Build, deploy, and manage applications with enterprise-grade infrastructure.": "حلول سحابية قابلة للتوسع مصممة للأداء والموثوقية. قم ببناء ونشر وإدارة التطبيقات ببنية تحتية على مستوى المؤسسات.",
    "AWS, Azure & GCP": "AWS و Azure و GCP",

    "AI & Machine Learning": "الذكاء الاصطناعي والتعلم الآلي",
    "ARTIFICIAL INTELLIGENCE": "الذكاء الاصطناعي",
    "Intelligent automation and predictive analytics powered by cutting-edge AI. Transform data into actionable insights.": "أتمتة ذكية وتحليلات تنبؤية مدعومة بالذكاء الاصطناعي المتطور. حول البيانات إلى رؤى قابلة للتنفيذ.",
    "ML Models & Automation": "نماذج التعلم الآلي والأتمتة",

    "Web Development": "تطوير الويب",
    "WEB": "الويب",
    "Modern, responsive web applications built with the latest frameworks. Fast, secure, and user-friendly digital experiences.": "تطبيقات ويب حديثة ومتجاوبة مبنية بأحدث الأطر. تجارب رقمية سريعة وآمنة وسهلة الاستخدام.",
    "React, Next.js & More": "React و Next.js والمزيد",

    "DevOps Solutions": "حلول DevOps",
    "OPERATIONS": "العمليات",
    "Streamline your development pipeline with automated CI/CD workflows. Deploy faster with confidence and reliability.": "قم بتبسيط خط تطوير البرمجيات باستخدام سير عمل CI/CD الآلي. انشر بشكل أسرع بثقة وموثوقية.",
    "CI/CD & Automation": "CI/CD والأتمتة",

    // Footer
    "Services": "الخدمات",
    "Mobile Development": "تطوير الجوال",
    "Cyber Security": "الأمن السيبراني",
    "Cloud Solutions": "حلول السحابة",
    "AI Integration": "تكامل الذكاء الاصطناعي",
    "Company": "الشركة",
    "About Us": "من نحن",
    "Careers": "الوظائف",
    "Contact": "اتصل بنا",
    "Team": "الفريق",
    "Support": "الدعم",
    "Help Center": "مركز المساعدة",
    "Documentation": "التوثيق",
    "FAQ": "الأسئلة الشائعة",
    "Contact Us": "اتصل بنا",
    "Legal": "القانونية",
    "Privacy Policy": "سياسة الخصوصية",
    "Terms of Service": "شروط الخدمة",
    "Cookie Policy": "سياسة ملفات تعريف الارتباط",
    "Compliance": "الامتثال",
    "Your trusted partner for innovative IT solutions": "شريكك الموثوق لحلول تقنية مبتكرة",
    "We deliver innovative technology solutions that drive growth, enhance efficiency, and secure your digital future.": "نقدم حلول تقنية مبتكرة تدفع النمو، وتعزز الكفاءة، وتؤمن مستقبلك الرقمي.",
    "Address": "العنوان",
    "Email": "البريد الإلكتروني",
    "Phone": "الهاتف",
    "All rights reserved": "جميع الحقوق محفوظة",

    // CTA Section
    "A Better Way to Build Digital Solutions": "طريقة أفضل لبناء الحلول الرقمية",
    "Turn your ideas into a real website quickly. Select from thousands of free and premium website templates and customize them as you like.": "حول أفكارك إلى موقع ويب حقيقي بسرعة. اختر من بين آلاف القوالب المجانية والمميزة وخصصها كما تريد.",
    "Get Started": "ابدأ الآن",
    "Get Premium": "احصل على النسخة المميزة",

    // Services Section
    "Our Services": "خدماتنا",
    "What We Offer": "ما نقدمه",
    "Comprehensive technology solutions tailored to your business needs": "حلول تقنية شاملة مصممة خصيصاً لاحتياجات عملك",
    "View All Services": "عرض جميع الخدمات",

    // Testimonials Section
    "Testimonials": "آراء العملاء",
    "What Our Clients Say": "ماذا يقول عملاؤنا",
    "Don't just take our word for it. Here's what our clients have to say about working with us.": "لا تأخذ كلامنا فقط. إليك ما يقوله عملاؤنا عن العمل معنا.",
    "Happy Clients": "عملاء سعداء",
    "Projects Completed": "مشاريع مكتملة",
    "Success Rate": "معدل النجاح",
    "Years Experience": "سنوات الخبرة",

    // Hero Section
    "Explore": "استكشف",
  }
};

// Deep translation function
function translateObject(obj: any, locale: string): any {
  if (typeof obj === 'string') {
    return TRANSLATIONS[locale]?.[obj] || obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => translateObject(item, locale));
  }

  if (obj && typeof obj === 'object') {
    const translated: any = {};
    for (const key in obj) {
      translated[key] = translateObject(obj[key], locale);
    }
    return translated;
  }

  return obj;
}

// Context for translated constants
const TranslatedConstantsContext = createContext<typeof originalConstants>(originalConstants);

export function TranslatedConstantsProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();

  // Automatically translate all constants based on locale
  const translatedConstants = (locale === 'ar'
    ? translateObject(originalConstants, locale)
    : originalConstants) as typeof originalConstants;

  return (
    <TranslatedConstantsContext.Provider value={translatedConstants}>
      {children}
    </TranslatedConstantsContext.Provider>
  );
}

export function useTranslatedConstants() {
  return useContext(TranslatedConstantsContext);
}
