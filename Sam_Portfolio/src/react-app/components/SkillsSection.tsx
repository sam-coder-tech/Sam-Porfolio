import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'Express', 'Django', 'REST APIs'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    gradient: 'from-orange-500 to-red-500',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-xl h-full">
                <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
