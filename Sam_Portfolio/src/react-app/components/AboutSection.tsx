import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and efficient code is my passion',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Bringing beautiful interfaces to life with attention to detail',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Always exploring new technologies and frameworks',
  },
  {
    icon: Heart,
    title: 'Team Player',
    description: 'Collaborating effectively to achieve common goals',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Get to know me better</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/30 shadow-xl">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                  beautiful, functional web applications. With expertise in modern technologies and frameworks, 
                  I bring ideas to life through code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community. I believe in continuous learning 
                  and staying up-to-date with the latest industry trends.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-xl h-full">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg w-fit mb-4">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
