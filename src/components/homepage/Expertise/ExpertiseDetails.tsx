import {
  AppWindowMac,
  BetweenHorizontalStart,
  LineChart,
  MonitorSmartphone,
  CpuIcon,
} from "lucide-react";
import { ReactNode } from "react";

export type EXPERTISE_COMPONENT_DETAILS_TYPE = {
  name: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
};

export const EXPERTISE_COMPONENT_DETAILS = [
  {
    name: "Frontend Development",
    subtitle: "Crafting Engaging User Experiences",
    description:
      "As a frontend developer, I specialize in translating design concepts into interactive web applications. Leveraging the power of HTML, CSS, and JavaScript frameworks like React and Vue, I strive to create seamless user experiences that delight and engage users.",
    icon: <MonitorSmartphone className="h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    name: "Backend Development",
    subtitle: "Powering Applications Behind the Scenes",
    description:
      "As a backend developer, I specialize in building the backbone of web applications. Proficient in technologies like Node.js, SQL, and NoSQL databases, I design and implement robust server-side architectures to handle data storage, retrieval, and processing, ensuring seamless functionality for frontend interfaces.",
    icon: <BetweenHorizontalStart className="h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    name: "Data Analytics",
    subtitle: "Unveiling Insights from Data",
    description:
      "Data analytics is where I uncover valuable insights from raw data. Proficient in Python libraries like Pandas, NumPy, and scikit-learn, I excel in data manipulation, statistical analysis, and machine learning tasks. My passion lies in turning data into actionable insights that drive informed decision-making.",
    icon: <LineChart className="h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    name: "Software Development",
    subtitle: "Building Scalable Solutions",
    description:
      "In software development, my focus is on architecting robust and scalable solutions. With expertise in languages like JavaScript and TypeScript, along with frameworks like Node.js, I enjoy tackling complex challenges to deliver efficient and maintainable software products.",
    icon: <AppWindowMac className="h-12 w-12 sm:h-16 sm:w-16" />,
  },
  {
    name: "Miscellaneous",
    subtitle: "Exploring Diverse Technologies",
    description:
      "In the realm of miscellaneous technologies, I thrive on exploring diverse tools and frameworks. From version control with Git to content management with WordPress, my curiosity drives me to continually learn and adapt to new technologies, enriching my skill set and expanding my capabilities.",
    icon: <CpuIcon className="h-12 w-12 sm:h-16 sm:w-16" />,
  },
];

export type TECH_STACK_DETAILS_TYPE = {
  name: String;
  logo: String;
  category: String[];
  description: String;
  website: String;
};

