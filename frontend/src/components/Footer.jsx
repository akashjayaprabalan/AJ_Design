import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              AJ Design
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building websites that drive real business growth for startups and small businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Website Design</li>
              <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Website Development</li>
              <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">Landing Pages</li>
              <li className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer">SEO Optimization</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors">
                <Phone size={16} />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
