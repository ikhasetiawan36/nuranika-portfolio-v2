import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  fullName: "Nuranika Ramadhanti Alkautsar Setiawan",
  preferredName: "Nuranika",
  headline: "QA Engineer | Performance Test Engineer",
  tagline: "Building Quality Through Testing.",
  description: "Passionate about software quality, performance engineering, and delivering reliable digital experiences through structured testing and continuous improvement.",
  longBio: [
    "I’m a passionate Quality Assurance Engineer with a strong understanding of Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC).",
    "Experienced in manual, automation, and performance testing, I focus on ensuring product quality through structured testing processes and detailed analysis.",
    "I have hands-on experience in Automation Testing using Cypress and Katalon, as well as Performance Testing using LoadRunner Enterprise, LoadRunner, and Dynatrace to validate system scalability, stability, and reliability under peak load conditions.",
    "I believe that a QA’s role is not just about finding bugs, but also about ensuring the quality, performance, reliability, and overall user experience of a digital product."
  ],
  profileImage: "/assets/logos/logo.jpg",
  location: "Jakarta, Indonesia",
  email: "nuranikaoffice@gmail.com",
  phone: "+62 812-8098-9475",
  whatsappUrl: "https://wa.me/6281280989475",
  linkedinUrl: "https://www.linkedin.com/in/nuranikaramadhanti/",
  githubUrl: "https://github.com/ikhasetiawan36",
  resumeUrl: "https://drive.google.com/file/d/1Rp_9hyZdaDqJptECHXuKx2zxG7sK5DUZ/view?usp=sharing",
  stats: [
    { label: "Performance Tests Executed", value: "100+" },
    { label: "Critical Transactions Tested", value: "50+" },
    { label: "Quality Assurance Coverage", value: "95%+" },
    { label: "Testing Methodologies", value: "SDLC / STLC" }
  ]
};

