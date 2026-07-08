import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    description: 'Professional level certification for designing distributed systems',
  },
  {
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    year: '2023',
    description: 'Expertise in cloud architecture and deployment',
  },
  {
    title: 'React Advanced Certification',
    issuer: 'Meta',
    year: '2023',
    description: 'Advanced React patterns and best practices',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    year: '2022',
    description: 'Complete full-stack development specialization',
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Stanford University',
    year: '2022',
    description: 'Advanced algorithms and problem-solving techniques',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="min-h-screen flex items-center justify-center py-20 px-6">
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
              Certificates
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My professional certifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, rotateY: 5 }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-purple-500/30 shadow-xl h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-purple-400 text-sm font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3">{cert.year}</p>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
