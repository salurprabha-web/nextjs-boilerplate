"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Globe, Clock, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeline = [
    {
      year: "2018",
      title: "Founded",
      description: "Established as a specialized sourcing consultancy with a vision to revolutionize material procurement for businesses across India."
    },
    {
      year: "2020",
      title: "First Major Contract",
      description: "Secured landmark contract with G-Arena Group, establishing our reputation as a reliable sourcing partner in the corporate sector."
    },
    {
      year: "2023",
      title: "Strategic Expansion",
      description: "Expanded hospitality division with major partnership with Offhome Hotels & Groups, strengthening our presence in the premium hospitality segment."
    },
    {
      year: "2024",
      title: "Infrastructure Growth",
      description: "Achieved major milestone with Saaxis Infra contract, supplying comprehensive AC and TV units for large-scale infrastructure projects."
    },
    {
      year: "2025",
      title: "Diversification Success",
      description: "Secured prestigious contract with Leecomfort in Andhra Pradesh, supplying complete range including tiles, AC units, kitchen equipment, mattresses, and essential hospitality materials."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To revolutionize material sourcing and procurement for Indian businesses by providing exceptional quality, competitive pricing, and reliable supply chain solutions through our extensive network and industry expertise."
    },
    {
      icon: Award,
      title: "Vision",
      description: "To become India's most trusted material sourcing specialist, known for delivering comprehensive procurement solutions that drive business success and foster long-term partnerships."
    },
    {
      icon: Users,
      title: "Values",
      description: "Integrity, Excellence, Innovation, and Customer-Centric approach in everything we do."
    }
  ];

  const stats = [
    { number: "200+", label: "Suppliers Network", icon: Globe },
    { number: "25+", label: "Companies Served", icon: Users },
    { number: "7+", label: "Years Experience", icon: Clock },
    { number: "98%", label: "Customer Satisfaction", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Our Journey in
              <br />
              <span className="text-orange-400">Material Sourcing Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted sourcing specialist for multiple industries, 
              our story is one of growth, innovation, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Building bridges between businesses and quality suppliers since 2018
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Global Source Solutions was founded in 2018 with a clear and powerful vision: to transform material sourcing and procurement for businesses across India. 
                What began as a specialized consultancy has rapidly evolved into a comprehensive sourcing specialist, building an impressive track record of success 
                and establishing ourselves as a trusted partner for major corporations and hospitality groups.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our journey of growth accelerated dramatically in 2020 when we secured our first major contract with the prestigious G-Arena Group. 
                This landmark achievement not only validated our business model but also positioned us as a reliable and efficient sourcing partner in the corporate sector. 
                The success of this partnership opened doors to numerous opportunities and set the stage for our rapid expansion.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In 2023, we strategically expanded our hospitality division through a significant partnership with Offhome Hotels & Groups. 
                This collaboration strengthened our presence in the premium hospitality segment and demonstrated our ability to handle large-scale, 
                complex sourcing requirements for the hotel industry. Our expertise in hospitality supplies has since become one of our core competencies.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The year 2024 marked another significant milestone as we achieved a major breakthrough with Saaxis Infra, supplying comprehensive 
                AC and TV units for large-scale infrastructure projects. This contract showcased our capability to handle diverse and technically 
                sophisticated sourcing requirements, further establishing our reputation as a versatile and reliable sourcing partner.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In 2025, we reached new heights of success by securing a prestigious contract with Leecomfort in Andhra Pradesh. 
                This comprehensive project involves supplying a complete range of materials including premium tiles, high-efficiency AC units, 
                state-of-the-art kitchen equipment, comfortable mattresses, and essential hospitality materials. This achievement not only 
                demonstrates our diversification capabilities but also reinforces our position as a leading sourcing specialist capable of 
                handling complex, multi-category procurement projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Key moments in our journey of growth and excellence
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12">
                  <div className="flex items-center">
                    <div className={`w-1/2 pr-8 ${index % 2 === 0 ? 'text-right' : 'order-2 pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">
                              {item.year}
                            </Badge>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'order-1 pr-8'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission, Vision & Values
            </h2>
            <p className="text-xl text-gray-600">
              The core principles that guide our business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Our growth and impact in numbers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <p className="text-lg text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Our Sourcing Excellence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have transformed their procurement with our expert sourcing solutions.
          </p>
          <a href="/quote">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}