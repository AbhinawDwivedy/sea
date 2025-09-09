import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Satellite, Cpu, Lightbulb } from 'lucide-react';

export function About() {
  const cards = [
    {
      icon: <Satellite className="h-8 w-8" />,
      title: "Mission",
      description: "To advance satellite technology and space exploration through hands-on learning, research, and innovation in electronics and aerospace engineering."
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Vision", 
      description: "Creating the next generation of engineers and innovators who will shape the future of space technology and electronic systems."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "What We Do",
      description: "We design satellites, build electronic systems, conduct research, organize workshops, and participate in competitions to push technological boundaries."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#00F6FF] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#8A2BE2] rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-[#00FF88] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-[#00F6FF]">Our Club</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate community of students and professionals dedicated to exploring the frontiers of space technology and electronics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border border-gray-700/60 backdrop-blur-xl p-8 h-full group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(0,246,255,0.4)] hover:border-[#00F6FF]/80 transition-all duration-500 transform-gpu">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-[#00F6FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-[#00F6FF] mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {card.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#00F6FF] transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-[#00F6FF]/20 group-hover:border-t-[#00F6FF]/40 transition-all duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}