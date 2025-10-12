// Personal Information
export const personalInfo = {
  name: "Akshat Raj",
  email: "akshatgyan2004@gmail.com",
  phone: "+91 XXXXXXXXXX", // Add your number
  tagline: "Building Intelligent Systems for the Future",
  bio: "AI/ML Engineer & Full-Stack Developer passionate about creating intelligent systems that make a difference. Founder of OnePersonAI, dedicated to awakening AI within humans.",
  shortBio: "I'm an AI Engineer and Full-Stack Developer specializing in building intelligent systems that bridge technology and human potential.",
  location: "Raipur, Chhattisgarh, India",
  resumeUrl: "/resume.pdf",
  profileImage: "/images/profile.jpg",
  availability: "Open for opportunities",
};

// Company Information
export const companyInfo = {
  name: "OnePersonAI",
  website: "https://onepersonai-website.vercel.app/",
  description: "Innovation hub where technology, art, and purpose unite to shape a future filled with wisdom, creativity, and light.",
  tagline: "Awakening Intelligence, Empowering Humanity",
  logo: "/images/onepersonai-logo.png",
  founded: "2024",
  mission: "To develop AI that uplifts humanity — guiding people, empowering creators, and making intelligent tools accessible to everyone on Earth.",
};

// Education
export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering (B.E.) – Computer Engineering",
    institution: "Raipur Institute of Technology (RIT)",
    duration: "2023 - Present",
    location: "Raipur, Chhattisgarh (Under CSVTU University)",
    description: "Specialized in Artificial Intelligence, Machine Learning, and Full-Stack Development. Actively involved in AI/ML projects and innovation.",
    logo: "/images/rit-logo.png",
  },
  {
    id: 2,
    degree: "Class XII (PCM) - CBSE",
    institution: "Kendriya Vidyalaya IOC Barauni",
    duration: "2021",
    location: "Bihar, India",
    description: "Completed senior secondary education with focus on Physics, Chemistry, and Mathematics.",
    logo: "/images/kv-logo.png",
  },
];

// Certifications
export const certifications = [
  {
    id: 1,
    name: "Develop a URL Shortener using Node.js",
    issuer: "LetsUpgrade",
    date: "July 2023",
    credentialUrl: "https://verify.letsupgrade.in/certificate/LUENJSJUL125227",
  },
  {
    id: 2,
    name: "Emotional Intelligence Bootcamp",
    issuer: "LetsUpgrade",
    date: "March 2023",
    credentialUrl: "https://verify.letsupgrade.in/certificate/LUMEIMAR125509",
  },
  {
    id: 3,
    name: "Create REST APIs with Node.js & Express",
    issuer: "LetsUpgrade",
    date: "June 2023",
    credentialUrl: "https://verify.letsupgrade.in/certificate/LUENJSJUN125486",
  },
  {
    id: 4,
    name: "Spotify Clone using React",
    issuer: "LetsUpgrade",
    date: "April 2023",
    credentialUrl: "https://verify.letsupgrade.in/certificate/LUESCAPR1251508",
  },
  {
    id: 5,
    name: "HTML & CSS Bootcamp",
    issuer: "LetsUpgrade",
    date: "September 2023",
    credentialUrl: "https://verify.letsupgrade.in/certificate/LUEHTMLSEPT1251830",
  },
  {
    id: 6,
    name: "AI/ML Course Certificate",
    issuer: "DeepLearning.AI",
    date: "2024",
    credentialUrl: "https://learn.deeplearning.ai/accomplishments/6d8ecc71-797b-482d-a575-fbd0a25efaec",
  },
];

// Skills
export const skills = {
  programmingLanguages: [
    { name: "Python", icon: "🐍", level: 90, category: "language" },
    { name: "C++", icon: "⚙️", level: 85, category: "language" },
    { name: "JavaScript (ES6+)", icon: "💻", level: 88, category: "language" },
    { name: "SQL", icon: "🗄️", level: 80, category: "language" },
    { name: "HTML & CSS", icon: "🎨", level: 90, category: "language" },
  ],
  frameworks: [
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Next.js", level: 82, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "TensorFlow", level: 75, category: "ai" },
    { name: "PyTorch", level: 75, category: "ai" },
    { name: "LangChain", level: 80, category: "ai" },
    { name: "Flask", level: 85, category: "backend" },
    { name: "Streamlit", level: 80, category: "backend" },
  ],
  databases: [
    { name: "MongoDB", level: 85, category: "database" },
    { name: "MySQL", level: 80, category: "database" },
    { name: "PostgreSQL", level: 75, category: "database" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 75 },
    { name: "Vercel", level: 85 },
    { name: "VS Code", level: 95 },
  ],
};

