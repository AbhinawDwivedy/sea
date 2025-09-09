import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Events() {
  

  const upcomingEvents = [
    {
      title: "Satellite Design Workshop",
      date: "Mar 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Engineering Lab 201",
      participants: 25,
      description: "Learn the fundamentals of satellite design and build your first CubeSat prototype.",
      image: "https://images.unsplash.com/photo-1712512161479-3d78afd4d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjByZXNlYXJjaCUyMHByb2plY3R8ZW58MXx8fHwxNzU3MzMzMDg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: true
    },
    {
      title: "Electronics Hackathon",
      date: "Mar 22, 2024",
      time: "9:00 AM - 9:00 PM",
      location: "Innovation Center",
      participants: 50,
      description: "48-hour hackathon focusing on IoT and space technology solutions.",
      image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrYXRob24lMjBjb2RpbmclMjBjb21wZXRpdGlvbnxlbnwxfHx8fDE3NTczMzMwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "CanSat Competition 2023",
      date: "Nov 18, 2023",
      participants: 40,
      achievement: "1st Place Regional",
      image: "https://images.unsplash.com/photo-1640796433065-f423a9d9a5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBzcGFjZSUyMHN0YXRpb24lMjBvcmJpdHxlbnwxfHx8fDE3NTczMzI5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "PCB Design Masterclass",
      date: "Oct 25, 2023",
      participants: 30,
      achievement: "20 Projects Completed",
      image: "https://images.unsplash.com/photo-1562568068-7a90cf9e499d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHdvcmtzaG9wJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc1NzMzMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Space Technology Symposium",
      date: "Sep 15, 2023",
      participants: 80,
      achievement: "5 Research Papers",
      image: "https://images.unsplash.com/photo-1627947224567-4b17c3137ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHN0YXJzJTIwZ2FsYXh5JTIwZGFya3xlbnwxfHx8fDE3NTczMzI5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Arduino Workshop Series",
      date: "Aug 10, 2023",
      participants: 35,
      achievement: "15 IoT Projects",
      image: "https://images.unsplash.com/photo-1562568068-7a90cf9e499d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHdvcmtzaG9wJTIwY2lyY3VpdCUyMGJvYXJkfGVufDF8fHx8MTc1NzMzMzA4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, #00F6FF 2px, transparent 2px),
              radial-gradient(circle at 80% 20%, #8A2BE2 2px, transparent 2px),
              radial-gradient(circle at 40% 40%, #00FF88 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 120px 120px, 80px 80px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#00F6FF]">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting workshops, competitions, and learning opportunities
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Clock className="h-8 w-8 text-[#00F6FF]" />
            Upcoming Events
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gradient-to-br from-gray-900/70 via-gray-800/50 to-gray-900/70 border border-gray-700/70 backdrop-blur-xl overflow-hidden relative group rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(0,246,255,0.4)] transition-all duration-500 transform-gpu">

                  <div className="pt-0">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00F6FF] transition-colors duration-300">
                        {event.title}
                      </h4>
                      
                      <p className="text-gray-300 mb-4 text-sm">
                        {event.description}
                      </p>

                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#00F6FF]" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#8A2BE2]" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-[#00FF88]" />
                          <span>{event.participants} participants registered</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-[#00F6FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Calendar className="h-8 w-8 text-[#8A2BE2]" />
            Past Events
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-700/80 backdrop-blur-xl overflow-hidden group relative rounded-3xl shadow-2xl hover:shadow-[0_0_50px_rgba(138,43,226,0.4)] hover:border-[#8A2BE2]/80 transition-all duration-500 transform-gpu">
                  <div className="relative">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Event details overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-white font-semibold text-sm mb-1">{event.title}</h4>
                      <p className="text-gray-300 text-xs mb-2">{event.date}</p>
                      <div className="flex justify-between items-end">
                        <span className="text-[#00FF88] text-xs">{event.participants} participants</span>
                        <Badge variant="outline" className="text-xs border-[#8A2BE2] text-[#8A2BE2]">
                          {event.achievement}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Hover border effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#8A2BE2]/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ borderColor: "#8A2BE2" }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}