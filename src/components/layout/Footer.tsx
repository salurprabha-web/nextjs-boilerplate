"use client";

import Link from "next/link";
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight
} from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Industries", href: "/industries" },
        { name: "Services", href: "/services" },
        { name: "Our Network", href: "/network" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Sourcing & Procurement", href: "/services#sourcing" },
        { name: "Bulk Supplier Management", href: "/services#management" },
        { name: "Price Negotiation", href: "/services#negotiation" },
        { name: "Custom Supply Solutions", href: "/services#custom" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Hotels & Resorts", href: "/industries#hotels" },
        { name: "Software Solutions", href: "/industries#software" },
        { name: "Manufacturing", href: "/industries#manufacturing" },
        { name: "Corporate & Offices", href: "/industries#corporate" }
      ]
    },
    
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Building2 className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold">Kuhaan Traders</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted material sourcing specialist serving Hotels, Software Solutions, Manufacturing, and Corporate sectors. 
              We source smarter, you save better.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-orange-500" />
                <span>Plot No:964, H.No 3-964, Sri Nilayam 3rd Floor, Ayyappa Society, Madhapur, Telangana, 500084</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                <span>9063679687</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                <span>8871857856</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                <span>rahul.kapoor63@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-orange-500">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Kuhaan Traders. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-orange-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-500 text-sm">
            We source smarter, you save better.
          </div>
        </div>
      </div>
    </footer>
  );

}
