"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants, itemVariants } from "~/components/animation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Badge } from "~/components/ui/badge";
import { ScrollArea } from "~/components/ui/scroll-area";

export default function Page() {
  return (
    <ScrollArea className="w-full rounded-lg shadow-md">
      <main className="flex h-full min-h-[90vh] flex-col items-end justify-start bg-white p-4 text-justify">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full pb-10 sm:w-3/5"
        >
          <motion.h1
            variants={itemVariants}
            className="h1 text-end"
            id="about me"
          >
            about me
          </motion.h1>
          <motion.p variants={itemVariants} className="p">
            I am a <strong>Full-Stack Web Developer</strong> with a robust
            background in <strong>Machine Learning and Data Science</strong>. My
            passion for technology drives me to constantly explore new realms,
            making me a quick learner and highly adaptable professional. I
            thrive on challenges and love turning complex problems into clean,
            user-friendly solutions.
          </motion.p>
          <motion.p variants={itemVariants} className="p">
            Currently, I am expanding my expertise through a research data
            science internship focused on cancer research. This opportunity
            allows me to apply my{" "}
            <strong>analytical skills and machine learning knowledge</strong> to
            make meaningful contributions to critical health issues. It&apos;s
            an exhilarating experience that has deepened my understanding of
            bioinformatics and its impact on medical advancements.
          </motion.p>
          <motion.p variants={itemVariants} className="p">
            With an entrepreneurial mindset, I have initiated and led various
            projects that bridge the gap between data-driven insights and
            functional web applications. My goal is always to innovate and
            optimize, ensuring that every project not only meets but exceeds
            expectations.
          </motion.p>
          <motion.p variants={itemVariants} className="p">
            Whether I&apos;m coding, crunching data, or collaborating on
            breakthrough research, I bring a blend of expertise, dedication, and
            a forward-thinking approach to everything I do. Let&apos;s connect
            and explore how we can create something great together!
          </motion.p>
        </motion.article>

        <motion.section
          initial="hidden"
          animate="visible"
          className="w-full sm:w-3/5"
          variants={containerVariants}
        >
          <motion.h2 className="h2 text-end" variants={itemVariants}>
            skillsets
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="frontend-development">
                <AccordionTrigger>frontend development</AccordionTrigger>
                <AccordionContent>
                  <p>
                    As a frontend developer, I specialize in translating design
                    concepts into interactive web applications. Leveraging the
                    power of HTML, CSS, and JavaScript frameworks like React and
                    Vue, I strive to create seamless user experiences that
                    delight and engage users.
                  </p>
                </AccordionContent>
                <AccordionContent className="space-x-1">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">JavaScript</Badge>
                  </Link>
                  <Link
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">TypeScript</Badge>
                  </Link>
                  <Link
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">ReactJS</Badge>
                  </Link>
                  <Link
                    href="https://vuejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Vue</Badge>
                  </Link>
                  <Link
                    href="https://www.chartjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Chart.js</Badge>
                  </Link>
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">HTML</Badge>
                  </Link>
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">CSS</Badge>
                  </Link>
                  <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Tailwind</Badge>
                  </Link>
                  <Link
                    href="https://www.crummy.com/software/BeautifulSoup/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Beautiful Soup</Badge>
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="backend-development">
                <AccordionTrigger>backend development</AccordionTrigger>
                <AccordionContent>
                  As a backend developer, I specialize in building the backbone
                  of web applications. Proficient in technologies like Node.js,
                  SQL, and NoSQL databases, I design and implement robust
                  server-side architectures to handle data storage, retrieval,
                  and processing, ensuring seamless functionality for frontend
                  interfaces.
                </AccordionContent>
                <AccordionContent className="space-x-1">
                  <Link
                    href="https://www.w3schools.com/sql/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">SQL</Badge>
                  </Link>
                  <Link
                    href="https://www.postgresql.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">PostgreSQL</Badge>
                  </Link>
                  <Link
                    href="https://firebase.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Firebase</Badge>
                  </Link>
                  <Link
                    href="https://supabase.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Supabase</Badge>
                  </Link>
                  <Link
                    href="https://planetscale.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Planetscale</Badge>
                  </Link>
                  <Link
                    href="https://www.prisma.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Prisma Client</Badge>
                  </Link>
                  <Link
                    href="https://ganache.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Ganache</Badge>
                  </Link>
                  <Link
                    href="https://www.trufflesuite.com/truffle"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Truffle</Badge>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-analytics">
                <AccordionTrigger>data analytics</AccordionTrigger>
                <AccordionContent>
                  Data analytics is where I uncover valuable insights from raw
                  data. Proficient in Python libraries like Pandas, NumPy, and
                  scikit-learn, I excel in data manipulation, statistical
                  analysis, and machine learning tasks. My passion lies in
                  turning data into actionable insights that drive informed
                  decision-making.
                </AccordionContent>
                <AccordionContent className="space-x-1">
                  <Link
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Python</Badge>
                  </Link>
                  <Link
                    href="https://www.r-project.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">R</Badge>
                  </Link>
                  <Link
                    href="https://numpy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">NumPy</Badge>
                  </Link>
                  <Link
                    href="https://pandas.pydata.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Pandas</Badge>
                  </Link>
                  <Link
                    href="https://scikit-learn.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Scikit-learn</Badge>
                  </Link>
                  <Link
                    href="https://www.tensorflow.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">TensorFlow</Badge>
                  </Link>
                  <Link
                    href="https://keras.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Keras</Badge>
                  </Link>
                  <Link
                    href="https://matplotlib.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Matplotlib</Badge>
                  </Link>
                  <Link
                    href="https://seaborn.pydata.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Seaborn</Badge>
                  </Link>
                  <Link
                    href="https://xgboost.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">XGBoost</Badge>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="software-development">
                <AccordionTrigger>software development</AccordionTrigger>
                <AccordionContent>
                  In software development, my focus is on architecting robust
                  and scalable solutions. With expertise in languages like
                  JavaScript and TypeScript, along with frameworks like Node.js,
                  I enjoy tackling complex challenges to deliver efficient and
                  maintainable software products.
                </AccordionContent>
                <AccordionContent className="space-x-1">
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">JavaScript</Badge>
                  </Link>
                  <Link
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">TypeScript</Badge>
                  </Link>
                  <Link
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Python</Badge>
                  </Link>
                  <Link
                    href="https://www.java.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Java</Badge>
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="miscellaneous">
                <AccordionTrigger>miscellaneous</AccordionTrigger>
                <AccordionContent>
                  In the realm of miscellaneous technologies, I thrive on
                  exploring diverse tools and frameworks. From version control
                  with Git to content management with WordPress, my curiosity
                  drives me to continually learn and adapt to new technologies,
                  enriching my skill set and expanding my capabilities.
                </AccordionContent>
                <AccordionContent className="space-x-1">
                  <Link
                    href="https://git-scm.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">GIT</Badge>
                  </Link>
                  <Link
                    href="https://wordpress.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">WordPress</Badge>
                  </Link>
                  <Link
                    href="https://trpc.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">trpc</Badge>
                  </Link>
                  <Link
                    href="https://soliditylang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">Solidity</Badge>
                  </Link>
                  <Link
                    href="https://chat.openai.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline">ChatGPT Prompt Engineering</Badge>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </motion.section>
      </main>
    </ScrollArea>
  );
}
