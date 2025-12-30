import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <a href="#home" className="text-xl font-bold">
                <span className="text-gradient">Vinod </span>
                <span className="text-foreground">Maurya</span>
              </a>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> in 2025
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                  { icon: Github, href: "https://github.com/vinodmaurya1", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/vinod-maurya-7ab821255", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:vinodmaurya4561@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </div>

          {/* Bottom Links */}
          <div className="mt-8 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>© 2025 All rights reserved.</span>
            {/*<span className="hidden md:inline">•</span>
             <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
