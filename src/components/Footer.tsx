import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Instagram, Linkedin, Github, Twitter, Mail, Phone, Sparkles, Rocket, Satellite } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-[#00F6FF]/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-[#8A2BE2]/20 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-40 h-40 border border-[#00FF88]/20 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F6FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Club Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#hero');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center space-x-3 mb-4 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="h-8 w-8 text-[#00F6FF] group-hover:text-[#8A2BE2] transition-colors duration-300" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-[#00F6FF] transition-colors duration-300">
                  Space Electronics Club
                </h3>
              </motion.a>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-[#00F6FF] to-[#8A2BE2] rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.a 
              href="https://maps.google.com/?q=University+of+Technology+Engineering+Campus+Innovation+District+Tech+City"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F6FF]/10 to-[#8A2BE2]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gray-800/60 border border-[#00F6FF]/30 rounded-2xl p-6 backdrop-blur-xl group-hover:border-[#00F6FF]/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-6 w-6 text-[#00F6FF] mt-1 flex-shrink-0 group-hover:text-[#8A2BE2] transition-colors duration-300" />
                  </motion.div>
                  <div className="text-white space-y-2">
                    <p className="font-medium group-hover:text-[#00F6FF] transition-colors duration-300">University of Technology</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Engineering Campus</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Innovation District</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Tech City - 12345, USA</p>
                    <motion.div
                      className="text-xs text-[#00F6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      Click to view on map →
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="h-8 w-8 text-[#8A2BE2]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Quick Links
                </h3>
              </div>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-[#8A2BE2] to-[#00FF88] rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { name: 'Projects', href: '#projects' },
                { name: 'Team', href: '#team' },
                { name: 'Events', href: '#events' },
                { name: 'Contact Us', href: '#contact' },
                { name: 'Join Us', href: '#contact' },
                { name: 'Resources', href: '#resources' }
              ].map((link, index) => (
                <motion.li 
                  key={index} 
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-[#8A2BE2] to-[#00FF88] rounded-full group-hover:scale-125 transition-transform duration-200 relative z-10"
                      whileHover={{ rotate: 180 }}
                    />
                    <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200 relative z-10">
                      {link.name}
                    </span>
                    <motion.div
                      className="w-0 h-0.5 bg-gradient-to-r from-[#8A2BE2] to-[#00FF88] group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/10 to-[#00FF88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Satellite className="h-8 w-8 text-[#00FF88]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Resources
                </h3>
              </div>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-[#00FF88] to-[#00F6FF] rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.ul 
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { name: 'Documentation', href: 'https://docs.spaceelectronics.club', external: true },
                { name: 'Tutorials', href: 'https://tutorials.spaceelectronics.club', external: true },
                { name: 'GitHub', href: 'https://github.com/spaceelectronics', external: true },
                { name: 'Research Papers', href: 'https://research.spaceelectronics.club', external: true },
                { name: 'Competitions', href: '#competitions' },
                { name: 'Workshops', href: '#workshops' }
              ].map((link, index) => (
                <motion.li 
                  key={index} 
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    onClick={(e) => {
                      if (!link.external) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group relative overflow-hidden"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-[#00FF88] to-[#00F6FF] rounded-full group-hover:scale-125 transition-transform duration-200 relative z-10"
                      whileHover={{ rotate: 180 }}
                    />
                    <span className="text-sm font-medium group-hover:font-semibold transition-all duration-200 relative z-10">
                      {link.name}
                    </span>
                    {link.external && (
                      <motion.div
                        className="w-2 h-2 border border-[#00FF88] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        whileHover={{ scale: 1.2 }}
                      />
                    )}
                    <motion.div
                      className="w-0 h-0.5 bg-gradient-to-r from-[#00FF88] to-[#00F6FF] group-hover:w-full transition-all duration-300 absolute bottom-0 left-0"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-[#00F6FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 4: Connect With Us */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="h-8 w-8 text-[#00F6FF]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  Connect With Us
                </h3>
              </div>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-[#00F6FF] to-[#8A2BE2] rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Follow us on social media to stay updated with our latest projects, events, and space technology innovations.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                { 
                  icon: Instagram, 
                  href: 'https://instagram.com/spaceelectronics', 
                  color: 'hover:text-pink-400', 
                  bg: 'hover:bg-pink-500/20',
                  borderColor: 'hover:border-pink-400'
                },
                { 
                  icon: Linkedin, 
                  href: 'https://linkedin.com/company/spaceelectronics', 
                  color: 'hover:text-blue-400', 
                  bg: 'hover:bg-blue-500/20',
                  borderColor: 'hover:border-blue-400'
                },
                { 
                  icon: Github, 
                  href: 'https://github.com/spaceelectronics', 
                  color: 'hover:text-gray-300', 
                  bg: 'hover:bg-gray-500/20',
                  borderColor: 'hover:border-gray-300'
                },
                { 
                  icon: Twitter, 
                  href: 'https://twitter.com/spaceelectronics', 
                  color: 'hover:text-blue-300', 
                  bg: 'hover:bg-blue-400/20',
                  borderColor: 'hover:border-blue-300'
                }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 ${social.color} ${social.bg} ${social.borderColor} transition-all duration-300 group relative overflow-hidden`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00F6FF]/10 to-[#8A2BE2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00F6FF]/5 to-[#8A2BE2]/5 rounded-full"
                    whileHover={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className="h-6 w-6 relative z-10" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div 
              className="space-y-4 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:contact@spaceelectronics.club"
                className="flex items-center space-x-3 text-gray-300 group cursor-pointer relative overflow-hidden rounded-lg p-2 -m-2"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5 text-[#00F6FF]" />
                </motion.div>
                <span className="group-hover:text-white transition-colors duration-200 relative z-10">contact@spaceelectronics.club</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00F6FF]/10 to-[#8A2BE2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                />
              </motion.a>
              <motion.a 
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-300 group cursor-pointer relative overflow-hidden rounded-lg p-2 -m-2"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5 text-[#00F6FF]" />
                </motion.div>
                <span className="group-hover:text-white transition-colors duration-200 relative z-10">+1 (555) 123-4567</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00F6FF]/10 to-[#8A2BE2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Separator and Copyright */}
        <motion.div
          className="mt-20 pt-8 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Animated separator line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-[#00F6FF]/50 to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
          
          <div className="text-center space-y-4">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              © 2025 Space Electronics Club. All rights reserved.
            </motion.p>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="h-4 w-4 text-[#00F6FF]" />
              </motion.div>
              <span className="text-[#00F6FF] text-sm font-medium">
                Exploring the Future of Space Technology
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Satellite className="h-4 w-4 text-[#8A2BE2]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
