import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Target, Zap } from 'lucide-react';
import { personalInfo } from '../mock';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-2xl text-gray-700 font-medium">{personalInfo.title}</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {personalInfo.description}
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    Let's Work Together
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NzQ5NzY3MDd8MA&ixlib=rb-4.1.0&q=85"
                alt={personalInfo.name}
                className="relative rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Work With Me
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I bring expertise, dedication, and a results-driven approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Results-Focused',
                description: 'Every website I build is designed with your business goals in mind—more leads, more sales, more growth.'
              },
              {
                icon: Zap,
                title: 'Fast & Reliable',
                description: 'I deliver high-quality work on time, every time. No delays, no excuses—just professional results.'
              },
              {
                icon: CheckCircle,
                title: 'Client-First Approach',
                description: 'Your success is my success. I work closely with you to ensure the final product exceeds expectations.'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                description: '50+ happy clients and counting. My portfolio speaks for itself with real, measurable results.'
              }
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills &{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Design</h3>
                <ul className="space-y-3">
                  {['UI/UX Design', 'Responsive Design', 'Wireframing', 'Prototyping', 'Brand Identity', 'Adobe Creative Suite'].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Development</h3>
                <ul className="space-y-3">
                  {['HTML5 & CSS3', 'JavaScript/React', 'WordPress', 'PHP/Python', 'Node.js', 'MySQL/MongoDB'].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Optimization</h3>
                <ul className="space-y-3">
                  {['SEO Optimization', 'Performance Tuning', 'Analytics & Tracking', 'A/B Testing', 'Conversion Rate Optimization', 'Mobile Optimization'].map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something Great Together
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ready to discuss your project? Get in touch for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
