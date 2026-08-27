// ---------------------------------------------------------------------------
// All portfolio content in one place. Edit here to update the site.
// Rule: only information provided by the owner is included — nothing invented.
// ---------------------------------------------------------------------------

export const personalInfo = {
  name: 'Imoro Abdul Rashid',
  role: 'Data Scientist & Software Developer',
  identity: 'Aspiring Data Scientist | Software Developer | AI Enthusiast',
  location: 'Sunyani, Ghana',
  phone: '+233 535 199 915',
  email: 'imoroabdulrashid2003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/imoro-abdul-rashid',
  github: 'https://github.com/ABDULRASHID2003',
  education: {
    degree: 'BSc Information Technology',
    institution: 'University of Energy and Natural Resources (UENR)',
    graduation: 'Expected Graduation: 2026',
  },
}

export const aboutText =
  'I am an aspiring Data Scientist and Software Developer currently pursuing a Bachelor\u2019s degree in Information Technology at the University of Energy and Natural Resources (UENR). I am passionate about data-driven decision-making, artificial intelligence, software engineering, and web development. I enjoy using technology to solve real-world problems and continuously expanding my technical knowledge through practical projects and emerging technologies.'

export const heroText =
  'I build intelligent, data-driven solutions and modern digital experiences using software development, artificial intelligence, data science, and web technologies.'

export interface NavLink {
  id: string
  label: string
}

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

// ------------------------------- Skills ------------------------------------

