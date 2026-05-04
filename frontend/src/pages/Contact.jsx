import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalInfo, mockContactSubmit } from '../mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await mockContactSubmit(formData);
      setIsSubmitted(true);
      toast.success(response.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Get in touch for a free consultation and quote. I typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get in{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm always excited to discuss new projects and opportunities. Whether you need a complete website or just some advice, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-2 hover:border-blue-500 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-500 transition-all duration-300 group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-600">Australia</p>
                      <p className="text-sm text-gray-500 mt-1">Available for remote work worldwide</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-lg mb-4">What to Expect:</h3>
                <ul className="space-y-3">
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'Transparent pricing with no hidden fees',
                    'Clear timeline and project milestones'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="text-blue-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="mt-2 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="mt-2 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="mt-2 border-2 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, and timeline..."
                      required
                      rows={6}
                      className="mt-2 border-2 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Most projects are completed within 2-4 weeks, depending on complexity. I will provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Pricing varies based on project scope and requirements. I offer transparent, fixed-price quotes with no hidden fees. Contact me for a custom quote.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes! I provide post-launch support and maintenance packages to ensure your website continues to perform at its best.'
              },
              {
                question: 'Can you help with an existing website?',
                answer: 'Absolutely! I offer redesign services and can work with existing websites to improve design, performance, and functionality.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
