"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Building2,
  Users,
  TrendingUp
} from "lucide-react";

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      color: "text-blue-600",
      faqs: [
        {
          question: "What services does Kuhaan Traders provide?",
          answer: "Kuhaan Traders specializes in material sourcing and procurement services for Hotels, Pharma, Manufacturing, and Corporate sectors. We offer strategic sourcing, bulk supplier management, price negotiation, and custom supply solutions."
        },
        {
          question: "How long has Kuhaan Traders been in business?",
          answer: "Kuhaan Traders was established in 2018 and has been serving clients across multiple industries with professional sourcing solutions for over 7 years."
        },
        {
          question: "What industries do you serve?",
          answer: "We primarily serve four major industries: Hotels & Resorts, Pharma & Healthcare, Manufacturing, and Corporate & Offices. Each industry has specialized sourcing requirements that we're equipped to handle."
        },
        {
          question: "What makes Kuhaan Traders different from other sourcing companies?",
          answer: "Our global network of 950+ suppliers across 4+ major regions, combined with our strategic partnerships and industry expertise, allows us to provide competitive pricing and reliable delivery that sets us apart."
        }
      ]
    },
    {
      title: "Sourcing Process",
      icon: TrendingUp,
      color: "text-green-600",
      faqs: [
        {
          question: "How does your sourcing process work?",
          answer: "Our process begins with understanding your requirements, then we consult our extensive supplier network, negotiate the best prices, and provide you with multiple options. Once you select, we manage the entire procurement process including quality assurance and delivery."
        },
        {
          question: "How quickly can I get a quote?",
          answer: "We provide detailed quotes within 24-48 hours of receiving your requirements. For urgent requests, we can expedite the process and provide initial quotes within 2 hours."
        },
        {
          question: "What information do you need to provide a quote?",
          answer: "We need your company information, contact details, industry type, product requirements, quantity needed, order frequency, budget range, and timeline. Detailed specifications help us provide more accurate quotes."
        },
        {
          question: "Do you handle international shipping?",
          answer: "Yes, we work with suppliers across different regions and can handle international logistics, customs clearance, and delivery to your location as part of our comprehensive service."
        }
      ]
    },
    {
      title: "Supplier Network",
      icon: Building2,
      color: "text-purple-600",
      faqs: [
        {
          question: "How many suppliers are in your network?",
          answer: "We have access to over 950+ verified suppliers across 4+ major global regions including Asia-Pacific, Europe, North America, and our Global Network for multi-regional sourcing."
        },
        {
          question: "How do you verify your suppliers?",
          answer: "All our suppliers undergo a rigorous verification process including certification checks, quality audits, financial stability assessment, and performance history reviews. We also conduct regular re-evaluations to maintain quality standards."
        },
        {
          question: "What types of products can you source?",
          answer: "We can source a wide range of products including hotel linens and supplies, medical equipment, raw materials, industrial machinery, office furniture, IT equipment, packaging materials, and more."
        },
        {
          question: "Can you work with custom specifications?",
          answer: "Absolutely! We specialize in custom supply solutions and can work with your specific requirements, including custom manufacturing, specialized materials, and unique product specifications."
        }
      ]
    },
    {
      title: "Pricing & Payment",
      icon: Users,
      color: "text-orange-600",
      faqs: [
        {
          question: "How are your fees structured?",
          answer: "Our pricing is transparent and typically based on a percentage of the total order value or a fixed fee depending on the complexity of the sourcing requirements. We discuss all fees upfront with no hidden charges."
        },
        {
          question: "What payment terms do you offer?",
          answer: "We offer flexible payment terms including 50% advance and 50% on delivery, or terms can be customized based on your business requirements and order size."
        },
        {
          question: "Are there minimum order requirements?",
          answer: "Minimum order requirements vary by product category and supplier. We work with you to find the best solution whether you need small quantities or bulk orders."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we can negotiate volume discounts with our suppliers and pass the savings on to you. The larger the order, the better the pricing we can typically achieve."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      title: "Live Chat Support",
      description: "Chat with our sourcing experts in real-time",
      icon: MessageCircle,
      color: "text-blue-600",
      action: "Start Chat",
      availability: "Available 9 AM - 6 PM"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our specialists",
      icon: Phone,
      color: "text-green-600",
      action: "Call Now",
      availability: "Available 9 AM - 6 PM"
    },
    {
      title: "Email Support",
      description: "Get detailed responses via email",
      icon: Mail,
      color: "text-purple-600",
      action: "Send Email",
      availability: "24/7 Response"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get Answers to
              <br />
              <span className="text-orange-400">Common Questions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Find comprehensive answers about our sourcing services, processes, and how we can help optimize your supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers organized by topic for quick and easy reference
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`faq-${index}-${faqIndex}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left hover:text-orange-600 transition-colors">
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you with any additional questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className={`w-8 h-8 ${option.color}`} />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {option.availability}
                    </div>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      {option.action}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get started today and let our sourcing experts help you find the best solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                Get Started Today
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg">
                Contact Support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}