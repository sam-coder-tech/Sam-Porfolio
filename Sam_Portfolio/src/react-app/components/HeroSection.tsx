import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1 className="text-5xl lg:text-7xl font-bold">
            Hi, I am <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">John Doe</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Full Stack Developer | Creative Designer | Tech Enthusiast
          </p>
          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/20 transition-all duration-300"
            >
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <img
              src="https://019c2963-8955-7d74-8848-68395b8ed9e1.mochausercontent.com/portfolio-profile.png"
              alt="Profile"
              className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-purple-500 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
