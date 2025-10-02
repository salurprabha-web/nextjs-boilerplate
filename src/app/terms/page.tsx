"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Shield, 
  Clock, 
  DollarSign, 
  Users,
  CheckCircle,
  AlertTriangle,
  Scale,
  Building2,
  Mail,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

export default function TermsOfServicePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const termsSections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      color: "text-blue-600",
      content: [
        {
          heading: "Agreement",
          text: "By accessing and using Kuhaan Traders' website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations."
        },
        {
          heading: "Age Requirement",
          text: "You must be at least 18 years old to use our services. By using our services, you confirm that you meet this age requirement."
        },
        {
          heading: "Modification",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms."
        },
        {
          heading: "Notification",
          text: "We will notify users of material changes to these terms through email or prominent notices on our website."
        }
      ]
    },
    {
      title: "Services Description",
      icon: Building2,
      color: "text-green-600",
      content: [
        {
          heading: "Sourcing Services",
          text: "Kuhaan Traders provides material sourcing and procurement services including strategic sourcing, bulk supplier management, price negotiation, and custom supply solutions."
        },
        {
          heading: "Industry Focus",
          text: "We specialize in serving Hotels & Resorts, Pharma & Healthcare, Manufacturing, and Corporate & Offices sectors with tailored sourcing solutions."
        },
        {
          heading: "Global Network",
          text: "Our services leverage a network of 950+ verified suppliers across 4+ major global regions to provide competitive pricing and reliable delivery."
        },
        {
          heading: "Service Availability",
          text: "Services are subject to availability and may vary by region. We reserve the right to modify or discontinue services at any time."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      color: "text-purple-600",
      content: [
        {
          heading: "Accurate Information",
          text: "You agree to provide accurate, current, and complete information when using our services. You are responsible for maintaining the confidentiality of your account information."
        },
        {
          heading: "Lawful Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services for any illegal or unauthorized purpose."
        },
        {
          heading: "Payment Obligations",
          text: "You agree to pay all fees and charges associated with your use of our services. Late payments may be subject to additional fees and service suspension."
        },
        {
          heading: "Cooperation",
          text: "You agree to cooperate with our team and provide necessary information and documentation required for the successful completion of sourcing projects."
        }
      ]
    },
    {
      title: "Pricing and Payment",
      icon: DollarSign,
      color: "text-orange-600",
      content: [
        {
          heading: "Fee Structure",
          text: "Our fees are typically based on a percentage of the total order value or a fixed fee depending on the complexity of the sourcing requirements. All fees will be clearly communicated before service commencement."
        },
        {
          heading: "Payment Terms",
          text: "Standard payment terms are 50% advance and 50% on delivery. Custom payment terms may be negotiated based on order size and client relationship."
        },
        {
          heading: "Price Changes",
          text: "Prices for sourced materials are subject to market fluctuations. We will communicate any significant price changes before finalizing orders."
        },
        {
          heading: "Additional Costs",
          text: "Additional costs such as shipping, taxes, customs duties, and insurance are not included in our service fees and will be clearly communicated."
        }
      ]
    },
    {
      title: "Quality and Delivery",
      icon: CheckCircle,
      color: "text-blue-600",
      content: [
        {
          heading: "Quality Assurance",
          text: "We make reasonable efforts to ensure the quality of sourced materials through our supplier verification process. However, we do not manufacture the products and cannot guarantee perfect quality."
        },
        {
          heading: "Delivery Timeline",
          text: "Delivery timelines are estimates based on supplier information and may be affected by factors beyond our control including weather, customs, and logistics issues."
        },
        {
          heading: "Inspection Period",
          text: "You have a reasonable inspection period upon delivery to report any defects or discrepancies. All claims must be made in writing within the specified timeframe."
        },
        {
          heading: "Return Policy",
          text: "Returns are handled on a case-by-case basis and subject to supplier policies. We will assist in facilitating returns and resolving quality issues."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      icon: Shield,
      color: "text-green-600",
      content: [
        {
          heading: "Service Limitations",
          text: "Our liability is limited to the amount paid for our services. We are not liable for indirect, incidental, or consequential damages."
        },
        {
          heading: "Supplier Actions",
          text: "We are not liable for actions, errors, or omissions of third-party suppliers. We act as an intermediary and facilitate sourcing relationships."
        },
        {
          heading: "Force Majeure",
          text: "We are not liable for failures or delays due to circumstances beyond our reasonable control including natural disasters, wars, strikes, and government actions."
        },
        {
          heading: "Indemnification",
          text: "You agree to indemnify and hold harmless Kuhaan Traders from any claims arising from your use of our services or violation of these terms."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      color: "text-purple-600",
      content: [
        {
          heading: "Website Content",
          text: "All content on our website including text, graphics, logos, and software is the property of Kuhaan Traders and protected by intellectual property laws."
        },
        {
          heading: "User License",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use our website for personal or business purposes."
        },
        {
          heading: "Restrictions",
          text: "You may not reproduce, modify, distribute, or create derivative works of our website content without prior written permission."
        },
        {
          heading: "Client Information",
          text: "You retain ownership of any information you provide to us. We obtain rights to use this information solely for providing our services."
        }
      ]
    },
    {
      title: "Termination",
      icon: Clock,
      color: "text-orange-600",
      content: [
        {
          heading: "Termination by User",
          text: "You may terminate your use of our services at any time by providing written notice. Any outstanding fees will remain due and payable."
        },
        {
          heading: "Termination by Us",
          text: "We reserve the right to terminate or suspend your access to our services for violation of these terms, fraudulent activity, or at our discretion."
        },
        {
          heading: "Effect of Termination",
          text: "Upon termination, your right to use our services ceases immediately. We will fulfill any pending orders subject to these terms."
        },
        {
          heading: "Survival",
          text: "Sections including limitations of liability, indemnification, and intellectual property rights will survive termination of these terms."
        }
      ]
    }
  ];

  const lastUpdated = "December 2024";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Terms of Service
              <br />
              <span className="text-orange-400">Legal Agreement</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using Kuhaan Traders' services.
            </p>
            <div className="flex items-center justify-center text-blue-200">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      These Terms of Service constitute a legally binding agreement between you and Kuhaan Traders. By using our website and services, you agree to abide by these terms. If you do not agree to these terms, please do not use our services.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Read carefully before use</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Legal agreement required</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Terms subject to change</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Contact us with questions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {termsSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <div className="p-8 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <section.icon className={`w-10 h-10 ${section.color}`} />
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {item.heading}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-5">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-600">
                Contact our legal team for any questions about these Terms of Service
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">legal@kuhaantraders.com</p>
                  </div>
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">8871857876</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700 text-sm">Plot No:964, H.No 3-964, Sri Nilayam 3rd Floor, Ayyappa Society, Madhapur, Telangana, 500084</p>
                  </div>
                </div>
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
            Begin your sourcing journey with Kuhaan Traders today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                Request a Quote
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}