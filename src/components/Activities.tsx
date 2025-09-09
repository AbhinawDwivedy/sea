import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Wrench, Search, Trophy, Rocket } from 'lucide-react';

export function Activities() {
  const activities = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Workshops",
      description: "Hands-on training sessions covering satellite design, PCB development, and advanced electronics.",
      image: "https://images.unsplash.com/photo-1562568068-7a90cf9e499d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHdvcmtzaG9wJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc1NzMzMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00F6FF"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Research Projects",
      description: "Cutting-edge research in satellite communication, space technology, and innovative electronics.",
      image: "https://images.unsplash.com/photo-1712512161479-3d78afd4d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjByZXNlYXJjaCUyMHByb2plY3R8ZW58MXx8fHwxNzU3MzMzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#8A2BE2"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Hackathons",
      description: "Competitive programming and innovation challenges focusing on space-tech solutions.",
      image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NTczMzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00FF88"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Satellite Building",
      description: "Design and construct functional satellites from concept to deployment ready systems.",
      image: "https://images.unsplash.com/photo-1640796433065-f423a9d9a5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHN0YXRpb24lMjBvcmJpdHxlbnwxfHx8fDE3NTczMzI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#FF6B6B"
    }
  ];

  return (
    <section id="activities" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Rotating orbit lines */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-[#00F6FF]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-[#8A2BE2]/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Pulsing circuit pattern */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #00F6FF 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #8A2BE2 2px, transparent 2px),
                linear-gradient(45deg, transparent 48%, #00FF88 48%, #00FF88 52%, transparent 52%)
              `,
              backgroundSize: '60px 60px, 80px 80px, 100px 100px'
            }}
          />
        </motion.div>
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
            Our <span className="text-[#00F6FF]">Activities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engage in hands-on experiences that push the boundaries of technology and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateY: 10,
                rotateX: 5
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 border border-gray-700/70 backdrop-blur-xl h-full group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_80px_rgba(0,246,255,0.5)] transition-all duration-700 transform-gpu">
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    background: `radial-gradient(circle at center, ${activity.color}15, transparent 70%)`
                  }}
                />
                
                {/* Border glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ 
                    border: `1px solid ${activity.color}40`,
                    boxShadow: `0 0 20px ${activity.color}20`
                  }}
                />

                <div className="relative z-10 p-6">
                  {/* Image */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Floating icon */}
                    <motion.div
                      className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: `${activity.color}20` }}
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <div style={{ color: activity.color }}>
                        {activity.icon}
                      </div>
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00F6FF] transition-colors duration-300">
                    {activity.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Interactive elements */}
                  <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      className="w-8 h-1 rounded-full"
                      style={{ backgroundColor: activity.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: 32 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                    />
                    <span className="text-xs text-gray-400">Learn More →</span>
                  </div>
                </div>

                {/* Corner accent */}
                <div 
                  className="absolute bottom-0 left-0 w-0 h-0 border-r-[30px] border-r-transparent border-b-[30px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderBottomColor: `${activity.color}40` }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F6FF] rounded-full"
            style={{
              top: `${20 + (i * 5)}%`,
              left: `${10 + (i * 7)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}