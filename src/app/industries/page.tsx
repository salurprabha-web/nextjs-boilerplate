"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Factory, 
  Briefcase, 
  Monitor, 
  Keyboard, 
  Cloud, 
  Database, 
  Shield,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Zap,
  BarChart,
  MessageSquare,
  Smartphone
} from "lucide-react";

export default function IndustriesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries = [
    {
      id: "hotels",
      title: "Hotels & Resorts",
      icon: Building2,
      color: "bg-blue-100 text-blue-600",
      description: "Premium hospitality supplies and comprehensive solutions for luxury hotels and resorts",
      hero: "Elevate Guest Experience with Premium Hospitality Supplies",
      heroDescription: "Transform your hotel or resort with our carefully curated selection of hospitality supplies, from luxurious linens to elegant interior solutions, ensuring exceptional guest satisfaction.",
      categories: [
        {
          title: "Premium Bedding & Linens",
          items: ["Egyptian Cotton Bed Sheets", "Luxury Bath Towels", "Premium Pillow Cases", "Duvet Covers", "Plush Bathrobes"],
          icon: Monitor,
          description: "High-thread-count linens and premium bedding for ultimate guest comfort"
        },
        {
          title: "Luxury Interior Furnishings",
          items: ["Designer Furniture", "Premium Lighting", "Window Treatments", "Wall Art", "Room Accessories"],
          icon: Star,
          description: "Elegant interior solutions that enhance your property's aesthetic appeal"
        },
        {
          title: "Guest Amenities",
          items: ["Premium Toiletries", "Coffee Stations", "Mini Bar Items", "Welcome Kits", "Spa Products"],
          icon: Users,
          description: "Luxury amenities that create memorable guest experiences"
        },
        {
          title: "Operational Supplies",
          items: ["Professional Cleaning Supplies", "Commercial Laundry Equipment", "Kitchen Supplies", "Maintenance Tools", "Safety Equipment"],
          icon: TrendingUp,
          description: "Essential operational supplies for smooth hotel management"
        }
      ],
      benefits: [
        "Premium quality materials that enhance guest experience and satisfaction",
        "Competitive pricing through bulk supplier relationships with leading manufacturers",
        "Custom solutions tailored to your brand identity and property requirements",
        "Reliable delivery and inventory management systems",
        "Sustainable and eco-friendly options available for environmentally conscious properties"
      ],
      stats: [
        { label: "Hotels Served", value: "15+" },
        { label: "Premium Suppliers", value: "50+" },
        { label: "Product Categories", value: "100+" }
      ],
      featuredProjects: [
        {
          name: "Offhome Hotels & Groups",
          description: "Complete hospitality supplies for premium hotel chain",
          scope: "Linens, amenities, furniture, and operational supplies"
        }
      ]
    },
    {
      id: "software",
      title: "Software Solutions",
      icon: Monitor,
      color: "bg-indigo-100 text-indigo-600",
      description: "Comprehensive software solutions and IT infrastructure for modern businesses",
      hero: "Transform Your Business with Cutting-Edge Software Solutions",
      heroDescription: "Empower your organization with our comprehensive range of software solutions, from CRM systems to enterprise applications, designed to drive efficiency and growth.",
      categories: [
        {
          title: "CRM & Customer Management",
          items: ["Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics", "Freshsales"],
          icon: Users,
          description: "Customer relationship management systems to enhance customer interactions and sales"
        },
        {
          title: "Enterprise Resource Planning (ERP)",
          items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite", "Odoo"],
          icon: BarChart,
          description: "Integrated ERP solutions for streamlined business operations and resource management"
        },
        {
          title: "Cloud & Infrastructure",
          items: ["AWS Services", "Microsoft Azure", "Google Cloud", "Cloud Storage", "Server Solutions"],
          icon: Cloud,
          description: "Cloud infrastructure and services for scalable, secure business operations"
        },
        {
          title: "Business Intelligence & Analytics",
          items: ["Tableau", "Power BI", "Google Analytics", "QlikView", "Custom Dashboards"],
          icon: Database,
          description: "Data analytics and business intelligence tools for informed decision-making"
        },
        {
          title: "Communication & Collaboration",
          items: ["Microsoft 365", "Google Workspace", "Slack", "Teams", "Zoom"],
          icon: MessageSquare,
          description: "Communication and collaboration tools for enhanced team productivity"
        },
        {
          title: "Cybersecurity Solutions",
          items: ["Antivirus Software", "Firewalls", "VPN Services", "Encryption Tools", "Security Audits"],
          icon: Shield,
          description: "Comprehensive cybersecurity solutions to protect your digital assets"
        }
      ],
      benefits: [
        "Scalable software solutions that grow with your business needs",
        "Integration with existing systems for seamless operations",
        "Expert implementation and ongoing technical support",
        "Cost-effective licensing and subscription models",
        "Regular updates and security patches to ensure optimal performance"
      ],
      stats: [
        { label: "Software Implementations", value: "25+" },
        { label: "Technology Partners", value: "30+" },
        { label: "Happy Clients", value: "40+" }
      ],
      featuredProjects: [
        {
          name: "LAGRAN Software Solutions",
          description: "Complete software infrastructure setup",
          scope: "CRM, ERP, and cloud infrastructure implementation"
        }
      ]
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Engineering",
      icon: Factory,
      color: "bg-orange-100 text-orange-600",
      description: "Raw materials and equipment for manufacturing excellence and industrial growth",
      hero: "Power Your Production with Quality Materials & Equipment",
      heroDescription: "Optimize your manufacturing operations with our extensive range of raw materials, machinery, and industrial supplies from trusted global suppliers.",
      categories: [
        {
          title: "Industrial Raw Materials",
          items: ["Metals", "Plastics", "Chemicals", "Textiles", "Wood Products"],
          icon: Zap,
          description: "High-quality raw materials for consistent manufacturing output"
        },
        {
          title: "Machinery & Equipment",
          items: ["Production Machines", "Assembly Line Equipment", "Quality Control Tools", "Material Handling", "Safety Equipment"],
          icon: Monitor,
          description: "Industrial machinery and equipment for efficient manufacturing"
        },
        {
          title: "Industrial Supplies",
          items: ["Tools", "Fasteners", "Lubricants", "Safety Gear", "Maintenance Supplies"],
          icon: Star,
          description: "Essential supplies for smooth manufacturing operations"
        },
        {
          title: "Infrastructure Materials",
          items: ["Construction Materials", "Electrical Components", "Plumbing Supplies", "HVAC Systems", "Building Materials"],
          icon: Users,
          description: "Comprehensive materials for infrastructure and facility development"
        }
      ],
      benefits: [
        "High-quality raw materials ensuring consistent manufacturing quality",
        "Competitive pricing on industrial equipment and machinery",
        "Reliable supply chain for uninterrupted manufacturing operations",
        "Technical support and expertise for industrial applications",
        "Custom sourcing solutions for specialized manufacturing requirements"
      ],
      stats: [
        { label: "Manufacturing Clients", value: "12+" },
        { label: "Industrial Suppliers", value: "80+" },
        { label: "Material Categories", value: "150+" }
      ],
      featuredProjects: [
        {
          name: "Saaxis Infra",
          description: "Comprehensive infrastructure project supplies",
          scope: "AC units, TV units, and construction materials"
        }
      ]
    },
    {
      id: "corporate",
      title: "Corporate & Offices",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600",
      description: "Complete office solutions for modern businesses and productive work environments",
      hero: "Create Productive Workspaces with Premium Office Solutions",
      heroDescription: "Transform your corporate environment with our comprehensive range of office furniture, IT supplies, and professional interior solutions.",
      categories: [
        {
          title: "Office Furniture",
          items: ["Executive Desks", "Ergonomic Chairs", "Conference Tables", "Storage Solutions", "Reception Furniture"],
          icon: Monitor,
          description: "Modern, ergonomic office furniture for productive workspaces"
        },
        {
          title: "IT & Technology",
          items: ["Computers", "Printers", "Networking Equipment", "Software", "Accessories"],
          icon: Keyboard,
          description: "Complete IT infrastructure setup for modern offices"
        },
        {
          title: "Office Interiors",
          items: ["Lighting", "Partitions", "Flooring", "Wall Treatments", "Decor"],
          icon: Star,
          description: "Professional interior design and implementation services"
        },
        {
          title: "Operational Supplies",
          items: ["Stationery", "Cleaning Supplies", "Break Room Supplies", "Safety Equipment", "Storage Solutions"],
          icon: Users,
          description: "Essential supplies for smooth office operations"
        }
      ],
      benefits: [
        "Modern, ergonomic office furniture solutions for employee comfort",
        "Complete IT infrastructure setup and support services",
        "Professional interior design creating impressive corporate environments",
        "Bulk purchasing discounts and cost-effective solutions",
        "Ongoing support and maintenance for all office equipment"
      ],
      stats: [
        { label: "Corporate Clients", value: "20+" },
        { label: "Office Suppliers", value: "60+" },
        { label: "Setup Projects", value: "50+" }
      ],
      featuredProjects: [
        {
          name: "G-Arena Group",
          description: "Complete corporate office setup",
          scope: "Furniture, IT equipment, and interior solutions"
        }
      ]
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
              Industries We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Specialized Sourcing for
              <br />
              <span className="text-orange-400">Every Industry</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Expert material sourcing solutions tailored to the unique needs of Hotels, Software Solutions, Manufacturing, and Corporate sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep industry knowledge and specialized sourcing solutions for each sector
            </p>
          </div>

          <Tabs defaultValue="hotels" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id} className="flex flex-col items-center gap-2 p-4">
                  <industry.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{industry.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="space-y-12">
                {/* Industry Hero */}
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 ${industry.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <industry.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {industry.hero}
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {industry.heroDescription}
                  </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industry.categories.map((category, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <category.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-sm text-gray-500 mt-3">{category.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Benefits */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Key Benefits for {industry.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industry.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {industry.stats.map((stat, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Featured Projects */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Featured Projects
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industry.featuredProjects.map((project, index) => (
                      <Card key={index} className="bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg">{project.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-2">{project.description}</p>
                          <p className="text-sm text-gray-500">{project.scope}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                    Get {industry.title} Solutions
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Industry-Specific Sourcing?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get tailored quotes and solutions specifically designed for your industry needs.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
            Get Industry Specific Quote
          </Button>
        </div>
      </section>
    </div>
  );
}