// Projects
export const projects = [
  {
    id: 1,
    title: "IELTS Institute Management System",
    description: "Complete management system for IELTS institute with student tracking, assessment features, and analytics dashboard. Built with React and Node.js for seamless operations.",
    longDescription: "A comprehensive web application designed to streamline IELTS institute operations including student enrollment, attendance tracking, test scheduling, and performance analytics.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/AkshatRaj00/IELTS-Institute-Internship-Assignment",
    liveUrl: null,
    image: "/images/projects/ielts.png",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Heart Disease Prediction",
    description: "Machine Learning model to predict heart disease using patient data with 85%+ accuracy. Implements multiple ML algorithms for comparison and best results.",
    longDescription: "An intelligent health prediction system using advanced ML algorithms to analyze patient medical data and predict heart disease risk with high accuracy.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    github: "https://github.com/AkshatRaj00/Heart-diseaseprediction",
    liveUrl: null,
    image: "/images/projects/heart.png",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 3,
    title: "NeuroBreak AI",
    description: "AI-powered mental health assistant for stress detection and management. Uses NLP to analyze user inputs and provide personalized recommendations.",
    longDescription: "A compassionate AI companion that helps users manage stress and mental health through intelligent conversations and personalized wellness recommendations.",
    tags: ["AI", "NLP", "Python", "OpenAI"],
    github: "https://github.com/AkshatRaj00/NeuroBreak-AI-project",
    liveUrl: null,
    image: "/images/projects/neurobreak.png",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 4,
    title: "GDP Dashboard",
    description: "Interactive data visualization dashboard for global GDP trends and economic analysis. Features real-time charts and comparative analytics.",
    longDescription: "An interactive web application that visualizes global economic data, allowing users to explore GDP trends, compare countries, and analyze economic indicators.",
    tags: ["React", "D3.js", "Data Visualization", "API"],
    github: "https://github.com/AkshatRaj00/GDPDashboard",
    liveUrl: null,
    image: "/images/projects/gdp.png",
    featured: false,
    category: "Data Science",
  },
  {
    id: 5,
    title: "Multimodal AI Assistant",
    description: "Advanced AI assistant supporting text, voice, and image inputs. Powered by OpenAI and LangChain for intelligent multi-format interactions.",
    longDescription: "A cutting-edge AI assistant that seamlessly handles multiple input formats including text, voice, and images, providing intelligent and context-aware responses.",
    tags: ["OpenAI", "LangChain", "Python", "Streamlit"],
    github: "https://github.com/AkshatRaj00/MultimodalAIAssistant-",
    liveUrl: null,
    image: "/images/projects/multimodal.png",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 6,
    title: "AI Attendance System",
    description: "Face recognition based attendance system with real-time tracking and automated reporting. Built with OpenCV and deep learning models.",
    longDescription: "An automated attendance management system using facial recognition technology to track attendance in real-time, generate reports, and eliminate manual processes.",
    tags: ["Computer Vision", "Python", "OpenCV", "Deep Learning"],
    github: "https://github.com/AkshatRaj00/AIAttendanceSystem",
    liveUrl: null,
    image: "/images/projects/attendance.png",
    featured: false,
    category: "AI/ML",
  },
];

// Future Vision
export const vision = {
  title: "Future Vision – OnePersonAI",
  subtitle: "The next evolution of intelligence is not artificial — it's awakened.",
  description: `At OnePersonAI, my vision is to create a world where technology and consciousness merge — where machines learn empathy, and intelligence becomes a tool for transformation.

I believe the future belongs to systems that understand emotions, ethics, and purpose, not just data. My mission is to develop AI that uplifts humanity — guiding people, empowering creators, and making intelligent tools accessible to everyone on Earth.`,
  building: [
    {
      title: "Emotionally-Aware AI",
      description: "Developing AI companions that understand and respond with genuine empathy, creating meaningful human-machine connections.",
    },
    {
      title: "Intelligent Automation",
      description: "Building platforms that simplify lives and empower creators through smart, intuitive automation.",
    },
    {
      title: "AI-Driven Ecosystems",
      description: "Creating comprehensive solutions for education, health, and innovation under the OnePersonAI umbrella.",
    },
  ],
  longVision: `To make OnePersonAI a globally recognized innovation hub — where technology, art, and purpose unite to shape a future filled with wisdom, creativity, and light.`,
  quote: "My dream is not to replace humans with AI — but to awaken the AI within humans.",
};

