import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of Technology',
    year: '2022 - 2024',
    description: 'Specialized in Software Engineering and Cloud Computing',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'State University',
    year: '2019 - 2022',
    description: 'Major in Computer Science with focus on Web Development',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20 px-6">
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
              Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My academic journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-purple-500/30 shadow-xl transform-gpu perspective-1000 hover:shadow-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <GraduationCap size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
