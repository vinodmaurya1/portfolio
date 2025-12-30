import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Whatsway | WhatsApp Marketing & Automation SaaS Platform",
    description:
      "WhatsApp Marketing & Automation SaaS Platform with Bots, Chats, Bulk Sender & AI",
    image: "/whatsway.png",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://codecanyon.net/item/whatsway-whatsapp-marketing-automation-saas-platform-with-bots-chats-bulk-sender-ai/59831604?s_rank=4",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AgentLabs - AI Voice Calling Agents",
    description:
      "AgentLabs includes a website but does not provide a CMS for editing. Any website changes must be made directly through the code. We can share the file path, however customization support is not provided as per Envato terms.",
    image: "/agentlabs.png",
    tech: ["React","Nodejs","Postgres","Twillio", "Socket.io","Firebase", "Express"],
    liveUrl: "https://codecanyon.net/item/agentlabs-ai-voice-calling-agents-lead-intelligence-saas-platform/60751656?s_rank=1",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "EsimConnect - eSIM Management SaaS Platform",
    description:
      "EsimConnect is a comprehensive eSIM management SaaS platform that enables users to easily manage and deploy eSIM profiles for their devices. With features like user authentication, profile management, and analytics, EsimConnect provides a seamless experience for both administrators and end-users.",
    image: "/esimconnect.png",
    tech: ["React","Nodejs","Postgres", "Firebase", "Express"],
    liveUrl: "https://esimconnect.diploy.in/",
    githubUrl: "#",
    featured: true,
  },
  // {
  //   title: "AI Content Generator",
  //   description:
  //     "Leveraging OpenAI GPT and ElevenLabs for automated content creation with text-to-speech capabilities.",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
  //   tech: ["React", "OpenAI", "ElevenLabs", "Node.js", "MongoDB"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
  // {
  //   title: "HR Management System",
  //   description:
  //     "Complete HR solution with attendance tracking (ESSL/ZKTeco integration), payroll, and employee management.",
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
  //   tech: ["React", "Node.js", "PostgreSQL", "Prisma", "Docker"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
  // {
  //   title: "WhatsApp Business Bot",
  //   description:
  //     "Automated customer support using Meta WhatsApp API with AI-powered responses and order tracking.",
  //   image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
  //   tech: ["Node.js", "Meta API", "OpenAI", "MongoDB", "Redis"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
  // {
  //   title: "Cross-Platform Mobile App",
  //   description:
  //     "React Native app with Google login, push notifications, and real-time data sync across iOS and Android.",
  //   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
  //   tech: ["React Native", "Firebase", "Node.js", "TypeScript"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
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
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of real-world projects showcasing my expertise in
              building scalable, production-ready applications.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative bg-gradient-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                      {/* <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-5 w-5" />
                      </Button> */}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {/* <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a> */}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
