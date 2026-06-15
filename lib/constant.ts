export const CV_DATA = {
  name: "Imam Bari Setiawan",
  firstName: "Imam",
  lastName: "Bari Setiawan",
  title: "Data Scientist & Full-Stack Developer",
  summary:
    "Data Scientist & Front-end Developer focused on developing adaptive end-to-end digital solutions. Proficient in extracting strategic business insights through Python and Excel, and able to quickly transform them into data applications using Streamlit. Expertise in building modern, scalable web applications using Next.js and Tailwind CSS, with efficient REST API integration.",
  contact: {
    email: "barisetiawan51@gmail.com",
    phone: "+6283108175245",
    location: "Purbalingga, Jawa Tengah",
    linkedin: "https://linkedin.com/in/barisetiawan51",
    github: "https://github.com/barisetiawan51-code",
    cvUrl:
      "https://drive.google.com/file/d/11MQ0lotQEBeGSwDGEmfdmfdzvp-TBsn2/view?usp=sharing",
  },
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "Portofolio", href: "#projects", icon: "Briefcase" },
    { name: "Skills", href: "#skills", icon: "Cpu" },
    {
      name: "Education & Certifications",
      href: "#education",
      icon: "GraduationCap",
    },
  ],
  hero: {
    badge: "Available for Opportunities",
    title: "Data Scientist & \n Full-Stack Developer",
    subtitle:
      "Data Scientist & Front-end Developer focused on developing adaptive end-to-end digital solutions. Proficient in extracting strategic business insights through Python and building scalable web applications using Next.js.",
  },
  projects: [
    {
      id: 1,
      title: "Insight Cerdas Dunia Kerja",
      focus: "LLM IBM Granite",
      institution: "Hacktiv8",
      highlights: [
        "Built an LLM with Replicate IBM Granite to classify job openings and summarize descriptions.",
        "Transformed unstructured job opening data into automated insights with 90% accuracy.",
        "Optimized accuracy using Cosine Similarity and Semantic Embedding metrics.",
      ],
      tech: ["Python", "IBM Granite", "Replicate", "RAG"],
      icon: "Database",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/LLM_IBM_GRANITE_MODEL",
    },
    {
      id: 2,
      title: "Fraud Detection System",
      focus: "Debit Card Fraud Detection",
      institution: "Bank Jago",
      highlights: [
        "Built a classification model using XGBoost with 99.96% accuracy and 94.9% precision.",
        "Analyzed customer patterns through data visualization to detect fraudulent transactions.",
        "Balanced precision and recall (F1-Score 85.7%) to minimize losses without disrupting users.",
      ],
      tech: ["Python", "XGBoost", "Data Visualization", "Machine Learning"],
      icon: "ShieldAlert",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/FraudDetection-BankJago",
    },
    {
      id: 3,
      title: "Fuzzy Matching Regional Data",
      focus: "Automated Data Integration",
      institution: "Mini Project SEAL Batch 2",
      highlights: [
        "Addressed inconsistencies in spelling across datasets using cleansing techniques.",
        "Applied fuzzy matching algorithm to automatically merge data with variations.",
        "Achieved 99.86% data join success rate across 11,567 rows.",
      ],
      tech: ["Python", "Fuzzy Matching", "Data Cleansing"],
      icon: "Link",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/FuzzyMatching-JoinDataset",
    },
    {
      id: 4,
      title: "SportOn E-Commerce",
      focus: "Full-stack Platform",
      institution: "KitaKerja.ID",
      highlights: [
        "Developed 100% accurate interface for 'SportOn' e-commerce website designed in Figma.",
        "Integrated MongoDB for real-time data updates and faster information access.",
        "Implemented admin authentication system for secure access and content management.",
      ],
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Figma"],
      icon: "Terminal",
      accent: "bg-amethyst/5",
      link: "https://github.com/barisetiawan51-code/KitaKerja-WebProgramming",
    },
  ],
  skills: [
    {
      category: "Languages",
      icon: "Binary",
      items: ["Python", "TypeScript", "SQL", "NoSQL"],
      color: "sapphire",
    },
    {
      category: "Frontend Development",
      icon: "Code2",
      items: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Streamlit",
        "Responsive Web Design",
      ],
      color: "amethyst",
    },
    {
      category: "Backend & Database",
      icon: "Database",
      items: ["Express.js", "Node.js", "RESTful API", "MongoDB"],
      color: "jade",
    },
    {
      category: "AI & Data Science",
      icon: "Bot",
      items: [
        "Generative AI (LLM)",
        "IBM Granite",
        "Gemini API",
        "Prompt Engineering",
        "RAG",
        "Machine Learning",
      ],
      color: "sapphire",
    },
    {
      category: "Tools & DevOps",
      icon: "Cpu",
      items: ["Git/GitHub", "Figma", "Postman", "VS Code", "Vercel", "BRD"],
      color: "amethyst",
    },
    {
      category: "Cybersecurity",
      icon: "ShieldAlert",
      items: [
        "Vulnerability Analysis",
        "Threat Mitigation",
        "Data Integrity Assurance",
      ],
      color: "jade",
    },
  ],
  education: [
    {
      institution: "Universitas Muhammadiyah Purwokerto",
      degree: "Bachelor of Science, Informatics Engineering",
      period: "Aug 2021 – Jan 2026",
      gpa: "3.77 / 4.00",
      honors: "Cumlaude",
      details: "Focus on Data Science and Web Architecture.",
    },
  ],
  certifications: [
    {
      title: "IBM Skillbuild for AI & Cybersecurity",
      issuer: "MSIB Skilvul Kampus Merdeka",
      year: "2024",
      link: "https://drive.google.com/file/d/1zJEmVruV7aYdvt8ZXDj7C9n_JTBZ9iMg/view?usp=drive_link",
    },
    {
      title: "Web Programming",
      issuer: "KitaKerja.ID",
      year: "2026",
      link: "https://drive.google.com/file/d/10kHV0yoaxAW4uhQIeInrv1ghz5qzCORE/view?usp=drive_link",
    },
    {
      title: "LLM-Based Tools & Gemini API Integration",
      issuer: "Hacktiv8",
      year: "2025",
      link: "https://drive.google.com/file/d/1BdYBX8mQwRLZkaN2M_K5mMiKn2D1h7Pq/view?usp=drive_link",
    },
  ],
  awards: [
    {
      title: "Top 10 and Top 1 Demo Day IBM Skillsbuild for AI & Cybersecurity",
      issuer: "MSIB Skilvul Kampus Merdeka",
      year: "2026",
      link: "https://drive.google.com/file/d/1_cujSBv2NqEgoUpe_IEaMsOzBjnSI0Bu/view?usp=sharing",
    },
    {
      title:
        "Third Best Graduate of the Faculty of Engineering and Science Graduation",
      issuer: "Universitas Muhammadiyah Purwokerto",
      year: "2026",
      link: "https://drive.google.com/file/d/12JmEBOB8IarUSHp1EPiL_KAM7vSumasD/view?usp=sharing",
    },
  ],

  continuingEducation: [
    {
      title: "MSIB Kampus Merdeka - IBM Skillbuild",
      provider: "Skilvul",
      period: "Feb 2024 – Jun 2024",
      details:
        "Specialization in AI & Cybersecurity. Included training in Data Integration, UI/UX Design, and Agile methodologies.",
    },
    {
      title: "Full-Stack Web Programming",
      provider: "KitaKerja.ID",
      period: "Nov 2025 – Feb 2026",
      details:
        "Intensive training in Next.js, Tailwind CSS, and full-stack integration with Express and MongoDB.",
    },
    {
      title: "LLM-Based Tools & Gemini API",
      provider: "Hacktiv8",
      period: "Oct 2025",
      details:
        "Advanced course on Generative AI, RAG pipelines, and scalable AI integration.",
    },
  ],
  footer: {
    location: "Purbalingga, Jawa Tengah, Indonesia",
    languages: "Bahasa (Fluent) • English (Elementary)",
  },
};
