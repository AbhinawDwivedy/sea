import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Send, MapPin, Mail, Phone, Satellite, Github, Instagram, Twitter } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Message sent successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Engineering Building, Room 201", "University Campus", "Tech City, TC 12345"],
      color: "#00F6FF"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@seclub.org", "president@seclub.org", "events@seclub.org"],
      color: "#8A2BE2"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Available Mon-Fri 9AM-5PM"],
      color: "#00FF88"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", url: "https://github.com/seclub", color: "#00F6FF" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", url: "https://instagram.com/seclub", color: "#8A2BE2" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", url: "https://twitter.com/seclub", color: "#00FF88" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1627947224567-4b17c3137ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXJzJTIwZ2FsYXh5JTIwZGFya3xlbnwxfHx8fDE3NTczMzI5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Space background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated satellite dish */}
      <motion.div
        className="absolute top-10 right-10 opacity-30"
        animate={{ 
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Satellite className="h-24 w-24 text-[#00F6FF]" />
      </motion.div>

      {/* Signal waves animation */}
      <div className="absolute top-20 right-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border-2 border-[#00F6FF]/20 rounded-full"
            style={{
              top: -64 + (i * 8),
              left: -64 + (i * 8),
            }}
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.5, 0.1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
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
            Get In <span className="text-[#00F6FF]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore the cosmos with us? Send us a signal and join our mission to push the boundaries of technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/80 backdrop-blur-xl p-8 relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_80px_rgba(0,246,255,0.4)] hover:border-[#00F6FF]/80 transition-all duration-500 transform-gpu">
              {/* Glassmorphic overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00F6FF]/5 via-transparent to-[#8A2BE2]/5" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                  <Send className="h-6 w-6 text-[#00F6FF]" />
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-[#00F6FF] focus:ring-[#00F6FF]/20"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-[#00F6FF] focus:ring-[#00F6FF]/20"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder-gray-400 focus:border-[#00F6FF] focus:ring-[#00F6FF]/20 min-h-32 resize-none"
                      placeholder="Tell us about your interest in space technology and electronics..."
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00F6FF] hover:bg-[#00F6FF]/80 text-black px-8 py-3 h-auto relative overflow-hidden group"
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending Signal...
                        </motion.div>
                      ) : (
                        <>
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.5 }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Send className="h-4 w-4" />
                            Send Message
                          </span>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-[#00F6FF]/20" />
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 border border-gray-700/70 backdrop-blur-xl p-6 group rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(0,246,255,0.3)] hover:border-[#00F6FF]/70 transition-all duration-500 transform-gpu">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `${info.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div style={{ color: info.color }}>
                        {info.icon}
                      </div>
                    </motion.div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00F6FF] transition-colors duration-300">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-300 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/30 border-gray-700/30 backdrop-blur-sm p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-all duration-300"
                      style={{ 
                        '--hover-color': social.color,
                        backgroundColor: 'rgba(31, 41, 55, 0.5)'
                      } as React.CSSProperties}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        backgroundColor: `${social.color}20`,
                        color: social.color
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#00F6FF]/10 via-[#8A2BE2]/10 to-[#00FF88]/10 rounded-lg p-6 backdrop-blur-sm border border-gray-700/30">
            <h4 className="text-xl font-semibold text-white mb-2">Ready to Launch Your Future?</h4>
            <p className="text-gray-300 mb-4">
              Join our community of innovators and help shape the future of space technology and electronics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-[#00F6FF] text-[#00F6FF] hover:bg-[#00F6FF] hover:text-black px-6 py-2 h-auto"
                onClick={() => window.open('https://discord.gg/seclub', '_blank')}
              >
                Join Discord Community
              </Button>
              <Button 
                variant="outline" 
                className="border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white px-6 py-2 h-auto"
                onClick={() => window.open('https://newsletter.seclub.org', '_blank')}
              >
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}