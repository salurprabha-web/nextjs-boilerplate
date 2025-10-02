"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Cookie,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const privacySections = [
    {
      title: "Information We Collect",
      icon: Database,
      color: "text-blue-600",
      content: [
        {
          heading: "Personal Information",
          text: "We collect personal information that you voluntarily provide when you use our services, including your name, email address, phone number, company name, and job title."
        },
        {
          heading: "Business Information",
          text: "We collect information about your business including industry type, company size, procurement needs, and specific requirements for sourcing services."
        },
        {
          heading: "Usage Information",
          text: "We automatically collect information about your interaction with our website, including IP address, browser type, pages visited, and time spent on our site."
        },
        {
          heading: "Communication Information",
          text: "We record communications when you contact us via email, phone, or through our contact forms to provide better service and maintain quality standards."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      color: "text-green-600",
      content: [
        {
          heading: "Service Provision",
          text: "We use your information to provide sourcing and procurement services, process quotes, manage orders, and communicate with you about your requests."
        },
        {
          heading: "Communication",
          text: "We use your contact information to respond to inquiries, send quotes, provide updates, and communicate about our services."
        },
        {
          heading: "Service Improvement",
          text: "We analyze usage data and feedback to improve our services, develop new features, and enhance user experience."
        },
        {
          heading: "Legal Compliance",
          text: "We use information as necessary to comply with legal obligations, prevent fraud, and protect our rights and the rights of our users."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Shield,
      color: "text-purple-600",
      content: [
        {
          heading: "Third-Party Service Providers",
          text: "We may share information with trusted third-party service providers who assist us in operating our website, processing payments, or delivering services."
        },
        {
          heading: "Business Partners",
          text: "We share relevant information with our vetted suppliers and partners to fulfill your sourcing requests and provide the services you've requested."
        },
        {
          heading: "Legal Requirements",
          text: "We may disclose information when required by law, subpoena, or other legal process, or to protect our rights, safety, or property."
        },
        {
          heading: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of all or part of our assets, user information may be transferred as part of that transaction."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      color: "text-orange-600",
      content: [
        {
          heading: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          heading: "Data Encryption",
          text: "We use industry-standard encryption to protect data transmitted between your browser and our servers, and for data stored on our systems."
        },
        {
          heading: "Access Control",
          text: "We restrict access to personal information to authorized employees, contractors, and agents who need the information to perform their jobs."
        },
        {
          heading: "Regular Audits",
          text: "We conduct regular security reviews and audits to ensure our security measures remain effective and up-to-date."
        }
      ]
    },
    {
      title: "Your Rights",
      icon: CheckCircle,
      color: "text-blue-600",
      content: [
        {
          heading: "Access and Correction",
          text: "You have the right to access, correct, or update your personal information. You can do this by contacting us using the information provided at the bottom of this page."
        },
        {
          heading: "Data Portability",
          text: "You have the right to receive a copy of your personal information in a commonly used electronic format."
        },
        {
          heading: "Deletion",
          text: "You have the right to request the deletion of your personal information, subject to certain legal exceptions."
        },
        {
          heading: "Objection",
          text: "You have the right to object to the processing of your personal information for certain purposes, including direct marketing."
        }
      ]
    },
    {
      title: "Cookies and Tracking",
      icon: Cookie,
      color: "text-green-600",
      content: [
        {
          heading: "Essential Cookies",
          text: "We use essential cookies that are necessary for the operation of our website, including security, network management, and accessibility."
        },
        {
          heading: "Analytics Cookies",
          text: "We use analytics cookies to understand how visitors interact with our website, which helps us improve our services and user experience."
        },
        {
          heading: "Preference Cookies",
          text: "We use preference cookies to remember your settings and choices, such as language preferences and font sizes."
        },
        {
          heading: "Cookie Control",
          text: "You can manage your cookie preferences through your browser settings. However, disabling essential cookies may affect your ability to use our website."
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
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Protecting Your
              <br />
              <span className="text-orange-400">Personal Information</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Kuhaan Traders is committed to protecting your privacy and ensuring the security of your personal information.
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
                  <AlertCircle className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This Privacy Policy explains how Kuhaan Traders collects, uses, shares, and protects your personal information when you use our website and services. We are committed to transparency and giving you control over your personal data.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Transparent data practices</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Industry-standard security</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Your rights respected</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-gray-700">Compliance with regulations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {privacySections.map((section, index) => (
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
                Questions About Your Privacy?
              </h2>
              <p className="text-xl text-gray-600">
                Contact our Data Protection Officer for any privacy-related questions
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">privacy@kuhaantraders.com</p>
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
            Experience secure and professional sourcing services with Kuhaan Traders.
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