export type SkillLevel = 'Working Knowledge' | 'Proficient' | 'Familiar'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  id: string
  title: string
  icon: 'chart' | 'code' | 'globe' | 'phone' | 'brain' | 'wrench'
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-science',
    title: 'Data Science',
    icon: 'chart',
    skills: [
      { name: 'Data Analysis', level: 'Familiar' },
      { name: 'Data Visualization', level: 'Familiar' },
      { name: 'Machine Learning Fundamentals', level: 'Familiar' },
      { name: 'Python', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Python', level: 'Working Knowledge' },
      { name: 'VB.NET', level: 'Familiar' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    icon: 'globe',
    skills: [
      { name: 'HTML5', level: 'Working Knowledge' },
      { name: 'CSS3', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'phone',
    skills: [
      { name: 'Flutter', level: 'Familiar' },
      { name: 'Dart', level: 'Familiar' },
    ],
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: 'brain',
    skills: [
      { name: 'AI Fluency', level: 'Proficient' },
      { name: 'AI Frameworks', level: 'Working Knowledge' },
      { name: 'AI Fundamentals', level: 'Working Knowledge' },
      { name: 'AI Automation', level: 'Working Knowledge' },
      { name: 'AI-Powered Problem Solving', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: 'wrench',
    skills: [
      { name: 'VS Code', level: 'Working Knowledge' },
      { name: 'Android Studio', level: 'Familiar' },
      { name: 'Google Colab', level: 'Working Knowledge' },
      { name: 'GitHub', level: 'Working Knowledge' },
    ],
  },
]

// ------------------------------ Projects -----------------------------------

export type ProjectCategory =
  | 'AI & Machine Learning'
  | 'Data Science'
  | 'Web Development'
  | 'Mobile Development'

export const projectFilters: Array<'All' | ProjectCategory> = [
  'All',
  'AI & Machine Learning',
  'Data Science',
  'Web Development',
  'Mobile Development',
]

export interface Project {
  id: string
  title: string
  /** Human-readable category line shown on the card */
  categoryLabel: string
  /** Category used by the filter buttons */
  category: ProjectCategory
  description: string
  features: string[]
  technologies: string[]
  /** Undefined = no public link available yet ("Coming Soon" shown) */
  githubUrl?: string
  demoUrl?: string
  featured?: boolean
  visual: 'tomato' | 'gym' | 'health' | 'alumni'
  accent: string
}

export const projects: Project[] = [
  {
    id: 'tomato-leaf-disease-detection',
    title: 'Tomato Leaf Disease Detection',
    categoryLabel: 'Artificial Intelligence / Machine Learning',
    category: 'AI & Machine Learning',
    description:
      'An AI-powered system designed to detect diseases in tomato leaves using image processing and machine learning techniques.',
    features: [
      'Image-based disease detection',
      'Machine learning classification',
      'Agricultural image dataset analysis',
      'Early disease diagnosis',
      'Support for improved crop productivity',
    ],
    technologies: ['Python', 'Machine Learning', 'Image Processing', 'Data Science'],
    featured: true,
    visual: 'tomato',
    accent: 'from-emerald-400/80 via-cyan-400/70 to-blue-500/70',
  },
  {
    id: 'gym-management-system',
    title: 'Gym Management System',
    categoryLabel: 'Web Development',
    category: 'Web Development',
    description:
      'A responsive web-based application designed to manage gym operations and member records.',
    features: [
      'Member registration',
      'Attendance tracking',
      'Member information management',
      'Responsive user interface',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'gym',
    accent: 'from-orange-400/80 via-rose-400/70 to-violet-500/70',
  },
  {
    id: 'smart-health-buddy',
    title: 'Smart Health Buddy',
    categoryLabel: 'Mobile / AI',
    category: 'Mobile Development',
    description:
      'A community-focused health application concept aimed at improving wellness and healthcare accessibility through AI-powered support and local health resource mapping.',
    features: [
      'AI-powered support concepts',
      'Local health resource mapping',
      'Preventive healthcare focus',
      'Community engagement',
    ],
    technologies: ['Mobile', 'AI Concepts'],
    visual: 'health',
    accent: 'from-teal-400/80 via-emerald-400/70 to-cyan-500/70',
  },
  {
    id: 'alumni-association-website',
    title: 'Alumni Association Website',
    categoryLabel: 'Web Development',
    category: 'Web Development',
    description:
      'A responsive website designed to connect and engage alumni members through a centralized digital platform.',
    features: [
      'Responsive design',
      'Modern user interface',
      'Interactive elements',
      'Alumni communication',
      'Networking support',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    visual: 'alumni',
    accent: 'from-blue-400/80 via-indigo-400/70 to-violet-500/70',
  },
]

// ---------------------------- Certification --------------------------------

export const certification = {
  title: 'AI Fluency: Frameworks and Foundations',
  areas: [
    'AI Concepts and Applications',
    'AI Ethics and Responsible AI',
    'AI Frameworks and Models',
    'AI-Powered Problem Solving',
  ],
}

// ------------------------------ Strengths ----------------------------------

export interface Strength {
  id: string
  title: string
  icon: 'analytical' | 'problem' | 'team' | 'adaptability' | 'communication' | 'learning'
}

export const strengths: Strength[] = [
  { id: 'analytical', title: 'Analytical Thinking', icon: 'analytical' },
  { id: 'problem', title: 'Problem Solving', icon: 'problem' },
  { id: 'team', title: 'Team Collaboration', icon: 'team' },
  { id: 'adaptability', title: 'Adaptability', icon: 'adaptability' },
  { id: 'communication', title: 'Communication Skills', icon: 'communication' },
  { id: 'learning', title: 'Continuous Learning', icon: 'learning' },
]

// ------------------------------ Interests ----------------------------------

export interface Interest {
  id: string
  title: string
  icon: 'data' | 'ai' | 'mobile' | 'web' | 'emerging'
}

export const interests: Interest[] = [
  { id: 'data-science', title: 'Data Science', icon: 'data' },
  { id: 'ai', title: 'Artificial Intelligence', icon: 'ai' },
  { id: 'mobile', title: 'Mobile Application Development', icon: 'mobile' },
  { id: 'web', title: 'Web Development', icon: 'web' },
  { id: 'emerging', title: 'Emerging Technologies', icon: 'emerging' },
]
