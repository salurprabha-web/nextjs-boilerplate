"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Users, 
  Award, 
  Building2, 
  Factory, 
  Briefcase, 
  Monitor,
  Star,
  CheckCircle,
  TrendingUp,
  Handshake,
  MapPin,
  Clock,
  Network,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function NetworkPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const networkNodes = [
    { id: "center", name: "Kuhaan Traders", icon: Globe, color: "bg-blue-600", x: 50, y: 50 },
    { id: "hospitality", name: "Hospitality", icon: Building2, color: "bg-orange-500", x: 20, y: 20 },
    { id: "software", name: "Software Solutions", icon: Monitor, color: "bg-indigo-500", x: 80, y: 20 },
    { id: "manufacturing", name: "Manufacturing", icon: Factory, color: "bg-purple-500", x: 20, y: 80 },
    { id: "corporate", name: "Corporate", icon: Briefcase, color: "bg-blue-500", x: 80, y: 80 }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Wider choice of products & solutions",
      description: "Access to diverse portfolio of suppliers and manufacturers"
    },
    {
      icon: Star,
      title: "Competitive market pricing",
      description: "Best market quotes through strong supplier relationships"
    },
    {
      icon: CheckCircle,
      title: "Assured quality & compliance",
      description: "Strict quality control and regulatory compliance"
    },
    {
      icon: Clock,
      title: "On-time and reliable supply chain",
      description: "Timely delivery with dependable logistics"
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
              Global Network
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Trusted Network of Partners
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              At Kuhaan Traders, we have built a robust and reliable network of suppliers, manufacturers, and service providers across multiple industries. This network allows us to deliver the right products at the right price while ensuring consistent quality and timely delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Network Visualization Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Sourcing Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through long-term collaborations and strategic tie-ups, we bring together a diverse portfolio of partners — from specialized producers to large-scale manufacturers — giving our clients a competitive edge in procurement.
            </p>
          </div>

          {/* Network Visualization */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-gray-200 overflow-hidden">
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {networkNodes.slice(1).map((node, index) => (
                  <line
                    key={index}
                    x1={networkNodes[0].x}
                    y1={networkNodes[0].y}
                    x2={node.x}
                    y2={node.y}
                    stroke="url(#gradient)"
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    className="animate-pulse"
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Network Nodes */}
              {networkNodes.map((node, index) => (
                <div
                  key={node.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${
                    hoveredNode === node.id ? 'scale-110 z-10' : 'scale-100'
                  }`}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <div className={`${node.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <node.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`mt-2 text-center transition-all duration-300 ${
                    hoveredNode === node.id ? 'opacity-100 scale-105' : 'opacity-80'
                  }`}>
                    <div className="text-sm font-semibold text-gray-800 bg-white/90 px-2 py-1 rounded-lg shadow-sm">
                      {node.name}
                    </div>
                  </div>
                </div>
              ))}

              {/* Animated dots */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Network Benefits */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Synergy, Efficiency, and Value Creation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Our sourcing network is not just about connections, but about creating real value for our clients through every partnership.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Network Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">950+</div>
                <p className="text-gray-700 font-medium">Trusted Suppliers</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">4+</div>
                <p className="text-gray-700 font-medium">Major Regions</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <Handshake className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                <p className="text-gray-700 font-medium">Strategic Partners</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
                <p className="text-gray-700 font-medium">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With a strong foundation of trusted relationships, our network continues to grow, empowering businesses across industries to source smarter and achieve more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Hospitality",
                description: "Hotels, resorts, and service providers",
                count: "350+",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: Monitor,
                title: "Software Solutions",
                description: "CRM, ERP, and IT infrastructure",
                count: "280+",
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                icon: Factory,
                title: "Manufacturing",
                description: "Raw materials and industrial equipment",
                count: "200+",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Briefcase,
                title: "Corporate",
                description: "Office supplies and IT solutions",
                count: "120+",
                color: "bg-blue-100 text-blue-600"
              }
            ].map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {industry.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{industry.count}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Growing Network
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Become part of our trusted ecosystem and experience the power of strategic sourcing partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                Join Our Network
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 text-lg">
                Request Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}