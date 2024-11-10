interface Skill {
  name: string;
  link: string;
}

interface SkillSet {
  category: string;
  description: string;
  skills: Skill[];
}

export const SKILLSETS_DATA: SkillSet[] = [
  {
    category: "frontend development",
    description:
      "As a frontend developer, I specialize in translating design concepts into interactive web applications. Leveraging the power of HTML, CSS, and JavaScript frameworks like React and Vue, I strive to create seamless user experiences that delight and engage users.",
    skills: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "ReactJS", link: "https://reactjs.org/" },
      { name: "Vue", link: "https://vuejs.org/" },
      { name: "Chart.js", link: "https://www.chartjs.org/" },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind", link: "https://tailwindcss.com/" },
      {
        name: "Beautiful Soup",
        link: "https://www.crummy.com/software/BeautifulSoup/",
      },
    ],
  },
  {
    category: "backend development",
    description:
      "As a backend developer, I specialize in building the backbone of web applications. Proficient in technologies like Node.js, SQL, and NoSQL databases, I design and implement robust server-side architectures to handle data storage, retrieval, and processing, ensuring seamless functionality for frontend interfaces.",
    skills: [
      { name: "SQL", link: "https://www.w3schools.com/sql/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "Supabase", link: "https://supabase.io/" },
      { name: "Planetscale", link: "https://planetscale.com/" },
      { name: "Prisma Client", link: "https://www.prisma.io/" },
      { name: "Ganache", link: "https://ganache.io/" },
      { name: "Truffle", link: "https://www.trufflesuite.com/truffle" },
    ],
  },
  {
    category: "machine learning engineering",
    description:
      "As a machine learning engineer, I leverage cloud platforms and cutting-edge technologies to build, deploy, and scale machine learning solutions. With experience in tools like AWS SageMaker, Google Cloud AI, and TensorFlow, I develop intelligent systems that solve complex problems.",
    skills: [
      { name: "AWS SageMaker", link: "https://aws.amazon.com/sagemaker/" },
      { name: "AWS Bedrock", link: "https://aws.amazon.com/bedrock/" },
      {
        name: "Google Cloud AI Platform",
        link: "https://cloud.google.com/ai-platform",
      },
      { name: "BigQuery", link: "https://cloud.google.com/bigquery" },
      { name: "TensorFlow", link: "https://www.tensorflow.org/" },
      { name: "Scikit-learn", link: "https://scikit-learn.org/" },
      { name: "Keras", link: "https://keras.io/" },
      { name: "Python", link: "https://www.python.org/" },
      {
        name: "Shell Command Language",
        link: "https://en.wikipedia.org/wiki/Shell_script",
      },
    ],
  },
  {
    category: "data analytics",
    description:
      "Data analytics is where I uncover valuable insights from raw data. Proficient in Python libraries like Pandas, NumPy, and scikit-learn, I excel in data manipulation, statistical analysis, and machine learning tasks. My passion lies in turning data into actionable insights that drive informed decision-making.",
    skills: [
      { name: "Python", link: "https://www.python.org/" },
      { name: "R", link: "https://www.r-project.org/" },
      { name: "NumPy", link: "https://numpy.org/" },
      { name: "Pandas", link: "https://pandas.pydata.org/" },
      { name: "Scikit-learn", link: "https://scikit-learn.org/" },
      { name: "TensorFlow", link: "https://www.tensorflow.org/" },
      { name: "Keras", link: "https://keras.io/" },
      { name: "Matplotlib", link: "https://matplotlib.org/" },
      { name: "Seaborn", link: "https://seaborn.pydata.org/" },
      { name: "XGBoost", link: "https://xgboost.ai/" },
    ],
  },
  {
    category: "software development",
    description:
      "In software development, my focus is on architecting robust and scalable solutions. With expertise in languages like JavaScript and TypeScript, along with frameworks like Node.js, I enjoy tackling complex challenges to deliver efficient and maintainable software products.",
    skills: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "Python", link: "https://www.python.org/" },
      { name: "Java", link: "https://www.java.com/" },
    ],
  },
  {
    category: "miscellaneous",
    description:
      "In the realm of miscellaneous technologies, I thrive on exploring diverse tools and frameworks. From version control with Git to content management with WordPress, my curiosity drives me to continually learn and adapt to new technologies, enriching my skill set and expanding my capabilities.",
    skills: [
      { name: "GIT", link: "https://git-scm.com/" },
      { name: "WordPress", link: "https://wordpress.org/" },
      { name: "trpc", link: "https://trpc.io/" },
      { name: "Solidity", link: "https://soliditylang.org/" },
      { name: "ChatGPT Prompt Engineering", link: "https://chat.openai.com/" },
    ],
  },
];
