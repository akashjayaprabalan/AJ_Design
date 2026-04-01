import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, TrendingUp, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { services, portfolioProjects, testimonials } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  ✨ Premium Web Design Services
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Websites That{' '}
                <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Actually Grow
                </span>{' '}
                Your Business
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional, high-performance websites designed for results. I create clean, modern designs that convert visitors into customers and help your business thrive online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    Get a Free Quote
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 hover:scale-105">
                    View Portfolio
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">50+ Happy Clients</div>
                    <div className="text-gray-500">5-Star Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-delay">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-orange-400 to-pink-400 rounded-lg transform rotate-6 opacity-20 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1763568258191-4095520e045b"
                alt="Modern workspace"
                className="relative rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What I Can Do{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">For You</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-stack web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon === 'Palette' && <Zap className="text-white" size={28} />}
                    {service.icon === 'Code' && <Target className="text-white" size={28} />}
                    {service.icon === 'MousePointerClick' && <TrendingUp className="text-white" size={28} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
                View All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600">Real results for real businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.slice(0, 3).map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-orange-500 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="text-sm font-semibold text-purple-600">{project.results}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white">
                View Full Portfolio
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Clients{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Say</span>
            </h2>
            <p className="text-xl text-gray-600">Don't just take my word for it</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-orange-500 text-orange-500" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create a website that drives real results. Get started with a free consultation and quote.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Get Your Free Quote Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