// Social Media Links
export const socialLinks = [
  { 
    name: "GitHub", 
    url: "https://github.com/AkshatRaj00", 
    icon: "Github",
    username: "@AkshatRaj00",
    color: "#181717"
  },
  { 
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/akshatraj00/", 
    icon: "Linkedin",
    username: "@akshatraj00",
    color: "#0A66C2"
  },
  { 
    name: "Instagram", 
    url: "https://www.instagram.com/theakshatrao/", 
    icon: "Instagram",
    username: "@theakshatrao",
    color: "#E4405F"
  },
  { 
    name: "Twitter", 
    url: "https://x.com/Akshat_Raj00", 
    icon: "Twitter",
    username: "@Akshat_Raj00",
    color: "#1DA1F2"
  },
  { 
    name: "Reddit", 
    url: "https://www.reddit.com/user/AkshatRaj00/", 
    icon: "MessageCircle",
    username: "u/AkshatRaj00",
    color: "#FF4500"
  },
  { 
    name: "Quora", 
    url: "https://www.quora.com/profile/AkshatRaj00", 
    icon: "MessageSquare",
    username: "@AkshatRaj00",
    color: "#B92B27"
  },
  { 
    name: "Kaggle", 
    url: "https://www.kaggle.com/akshatraj12", 
    icon: "BarChart3",
    username: "@akshatraj12",
    color: "#20BEFF"
  },
  { 
    name: "Medium", 
    url: "https://medium.com/@akshatraj00", 
    icon: "BookOpen",
    username: "@akshatraj00",
    color: "#000000"
  },
  { 
    name: "LeetCode", 
    url: "https://leetcode.com/u/akshatrao/", 
    icon: "Code2",
    username: "@akshatrao",
    color: "#FFA116"
  },
  { 
    name: "Product Hunt", 
    url: "https://www.producthunt.com/@akshatraj", 
    icon: "Rocket",
    username: "@akshatraj",
    color: "#DA552F"
  },
];

// Services
export const services = [
  {
    id: 1,
    title: "Webpage Development",
    description: "Custom, responsive websites built with modern technologies",
    icon: "Code2",
  },
  {
    id: 2,
    title: "Chatbot Development",
    description: "Intelligent AI chatbots for customer support and engagement",
    icon: "MessageSquare",
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Custom AI/ML solutions for your business needs",
    icon: "Brain",
  },
  {
    id: 4,
    title: "Machine Learning Models",
    description: "Predictive models and data analysis solutions",
    icon: "TrendingUp",
  },
  {
    id: 5,
    title: "Full-Stack Development",
    description: "End-to-end web application development",
    icon: "Layers",
  },
  {
    id: 6,
    title: "Data Analysis",
    description: "Data visualization and business intelligence",
    icon: "BarChart3",
  },
];

// Experience
export const experience = [
  {
    id: 1,
    company: "OnePersonAI",
    role: "Founder & AI Engineer",
    duration: "2024 - Present",
    location: "Raipur, India",
    description: "Building intelligent systems and AI solutions to empower humanity. Leading development of emotionally-aware AI companions and automation platforms.",
    achievements: [
      "Developed multiple AI/ML projects serving 1000+ users",
      "Created intelligent automation systems",
      "Built full-stack applications with modern tech stack",
    ],
  },
  // Add more experience
];

// Statistics
export const stats = [
  { label: "Projects", value: "15+", icon: "CheckCircle2" },
  { label: "Code Written", value: "50K+", icon: "Code2" },
  { label: "GitHub Repos", value: "25+", icon: "Github" },
  { label: "Technologies", value: "20+", icon: "Layers" },
];

// Testimonials (Optional - for future use)
export const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO, Company",
    content: "Akshat delivered exceptional work on our AI project. Highly recommended!",
    avatar: "/images/testimonials/avatar1.jpg",
    rating: 5,
  },
  // Add more testimonials
];