export const TECH_STACK_DETAILS = [
  {
    name: "JavaScript",
    logo: "/logos/JavaScriptLogo.svg",
    category: ["Frontend Development", "Software Development"],
    description:
      "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    logo: "/logos/TypeScriptLogo.svg",
    category: ["Frontend Development", "Software Development"],
    description:
      "An open-source language which builds on JavaScript by adding static type definitions.",
    website: "https://www.typescriptlang.org/",
  },
  {
    name: "ReactJS",
    logo: "/logos/ReactJSLogo.svg",
    category: ["Frontend Development"],
    description: "A JavaScript library for building user interfaces.",
    website: "https://reactjs.org/",
  },
  {
    name: "Vue",
    logo: "/logos/VueLogo.svg",
    category: ["Frontend Development"],
    description: "Another JavaScript framework for building user interfaces.",
    website: "https://vuejs.org/",
  },
  {
    name: "Chart.js",
    logo: "/logos/ChartJSLogo.svg",
    category: ["Frontend Development"],
    description: "A JavaScript library for creating charts.",
    website: "https://www.chartjs.org/",
  },
  {
    name: "HTML",
    logo: "/logos/HTMLLogo.svg",
    category: ["Frontend Development"],
    description: "Markup language for creating web pages.",
    website: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    logo: "/logos/CSSLogo.svg",
    category: ["Frontend Development"],
    description: "Styling language for web pages.",
    website: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    logo: "/logos/TailwindCSSLogo.svg",
    category: ["Frontend Development"],
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
    website: "https://tailwindcss.com/",
  },
  {
    name: "Beautiful Soup",
    logo: "/logos/BeautifulSoupLogo.png",
    category: ["Frontend Development"],
    description: "Python library for web scraping.",
    website: "https://www.crummy.com/software/BeautifulSoup/",
  },
  {
    name: "Python",
    logo: "/logos/PythonLogo.svg",
    category: ["Data Analytics", "Software Development"],
    description:
      "A high-level, interpreted, interactive and object-oriented scripting language designed to be highly readable.",
    website: "https://www.python.org/",
  },
  {
    name: "R",
    logo: "/logos/RLogo.svg",
    category: ["Data Analytics"],
    description:
      "A language and environment for statistical computing and graphics.",
    website: "https://www.r-project.org/",
  },
  {
    name: "Java",
    logo: "/logos/JavaLogo.svg",
    category: ["Software Development"],
    description:
      "A high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    website: "https://www.java.com/",
  },
  {
    name: "SQL",
    logo: "/logos/SQLLogo.svg",
    category: ["Backend Development"],
    description: "Language for managing relational databases.",
    website: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "PostgreSQL",
    logo: "/logos/PostgreSQLLogo.svg",
    category: ["Backend Development"],
    description: "Open-source relational database.",
    website: "https://www.postgresql.org/",
  },
  {
    name: "Firebase",
    logo: "/logos/FirebaseLogo.svg",
    category: ["Backend Development"],
    description:
      "Platform for building web and mobile applications, offering various backend services like Firestore (NoSQL database), authentication, hosting, etc.",
    website: "https://firebase.google.com/",
  },
  {
    name: "Supabase",
    logo: "/logos/SupabaseLogo.svg",
    category: ["Backend Development"],
    description:
      "Open-source alternative to Firebase, offering a suite of tools for building backend services.",
    website: "https://supabase.io/",
  },
  {
    name: "Planetscale",
    logo: "/logos/PlanetscaleLogo.svg",
    category: ["Backend Development"],
    description: "Database service specializing in distributed SQL.",
    website: "https://planetscale.com/",
  },
  {
    name: "Prisma Client",
    logo: "/logos/PrismaClientLogo.svg",
    category: ["Backend Development"],
    description:
      "ORM (Object-Relational Mapping) tool for Node.js and TypeScript.",
    website: "https://www.prisma.io/",
  },
  {
    name: "Ganche",
    logo: "/logos/GancheLogo.svg",
    category: ["Backend Development"],
    description:
      "Tool for setting up local Ethereum blockchain networks for development.",
    website: "https://www.trufflesuite.com/ganache",
  },
  {
    name: "Truffle",
    logo: "/logos/TruffleLogo.svg",
    category: ["Backend Development"],
    description:
      "Development environment, testing framework, and asset pipeline for Ethereum.",
    website: "https://www.trufflesuite.com/truffle",
  },
  {
    name: "NumPy",
    logo: "/logos/NumPyLogo.svg",
    category: ["Data Analytics"],
    description: "Python library for numerical computing.",
    website: "https://numpy.org/",
  },
  {
    name: "Pandas",
    logo: "/logos/PandasLogo.svg",
    category: ["Data Analytics"],
    description: "Python library for data manipulation and analysis.",
    website: "https://pandas.pydata.org/",
  },
  {
    name: "Scikit-learn",
    logo: "/logos/ScikitLearnLogo.svg",
    category: ["Data Analytics"],
    description: "Python library for machine learning.",
    website: "https://scikit-learn.org/",
  },
  {
    name: "TensorFlow",
    logo: "/logos/TensorFlowLogo.svg",
    category: ["Data Analytics"],
    description: "Open-source machine learning framework developed by Google.",
    website: "https://www.tensorflow.org/",
  },
  {
    name: "Keras",
    logo: "/logos/KerasLogo.svg",
    category: ["Data Analytics"],
    description:
      "High-level neural networks API, running on top of TensorFlow.",
    website: "https://keras.io/",
  },
  {
    name: "Matplotlib",
    logo: "/logos/MatplotlibLogo.svg",
    category: ["Data Analytics"],
    description:
      "Python plotting library for creating static, interactive, and animated visualizations.",
    website: "https://matplotlib.org/",
  },
  {
    name: "Seaborn",
    logo: "/logos/SeabornLogo.svg",
    category: ["Data Analytics"],
    description:
      "Python visualization library based on Matplotlib, providing a high-level interface for drawing attractive statistical graphics.",
    website: "https://seaborn.pydata.org/",
  },
  {
    name: "GIT",
    logo: "/logos/GITLogo.svg",
    category: ["Miscellaneous"],
    description: "Version control system for tracking changes in code.",
    website: "https://git-scm.com/",
  },
  {
    name: "Wordpress",
    logo: "/logos/WordpressLogo.svg",
    category: ["Miscellaneous"],
    description: "Content management system for building websites.",
    website: "https://wordpress.org/",
  },
  {
    name: "trpc",
    logo: "/logos/trpcLogo.svg",
    category: ["Miscellaneous"],
    description:
      "Framework for building fast and scalable TypeScript RPC (Remote Procedure Call) APIs.",
    website: "https://trpc.io/",
  },
  {
    name: "Solidity",
    logo: "/logos/SolidityLogo.svg",
    category: ["Miscellaneous"],
    description:
      "Programming language for writing smart contracts on Ethereum.",
    website: "https://soliditylang.org/",
  },
  {
    name: "XGBoost",
    logo: "/logos/XGBoostLogo.svg",
    category: ["Data Analytics"],
    description:
      "Open-source library providing an optimized gradient boosting framework for classification, regression, and ranking problems.",
    website: "https://xgboost.ai/",
  },
];
