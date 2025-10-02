"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Package, 
  DollarSign, 
  Settings, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp,
  Clock,
  Award,
  Target,
  Zap,
  Shield,
  Globe
} from "lucide-react";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: "sourcing",
      title: "Sourcing & Procurement",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
      description: "Strategic material sourcing and procurement solutions for optimal business outcomes",
      hero: "Strategic Sourcing for Optimal Results",
      heroDescription: "Our expert sourcing team identifies, evaluates, and procures the best materials for your business needs, ensuring quality, cost-effectiveness, and timely delivery through our extensive supplier network.",
      features: [
        {
          title: "Supplier Identification & Vetting",
          description: "Rigorous supplier evaluation process to identify the most reliable and cost-effective partners",
          icon: Users
        },
        {
          title: "Quality Assurance & Compliance",
          description: "Comprehensive quality checks and regulatory compliance verification for all materials",
          icon: Shield
        },
        {
          title: "Market Intelligence & Research",
          description: "In-depth market analysis and research to identify the best sourcing opportunities",
          icon: Target
        },
        {
          title: "End-to-End Procurement Management",
          description: "Complete procurement process management from requirement to delivery",
          icon: Package
        }
      ],
      benefits: [
        "Access to 200+ pre-vetted, reliable suppliers across multiple industries",
        "Consistent quality assurance with comprehensive compliance checks",
        "Reduced procurement time and costs through strategic sourcing",
        "Expert market insights and recommendations for optimal purchasing decisions",
        "Full compliance with industry standards and regulatory requirements"
      ],
      process: [
        "Requirement Analysis & Planning",
        "Supplier Research & Identification",
        "Quality Verification & Compliance Check",
        "Price Negotiation & Contract Finalization",
        "Order Placement & Processing",
        "Quality Control & Inspection",
        "Delivery Management & Follow-up"
      ],
      caseStudy: {
        client: "Offhome Hotels & Groups",
        challenge: "Needed comprehensive hospitality supplies for new hotel chain",
        solution: "Strategic sourcing of premium linens, amenities, and furniture",
        result: "30% cost savings with guaranteed quality standards"
      }
    },
    {
      id: "management",
      title: "Bulk Supplier Management",
      icon: Users,
      color: "bg-green-100 text-green-600",
      description: "Efficient management of multiple supplier relationships for streamlined operations",
      hero: "Streamlined Bulk Supplier Operations",
      heroDescription: "Manage multiple suppliers efficiently with our comprehensive bulk supplier management system, ensuring optimal performance, reliability, and cost-effectiveness for your business operations.",
      features: [
        {
          title: "Supplier Performance Tracking",
          description: "Monitor and evaluate supplier performance metrics with detailed analytics",
          icon: TrendingUp
        },
        {
          title: "Strategic Relationship Management",
          description: "Build and maintain strong, long-term supplier relationships",
          icon: Users
        },
        {
          title: "Contract & Agreement Management",
          description: "Manage supplier contracts, agreements, and compliance requirements",
          icon: Shield
        },
        {
          title: "Inventory & Supply Coordination",
          description: "Coordinate inventory and supply across multiple suppliers seamlessly",
          icon: Package
        }
      ],
      benefits: [
        "Improved supplier performance and reliability through active management",
        "Reduced operational complexity with centralized supplier coordination",
        "Better risk management and contingency planning",
        "Enhanced communication and collaboration with suppliers",
        "Cost optimization through volume purchasing and efficient management"
      ],
      process: [
        "Supplier Onboarding & Integration",
        "Performance Metrics & KPIs Setup",
        "Regular Monitoring & Evaluation",
        "Relationship Building & Communication",
        "Contract Review & Renewal",
        "Performance Evaluation & Feedback",
        "Continuous Improvement & Optimization"
      ],
      caseStudy: {
        client: "G-Arena Group",
        challenge: "Managing multiple suppliers for corporate office setup",
        solution: "Centralized supplier management with performance tracking",
        result: "Streamlined operations with 25% improved efficiency"
      }
    },
    {
      id: "negotiation",
      title: "Price Negotiation & Best Market Quotes",
      icon: DollarSign,
      color: "bg-orange-100 text-orange-600",
      description: "Expert negotiation strategies to secure the most competitive market prices",
      hero: "Get the Best Market Quotes Guaranteed",
      heroDescription: "Leverage our negotiation expertise and market knowledge to secure the most competitive prices for your materials and supplies, ensuring maximum value for your investment.",
      features: [
        {
          title: "Market Price Analysis & Intelligence",
          description: "Comprehensive market price analysis and trend monitoring",
          icon: Target
        },
        {
          title: "Strategic Negotiation Planning",
          description: "Customized negotiation strategies for optimal pricing outcomes",
          icon: DollarSign
        },
        {
          title: "Volume Pricing & Bulk Discounts",
          description: "Leverage purchasing volume for better pricing terms and conditions",
          icon: Package
        },
        {
          title: "Contract Terms & Conditions",
          description: "Negotiate favorable contract terms, payment conditions, and service levels",
          icon: Shield
        }
      ],
      benefits: [
        "Significant cost savings on procurement (average 20-30% reduction)",
        "Competitive market pricing with transparent pricing structures",
        "Favorable payment terms and conditions",
        "Long-term pricing stability and predictability",
        "Best value for money with quality assurance"
      ],
      process: [
        "Market Research & Price Analysis",
        "Supplier Pricing Evaluation",
        "Negotiation Strategy Development",
        "Supplier Negotiation & Discussion",
        "Term Finalization & Agreement",
        "Contract Signing & Implementation",
        "Price Monitoring & Review"
      ],
      caseStudy: {
        client: "Saaxis Infra",
        challenge: "Needed competitive pricing for large-scale AC and TV units",
        solution: "Strategic negotiation with multiple suppliers",
        result: "Achieved 35% cost reduction on equipment procurement"
      }
    },
    {
      id: "custom",
      title: "Custom Supply Solutions",
      icon: Settings,
      color: "bg-purple-100 text-purple-600",
      description: "Tailored supply chain solutions designed to address unique business requirements",
      hero: "Customized Solutions for Unique Requirements",
      heroDescription: "Develop bespoke supply chain solutions that address your specific business challenges and requirements, ensuring optimal performance and efficiency.",
      features: [
        {
          title: "Requirements Assessment & Analysis",
          description: "Thorough analysis of your specific supply chain needs and challenges",
          icon: Target
        },
        {
          title: "Custom Solution Design & Planning",
          description: "Tailored supply chain solution design and detailed planning",
          icon: Settings
        },
        {
          title: "Implementation & Deployment",
          description: "Seamless implementation and deployment of custom solutions",
          icon: Zap
        },
        {
          title: "Ongoing Support & Optimization",
          description: "Continuous support, monitoring, and optimization of implemented solutions",
          icon: Users
        }
      ],
      benefits: [
        "Tailored solutions specifically designed for your unique business needs",
        "Improved operational efficiency and performance",
        "Enhanced supply chain flexibility and adaptability",
        "Better alignment with your business goals and objectives",
        "Competitive advantage through customized supply chain strategies"
      ],
      process: [
        "Detailed Requirements Gathering",
        "Comprehensive Needs Analysis",
        "Custom Solution Design & Planning",
        "Implementation Strategy Development",
        "Solution Deployment & Integration",
        "Performance Monitoring & Evaluation",
        "Continuous Optimization & Improvement"
      ],
      caseStudy: {
        client: "Leecomfort",
        challenge: "Needed comprehensive supply solution for large-scale hospitality project",
        solution: "Custom supply chain design for tiles, AC units, kitchen equipment, and more",
        result: "Complete project delivery with 100% client satisfaction"
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Grand Hotels Group",
      role: "Procurement Director",
      quote: "Their sourcing expertise helped us reduce costs by 30% while maintaining quality standards. Exceptional service!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "LAGRAN Software Solutions",
      role: "Supply Chain Manager",
      quote: "The bulk supplier management system streamlined our operations significantly. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "TechCorp Industries",
      role: "Operations Director",
      quote: "Custom supply solutions designed specifically for our needs. Perfect fit for our business model.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Comprehensive Sourcing
              <br />
              <span className="text-orange-400">Supply Chain Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              End-to-end material sourcing and supply chain management services designed to optimize your procurement process.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your material sourcing and supply chain needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <Card key={service.id} className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardHeader>
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="sourcing" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex flex-col items-center gap-2 p-4">
                  <service.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="space-y-12">
                {/* Service Hero */}
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.hero}
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {service.heroDescription}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.features.map((feature, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-center">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="bg-blue-50 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Our Process
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                          {index + 1}
                        </div>
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study */}
                {service.caseStudy && (
                  <div className="bg-orange-50 rounded-xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Success Story
                    </h4>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="mb-4">
                        <Badge variant="outline" className="bg-orange-100 text-orange-700 mb-2">
                          Featured Case Study
                        </Badge>
                        <h5 className="text-xl font-semibold text-gray-900">{service.caseStudy.client}</h5>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h6 className="font-semibold text-gray-700 mb-2">Challenge</h6>
                          <p className="text-sm text-gray-600">{service.caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-700 mb-2">Our Solution</h6>
                          <p className="text-sm text-gray-600">{service.caseStudy.solution}</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-gray-700 mb-2">Result</h6>
                          <p className="text-sm text-gray-600 font-semibold text-green-600">{service.caseStudy.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses that have transformed their procurement with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
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
            Let our expert team help you transform your procurement process with our comprehensive sourcing solutions.
          </p>
          <a href="/quote">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
              Get Started Today
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}