"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Home, 
  Users, 
  Building2, 
  FileText,
  Phone,
  Mail,
  HelpCircle,
  Shield,
  Scale,
  TrendingUp,
  Globe,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function SitemapPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      color: "text-blue-600",
      description: "Primary navigation pages of our website",
      pages: [
        { 
          name: "Home", 
          url: "/", 
          description: "Welcome page with company overview and services introduction",
          icon: Home,
          priority: "High"
        },
        { 
          name: "About Us", 
          url: "/about", 
          description: "Learn about our company history, mission, and values",
          icon: Users,
          priority: "High"
        },
        { 
          name: "Industries", 
          url: "/industries", 
          description: "Discover the industries we serve and specialized solutions",
          icon: Building2,
          priority: "High"
        },
        { 
          name: "Services", 
          url: "/services", 
          description: "Detailed information about our sourcing and procurement services",
          icon: TrendingUp,
          priority: "High"
        },
        { 
          name: "Our Network", 
          url: "/network", 
          description: "Explore our global supplier network and strategic partnerships",
          icon: Globe,
          priority: "High"
        },
        { 
          name: "Contact Us", 
          url: "/contact", 
          description: "Get in touch with our team for inquiries and support",
          icon: Phone,
          priority: "High"
        }
      ]
    },
    {
      title: "Service Pages",
      icon: FileText,
      color: "text-green-600",
      description: "Service-specific pages and forms",
      pages: [
        { 
          name: "Request a Quote", 
          url: "/quote", 
          description: "Submit your requirements for a custom sourcing quote",
          icon: FileText,
          priority: "High"
        },
        { 
          name: "FAQ", 
          url: "/faq", 
          description: "Frequently asked questions about our services",
          icon: HelpCircle,
          priority: "Medium"
        }
      ]
    },
    {
      title: "Legal Pages",
      icon: Shield,
      color: "text-purple-600",
      description: "Legal and policy information",
      pages: [
        { 
          name: "Privacy Policy", 
          url: "/privacy", 
          description: "How we collect, use, and protect your personal information",
          icon: Shield,
          priority: "Medium"
        },
        { 
          name: "Terms of Service", 
          url: "/terms", 
          description: "Legal terms and conditions for using our services",
          icon: Scale,
          priority: "Medium"
        }
      ]
    },
    {
      title: "Industry Sections",
      icon: Building2,
      color: "text-orange-600",
      description: "Industry-specific service pages",
      pages: [
        { 
          name: "Hotels & Resorts", 
          url: "/industries#hotels", 
          description: "Sourcing solutions for hospitality industry",
          icon: Star,
          priority: "Medium"
        },
        { 
          name: "Pharma & Healthcare", 
          url: "/industries#pharma", 
          description: "Medical equipment and healthcare supplies sourcing",
          icon: Star,
          priority: "Medium"
        },
        { 
          name: "Manufacturing", 
          url: "/industries#manufacturing", 
          description: "Raw materials and industrial equipment sourcing",
          icon: Star,
          priority: "Medium"
        },
        { 
          name: "Corporate & Offices", 
          url: "/industries#corporate", 
          description: "Office supplies and corporate workspace solutions",
          icon: Star,
          priority: "Medium"
        }
      ]
    },
    {
      title: "Service Categories",
      icon: TrendingUp,
      color: "text-blue-600",
      description: "Specific service offerings",
      pages: [
        { 
          name: "Sourcing & Procurement", 
          url: "/services#sourcing", 
          description: "Strategic material sourcing and procurement solutions",
          icon: TrendingUp,
          priority: "Medium"
        },
        { 
          name: "Bulk Supplier Management", 
          url: "/services#management", 
          description: "Comprehensive supplier relationship management",
          icon: Users,
          priority: "Medium"
        },
        { 
          name: "Price Negotiation", 
          url: "/services#negotiation", 
          description: "Expert negotiation for best market prices",
          icon: Star,
          priority: "Medium"
        },
        { 
          name: "Custom Supply Solutions", 
          url: "/services#custom", 
          description: "Tailored supply chain solutions for unique needs",
          icon: Building2,
          priority: "Medium"
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              Sitemap
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Website Sitemap
              <br />
              <span className="text-orange-400">Navigate Our Pages</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Explore all pages of Kuhaan Traders website to find the information you need about our sourcing services.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-blue-50 rounded-lg p-6">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-gray-600">Total Pages</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <Home className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <p className="text-gray-600">Main Pages</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-600 mb-2">4</div>
              <p className="text-gray-600">Service Pages</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <p className="text-gray-600">Legal Pages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Website Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse all pages organized by category for easy navigation
            </p>
          </div>

          <div className="space-y-12">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-8 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center space-x-4">
                    <section.icon className={`w-10 h-10 ${section.color}`} />
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.pages.map((page, pageIndex) => (
                      <Card key={pageIndex} className="hover:shadow-md transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <page.icon className={`w-8 h-8 ${section.color}`} />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">{page.name}</h3>
                                <Badge className={`text-xs ${getPriorityColor(page.priority)}`}>
                                  {page.priority}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-sm mb-3">{page.description}</p>
                              <a 
                                href={page.url}
                                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                              >
                                Visit Page
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jump directly to the most important pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get a Quote</h3>
                <p className="text-gray-600 mb-6">Submit your requirements and receive a competitive quote</p>
                <a href="/quote" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Phone className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                <p className="text-gray-600 mb-6">Reach out to our team for immediate assistance</p>
                <a href="/contact" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Contact Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <HelpCircle className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">FAQ</h3>
                <p className="text-gray-600 mb-6">Find answers to commonly asked questions</p>
                <a href="/faq" className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  View FAQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Explore our services and let us help optimize your supply chain.
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