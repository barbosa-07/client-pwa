import React from 'react';
import { ChevronRight, Check,  Facebook, Instagram, Linkedin, Twitter, Bot, Brain, Sparkles,   Target,  Users, Building2, BarChart } from 'lucide-react';

const HuvieoLanding = () => {
  const plans = [
    {
      name: 'AI Basic',
      price: '₹0',
      period: '',
      features: [
        'AI-powered career assessment',
        'Basic AI career suggestions',
        'AI-driven job trends insights',
        'AI community recommendations'
      ],
      cta: 'Start Your AI Journey',
      highlighted: false
    },
    {
      name: 'AI Premium',
      price: '₹500',
      period: '/month',
      features: [
        'Advanced AI career analysis',
        'AI-generated Career Roadmap',
        'AI-matched Expert Counseling',
        'Smart Job & Internship Matching',
        'AI-curated Webinars',
        'Intelligent Analytics Dashboard'
      ],
      cta: 'Unlock AI Premium',
      highlighted: true
    },
    {
      name: 'AI Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Custom AI solutions',
        'Bulk AI assessments',
        'Intelligent job matching',
        'Advanced AI analytics'
      ],
      cta: 'Get Enterprise AI',
      highlighted: false
    }
  ];

  const features = [
    {
      icon: Bot,
      title: "AI-Powered Analysis",
      description: "Our advanced AI analyzes thousands of career paths to find your perfect match"
    },
    {
      icon: Brain,
      title: "Intelligent Learning",
      description: "AI-driven personalized learning recommendations based on your career goals"
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "AI algorithm matches you with the most relevant job opportunities"
    }
  ];

  const whyChooseUs = [
    {
      icon: Brain,
      title: "AI-Powered Guidance",
      description: "Our AI gives you the most accurate and personalized career advice based on data-driven insights."
    },
    {
      icon: Users,
      title: "Expert Counseling",
      description: "Access to top career counselors and mentors for one-on-one sessions to guide you through complex career decisions."
    },
    {
      icon: BarChart,
      title: "Affordable & Accessible",
      description: "A freemium model that ensures everyone, no matter their financial situation, gets the support they need."
    },
    {
      icon: Building2,
      title: "Localized Recommendations",
      description: "Tailored career paths, resources, and job opportunities specific to the Indian market."
    }
  ];

  const faqs = [
    {
      question: "What is AI career counseling?",
      answer: "AI career counseling uses machine learning algorithms to analyze your skills, interests, and the job market to recommend personalized career paths and development plans."
    },
    {
      question: "How accurate are the career assessments?",
      answer: "Our AI models are trained on vast datasets and continuously updated to provide the most accurate recommendations based on real-time industry trends."
    },
    {
      question: "Is there a mobile app for Huvieo?",
      answer: "Yes, Huvieo is mobile-friendly, and we are launching a dedicated app soon for easy access on the go."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-purple-600 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-blue-600/90 to-purple-600/90" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center md:text-left md:w-2/3">
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 mr-2" />
              <span>AI-Powered Career Guidance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your AI Career Guide to Success
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Let our advanced AI analyze your potential and guide you to the perfect career path with personalized recommendations and real-time insights.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Start Free AI Analysis
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                Explore AI Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-600">Experience the future of career guidance with our AI technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-blue-600 text-white p-3 rounded-xl w-fit mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            The Best AI Career Counseling Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="bg-blue-600 text-white p-3 rounded-xl w-fit mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Choose Your AI Career Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm font-normal">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-bold text-xl mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-2xl mb-4">Huvieo AI</h3>
              <p className="text-gray-400">
                India&apos;s most sophisticated AI-powered career counseling platform
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white cursor-pointer">About Our AI</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <div key={index} className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-l-lg w-full text-gray-900"
                />
                <button className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HuvieoLanding;