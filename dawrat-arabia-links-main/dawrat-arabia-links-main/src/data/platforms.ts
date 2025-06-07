
export interface Platform {
  id: number;
  name: string;
  nameEn: string;
  url: string;
  country: string;
  region: 'عالمية' | 'السعودية' | 'العالم العربي';
  isRegistered: boolean;
  isPaid: boolean;
  sector: 'تقني' | 'مالي' | 'متنوع';
  description: string;
  logo?: string;
  rating?: number;
  coursesCount?: number;
  language: 'عربي' | 'إنجليزي' | 'متعدد اللغات';
}

export const platforms: Platform[] = [
  // منصات عالمية
  {
    id: 1,
    name: "كورسيرا",
    nameEn: "Coursera",
    url: "https://www.coursera.org",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "متنوع",
    description: "منصة تعليمية عالمية تقدم دورات من أفضل الجامعات والشركات",
    rating: 4.5,
    coursesCount: 5000,
    language: "متعدد اللغات"
  },
  {
    id: 2,
    name: "يوديمي",
    nameEn: "Udemy",
    url: "https://www.udemy.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "تقني",
    description: "منصة تعليمية تركز على المهارات التقنية والمهنية",
    rating: 4.3,
    coursesCount: 210000,
    language: "متعدد اللغات"
  },
  {
    id: 3,
    name: "خان أكاديمي",
    nameEn: "Khan Academy",
    url: "https://www.khanacademy.org",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "متنوع",
    description: "منصة تعليمية مجانية تقدم دروس في مختلف المجالات",
    rating: 4.7,
    coursesCount: 3000,
    language: "متعدد اللغات"
  },
  {
    id: 4,
    name: "إدكس",
    nameEn: "edX",
    url: "https://www.edx.org",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "متنوع",
    description: "منصة تعليمية مفتوحة المصدر من جامعتي هارفارد ومعهد ماساتشوستس للتكنولوجيا",
    rating: 4.4,
    coursesCount: 4000,
    language: "متعدد اللغات"
  },
  {
    id: 5,
    name: "لينكد إن لرننج",
    nameEn: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "تقني",
    description: "منصة تعليمية مهنية من لينكد إن تركز على المهارات المهنية",
    rating: 4.2,
    coursesCount: 25000,
    language: "إنجليزي"
  },
  {
    id: 6,
    name: "دوولينجو",
    nameEn: "Duolingo",
    url: "https://www.duolingo.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "متنوع",
    description: "تطبيق تعلم اللغات الأشهر في العالم",
    rating: 4.5,
    coursesCount: 100,
    language: "متعدد اللغات"
  },

  // المنصات التقنية الجديدة
  {
    id: 7,
    name: "أوراكل ليرن",
    nameEn: "Oracle University",
    url: "https://education.oracle.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "تقني",
    description: "منصة أوراكل التعليمية لتعلم قواعد البيانات والحوسبة السحابية",
    rating: 4.3,
    coursesCount: 500,
    language: "إنجليزي"
  },
  {
    id: 8,
    name: "مايكروسوفت ليرن",
    nameEn: "Microsoft Learn",
    url: "https://learn.microsoft.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "منصة مايكروسوفت المجانية لتعلم تقنيات وخدمات مايكروسوفت",
    rating: 4.6,
    coursesCount: 800,
    language: "متعدد اللغات"
  },
  {
    id: 9,
    name: "جوجل للتدريب",
    nameEn: "Google for Education",
    url: "https://skillshop.withgoogle.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "منصة جوجل التعليمية لتعلم أدوات جوجل والتسويق الرقمي",
    rating: 4.4,
    coursesCount: 300,
    language: "متعدد اللغات"
  },
  {
    id: 10,
    name: "سيسكو نت أكاد",
    nameEn: "Cisco Networking Academy",
    url: "https://www.netacad.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "أكاديمية سيسكو لتعلم الشبكات والأمن السيبراني",
    rating: 4.5,
    coursesCount: 200,
    language: "متعدد اللغات"
  },
  {
    id: 11,
    name: "سايبراري",
    nameEn: "Cybrary",
    url: "https://www.cybrary.it",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "منصة مجانية متخصصة في الأمن السيبراني وأمن المعلومات",
    rating: 4.2,
    coursesCount: 400,
    language: "إنجليزي"
  },
  {
    id: 12,
    name: "كود أكاديمي",
    nameEn: "Codecademy",
    url: "https://www.codecademy.com",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "تقني",
    description: "منصة تفاعلية لتعلم البرمجة ولغات البرمجة المختلفة",
    rating: 4.4,
    coursesCount: 300,
    language: "إنجليزي"
  },
  {
    id: 13,
    name: "آي بي إم ليرن",
    nameEn: "IBM Learn",
    url: "https://www.ibm.com/training",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "تقني",
    description: "منصة آي بي إم التعليمية لتعلم الذكاء الاصطناعي والحوسبة السحابية",
    rating: 4.3,
    coursesCount: 600,
    language: "إنجليزي"
  },

  // منصات سعودية
  {
    id: 14,
    name: "رواق",
    nameEn: "Rwaq",
    url: "https://www.rwaq.org",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: false,
    sector: "متنوع",
    description: "منصة تعليمية عربية مجانية تقدم مساقات أكاديمية في مختلف المجالات",
    rating: 4.6,
    coursesCount: 500,
    language: "عربي"
  },
  {
    id: 15,
    name: "تمكين",
    nameEn: "Tamkeen",
    url: "https://tamkeen.edu.sa",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: false,
    sector: "متنوع",
    description: "منصة التدريب الإلكتروني الحكومية السعودية",
    rating: 4.1,
    coursesCount: 1200,
    language: "عربي"
  },
  {
    id: 16,
    name: "طويق",
    nameEn: "Tuwaiq",
    url: "https://tuwaiq.edu.sa",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "أكاديمية طويق للتدريب التقني والمهني",
    rating: 4.3,
    coursesCount: 800,
    language: "عربي"
  },
  {
    id: 17,
    name: "سطر",
    nameEn: "Satr",
    url: "https://satr.codes",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "منصة سعودية مجانية لتعلم البرمجة وعلوم الحاسب باللغة العربية",
    rating: 4.4,
    coursesCount: 150,
    language: "عربي"
  },
  {
    id: 18,
    name: "سايبر هب",
    nameEn: "CyberHub",
    url: "https://cyberhub.sa/",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: false,
    sector: "تقني",
    description: "منصة سعودية متخصصة في الأمن السيبراني والتقنية",
    rating: 4.2,
    coursesCount: 100,
    language: "عربي"
  },
  {
    id: 19,
    name: "حاسوب",
    nameEn: "Hassoub",
    url: "https://academy.hsoub.com/",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: true,
    sector: "تقني",
    description: "منصة عربية متخصصة في التعليم التقني والبرمجة",
    rating: 4.3,
    coursesCount: 300,
    language: "عربي"
  },
  {
    id: 20,
    name: "مهارات",
    nameEn: "Maharah",
    url: "https://maharat.tu.edu.sa/",
    country: "السعودية",
    region: "السعودية",
    isRegistered: true,
    isPaid: true,
    sector: "متنوع",
    description: "منصة سعودية لتطوير المهارات المهنية والشخصية",
    rating: 4.2,
    coursesCount: 250,
    language: "عربي"
  },

  // منصات عربية أخرى
  {
    id: 21,
    name: "إدراك",
    nameEn: "Edraak",
    url: "https://www.edraak.org",
    country: "الأردن",
    region: "العالم العربي",
    isRegistered: true,
    isPaid: false,
    sector: "متنوع",
    description: "منصة تعليمية عربية مجانية من مؤسسة الملكة رانيا",
    rating: 4.4,
    coursesCount: 200,
    language: "عربي"
  },

  // منصات مالية متخصصة
  {
    id: 22,
    name: "CFA Institute",
    nameEn: "CFA Institute",
    url: "https://www.cfainstitute.org",
    country: "الولايات المتحدة",
    region: "عالمية",
    isRegistered: true,
    isPaid: true,
    sector: "مالي",
    description: "معهد المحللين الماليين المعتمدين",
    rating: 4.8,
    coursesCount: 50,
    language: "إنجليزي"
  }
];

export const getFilteredPlatforms = (
  searchTerm: string = '',
  region: string = 'الكل',
  isRegistered: string = 'الكل',
  isPaid: string = 'الكل',
  sector: string = 'الكل'
): Platform[] => {
  return platforms.filter(platform => {
    const matchesSearch = 
      platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      platform.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      platform.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = region === 'الكل' || platform.region === region;
    const matchesRegistered = isRegistered === 'الكل' || 
      (isRegistered === 'مسجلة رسمياً' && platform.isRegistered) ||
      (isRegistered === 'غير مسجلة رسمياً' && !platform.isRegistered);
    const matchesPaid = isPaid === 'الكل' || 
      (isPaid === 'مدفوعة' && platform.isPaid) ||
      (isPaid === 'مجانية' && !platform.isPaid);
    const matchesSector = sector === 'الكل' || platform.sector === sector;

    return matchesSearch && matchesRegion && matchesRegistered && matchesPaid && matchesSector;
  });
};
