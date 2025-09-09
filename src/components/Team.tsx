import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, Award } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "President",
      specialization: "Satellite Systems",
      image: "https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMzMzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      achievements: ["CanSat Winner 2023", "Research Publication"],
      social: {
        github: "alexchen",
        linkedin: "alex-chen-eng",
        email: "alex@seclub.org"
      },
      featured: true
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      specialization: "Electronics Design",
      image: "https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMzMzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      achievements: ["PCB Design Expert", "Hackathon Mentor"],
      social: {
        github: "sarahjohnson",
        linkedin: "sarah-johnson-ece",
        email: "sarah@seclub.org"
      },
      featured: true
    },
    {
      name: "David Rodriguez",
      role: "Technical Lead",
      specialization: "Software & Control Systems",
      image: "https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMzMzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      achievements: ["Open Source Contributor", "AI Integration"],
      social: {
        github: "davidrodriguez",
        linkedin: "david-rodriguez-cs",
        email: "david@seclub.org"
      },
      featured: false
    },
    {
      name: "Emma Liu",
      role: "Research Coordinator",
      specialization: "Space Communication",
      image: "https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMzMzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      achievements: ["NASA Internship", "Conference Speaker"],
      social: {
        github: "emmaliu",
        linkedin: "emma-liu-aerospace",
        email: "emma@seclub.org"
      },
      featured: false
    },
    {
      name: "Michael Park",
      role: "Workshop Manager",
      specialization: "Hands-on Training",
      image: "https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMzMzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      achievements: ["Expert Trainer", "Community Builder"],
      social: {
        github: "michaelpark",
        linkedin: "michael-park-eng",
        email: "michael@seclub.org"
      },
      featured: false
    },
    {
      name: "Jessica Wu",
      role: "Events Coordinator",
      specialization: "Project Management",
      image: "https://images.unsplash.com/photo-1711385532992-9d620284a943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwdGVhbSUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMzMzA5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      achievements: ["Event Excellence", "Team Leadership"],
      social: {
        github: "jessicawu",
        linkedin: "jessica-wu-pm",
        email: "jessica@seclub.org"
      },
      featured: false
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating constellation pattern */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F6FF] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Connecting lines animation */}
        <motion.svg
          className="absolute inset-0 w-full h-full opacity-10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F6FF" />
              <stop offset="50%" stopColor="#8A2BE2" />
              <stop offset="100%" stopColor="#00FF88" />
            </linearGradient>
          </defs>
          <path
            d="M 100,200 Q 300,100 500,200 T 900,200"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M 200,400 Q 400,300 600,400 T 1000,400"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
          />
        </motion.svg>
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
            Meet Our <span className="text-[#00F6FF]">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate innovators and leaders driving the future of space technology and electronics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className={`bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border backdrop-blur-xl overflow-hidden group relative h-full rounded-3xl shadow-2xl hover:shadow-[0_0_70px_rgba(0,246,255,0.5)] transition-all duration-600 transform-gpu ${
                member.featured ? 'border-[#00F6FF]/80 shadow-[0_0_50px_rgba(0,246,255,0.3)]' : 'border-gray-700/80 hover:border-[#00F6FF]/60'
              }`}>
                {member.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-[#00F6FF] text-black text-xs">Leadership</Badge>
                  </div>
                )}

                {/* Profile image with glow effect */}
                <div className="relative p-6 pb-0">
                  <motion.div 
                    className="relative mx-auto w-32 h-32 mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, #00F6FF, #8A2BE2, #00FF88, #00F6FF)`,
                        padding: '3px'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full bg-gray-900 rounded-full" />
                    </motion.div>

                    {/* Profile image */}
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover"
                    />

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-full bg-[#00F6FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#00F6FF] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#8A2BE2] font-medium mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{member.specialization}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="px-6 pb-4">
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {member.achievements.map((achievement, i) => (
                      <Badge 
                        key={i}
                        variant="outline" 
                        className="text-xs border-[#00FF88]/40 text-[#00FF88]"
                      >
                        <Award className="h-3 w-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={`https://github.com/${member.social.github}`}
                      className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-[#00F6FF] hover:bg-[#00F6FF]/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-[#8A2BE2] hover:bg-[#8A2BE2]/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.social.email}`}
                      className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-[#00FF88] hover:bg-[#00FF88]/10 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00F6FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-0 h-0 border-r-[40px] border-r-transparent border-t-[40px] border-t-[#00F6FF]/20 group-hover:border-t-[#00F6FF]/40 transition-all duration-300" />
                
                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00F6FF] via-[#8A2BE2] to-[#00FF88] origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", label: "Active Members", color: "#00F6FF" },
            { number: "15", label: "Projects Completed", color: "#8A2BE2" },
            { number: "8", label: "Awards Won", color: "#00FF88" },
            { number: "100+", label: "Workshop Attendees", color: "#FF6B6B" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl lg:text-4xl font-bold mb-2"
                style={{ color: stat.color }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}