export const experiences: ExperienceItem[] = [
  {
    id: "jamkrindo-qa-engineer",
    role: "Quality Assurance Engineer",
    company: "Jamkrindo",
    location: "Jakarta, Indonesia",
    period: "September 2026 – Present",
    current: true,
    type: "Professional Experience",
    summary: "Led comprehensive quality assurance across core financial guarantee systems, service bridging, and H2H API integrations, driving automated test suites and ensuring strict SLA compliance.",
    technicalScope: [
      "Performed manual and automated testing (Smoke, SIT, UAT, Regression) for ICPR Jamkrindo and JaGuarS systems, and Internal Project achieving 95% test coverage.",
      "Tested service bridging and core system integrations, including data mapping, request–response validation, and error handling, improving integration success rate by 25%.",
      "Developed automation test scripts using Katalon Studio (Web UI Testing) and integrated test execution with Jenkins.",
      "Built and utilized a Custom Python CLI for H2H API automation, enabling faster request execution, response validation, and regression testing without relying on Postman.",
      "Managed test data using Navicat and tracked defects and progress with JIRA, ensuring all critical defects were resolved within SLA.",
      "Acted as PIC Jamkrindo: supervised vendor activities, reviewed deliverables, and monitored progress, ensuring 100% compliance with project scope and quality standards.",
      "Collaborated closely with developers, vendors, and business users to analyze issues, validate fixes, and ensure successful SIT/UAT sign-off."
    ],
    tools: [
      "Navicat",
      "Jira",
      "Katalon Studio",
      "Node.js",
      "Internal Tools",
      "Postman",
      "Web Services",
      "Python"
    ],
    achievements: [
      "Achieved 95% test coverage across ICPR Jamkrindo, JaGuarS, and Internal Projects.",
      "Improved integration success rate by 25% through rigorous service bridging and data mapping validation.",
      "Engineered Custom Python CLI for streamlined H2H API automated validation."
    ]
  },
  {
    id: "bsi-performance-engineer",
    role: "Performance Test Engineer",
    company: "Bank Syariah Indonesia",
    location: "Jakarta, Indonesia",
    period: "September 2025 – September 2026",
    current: false,
    type: "Enterprise Banking Experience",
    summary: "Engineered and executed rigorous performance, load, stress, and sanity testing suites for high-volume banking transactions and digital platforms, collaborating closely with development and infrastructure teams to identify performance bottlenecks and guarantee high availability.",
    technicalScope: [
      "Performance test scripting using LoadRunner Virtual User Generator (VuGen).",
      "Dynamic session correlation and data-driven parameterization for complex banking flows.",
      "Scenario design and concurrent virtual user test execution via Controller and LoadRunner Enterprise.",
      "Sanity testing, baseline performance benchmarking, load testing, and stress testing under peak simulated traffic.",
      "Deep-dive performance metric analysis (Response Time, TPS, Throughput, Error Rate) via LoadRunner Analysis.",
      "Real-time application performance monitoring (APM) and infrastructure health tracking using Dynatrace.",
      "Root cause analysis for latency spikes, CPU/memory saturation, and database lockups.",
      "Comprehensive performance evaluation reporting with actionable optimization recommendations for engineering leads."
    ],
    tools: [
      "LoadRunner",
      "VuGen",
      "Controller",
      "Analysis",
      "LoadRunner Enterprise",
      "Dynatrace",
      "SQL",
      "HTTP/Web Protocols"
    ],
    achievements: [
      "Successfully identified critical transaction latency bottlenecks prior to production release.",
      "Established reproducible baseline benchmarks for core digital banking user journeys.",
      "Streamlined test data parameterization across multi-step financial transaction scripts."
    ]
  },
  {
    id: "telkomsat-qa-engineer",
    role: "Quality Assurance Engineer",
    company: "Telkom Satelit Indonesia (Telkomsat)",
    location: "Bogor, West Java, Indonesia",
    period: "October 2024 – September 2025",
    current: false,
    type: "Professional Experience",
    summary: "Responsible for end-to-end quality assurance, test scenario design, Cypress automation, and defect lifecycle management across internal Telkomsat digital applications.",
    technicalScope: [
      "Responsible for the overall application testing process to ensure system quality and readiness before release to users, covering both functional and usability aspects.",
      "Conducted manual testing using spreadsheets and automation testing using Cypress, including preparing test cases based on system requirements and documenting test results in a clear, detailed, and systematic manner.",
      "Collaborated closely with the development team to identify, report, and follow up on defects, as well as performed regression testing to ensure bug fixes did not impact existing functionality.",
      "Actively participated in sprint discussions, providing QA perspectives on feature development, while managing and maintaining automation test scripts to ensure testing stability and efficiency.",
      "Tested application UI/UX and provided improvement suggestions to enhance usability and user experience.",
      "Conducted manual testing for internal Telkomsat applications using Qase.io, including test case preparation, execution, and defect reporting."
    ],
    tools: [
      "Cypress",
      "Node.js",
      "Qase.io"
    ],
    achievements: [
      "Maintained stable automated Cypress regression suites for continuous feature releases.",
      "Enhanced user experience through targeted UI/UX testing and constructive defect workflows."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Performance Testing",
    iconName: "Zap",
    description: "Enterprise load simulation, concurrency validation, and transaction throughput engineering.",
    skills: [
      { name: "LoadRunner", level: "Advanced", isPrimary: true, icon: "/assets/logos/loadrunner.svg" },
      { name: "VuGen (Virtual User Generator)", level: "Advanced", isPrimary: true, icon: "/assets/logos/vugen.svg" },
      { name: "Controller", level: "Advanced", isPrimary: true, icon: "/assets/logos/controller.svg" },
      { name: "LoadRunner Analysis", level: "Advanced", isPrimary: true, icon: "/assets/logos/lr-analysis.svg" },
      { name: "LoadRunner Enterprise", level: "Proficient", isPrimary: true, icon: "/assets/logos/lr-enterprise.svg" },
      { name: "Correlation & Parameterization", level: "Advanced", isPrimary: true, icon: "/assets/logos/correlation.svg" },
      { name: "Load & Stress Testing", level: "Advanced", isPrimary: true, icon: "/assets/logos/load-stress.svg" },
      { name: "Sanity & Baseline Testing", level: "Advanced", isPrimary: true, icon: "/assets/logos/sanity-baseline.svg" }
    ]
  },
  {
    category: "Monitoring & APM",
    iconName: "Activity",
    description: "Full-stack observability, transaction tracing, and performance diagnostics.",
    skills: [
      { name: "Dynatrace APM", level: "Proficient", isPrimary: true, icon: "/assets/logos/dynatrace.svg" },
      { name: "Server Metrics Analysis", level: "Proficient", icon: "/assets/logos/server-metrics.svg" },
      { name: "Transaction Tracing", level: "Proficient", icon: "/assets/logos/transaction-tracing.svg" },
      { name: "Bottleneck Diagnostics", level: "Proficient", icon: "/assets/logos/bottleneck-diagnostics.svg" }
    ]
  },
  {
    category: "Automation Testing",
    iconName: "Code2",
    description: "Automated end-to-end web testing, API automation, and continuous quality regression suites.",
    skills: [
      { name: "Katalon Studio", level: "Advanced", isPrimary: true, icon: "/assets/logos/katalon.svg" },
      { name: "Cypress", level: "Proficient", isPrimary: true, icon: "/assets/logos/cypress.svg" },
      { name: "JavaScript / TypeScript", level: "Proficient", icon: "/assets/logos/js-ts.svg" },
      { name: "UI Test Automation", level: "Proficient", icon: "/assets/logos/ui-automation.svg" },
      { name: "Assertions & Selectors", level: "Proficient", icon: "/assets/logos/assertions-selectors.svg" }
    ]
  },
  {
    category: "Manual Testing & QA Lifecycle",
    iconName: "CheckSquare",
    description: "Rigorous quality processes ensuring requirement compliance, defect management, and tracking.",
    skills: [
      { name: "Functional Testing", level: "Advanced", isPrimary: true, icon: "/assets/logos/functional-testing.svg" },
      { name: "Test Case Design", level: "Advanced", isPrimary: true, icon: "/assets/logos/test-case-design.svg" },
      { name: "Test Execution & Reporting", level: "Advanced", isPrimary: true, icon: "/assets/logos/test-execution.svg" },
      { name: "Defect & Bug Reporting", level: "Advanced", isPrimary: true, icon: "/assets/logos/defect-reporting.svg" },
      { name: "Jira", level: "Advanced", isPrimary: true, icon: "/assets/logos/jira.svg" },
      { name: "SDLC & STLC", level: "Advanced", isPrimary: true, icon: "/assets/logos/sdlc-stlc.svg" },
      { name: "Agile / Scrum Methodologies", level: "Advanced", icon: "/assets/logos/agile-scrum.svg" }
    ]
  },
  {
    category: "Test Management & Tools",
    iconName: "FolderKanban",
    description: "Structured test documentation, defect tracking, and collaborative delivery tools.",
    skills: [
      { name: "Qase.io", level: "Proficient", isPrimary: true, icon: "/assets/logos/qase.svg" },
      { name: "Postman (API Testing)", level: "Proficient", isPrimary: true, icon: "/assets/logos/postman.svg" },
      { name: "Git & GitHub", level: "Proficient", icon: "/assets/logos/git-github.svg" },
      { name: "Figma (Design Verification)", level: "Familiar", icon: "/assets/logos/figma.svg" }
    ]
  },
  {
    category: "Databases & Core Technologies",
    iconName: "Database",
    description: "Data verification, back-end querying, database client tools, and foundational tech.",
    skills: [
      { name: "Navicat", level: "Proficient", isPrimary: true, icon: "/assets/logos/navicat.svg" },
      { name: "SQL (MySQL)", level: "Proficient", isPrimary: true, icon: "/assets/logos/mysql.svg" },
      { name: "Java Basics", level: "Familiar", icon: "/assets/logos/java.svg" },
      { name: "HTML / CSS", level: "Proficient", icon: "/assets/logos/html-css.svg" }
    ]
  }
];

export const strategicCompetencies = [
  "Performance Testing",
  "Automation Testing",
  "Manual Testing",
  "Monitoring – Dynatrace",
  "SQL & MySQL",
  "SDLC & STLC",
  "Navicat Databases",
  "Jira"
];

export const projects: Project[] = [
  {
    id: "bsi-performance-suite",
    title: "Upgrade Core Banking R24",
    category: "Performance Testing",
    subtitle: "Bank Syariah Indonesia (BSI)",
    description: "Comprehensive enterprise performance testing suite designed to validate transaction throughput, latency SLAs, and system stability under concurrent virtual user loads for high-priority banking services.",
    objectives: [
      "Simulate high-volume concurrent virtual user traffic across core financial workflows.",
      "Identify application and database latency bottlenecks prior to production deployment.",
      "Validate SLA compliance for critical user transactions (Balance Inquiry, Fund Transfers, Payments).",
      "Monitor CPU, memory utilization, and thread pools under escalating stress loads."
    ],
    responsibilities: [
      "Authored modular VuGen test scripts for complex financial transaction journeys.",
      "Configured robust parameterization pools and dynamic session correlation for banking security tokens.",
      "Executed baseline sanity tests, sustained load tests, and peak stress scenarios via Controller / LoadRunner Enterprise.",
      "Monitored live application behavior, response times, and failure rates in real-time utilizing Dynatrace APM.",
      "Synthesized detailed analysis reports with graphs depicting Transaction Response Times, Hits per Second, and Throughput."
    ],
    technologies: [
      "LoadRunner",
      "VuGen",
      "Controller",
      "Analysis",
      "LoadRunner Enterprise",
      "Dynatrace",
      "SQL",
      "HTTP/Web Protocol"
    ],
    image: "/assets/images/bsi 2.jpg", // High-res actual project image
    imageAlt: "Bank Syariah Indonesia Performance Testing Validation Suite",
    galleryImages: ["/assets/images/bsi 2.jpg", "/assets/images/bsi.jpg"],
    keyLearnings: [
      "Handling complex stateful banking sessions requiring multi-level parameter correlation.",
      "Correlating APM infrastructure traces in Dynatrace with VuGen transaction response graphs.",
      "Establishing realistic user pacing and think-time models for accurate capacity planning."
    ],
    metrics: [
      { label: "Target", value: "High Concurrency" },
      { label: "Protocol", value: "Web / HTTP" },
      { label: "Monitoring", value: "Dynatrace APM" }
    ],
    featured: true
  },
  {
    id: "elva-hrm",
    title: "Human Resource Management (Elva HRM App)",
    category: "Manual Testing",
    subtitle: "Enterprise HR & Administrative Digital System",
    description: "The HRM (Human Resource Management) application is a digital system used to manage all human resource activities within an organization or company. This application helps companies organize employee data, attendance, leave, payroll, performance evaluations, and the management of administrative documents efficiently and integratively.",
    objectives: [
      "Ensure 100% functional integrity for sensitive employee records, payroll, and attendance flows.",
      "Validate role-based access control (RBAC) across standard employees, HR admins, and managers.",
      "Design comprehensive test suites covering positive and negative edge cases."
    ],
    responsibilities: [
      "Conducted thorough manual functional testing across all HRM operational modules.",
      "Created structured test scenarios for attendance tracking, leave approval workflows, and payroll calculations.",
      "Executed exploratory and regression tests across multiple browser viewports.",
      "Documented and logged detailed defect tickets with reproduction steps and expected vs actual outcomes.",
      "Verified bug fixes and signed off on staging deployment milestones."
    ],
    technologies: [
      "Manual Testing",
      "Functional Testing",
      "Test Case Design",
      "Bug Tracking",
      "SDLC / STLC"
    ],
    image: "/assets/images/elva-hrm.jpg",
    imageAlt: "Elva HRM App Screenshot and Documentation",
    keyLearnings: [
      "Structuring complex role-based authorization test matrices.",
      "Catching subtle date-time and timezone edge cases in attendance calculation algorithms.",
      "Standardizing bug reporting templates for accelerated engineering turnaround."
    ],
    metrics: [
      { label: "Testing Type", value: "Manual & Functional" },
      { label: "Modules Tested", value: "Attendance, Payroll, Leaves" },
      { label: "Quality Grade", value: "Production Ready" }
    ],
    featured: true
  },
  {
    id: "wm-clinic",
    title: "Sistem Informasi Pelayanan Kesehatan (WM Clinic)",
    category: "Academic Projects",
    subtitle: "Web-Based Clinic Health Service Information System",
    description: "A web-based health service information system designed to simplify the administrative and medical records process in clinics. Developed using the Scrum methodology, the system supports three core user roles: Admin, Doctor, and Pharmacy Staff, streamlining patient consultations, prescription fulfillment, and administrative record keeping.",
    objectives: [
      "Streamline patient registration, medical queue management, and doctor consultation records.",
      "Ensure strict data integrity between doctor prescription orders and pharmacy drug inventory.",
      "Apply Scrum methodology across sprint planning, iterative testing, and feedback integration."
    ],
    responsibilities: [
      "Designed and executed manual test cases for Admin, Doctor, and Pharmacy workflows.",
      "Validated medical data persistence and prescription calculation integrity in Laravel & MySQL.",
      "Conducted usability and functional acceptance testing across medical staff interaction flows.",
      "Co-authored academic research publication documenting the system architecture and Scrum implementation."
    ],
    technologies: [
      "Laravel",
      "MySQL",
      "HTML / CSS",
      "Manual Testing",
      "Scrum Methodology",
      "Academic Research"
    ],
    image: "/assets/images/wmclinic.jpg",
    imageAlt: "WM Clinic Bintaro Healthcare Information System",
    keyLearnings: [
      "Healthcare data flow precision between consultation diagnoses and pharmaceutical dispensement.",
      "Iterative testing cycles aligned with 2-week Scrum sprints.",
      "Documentation of software quality metrics for formal academic peer review."
    ],
    metrics: [
      { label: "Roles", value: "Admin, Doctor, Pharmacy" },
      { label: "Methodology", value: "Scrum Agile" },
      { label: "Status", value: "Published Research" }
    ],
    featured: true
  },
  {
    id: "intern-itsat",
    title: "Sistem Informasi Manajemen Magang (InternITsat - Telkomsat)",
    category: "Automation Testing",
    subtitle: "Internship Management Platform at Telkomsat",
    description: "InternITsat is a dedicated web-based application designed to facilitate the comprehensive management of student internship activities at Telkomsat. The platform coordinates the entire lifecycle from initial student onboarding and task tracking to mentor evaluations and certificate generation.",
    objectives: [
      "Automate core user registration, application review, and task submission workflows.",
      "Validate mentor evaluation forms and automatic certificate generation logic.",
      "Ensure robust cross-browser stability and responsiveness across desktop and tablet interfaces."
    ],
    responsibilities: [
      "Developed automated end-to-end regression test scripts utilizing Cypress.",
      "Conducted manual and exploratory testing for internship submission portals and administrative dashboards.",
      "Authored test scenarios covering edge cases in student document upload and validation.",
      "Maintained automated regression test runs to verify continuous application reliability."
    ],
    technologies: [
      "Cypress",
      "JavaScript",
      "Manual Testing",
      "Web Testing",
      "UI Automation",
      "Defect Reporting"
    ],
    image: "/assets/images/internitsat.jpg",
    imageAlt: "InternITsat Telkomsat Platform Screenshot",
    keyLearnings: [
      "Writing maintainable Cypress selector strategies and handling asynchronous page states.",
      "Balancing manual test coverage for exploratory flows with automated regression suites.",
      "Documenting test suites for cross-team knowledge transfer."
    ],
    metrics: [
      { label: "Framework", value: "Cypress" },
      { label: "Test Scope", value: "End-to-End & Manual" },
      { label: "Organization", value: "Telkomsat" }
    ],
    featured: true
  },
  {
    id: "timeflow-jmk",
    title: "TIMEFLOW – Timesheet Management System",
    category: "Internal Tools / Productivity Application",
    subtitle: "Jamkrindo • Quality Assurance Engineer",
    description: "TIMEFLOW is an internal timesheet management application designed to streamline employee work-hour tracking, daily activity recording, attendance management, and overtime reporting. The system simplifies timesheet administration through automated calculations, integrated workflows, and structured monthly data management.",
    objectives: [
      "Improve operational efficiency, minimize manual administrative work, and provide more organized and reliable employee timesheet management.",
      "Validate accuracy of automated working hours and overtime calculations across regular workdays, weekends, holidays, leave, and sick days.",
      "Ensure data integrity across daily activity management, monthly archives, and Excel import/export reporting workflows."
    ],
    responsibilities: [
      "Automated Working Hours Calculation – Automatically calculates employee working hours based on timesheet entries.",
      "Daily Activity Management – Records and manages daily work activities, allowing multiple activities within a day and supporting edits.",
      "Attendance Management – Supports regular working days, weekends, holidays, leave, and sick days.",
      "Automated Overtime Management – Generates overtime records based on timesheet data and synchronizes updates.",
      "Monthly Archive – Organizes and maintains timesheet records by month.",
      "Excel Import & Export – Supports importing and exporting timesheet data for reporting and administration."
    ],
    technologies: [
      "Quality Assurance",
      "Functional Testing",
      "Timesheet & OT Automation",
      "Excel Import / Export",
      "Workflow Validation",
      "Internal Tools"
    ],
    image: "/assets/images/timeflow-jmk.png",
    imageAlt: "TIMEFLOW – Timesheet Management System at Jamkrindo",
    galleryImages: [
      "/assets/images/timeflow-jmk.png",
      "/assets/images/timeflow-jmk-overtime.png"
    ],
    keyLearnings: [
      "Validating automated working-hour and overtime calculation rules across diverse attendance states (Present, Leave, Sick, Holiday/Weekend).",
      "Ensuring real-time synchronization between daily timesheet entries, multi-activity logs, and overtime recap forms.",
      "Verifying structured monthly archive persistence and accurate Excel report generation for administrative compliance."
    ],
    metrics: [
      { label: "Organization", value: "Jamkrindo" },
      { label: "Role", value: "QA Engineer" },
      { label: "Category", value: "Internal Tools" }
    ],
    featured: true
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Information Systems (S.Kom)",
    institution: "Universitas Bung Karno",
    field: "Information Systems / Computer Science",
    period: "Information Systems Graduate",
    details: [
      "Specialized in Software Development Methodologies, Database Systems, and System Analysis.",
      "Graduation Capstone: Designed, tested, and published research on a web-based health service information system utilizing Scrum methodology.",
      "Active researcher with indexed publication in peer-reviewed academic journals."
    ]
  },
  {
    degree: "Quality Assurance & Software Testing Program",
    institution: "QA Intensive Bootcamp",
    field: "Software Quality Assurance",
    period: "Professional Certification & Training",
    details: [
      "Hands-on mastery of SDLC, STLC, Test Case Architecture, Boundary Value Analysis, and Equivalence Partitioning.",
      "End-to-end automation testing with Cypress and API validation with Postman.",
      "Real-world project simulations adhering to Agile/Scrum sprint ceremonies and defect reporting in Qase.io."
    ]
  }
];

export const certificatesAndAchievements = [
  {
    id: "bsi-core-banking-upgrade",
    title: "Performance Testing & APM Specialization",
    focus: "Enterprise Banking / LoadRunner & Dynatrace",
    description: "Contributed to the successful and timely completion of the Core Banking upgrade project from Temenos R10 to R24, in collaboration with Deloitte and Temenos specialists from India. Actively involved in performance testing, real-time APM monitoring, and system quality validation under peak financial transaction loads.",
    badge: "Enterprise Achievement",
    skills: ["LoadRunner", "Dynatrace", "Temenos Core Banking", "Performance Engineering"]
  },
  {
    id: "academic-publication-scrum",
    title: "Academic Research Publication",
    focus: "Healthcare Information System Using Scrum",
    description: "Academic research and publication focused on designing and developing a web-based healthcare service information system using the Scrum methodology, published in peer-reviewed academic indexing.",
    badge: "Published Research",
    skills: ["Scrum Methodology", "Software Testing", "System Analysis", "Healthcare Systems"]
  },
  {
    id: "sqa-professional-certificate",
    title: "Software Quality Assurance Professional Certificate",
    focus: "Professional QA Learning & Certification",
    description: "Professional software quality assurance certification credential covering structured test methodologies, defect lifecycle management, test plan execution, and verification standards.",
    badge: "Professional Certification",
    skills: ["Quality Assurance", "Test Case Design", "Defect Management", "STLC / SDLC"]
  },
  {
    id: "sanbercode-qa-bootcamp",
    title: "QA Bootcamp Program",
    focus: "SanberCode",
    description: "Completed comprehensive QA Bootcamp training covering manual testing, automation testing, test case design, test execution, and software testing fundamentals.",
    badge: "Training Program",
    skills: ["SanberCode", "Manual Testing", "Automation Testing", "Test Execution"]
  }
];
