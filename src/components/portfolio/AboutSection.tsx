import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const stats = [
  { number: "3+", label: "Years Experience", icon: Code2 },
  { number: "10+", label: "Projects Completed", icon: Rocket },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "100%", label: "Client Satisfaction", icon: Zap },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
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
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Passionate About Building
              <span className="text-gradient"> Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A results-driven developer with a focus on creating scalable, 
              maintainable solutions that drive business growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  With <span className="text-foreground font-semibold">3+ years</span> of professional experience, 
                  I specialize in building robust web and mobile applications using modern technologies. 
                  My expertise spans the entire development lifecycle, from concept to deployment.
                </p>
                <p className="leading-relaxed">
                  I've successfully delivered projects across various domains including e-commerce, 
                  real-time communication platforms, payment integrations, and enterprise solutions. 
                  My approach combines clean code practices with a keen eye for user experience.
                </p>
                <p className="leading-relaxed">
                  Beyond coding, I'm experienced in server configuration, CI/CD pipelines, 
                  and cloud infrastructure management on AWS and DigitalOcean. I believe in 
                  building solutions that are not just functional, but scalable and maintainable.
                </p>
              </div>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "Full Stack Development",
                  "API Design & Integration",
                  "Cloud Infrastructure",
                  "DevOps & CI/CD",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative p-6 bg-gradient-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <stat.icon className="h-4 w-4" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
