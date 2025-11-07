"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Building2, 
  Users,
  CheckCircle,
  Send
} from "lucide-react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    requirement: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      value: "Plot No:964, H.No 3-964, Sri Nilayam 3rd Floor, Ayyappa Society, Madhapur, Telangana, 500084",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "8871857856",
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      value: "rahul.kapoor63@gmail.com",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      color: "text-orange-600"
    }
  ];

  const industries = [
    "Hotels & Resorts",
    "Pharma & Healthcare",
    "Manufacturing & Engineering",
    "Corporate & Offices",
    "Other"
  ];

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "Over $500,000"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get in Touch
              <br />
              <span className="text-orange-400">Start Your Sourcing Journey</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Connect with our sourcing experts and discover how we can help optimize your supply chain with the best market quotes.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reach Out to Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with our sourcing specialists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    {info.value}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg">
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </Button>
            <a href="tel:8871857876">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and our sourcing experts will get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-green-700">
                      Thank you for contacting us. Our team will get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="industry">Industry *</Label>
                          <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>
                                  {industry}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="requirement">Specific Requirement *</Label>
                          <Input
                            id="requirement"
                            type="text"
                            placeholder="e.g., Hotel linens, Medical equipment"
                            value={formData.requirement}
                            onChange={(e) => handleInputChange("requirement", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your sourcing needs..."
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="mt-1"
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map & Office Info */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Office Location
                </h3>
                <p className="text-gray-600 mb-6">
                  Visit our headquarters or connect with us virtually. We're here to help with all your sourcing needs.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">Plot No:964, H.No 3-964, Sri Nilayam 3rd Floor</p>
                      <p className="text-sm text-gray-400">Ayyappa Society, Madhapur, Telangana, 500084</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Office Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Modern conference facilities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Dedicated sourcing team</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Sample showroom</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-700">Easy parking access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have Questions? We're Here to Help!
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our sourcing experts are available to answer your questions and provide personalized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );

}
