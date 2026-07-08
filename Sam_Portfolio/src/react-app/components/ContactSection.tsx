import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com', color: 'from-red-500 to-orange-500' },
  { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'from-gray-600 to-gray-800' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'from-blue-600 to-blue-800' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'from-sky-500 to-blue-500' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Let's connect and build something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-50"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl border border-purple-500/30 shadow-2xl">
            <div className="text-center mb-8">
              <p className="text-gray-300 text-lg mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:hello@example.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Me an Email
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.1 }}
                    className="group/social"
                  >
                    <div className={`relative bg-gradient-to-br ${link.color} p-6 rounded-2xl shadow-xl flex flex-col items-center gap-3 hover:shadow-2xl transition-all duration-300`}>
                      <Icon size={32} className="text-white" />
                      <span className="text-white font-semibold text-sm">{link.label}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 text-gray-400"
        >
          <p>© 2024 Portfolio 3D. Built with React & Three.js</p>
        </motion.div>
      </div>
    </section>
  );
}
