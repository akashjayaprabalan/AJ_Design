import React from 'react';
import { Palette, Code, MousePointerClick, RefreshCw, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { services } from '../mock';

const Services = () => {
  const iconMap = {
    Palette: Palette,
    Code: Code,
    MousePointerClick: MousePointerClick,
    RefreshCw: RefreshCw,
    TrendingUp: TrendingUp
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services That{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web design and development solutions tailored to help your business succeed online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card 
                  key={service.id} 
                  className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500 overflow-hidden"
                >
                  <CardContent className="p-10">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="text-white" size={32} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm text-gray-900 mb-3">Key Benefits:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="text-blue-500 flex-shrink-0" size={16} />
                                <span className="text-sm text-gray-700">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How I{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-xl text-gray-600">A proven process for delivering exceptional results</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and target audience' },
              { step: '02', title: 'Design', description: 'Creating beautiful, user-focused designs that align with your brand' },
              { step: '03', title: 'Development', description: 'Building fast, secure, and scalable websites with clean code' },
              { step: '04', title: 'Launch & Support', description: 'Going live and providing ongoing support to ensure success' }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className="inline-block mb-4">
                    <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ready to take your business to the next level? Get started with a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
