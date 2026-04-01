// Mock data for the freelance web design website

export const personalInfo = {
  name: "Akash Jayaprabalan",
  email: "interactakash@gmail.com",
  phone: "+61478158654",
  title: "Freelance Web Designer & Developer",
  tagline: "Websites That Actually Grow Your Business",
  description: "I'm a passionate web designer and developer dedicated to helping small and medium businesses establish a powerful online presence. With a focus on clean design, fast performance, and conversion optimization, I create websites that don't just look good—they deliver results."
};

export const services = [
  {
    id: 1,
    title: "Website Design",
    description: "Custom, modern websites tailored to your brand and business goals. Every design is unique and crafted to convert visitors into customers.",
    benefits: ["Custom Design", "Brand Alignment", "User-Focused", "Mobile-First"],
    icon: "Palette"
  },
  {
    id: 2,
    title: "Website Development",
    description: "Clean, efficient code that brings designs to life. Fast-loading, SEO-friendly websites built with modern technologies.",
    benefits: ["Fast Performance", "Clean Code", "SEO-Optimized", "Secure"],
    icon: "Code"
  },
  {
    id: 3,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive sales. Perfect for campaigns and product launches.",
    benefits: ["Conversion-Focused", "A/B Testing Ready", "Quick Turnaround", "Analytics Integration"],
    icon: "MousePointerClick"
  },
  {
    id: 4,
    title: "Website Redesign",
    description: "Breathe new life into your outdated website. Modernize your design while improving performance and user experience.",
    benefits: ["Modern Look", "Improved UX", "Better Performance", "Increased Conversions"],
    icon: "RefreshCw"
  },
  {
    id: 5,
    title: "SEO Optimization",
    description: "Improve your search rankings and get found by customers. Technical SEO, on-page optimization, and performance tuning.",
    benefits: ["Higher Rankings", "More Traffic", "Better Visibility", "Technical SEO"],
    icon: "TrendingUp"
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern online store with seamless checkout experience and inventory management.",
    image: "https://images.unsplash.com/photo-1487338875411-8880f74114a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDB8fHx8MTc3NTAwMTIzMnww&ixlib=rb-4.1.0&q=85",
    category: "E-Commerce",
    results: "40% increase in online sales within 3 months"
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description: "High-converting landing page for a productivity software startup.",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MHx8fHwxNzc1MDAxMjQwfDA&ixlib=rb-4.1.0&q=85",
    category: "Landing Page",
    results: "65% conversion rate on free trial signups"
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Beautiful, mobile-friendly website with online ordering integration.",
    image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwb3J0Zm9saW98ZW58MHx8fHwxNzc1MDAxMjQwfDA&ixlib=rb-4.1.0&q=85",
    category: "Business Website",
    results: "200% increase in online orders"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Clean, minimal portfolio site for a creative professional.",
    image: "https://images.pexels.com/photos/6625658/pexels-photo-6625658.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Portfolio",
    results: "Featured client landed 3 new projects within first month"
  },
  {
    id: 5,
    title: "Corporate Redesign",
    description: "Complete website redesign for a B2B consulting firm.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Redesign",
    results: "50% reduction in bounce rate, 80% faster load times"
  },
  {
    id: 6,
    title: "Fitness Studio Site",
    description: "Responsive website with class booking and membership management.",
    image: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDB8fHx8MTc3NTAwMTIzMnww&ixlib=rb-4.1.0&q=85",
    category: "Business Website",
    results: "90% of bookings now made online"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "Mitchell & Co. Consulting",
    text: "Akash transformed our outdated website into a modern, professional platform. Our lead generation has tripled since the launch!",
    rating: 5
  },
  {
    id: 2,
    name: "James Chen",
    company: "FreshBite Restaurant",
    text: "The new website is beautiful and easy to use. Our online orders have skyrocketed. Best investment we've made for our business.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "TechStart Solutions",
    text: "Professional, responsive, and delivered on time. Akash understood exactly what we needed and exceeded our expectations.",
    rating: 5
  }
];

export const mockContactSubmit = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      resolve({ success: true, message: "Thank you! I'll get back to you within 24 hours." });
    }, 1000);
  });
};
