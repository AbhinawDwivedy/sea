import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { Menu, X, Zap, Cpu, Radio } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const blur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: <Zap className="h-4 w-4" /> },
    { name: 'About', href: '#about', icon: <Cpu className="h-4 w-4" /> },
    { name: 'Activities', href: '#activities', icon: <Radio className="h-4 w-4" /> },
    { name: 'Events', href: '#events', icon: <Zap className="h-4 w-4" /> },
    { name: 'Team', href: '#team', icon: <Cpu className="h-4 w-4" /> },
    { name: 'Contact', href: '#contact', icon: <Radio className="h-4 w-4" /> }
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{ opacity }}
    >
      {/* Main Navigation Bar */}
      <motion.div
        className={`relative transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 border-b border-[#00F6FF]/20' 
            : 'bg-transparent'
        }`}
        style={{ backdropFilter: `blur(${blur}px)` }}
      >
        {/* Animated Border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F6FF] via-[#8A2BE2] to-[#00FF88]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Navigation Content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {/* Animated Logo Icon */}
              <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00F6FF] via-[#8A2BE2] to-[#00FF88] rounded-lg p-0.5">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <motion.div
                      className="w-6 h-6 bg-[#00F6FF] rounded-full"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
                
                {/* Orbital Ring */}
                <motion.div
                  className="absolute inset-0 border border-[#00F6FF]/30 rounded-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Brand Text */}
              <div className="hidden sm:block">
                <motion.h1 
                  className="text-xl font-bold bg-gradient-to-r from-[#00F6FF] via-[#8A2BE2] to-[#00FF88] bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  SE CLUB
                </motion.h1>
                <motion.p 
                  className="text-xs text-gray-400 tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  SATELLITE & ELECTRONICS
                </motion.p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="text-[#00F6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ rotate: 180 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="relative z-10">{item.name}</span>
                  </div>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#00F6FF]/10 via-[#8A2BE2]/10 to-[#00FF88]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Bottom Border */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00F6FF] to-[#8A2BE2] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="relative bg-gradient-to-r from-[#00F6FF] to-[#8A2BE2] text-black px-6 py-2 h-auto overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#00FF88]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 font-medium">Join Now</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Circuit Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #00F6FF 1px, transparent 1px),
                linear-gradient(0deg, #8A2BE2 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden"
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <motion.div
          className="bg-black/98 border-b border-[#00F6FF]/20 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-[#00F6FF]/10 rounded-lg transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMenuOpen ? 1 : 0, 
                    x: isMenuOpen ? 0 : -20 
                  }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="text-[#00F6FF]"
                    whileHover={{ rotate: 180 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span>{item.name}</span>
                  
                  {/* Arrow */}
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    →
                  </motion.div>
                </motion.button>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                className="pt-4 border-t border-[#00F6FF]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  y: isMenuOpen ? 0 : 20 
                }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-gradient-to-r from-[#00F6FF] to-[#8A2BE2] text-black py-3 h-auto"
                >
                  Join Now
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00F6FF] rounded-full pointer-events-none"
          style={{
            top: `${20 + (i * 15)}px`,
            right: `${50 + (i * 30)}px`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + (i * 0.5),
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.nav>
  );
}