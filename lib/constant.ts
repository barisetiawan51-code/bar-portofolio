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
      institution: "HACKTIV8",
      highlights: [
        "Built an LLM with Replicate IBM Granite to classify job openings and summarize descriptions.",
        "Transformed unstructured job opening data into automated insights with 90% accuracy.",
        "Optimized accuracy using Cosine Similarity and Semantic Embedding metrics.",
      ],
      tech: ["Python", "IBM Granite", "Replicate", "RAG"],
      icon: "Database",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/LLM_IBM_GRANITE_MODEL",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      category: "AI",
      stats: [
        { label: "Accuracy", value: "90%" },
        { label: "Engine", value: "IBM Granite" }
      ],
      github: "https://github.com/barisetiawan51-code/LLM_IBM_GRANITE_MODEL",
      demo: ""
    },
    {
      id: 2,
      title: "Fraud Detection System",
      focus: "Debit Card Fraud Detection",
      institution: "BANK JAGO",
      highlights: [
        "Built a classification model using XGBoost with 99.96% accuracy and 94.9% precision.",
        "Analyzed customer patterns through data visualization to detect fraudulent transactions.",
        "Balanced precision and recall (F1-Score 85.7%) to minimize losses without disrupting users.",
      ],
      tech: ["Python", "XGBoost", "Data Visualization", "Machine Learning"],
      icon: "ShieldAlert",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/FraudDetection-BankJago",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      category: "DATA SCIENCE",
      stats: [
        { label: "Accuracy", value: "99.96%" },
        { label: "Precision", value: "94.9%" }
      ],
      github: "https://github.com/barisetiawan51-code/FraudDetection-BankJago",
      demo: ""
    },
    {
      id: 3,
      title: "Fuzzy Matching Regional Data",
      focus: "Automated Data Integration",
      institution: "SEAL",
      highlights: [
        "Addressed inconsistencies in spelling across datasets using cleansing techniques.",
        "Applied fuzzy matching algorithm to automatically merge data with variations.",
        "Achieved 99.86% data join success rate across 11,567 rows.",
      ],
      tech: ["Python", "Fuzzy Matching", "Data Cleansing"],
      icon: "Link",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/FuzzyMatching-JoinDataset",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
      category: "DATA ENGINEERING",
      stats: [
        { label: "Match Rate", value: "99.86%" },
        { label: "Records", value: "11.5K+" }
      ],
      github: "https://github.com/barisetiawan51-code/FuzzyMatching-JoinDataset",
      demo: ""
    },
    {
      id: 4,
      title: "SportOn E-Commerce",
      focus: "Full-stack Platform",
      institution: "KITAKERJA",
      highlights: [
        "Developed 100% accurate interface for 'SportOn' e-commerce website designed in Figma.",
        "Integrated MongoDB for real-time data updates and faster information access.",
        "Implemented admin authentication system for secure access and content management.",
      ],
      tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB"],
      icon: "Terminal",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/KitaKerja-WebProgramming",
      image: "https://images.unsplash.com/photo-1636044035519-1775a11c984e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "WEB DEVELOPMENT",
      stats: [
<<<<<<< HEAD
        { label: "Fidelity", value: "100%" },
        { label: "Database", value: "NoSQL" }
=======
        { label: "Frontend", value: "Next.js" },
        { label: "Backend", value: "Express.js" }
>>>>>>> 404ba89c076225b22f049f89cb9828c878238e71
      ],
      githubFrontend: "https://github.com/barisetiawan51-code/KitaKerja-WebProgramming",
      githubBackend: "https://github.com/barisetiawan51-code/KitaKerja-WebProgramming-BE",
      github: "",
      demo: "https://kita-kerja-web-programming.vercel.app/"
    },
    {
      id: 5,
      title: "Cardiovascular Risk Detection",
      focus: "Machine Learning and Chatbots",
      institution: "SKILVUL",
      highlights: [
        "Developed a ML model for cardiovascular risk detection with 73.46% accuracy.",
        "Implemented an interactive Rule-Based Chatbot for accurate responses.",
        "Built a web interface using Streamlit for seamless real-time assessment.",
      ],
      tech: ["Python", "Machine Learning", "Streamlit", "Rule-Based Chatbot"],
      icon: "HeartPulse",
      accent: "bg-sapphire/5",
      link: "https://capstone-app-5-healthcare-skilvul.streamlit.app/",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      category: "AI & HEALTHCARE",
      stats: [
        { label: "Accuracy", value: "73.5%" },
        { label: "Feature", value: "Chatbot" }
      ],
      github: "https://github.com/FarhanFansuri/capstone-app-5-healthcare",
      demo: "https://capstone-app-5-healthcare-skilvul.streamlit.app/"
    },
    {
      id: 6,
      title: "Legal Contract Analyzer",
      focus: "Generative AI & Natural Language Processing",
      institution: "HACKTIV8",
      highlights: [
        "Implemented RAG (Retrieval-Augmented Generation) framework using LangChain and Google Gemini API.",
        "Integrated FAISS vector database for fast and accurate semantic search across legal document chunks.",
        "Built an interactive Q&A web interface using Streamlit to analyze legal contracts in real time."
      ],
      tech: ["Python", "LangChain", "Google Gemini API", "FAISS", "Streamlit"],
      icon: "FileText",
      accent: "bg-sapphire/5",
      link: "https://github.com/barisetiawan51-code/LLM-RAG-Gemini_Contract-Hacktiv8",
      image: "https://images.unsplash.com/photo-1653378972269-aae6d81e2c18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "AI & NLP",
      stats: [
        { label: "Engine", value: "RAG+FAISS" },
        { label: "Corpus", value: "30 Contracts" }
      ],
      github: "https://github.com/barisetiawan51-code/LLM-RAG-Gemini_Contract-Hacktiv8",
      demo: "https://legalcontractanalyzer-llm-gemini-rag-langchain.streamlit.app/"
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
        "Rule-Based Chatbot"
      ],
      color: "sapphire",
    },
    {
      category: "Tools & DevOps",
      icon: "Cpu",
      items: ["Git/GitHub", "Postman", "VS Code", "Vercel", "BRD"],
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
    {
      title: "IBM Skillbuild for AI & Cybersecurity",
      issuer: "MSIB Skilvul Kampus Merdeka",
      year: "2024",
      link: "https://drive.google.com/file/d/1zJEmVruV7aYdvt8ZXDj7C9n_JTBZ9iMg/view?usp=drive_link",
    },
  ],
  awards: [
    {
      title:
        "Third Best Graduate of the Faculty of Engineering and Science Graduation",
      issuer: "Universitas Muhammadiyah Purwokerto",
      year: "2026",
      link: "https://drive.google.com/file/d/12JmEBOB8IarUSHp1EPiL_KAM7vSumasD/view?usp=sharing",
    },
    {
      title: "Top 10 and Top 1 Demo Day IBM Skillsbuild for AI & Cybersecurity",
      issuer: "MSIB Skilvul Kampus Merdeka",
      year: "2024",
      link: "https://drive.google.com/file/d/1_cujSBv2NqEgoUpe_IEaMsOzBjnSI0Bu/view?usp=sharing",
    },
  ],

  continuingEducation: [
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
    {
      title: "MSIB Kampus Merdeka - IBM Skillbuild",
      provider: "Skilvul",
      period: "Feb 2024 – Jun 2024",
      details:
        "Specialization in AI & Cybersecurity. Included training in Data Integration, UI/UX Design, and Agile methodologies.",
    },
  ],
  footer: {
    location: "Purbalingga, Jawa Tengah, Indonesia",
    languages: "Bahasa (Fluent) • English (Elementary)",
  },
};
