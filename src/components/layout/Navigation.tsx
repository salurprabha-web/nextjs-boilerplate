"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown,
  Phone,
  Mail
} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { 
      name: "Industries", 
      href: "/industries",
      dropdown: [
        { name: "Hotels & Resorts", href: "/industries#hotels", description: "Premium hospitality supplies, linens, and interior solutions" },
        { name: "Software Solutions", href: "/industries#software", description: "CRM, ERP, cloud infrastructure, and IT solutions" },
        { name: "Manufacturing", href: "/industries#manufacturing", description: "Raw materials, industrial equipment, and machinery" },
        { name: "Corporate & Offices", href: "/industries#corporate", description: "Office furniture, IT supplies, and workspace solutions" }
      ]
    },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Sourcing & Procurement", href: "/services#sourcing", description: "Strategic material sourcing and procurement solutions" },
        { name: "Bulk Supplier Management", href: "/services#management", description: "Comprehensive supplier relationship management" },
        { name: "Price Negotiation", href: "/services#negotiation", description: "Expert negotiation for best market prices" },
        { name: "Custom Supply Solutions", href: "/services#custom", description: "Tailored supply chain solutions for unique needs" }
      ]
    },
    { name: "Our Network", href: "/network" },
    { name: "Contact Us", href: "/contact" }
  ];

  const NavItems = ({ mobile = false }) => (
    <>
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          {link.dropdown ? (
            <div className="relative">
              <button
                onClick={() => mobile ? 
                  (link.name === "Services" ? setIsServicesOpen(!isServicesOpen) : setIsIndustriesOpen(!isIndustriesOpen))
                  : null
                }
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  mobile 
                    ? "text-gray-700 hover:text-orange-600 w-full text-left justify-between"
                    : "text-gray-700 hover:text-orange-600"
                }`}
              >
                <span>{link.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {mobile ? (
                <div className={`ml-4 mt-2 space-y-2 ${link.name === "Services" && isServicesOpen ? "block" : link.name === "Industries" && isIndustriesOpen ? "block" : "hidden"}`}>
                  {link.dropdown.map((dropdownLink) => (
                    <div key={dropdownLink.name} className="mb-3">
                      <Link
                        href={dropdownLink.href}
                        className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownLink.name}
                      </Link>
                      <p className="px-3 py-1 text-xs text-gray-500">
                        {dropdownLink.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {link.dropdown.map((dropdownLink) => (
                      <div key={dropdownLink.name} className="px-4 py-3 hover:bg-orange-50 transition-colors duration-200">
                        <Link
                          href={dropdownLink.href}
                          className="block"
                        >
                          <div className="font-medium text-gray-900 hover:text-orange-600 transition-colors duration-200">
                            {dropdownLink.name}
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {dropdownLink.description}
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                mobile 
                  ? "text-gray-700 hover:text-orange-600 block"
                  : "text-gray-700 hover:text-orange-600"
              }`}
              onClick={() => mobile && setIsOpen(false)}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </>
  );

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <Building2 className="w-8 h-8 text-orange-500" />
            <div>
              <span className="text-xl font-bold text-gray-900">Kuhaan</span>
              <span className="text-xl font-bold text-orange-500">Traders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-grow justify-center">
            <div className="flex items-center space-x-4">
              <NavItems />
            </div>
          </div>
          
          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <a href="tel:9063679687">
              <Button variant="outline" size="sm" className="text-gray-700 border-gray-300 hover:bg-gray-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
            <Link href="/quote">
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 flex-shrink-0">
            <a href="tel:8871857876">
              <Button variant="outline" size="sm" className="text-gray-700 border-gray-300">
                <Phone className="w-4 h-4" />
              </Button>
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col h-full">
                  {/* Logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <Building2 className="w-8 h-8 text-orange-500" />
                    <div>
                      <span className="text-xl font-bold text-gray-900">Kuhaan</span>
                      <span className="text-xl font-bold text-orange-500">Traders</span>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex-1">
                    <NavItems mobile={true} />
                  </nav>

                  {/* Contact Info */}
                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-3 text-orange-500" />
                        <span>8871857876</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="w-4 h-4 mr-3 text-orange-500" />
                        <span>rahul.kapoor63@gmail.com</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Link href="/quote">
                        <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600">
                          Get Quote
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}