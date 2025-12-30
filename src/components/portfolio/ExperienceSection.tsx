import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Associate (MERN) Software Developer",
    company: "Diploy (Bisht Technologies Pvt. Ltd.)",
    location: "Sector 142 , Noida, Uttar Pradesh (On-site)",
    duration: "July 2025 - Present ,",
    description:
      "Leading development of enterprise-scale applications. Architecting microservices, implementing CI/CD pipelines, and mentoring junior developers.",
    highlights: [
      "Reduced deployment time by 60% with automated CI/CD",
      "Led migration of monolith to microservices architecture",
      "Implemented real-time features serving 10K+ concurrent users",
    ],
  },
  {
    type: "work",
    title: "MERN Stack Developer",
    company: "Asyscraft Technologies Pvt. Ltd",
    location: "Vaishali , Ghaziabad (On-site)",
    duration: "February 2023 – June 2025 (2.5 Year) ,",
    description:
      "Developed custom web and mobile applications for diverse clients. Integrated multiple payment gateways and third-party APIs.",
    highlights: [
      "Delivered 15+ client projects on time and budget",
      "Built cross-platform mobile app with 50K+ downloads",
      "Integrated Stripe, Razorpay, and PayU payment systems",
    ],
  },
  {
    type: "Internship",
    title: "Intern - Full Stack Developer",
    company: "Bhartiye Tech IT Solutions",
    location: "On-site",
    duration: "November 2022 – January 2023 (3 months) ,",
    description:
      "Started career building React applications and RESTful APIs. Gained foundational experience in full-stack development.",
    highlights: [
      "Contributed to MVP development for 3 startups",
      "Learned agile methodologies and Git workflows",
      "Built responsive UIs using React and Tailwind CSS",
    ],
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    year: "2025 – 2027 (Pursuing)",
    description:
      "Focused on software engineering, database systems, and web technologies.",
  },
  // {
  //   degree: "Full Stack Development Certification",
  //   institution: "Online Academy",
  //   year: "2021",
  //   description: "Comprehensive program covering modern JavaScript frameworks and Node.js.",
  // },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in software development, from learning the
              fundamentals to building enterprise solutions.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative mb-8 md:mb-12 ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:text-right"
                    : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                  className={`absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10 ${
                    index % 2 === 0
                      ? "left-0 md:left-1/2 md:-translate-x-1/2"
                      : "left-0 md:left-1/2 md:-translate-x-1/2"
                  }`}
                />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="group bg-gradient-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                    {/* Header */}
                    <div
                      className={`flex items-start gap-3 mb-4 ${
                        index % 2 === 0
                          ? "md:flex-row-reverse md:text-left"
                          : ""
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div
                        className={
                          index % 2 === 0 ? "md:text-right flex-1" : "flex-1"
                        }
                      >
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta */}
                    <div
                      className={`flex items-center gap-4 text-sm text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-muted-foreground text-sm mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`text-sm text-foreground flex items-center gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div
              className={`grid gap-6 ${
                education.length === 1
                  ? "grid-cols-1 place-items-center"
                  : "md:grid-cols-2"
              }`}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`bg-gradient-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300
        ${education.length === 1 ? "max-w-md w-full" : ""}
      `}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-primary text-sm">{edu.institution}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-2">
                    {edu.description}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {edu.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
