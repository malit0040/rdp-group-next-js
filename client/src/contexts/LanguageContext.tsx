import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.news': 'الأخبار',
    'nav.contact': 'اتصل بنا',
    'nav.menu': 'القائمة',
    
    // Hero Section
    'hero.title': 'حيث يتحول المكان إلى تجربة والهوية إلى قصة',
    'hero.subtitle': 'نحن نصنع قصص المدن من خلال استراتيجيات تسويق مبتكرة وتجارب لا تُنسى',
    'hero.cta': 'اكتشف خدماتنا',
    
    // Impact Numbers
    'impact.cities': 'مدن',
    'impact.citiesLabel': 'مدن حققنا لها نجاحات',
    'impact.events': 'فعالية',
    'impact.eventsLabel': 'فعاليات منفذة',
    'impact.visitors': 'مليون زائر',
    'impact.visitorsLabel': 'زوار جذبناهم',
    'impact.satisfaction': 'رضا العملاء',
    'impact.satisfactionLabel': 'معدل رضا العملاء',
    
    // Services
    'services.heading': 'خدماتنا',
    'services.subtitle': 'التميز في كل تجربة نصنعها',
    'services.urban.title': 'الاستشارات الحضرية والابتكار',
    'services.urban.desc': 'تطوير هويات بصرية وسردية تعكس شخصية المدينة وثقافتها',
    'services.promotion.title': 'الترويج الذكي وتجربة الزوار',
    'services.promotion.desc': 'تصميم تجارب تفاعلية تُعرّف الزوار بالمدينة بطريقة مبتكرة',
    'services.investment.title': 'خدمات الاستثمار',
    'services.investment.desc': 'إبراز مقومات المدينة والفرص الاستثمارية لجذب المستثمرين',
    'services.community.title': 'المشاركة المجتمعية',
    'services.community.desc': 'تعزيز انتماء المجتمع المحلي وبناء جسور التعاون الثقافي',
    
    // Services Page
    'servicesPage.title': 'خدماتنا',
    'servicesPage.subtitle': 'حلول شاملة لتسويق المدن والتطوير الحضري',
    'servicesPage.whatWeOffer': 'ما نقدمه:',
    'servicesPage.urban.offering1': 'إعداد خطط استراتيجية طويلة المدى للمدن',
    'servicesPage.urban.offering2': 'تطوير هوية بصرية شاملة للمدينة',
    'servicesPage.urban.offering3': 'الدراسات الحضرية والتخطيط المستقبلي',
    'servicesPage.urban.offering4': 'استراتيجيات العلامة التجارية للمدن',
    'servicesPage.promotion.offering1': 'تصميم رحلات الزوار والمقيمين',
    'servicesPage.promotion.offering2': 'الحملات الترويجية الموسمية',
    'servicesPage.promotion.offering3': 'الفعاليات التفاعلية',
    'servicesPage.promotion.offering4': 'تنظيم الفعاليات والمهرجانات المحلية',
    'servicesPage.investment.offering1': 'تسويق الفرص الاستثمارية',
    'servicesPage.investment.offering2': 'الشراكات الاستراتيجية والتعاون الدولي',
    'servicesPage.investment.offering3': 'تنظيم جولات تعريفية للمستثمرين',
    'servicesPage.investment.offering4': 'الحملات الترويجية المستهدفة',
    'servicesPage.community.offering1': 'تصميم برامج المشاركة المجتمعية',
    'servicesPage.community.offering2': 'تفعيل المجتمعات المحلية والإبداعية',
    'servicesPage.community.offering3': 'تنظيم الفعاليات الثقافية والاجتماعية',
    'servicesPage.community.offering4': 'الفعاليات الدولية والتبادل الثقافي',
    
    // Who We Are
    'whoWeAre.label': 'من نحن',
    'whoWeAre.title': 'من',
    'whoWeAre.titleHighlight': 'نحن',
    'whoWeAre.description': 'سواء كانت لديك رؤى طموحة أو خطط مفصلة، لدينا الخبرة والرؤية الثقافية لدعم كل خطوة. مجموعة RdP هي شريكك الموثوق في إنتاج الفعاليات، تسويق المدن، والمراسم الملكية - مستعدون لإرشادك خلال كل مرحلة من مراحل التخطيط. نعمل بشكل وثيق مع شركائنا كل يوم لضمان سير فعاليتك بسلاسة، بغض النظر عن الحجم. معًا، نحن فريق موحد مصمم على تحويل رؤيتك إلى تجربة لا تُنسى.',
    
    // Journey
    'journey.title': 'رحلتك معنا',
    'journey.step1.title': 'الاستشارة الأولية',
    'journey.step1.desc': 'نبدأ بفهم رؤيتك وأهدافك الفريدة للمدينة',
    'journey.step2.title': 'التخطيط الاستراتيجي',
    'journey.step2.desc': 'نطور استراتيجية شاملة مصممة خصيصًا لاحتياجاتك',
    'journey.step3.title': 'التنفيذ',
    'journey.step3.desc': 'نُحقق الخطة بتميز، مع الانتباه لكل التفاصيل',
    'journey.step4.title': 'التحسين المستمر',
    'journey.step4.desc': 'نقيس النتائج ونحسن للنجاح طويل الأمد',
    'journey.testimonial': 'العمل مع مجموعة RdP كان تجربة تحويلية. احترافيتهم وخبرتهم الثقافية ساعدتنا في تحقيق رؤيتنا للمدينة.',
    'journey.testimonialAuthor': 'المهندس أحمد الراشد',
    'journey.testimonialRole': 'مدير التطوير الحضري',
    
    // CTA Section
    'cta.title': 'جاهز لتحويل مدينتك؟',
    'cta.description': 'دعنا نصنع شيئًا استثنائيًا معًا. تواصل معنا اليوم لبدء رحلتك.',
    'cta.button': 'ابدأ الآن',
    
    // Newsletter
    'newsletter.title': 'ابق على اطلاع',
    'newsletter.description': 'احصل على آخر الأخبار حول تسويق المدن والفعاليات مباشرة في بريدك',
    'newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'newsletter.button': 'اشترك',
    
    // Footer
    'footer.contact': 'التواصل',
    'footer.platforms': 'منصاتنا',
    'footer.about': 'من نحن؟',
    'footer.aboutDesc': 'مجموعة RdP هي مجموعة سعودية متخصصة في تسويق المدن، إنتاج الفعاليات، وتنسيق المراسم الملكية. نقدم التميز في جميع أنحاء المملكة العربية السعودية.',
    'footer.eventsplatform': 'منصة فعاليات RdP',
    'footer.marketingHub': 'مركز التسويق RdP',
    'footer.portfolio': 'معرض الأعمال',
    'footer.copyright': 'جميع الحقوق محفوظة.',
    
    // Contact Page
    'contact.heading': 'معلومات التواصل',
    'contact.description': 'املأ النموذج وسيتواصل معك فريقنا خلال 24 ساعة.',
    'contact.firstName': 'الاسم الأول',
    'contact.lastName': 'اسم العائلة',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.service': 'ما الخدمة التي تهتم بها؟',
    'contact.urbanConsulting': 'الاستشارات الحضرية',
    'contact.smartPromotion': 'الترويج الذكي',
    'contact.investmentServices': 'خدمات الاستثمار',
    'contact.communityEngagement': 'المشاركة المجتمعية',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'اكتب رسالتك...',
    'contact.send': 'إرسال الرسالة',
    
    // Projects Page
    'projects.title': 'مشاريعنا',
    'projects.subtitle': 'استكشف أحدث مشاريعنا وإنجازاتنا في تسويق المدن',
    'projects.year': 'السنة',
    'projects.status': 'الحالة',
    'projects.completed': 'مكتمل',
    'projects.riyadhProjects': 'مشاريع الرياض',
    'projects.riyadhProjectsDesc': 'عداد شامل لجميع المشاريع المكتملة في مدينة الرياض',
    'projects.riyadhColors': 'ألوان الرياض',
    'projects.riyadhColorsDesc': 'مهرجان ثقافي يحتفي بالتنوع والتراث في الرياض',
    
    // News Page
    'news.title': 'آخر الأخبار',
    'news.subtitle': 'ابق على اطلاع بأحدث أخبارنا ورؤانا',
    'news.featured': 'مميز',
    'news.readMore': 'اقرأ المزيد',
    'news.date1': '15 أكتوبر 2024',
    'news.date2': '10 أكتوبر 2024',
    'news.date3': '5 أكتوبر 2024',
    'news.date4': '28 سبتمبر 2024',
    'news.date5': '20 سبتمبر 2024',
    'news.date6': '15 سبتمبر 2024',
    'news.title1': 'RdP Group تطلق منصة تسويق مدن مبتكرة',
    'news.desc1': 'نقدم حلولنا الجديدة التي تدمج التكنولوجيا مع الاستراتيجيات التقليدية لتسويق المدن.',
    'news.title2': 'شراكة جديدة مع وزارة السياحة السعودية',
    'news.desc2': 'نحن فخورون بالإعلان عن شراكتنا الاستراتيجية لتعزيز السياحة في جميع أنحاء المملكة.',
    'news.title3': 'تمديد مشروع عداد الرياض حتى 2025',
    'news.desc3': 'بناءً على النجاح الباهر، تم تمديد مشروعنا الرائد لعام آخر.',
    'news.title4': 'رؤى: مستقبل تسويق المدن',
    'news.desc4': 'يشارك خبراؤنا رؤاهم حول الاتجاهات الناشئة في تسويق المدن والتطوير الحضري.',
    'news.title5': 'حفل جوائز ألوان الرياض: نجاح باهر',
    'news.desc5': 'جذب مهرجاننا الثقافي السنوي أكثر من 50,000 زائر احتفلوا بتراث الرياض.',
    'news.title6': 'التوسع الدولي: RdP تصل دبي',
    'news.desc6': 'نوسع عملياتنا للإمارات العربية المتحدة، جالبين خبرتنا إلى أسواق جديدة.',
    'news.category.announcement': 'إعلان',
    'news.category.partnership': 'شراكة',
    'news.category.project': 'مشروع',
    'news.category.insights': 'رؤى',
    'news.category.event': 'فعالية',
    'news.category.expansion': 'توسع',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    
    // Hero Section
    'hero.title': 'Where Place Transforms into Experience and Identity into Story',
    'hero.subtitle': 'We craft city narratives through innovative marketing strategies and unforgettable experiences',
    'hero.cta': 'Discover Our Services',
    
    // Impact Numbers
    'impact.cities': 'Cities',
    'impact.citiesLabel': 'Cities Successfully Served',
    'impact.events': 'Events',
    'impact.eventsLabel': 'Events Executed',
    'impact.visitors': 'M Visitors',
    'impact.visitorsLabel': 'Visitors Attracted',
    'impact.satisfaction': 'Satisfaction',
    'impact.satisfactionLabel': 'Client Satisfaction Rate',
    
    // Services
    'services.heading': 'Our Services',
    'services.subtitle': 'Excellence in every experience we create',
    'services.urban.title': 'Urban Consulting and Innovation',
    'services.urban.desc': 'Developing visual and narrative identities that reflect the city\'s personality and culture',
    'services.promotion.title': 'Smart Promotion and Visitor Experience',
    'services.promotion.desc': 'Designing interactive experiences that introduce visitors to the city in an innovative way',
    'services.investment.title': 'Investment Services',
    'services.investment.desc': 'Highlighting the city\'s strengths and investment opportunities to attract investors',
    'services.community.title': 'Community Engagement',
    'services.community.desc': 'Enhancing local community belonging and building bridges of cultural cooperation',
    
    // Services Page
    'servicesPage.title': 'Our Services',
    'servicesPage.subtitle': 'Comprehensive solutions for city marketing and urban development',
    'servicesPage.whatWeOffer': 'What We Offer:',
    'servicesPage.urban.offering1': 'Preparing long-term strategic plans for cities',
    'servicesPage.urban.offering2': 'Developing comprehensive visual identity for the city',
    'servicesPage.urban.offering3': 'Urban studies and future planning',
    'servicesPage.urban.offering4': 'City branding strategies',
    'servicesPage.promotion.offering1': 'Designing visitor and resident journeys',
    'servicesPage.promotion.offering2': 'Seasonal promotional campaigns',
    'servicesPage.promotion.offering3': 'Interactive events',
    'servicesPage.promotion.offering4': 'Organizing local events and festivals',
    'servicesPage.investment.offering1': 'Marketing investment opportunities',
    'servicesPage.investment.offering2': 'Strategic partnerships and international cooperation',
    'servicesPage.investment.offering3': 'Organizing introductory tours for investors',
    'servicesPage.investment.offering4': 'Targeted promotional campaigns',
    'servicesPage.community.offering1': 'Designing community engagement programs',
    'servicesPage.community.offering2': 'Activating local and creative communities',
    'servicesPage.community.offering3': 'Organizing cultural and social events',
    'servicesPage.community.offering4': 'International events and cultural exchange',
    
    // Who We Are
    'whoWeAre.label': 'About Us',
    'whoWeAre.title': 'Who',
    'whoWeAre.titleHighlight': 'we are',
    'whoWeAre.description': 'Whether you have ambitious visions or detailed plans, we have the expertise and cultural insight to support every step. RdP Group is your trusted partner in event production, city marketing, and royal ceremonies—ready to guide you through every phase of planning. We work closely with our partners every day to ensure your event runs like a well-oiled machine, no matter the scale. Together, we\'re a unified team set on making your vision an unforgettable experience.',
    
    // Journey
    'journey.title': 'Your Journey With Us',
    'journey.step1.title': 'Initial Consultation',
    'journey.step1.desc': 'We start by understanding your unique vision and goals for the city',
    'journey.step2.title': 'Strategic Planning',
    'journey.step2.desc': 'We develop a comprehensive strategy tailored to your needs',
    'journey.step3.title': 'Implementation',
    'journey.step3.desc': 'We execute the plan with excellence, attention to every detail',
    'journey.step4.title': 'Continuous Improvement',
    'journey.step4.desc': 'We measure results and refine for long-term success',
    'journey.testimonial': 'Working with RdP Group has been a transformative experience. Their professionalism and cultural expertise helped us achieve our city\'s vision.',
    'journey.testimonialAuthor': 'Eng. Ahmed Al-Rashid',
    'journey.testimonialRole': 'Director of Urban Development',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your City?',
    'cta.description': 'Let\'s create something extraordinary together. Contact us today to begin your journey.',
    'cta.button': 'Get Started',
    
    // Newsletter
    'newsletter.title': 'Stay Updated',
    'newsletter.description': 'Get the latest news about city marketing and events directly in your inbox',
    'newsletter.placeholder': 'Enter your email',
    'newsletter.button': 'Subscribe',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.platforms': 'Our platforms',
    'footer.about': 'Who are we?',
    'footer.aboutDesc': 'RdP Group is a Saudi conglomerate specializing in city marketing, event production, and royal ceremony coordination. We deliver excellence across the Kingdom of Saudi Arabia.',
    'footer.eventsplatform': 'RdP Events Platform',
    'footer.marketingHub': 'RdP Marketing Hub',
    'footer.portfolio': 'Portfolio Showcase',
    'footer.copyright': 'All rights reserved.',
    
    // Contact Page
    'contact.heading': 'Contact Information',
    'contact.description': 'Fill up the form and our Team will get back to you within 24 hours.',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.service': 'What service are you interested in?',
    'contact.urbanConsulting': 'Urban Consulting',
    'contact.smartPromotion': 'Smart Promotion',
    'contact.investmentServices': 'Investment Services',
    'contact.communityEngagement': 'Community Engagement',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Write your message...',
    'contact.send': 'Send Message',
    
    // Projects Page
    'projects.title': 'Our Projects',
    'projects.subtitle': 'Explore our latest projects and achievements in city marketing',
    'projects.year': 'Year',
    'projects.status': 'Status',
    'projects.completed': 'Completed',
    'projects.riyadhProjects': 'Riyadh Projects Counter',
    'projects.riyadhProjectsDesc': 'Comprehensive counter for all completed projects in Riyadh city',
    'projects.riyadhColors': 'Riyadh Colors',
    'projects.riyadhColorsDesc': 'Cultural festival celebrating diversity and heritage in Riyadh',
    
    // News Page
    'news.title': 'Latest News',
    'news.subtitle': 'Stay informed with our latest news and insights',
    'news.featured': 'Featured',
    'news.readMore': 'Read More',
    'news.date1': 'October 15, 2024',
    'news.date2': 'October 10, 2024',
    'news.date3': 'October 5, 2024',
    'news.date4': 'September 28, 2024',
    'news.date5': 'September 20, 2024',
    'news.date6': 'September 15, 2024',
    'news.title1': 'RdP Group Launches Innovative City Marketing Platform',
    'news.desc1': 'Introducing our new solution that combines technology with traditional city marketing strategies.',
    'news.title2': 'New Partnership with Saudi Tourism Ministry',
    'news.desc2': 'We\'re proud to announce our strategic partnership to enhance tourism across the Kingdom.',
    'news.title3': 'Riyadh Counter Project Extended to 2025',
    'news.desc3': 'Based on overwhelming success, our flagship project has been extended for another year.',
    'news.title4': 'Insights: The Future of City Marketing',
    'news.desc4': 'Our experts share insights on emerging trends in city marketing and urban development.',
    'news.title5': 'Riyadh Colors Awards Ceremony: A Grand Success',
    'news.desc5': 'Our annual cultural festival attracted over 50,000 visitors celebrating Riyadh\'s heritage.',
    'news.title6': 'International Expansion: RdP Reaches Dubai',
    'news.desc6': 'Expanding our operations to the UAE, bringing our expertise to new markets.',
    'news.category.announcement': 'Announcement',
    'news.category.partnership': 'Partnership',
    'news.category.project': 'Project',
    'news.category.insights': 'Insights',
    'news.category.event': 'Event',
    'news.category.expansion': 'Expansion',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar'); // Default to Arabic

  useEffect(() => {
    // Apply RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
