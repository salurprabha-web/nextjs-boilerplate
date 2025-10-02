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
  FileText, 
  Upload, 
  Calculator, 
  CheckCircle, 
  Star, 
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Send,
  AlertCircle
} from "lucide-react";

export default function QuotePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    productCategory: "",
    quantity: "",
    frequency: "",
    budget: "",
    timeline: "",
    specifications: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteEstimate, setQuoteEstimate] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const calculateQuoteEstimate = () => {
    // Simple estimation logic based on quantity and industry
    const baseRate = {
      "Hotels & Resorts": 50,
      "Pharma & Healthcare": 75,
      "Manufacturing & Engineering": 60,
      "Corporate & Offices": 45
    };

    const quantity = parseInt(formData.quantity) || 0;
    const rate = baseRate[formData.industry as keyof typeof baseRate] || 50;
    
    if (quantity > 0) {
      const estimate = quantity * rate;
      setQuoteEstimate(estimate);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const industries = [
    "Hotels & Resorts",
    "Pharma & Healthcare",
    "Manufacturing & Engineering",
    "Corporate & Offices"
  ];

  const productCategories = [
    "Bedding & Linens",
    "Medical Equipment",
    "Raw Materials",
    "Office Furniture",
    "IT Equipment",
    "Packaging Materials",
    "Industrial Supplies",
    "Other"
  ];

  const frequencies = [
    "One-time",
    "Monthly",
    "Quarterly",
    "Annual",
    "Ongoing"
  ];

  const timelines = [
    "Immediate (within 1 week)",
    "Urgent (1-2 weeks)",
    "Standard (2-4 weeks)",
    "Flexible (1+ month)"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Best Market Prices",
      description: "Get competitive quotes from our extensive supplier network"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Receive detailed quotes within 24-48 hours"
    },
    {
      icon: Users,
      title: "Expert Consultation",
      description: "Personalized advice from sourcing specialists"
    },
    {
      icon: TrendingUp,
      title: "Cost Savings",
      description: "Average 20-30% savings on procurement costs"
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
              Request a Quote
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Get Your Best
              <br />
              <span className="text-orange-400">Market Quote Today</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Fill out our simple quote form and receive competitive pricing from our extensive supplier network within 24-48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Request a Quote From Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professional sourcing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get Your Custom Quote
              </h2>
              <p className="text-xl text-gray-600">
                Provide your requirements and we'll prepare a detailed quote for you
              </p>
            </div>

            {isSubmitted ? (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-12 text-center">
                  <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    Quote Request Submitted Successfully!
                  </h3>
                  <p className="text-green-700 mb-6">
                    Thank you for your request. Our sourcing specialists will review your requirements and send you a detailed quote within 24-48 hours.
                  </p>
                  <div className="bg-white rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                    <ol className="text-left space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                        Our team reviews your requirements within 2 hours
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                        We consult with our supplier network for best pricing
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                        You receive a detailed quote with multiple options
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                        Our specialist follows up to discuss the quote
                      </li>
                    </ol>
                  </div>
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Company Information */}
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2" />
                        Company Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="companyName">Company Name *</Label>
                          <Input
                            id="companyName"
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="contactPerson">Contact Person *</Label>
                          <Input
                            id="contactPerson"
                            type="text"
                            value={formData.contactPerson}
                            onChange={(e) => handleInputChange("contactPerson", e.target.value)}
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
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="bg-green-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="w-5 h-5 mr-2" />
                        Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <div>
                          <Label htmlFor="productCategory">Product Category *</Label>
                          <Select value={formData.productCategory} onValueChange={(value) => handleInputChange("productCategory", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select product category" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="quantity">Quantity Required *</Label>
                          <Input
                            id="quantity"
                            type="number"
                            placeholder="e.g., 1000 units"
                            value={formData.quantity}
                            onChange={(e) => handleInputChange("quantity", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="frequency">Order Frequency</Label>
                          <Select value={formData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              {frequencies.map((frequency) => (
                                <SelectItem key={frequency} value={frequency}>
                                  {frequency}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="timeline">Required Timeline</Label>
                          <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Input
                            id="budget"
                            type="text"
                            placeholder="e.g., $10,000 - $50,000"
                            value={formData.budget}
                            onChange={(e) => handleInputChange("budget", e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="specifications">Detailed Specifications</Label>
                        <Textarea
                          id="specifications"
                          placeholder="Please provide detailed specifications, quality requirements, dimensions, materials, or any other important details..."
                          value={formData.specifications}
                          onChange={(e) => handleInputChange("specifications", e.target.value)}
                          className="mt-1"
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="bg-purple-50 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Upload className="w-5 h-5 mr-2" />
                        Supporting Documents
                      </h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Upload any supporting documents (specifications, drawings, requirements)
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          PDF, DOC, DOCX files up to 10MB
                        </p>
                        <Input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById('file-upload')?.click()}
                          className="mr-4"
                        >
                          Choose File
                        </Button>
                        {file && (
                          <span className="text-sm text-gray-600">{file.name}</span>
                        )}
                      </div>
                    </div>

                    {/* Quote Estimate */}
                    {formData.industry && formData.quantity && (
                      <div className="bg-orange-50 rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                              <Calculator className="w-5 h-5 mr-2" />
                              Quick Estimate
                            </h3>
                            <p className="text-gray-600">Based on your requirements</p>
                          </div>
                          <Button type="button" variant="outline" onClick={calculateQuoteEstimate}>
                            Calculate Estimate
                          </Button>
                        </div>
                        {quoteEstimate && (
                          <div className="mt-4 p-4 bg-white rounded-lg">
                            <div className="text-2xl font-bold text-orange-600">
                              Estimated: ${quoteEstimate.toLocaleString()}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              *This is a rough estimate. Final quote will be provided after detailed review.
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        All fields marked with * are required
                      </div>
                      <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                          "Processing..."
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5" />
                            Get My Quote
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Call us directly for urgent quote requests or speak with a sourcing specialist now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg">
              Call Now: +91 9063679687
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg">
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}