import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "React Native", level: 85 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "RESTful APIs", level: 95 },
      { name: "Socket.io", level: 85 },
    ],
  },
  {
    title: "Database",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 82 },
      { name: "Prisma ORM", level: 90 },
      { name: "Drizzle ORM", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "AWS", level: 78 },
      { name: "DigitalOcean", level: 85 },
      { name: "Linux Server", level: 88 },
      { name: "CI/CD Pipelines", level: 82 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
              delivering production-ready applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="group bg-gradient-card rounded-2xl border border-border p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-3 w-3 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.15 + skillIndex * 0.05 + 0.3,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* API Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 p-6 lg:p-8 bg-gradient-card rounded-2xl border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              Third-Party Integrations & APIs
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "OpenAI",
                "Stripe",
                "Razorpay",
                "PayU",
                "Cashfree",
                "Twilio",
                "Brevo",
                "Firebase",
                "Agora",
                "ZegoCloud",
                "ElevenLabs",
                "Google APIs",
                "Meta WhatsApp",
                "Socket.io",
              ].map((api, index) => (
                <motion.span
                  key={api}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-muted rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary/50 transition-all cursor-default"
                >
                  {api}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
