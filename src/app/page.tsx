"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Building2, Factory, Briefcase, CheckCircle, Award, Users, TrendingUp, Package, Monitor, Plus, Minus, X, Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Counter animations
    const timer = setInterval(() => {
      if (counter < 200) setCounter(prev => Math.min(prev + 2, 200));
      if (counter2 < 25) setCounter2(prev => Math.min(prev + 1, 25));
      if (counter3 < 7) setCounter3(prev => Math.min(prev + 1, 7));
    }, 20);

    return () => clearInterval(timer);
  }, [counter, counter2, counter3]);

  const industries = [
    {
      icon: Building2,
      title: "Hotels & Resorts",
      description: "Hospitality supplies, linens, interiors",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Monitor,
      title: "Software Solutions",
      description: "CRM, ERP, IT infrastructure",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Raw materials, equipment",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Briefcase,
      title: "Corporate & Offices",
      description: "Furniture, IT supplies, interiors",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Efficiency",
      description: "Get the best market quotes and save on procurement costs"
    },
    {
      icon: Users,
      title: "Wide Network",
      description: "Access to 200+ trusted suppliers across multiple industries"
    },
    {
      icon: CheckCircle,
      title: "Best Quotes",
      description: "Competitive pricing through strong supplier relationships"
    },
    {
      icon: Award,
      title: "Reliable Delivery",
      description: "Timely and dependable supply chain solutions"
    }
  ];

  const partners = [
    {
      name: "HOTEL ACCORD INTERNATIONAL",
      image: "https://z-cdn-media.chatglm.cn/files/61fffe7b-31ed-4d3e-8aa8-caaccc91351d_1.png?auth_key=1790144186-825e8e4e593e4686be28bda1d4346dbf-0-7b522cbb3f8febc0fb2107ff16caf6cf"
    },
    {
      name: "LE COMFORT HOTELS AND RESORTS",
      image: "https://z-cdn-media.chatglm.cn/files/c293edc3-4bee-4258-9eee-8310ad0baeb7_2.jpeg?auth_key=1790144186-89e10065081e4485837fe63669153482-0-d45cb4174ed63dcc976f432b73b70059"
    },
    {
      name: "G-ARENA GROUP OF HOTELS",
      image: "https://z-cdn-media.chatglm.cn/files/e6b2d8d3-da6c-4e8b-ad8d-a4fee8afc460_3.jpeg?auth_key=1790144186-d2b2d9a96e2146bf8d5d53a8bfcdcf80-0-dbc3de5596ad0ec299a99d52810cf95a"
    },
    {
      name: "LAGRAN Software Solutions",
      image: "https://z-cdn-media.chatglm.cn/files/2a538e02-8989-4605-9cc4-558d6231d2e2_4.png?auth_key=1790144186-cddf1f9e773c415a85cdbf0cb6a9f733-0-ac63450e9e085c3f9cbecdbafc468c01"
    }
  ];

  const productCategories = [
    {
      id: "Electronics",
      name: "Electronics",
      image: "https://res.cloudinary.com/dluvb9lgh/image/upload/v1759242829/pngtree-a-flat-lay-image-of-various-electronic-devices-png-image_13386783_n8iyya.png",
      color: "bg-blue-500",
      description: "Global sourcing specialist at Kuhaan Traders providing end-to-end procurement solutions for businesses worldwide",
      products: [
        "led video wall",
        "Tv units",
        "geyser",
        "Double Dorr fridge"
      ]
    },
    {
      id: "electrical",
      name: "Electrical Items",
      image: "https://res.cloudinary.com/dluvb9lgh/image/upload/v1759248334/lighting-solutions-global-sourcinglighting-solutions-global-sourcing_rby938.png",
      color: "bg-indigo-500",
      description: "Explore Kuhaan Traders’ wide range of electrical lighting solutions, including stylish decorative lights, functional and designer pole stands, street lights, and outdoor lighting options. ",
      products: [
        "Lights",
        "Decorativded Lights",
        "Pole stands",
        "Designer Lights",
        "Ceiling Lights"
      ]
    },
    {
      id: "hospitality",
      name: "Hospitality Supplies",
      image: "https://res.cloudinary.com/dluvb9lgh/image/upload/v1759296340/hospitality-category-modern-products_uhb0a0.jpg",
      color: "bg-orange-500",
      description: "Discover premium hospitality products designed to enhance guest experiences and streamline business operations.",
      products: [
        "Guest room linens (bed sheets, towels, pillow covers)",
        "Amenity kits (shampoo, soap, dental kits)",
        "Mini-bar appliances (kettles, refrigerators, coffee makers)",
        "Room decor items (wall art, clocks, lamps)",
        "Wood Products",
        "Restaurant tableware (cutlery, plates, glassware)"
      ]
    },
    {
      id: "sanitary",
      name: "Sanitary Essentials (Bathware)",
      image: "https://res.cloudinary.com/dluvb9lgh/image/upload/v1759302543/sanitary-essentials-bathware-commodes-taps-kuhaan-traders_lhmxmh.jpg",
      color: "bg-purple-500",
      description: "Kuhaan Traders offers premium sanitary essentials including bathware, commodes, and taps, sourced globally. Durable and stylish, our products ensure hygiene and modern bathroom solutions for residential and commercial use.",
      products: [
        "Bathware (bathtubs, shower panels, washbasins)",
        "Commodes (western toilets, squatting pans, wall-mounted toilets)",
        "Faucets and Taps (mixer taps, sensor taps, bib taps)",
        "Bathroom Accessories (soap dispensers, towel racks, shower rods)",
        "Water Closets and Flush Tanks",
        "Shower Enclosures and Screens",
        "Bathroom Mirrors and Lighting Solutions"
      ]
    },
    {
      id: "playzone",
      name: "Kids Play Zone and VR Gaming solutions",
      image: "https://res.cloudinary.com/dluvb9lgh/image/upload/v1759305170/kids-playzone-colorful-play-area-fun-kuhaan-traders_hm21ba.jpg",
      color: "bg-green-500",
      description: "Kuhaan Traders presents a vibrant Kids Play Zone with safe, colorful play equipment and engaging activities designed to spark creativity and joy. Perfect for family entertainment centers, schools, and recreational areas, our play zone solutions ensure hours of fun and active play for children.",
      products: [
        "VR Headsets (Oculus, HTC Vive, PlayStation VR)",
        "VR Gaming PCs and Laptops",
        "Multiplayer VR Games and Software",
        "VR Game Zone Setup Equipments",
        "VR Sensors and Trackers",
        "Soft Play Equipment Sets",
        "Ball Pits and Tunnels",
        "Slides and Swings for Kids",
        "Educational Activity Toys",
        "Toddler Playhouses",
        "Sensory Play Toys"
      ]
    },
    {
      id: "hardware",
      name: "Electronics",
      image: "https://res.cloudinary.com/dluvb9lgh/image/upload/v1759310174/hardware-laminates-doors-accessories-kuhaan-traders_zfdonk.jpg",
      color: "bg-red-500",
      description: "Kuhaan Traders offers quality hardware products including laminates, doors, locks, hinges, and accessories. Perfect for construction and renovation, our durable hardware solutions combine style and functionality to enhance any space.",
      products: [
        "Televisions",
        "Audio Systems",
        "Projectors",
        "Cameras",
        "GPS Devices",
        "Telecommunication Equipment",
        "Computer Components",
        "Cables & Connectors",
        "Batteries",
        "Power Supplies",
        "Electronic Accessories",
        "Smart Devices",
        "Wearable Technology",
        "Gaming Equipment",
        "Home Automation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section - Reduced Height */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
              Your Trusted Sourcing Specialist
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Your Trusted Sourcing Specialist
              <br />
              <span className="text-orange-400">Best Market Quotes</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100 max-w-3xl mx-auto">
              Connecting businesses with premium suppliers across Hotels, Software Solutions, Manufacturing, and Corporate sectors. 
              We source smarter, you save better.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/quote">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 text-lg">
                  Get Best Quote
                </Button>
              </a>
              <a href="/about">
                <Button size="lg" variant="outline" className="border-white text-blue-900 bg-white/10 hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 text-lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/70" />
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our extensive range of products across multiple categories. Click on any category to view detailed product listings.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {productCategories.map((category) => (
              <Link href={`/category/${category.id}`} key={category.id}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-200">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <div className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700">
                        View Products
                        <Plus className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA for Categories */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You Need?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              With our extensive network of 200+ suppliers, we can source virtually any product your business requires.
            </p>
            <a href="/quote">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                Request Custom Sourcing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized sourcing solutions for diverse industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Industry Specific CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Optimize Your Industry-Specific Sourcing?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get tailored quotes and solutions specifically designed for your industry needs.
            </p>
            <a href="/quote">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg">
                Get Industry Specific Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering excellence in material sourcing and procurement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <benefit.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {counter}+
              </div>
              <p className="text-gray-600 text-lg">Suppliers Network</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {counter2}+
              </div>
              <p className="text-gray-600 text-lg">Companies Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {counter3}+
              </div>
              <p className="text-gray-600 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strong company tie-ups and global sourcing reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200">
                <div className="text-center">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="max-h-24 mx-auto mb-4 object-contain w-full"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="text-gray-700 font-medium text-sm">
                    {partner.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get the Best Market Quotes?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join dozens of satisfied businesses who have optimized their procurement with our expert sourcing solutions.
          </p>
          <a href="/quote">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
              Request a Quote Now
            </Button>
          </a>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}