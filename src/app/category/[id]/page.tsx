import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Star, Package, Check } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  category: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

const categories: Category[] = [
  {
    id: 'Electronics',
    name: 'Electronics',
    description: 'Electronics global sourcing and procurement solutions by Kuhaan Traders for businesses worldwide.',
    image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759242829/pngtree-a-flat-lay-image-of-various-electronic-devices-png-image_13386783_n8iyya.png',
    color: 'bg-blue-500'
  },
  {
    id: 'electrical',
    name: 'Electrical Items',
    description: 'Explore Kuhaan Traders’ wide range of electrical lighting solutions, including stylish decorative lights, functional and designer pole stands, street lights, and outdoor lighting options. As a global sourcing specialist, we provide high-quality lighting products for residential, commercial, and public spaces.',
    image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759248334/lighting-solutions-global-sourcinglighting-solutions-global-sourcing_rby938.png',
    color: 'bg-indigo-500'
  },
  {
    id: 'hospitality',
    name: 'Hospitality Supplies',
    description: 'Discover premium hospitality products designed to enhance guest experiences and streamline business operations. This category features high-quality essentials for hotels, resorts, and serviced apartments, including luxurious linens, advanced amenities, room décor, cleaning solutions, and innovative technology. Whether upgrading guest rooms or optimizing facility management, find everything required to deliver comfort, efficiency, and style in the hospitality industry',
    image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759296340/hospitality-category-modern-products_uhb0a0.jpg',
    color: 'bg-orange-500'
  },
  {
    id: 'sanitary',
    name: 'Sanitary Essentials (Bathware)',
    description: 'Kuhaan Traders offers premium sanitary essentials including bathware, commodes, and taps, sourced globally. Durable and stylish, our products ensure hygiene and modern bathroom solutions for residential and commercial use.',
    image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759302543/sanitary-essentials-bathware-commodes-taps-kuhaan-traders_lhmxmh.jpg',
    color: 'bg-purple-500'
  },
  {
    id: 'playzone',
    name: 'Kids Play Zone and VR Gaming solutions',
    description: 'Kuhaan Traders presents a vibrant Kids Play Zone with safe, colorful play equipment and engaging activities designed to spark creativity and joy. Perfect for family entertainment centers, schools, and recreational areas, our play zone solutions ensure hours of fun and active play for children.',
    image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759305170/kids-playzone-colorful-play-area-fun-kuhaan-traders_hm21ba.jpg',
    color: 'bg-green-500'
  },
  {
    id: 'hardware',
    name: 'Electronics',
    description: 'Kuhaan Traders offers quality hardware products including laminates, doors, locks, hinges, and accessories. Perfect for construction and renovation, our durable hardware solutions combine style and functionality to enhance any space.',
    image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759310174/hardware-laminates-doors-accessories-kuhaan-traders_zfdonk.jpg',
    color: 'bg-red-500'
  }
];

const products: Record<string, Product[]> = {
  Electronics: [
    {
      name: 'Air Conditioning Unit (AC)',
      description: 'Kuhaan Traders specializes in sourcing and supplying premium air conditioners from global manufacturers. With a strong network of international suppliers, we ensure reliable, energy-efficient AC units tailored for both residential and commercial needs. As a global sourcing specialist, Kuhaan Traders guarantees competitive pricing, quality assurance, and end-to-end procurement solutions to meet the demands of businesses worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759246035/air-conditioner-sourcing-global-procurement-kuhaan-traders_hhsd9m.webp',
      price: '',
      features: [],
      category: 'Electronics'
    },
    {
      name: 'Television (T.V)',
      description: 'Kuhaan Traders provides high-quality televisions through global sourcing and procurement from trusted manufacturers. Our product range includes LED, OLED, and Smart TVs designed for superior picture quality and energy efficiency. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable supply chain solutions, and quality assurance for businesses and distributors worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759246338/television-global-sourcing-procurement-kuhaan-traders_hxywpc.jpg',
      price: 'From $45/set',
      features: [],
      category: 'Electronics'
    },
    {
      name: 'LED video Wall',
      description: 'Kuhaan Traders specializes in sourcing and supplying premium LED video walls from leading global manufacturers. Our LED video walls are designed for crystal-clear visuals, high brightness, and seamless integration, making them ideal for events, advertising, retail, and corporate environments. As a global sourcing specialist, Kuhaan Traders provides end-to-end procurement solutions, competitive pricing, and reliable supply chain management to meet diverse business requirements worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759246614/led-video-wall-global-sourcing-procurement-kuhaan-traders_xthe9s.jpg',
      price: '',
      features: [],
      category: 'Electronics'
    },
    {
      name: 'Minibar Fridge',
      description: 'Kuhaan Traders sources and supplies premium mini bar fridges from top global manufacturers. Designed for hotels, offices, and residential use, our mini bar refrigerators combine energy efficiency with compact storage solutions. As a global sourcing specialist, Kuhaan Traders ensures quality assurance, competitive pricing, and seamless procurement services to meet B2B requirements across industries worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759246823/mini-bar-fridge-global-sourcing-procurement-kuhaan-traders_uo4t68.jpg',
      price: '',
      features: [],
      category: 'Electronics'
    },
    {
      name: 'Double Door Fridge',
      description: 'Kuhaan Traders specializes in sourcing and supplying high-quality double door refrigerators from leading international manufacturers. Built for durability and superior cooling performance, these refrigerators are ideal for households, offices, and hospitality businesses. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable procurement, and quality assurance for B2B clients worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759247053/double-door-refrigerator-global-sourcing-procurement-kuhaan-traders_vjyguf.jpg',
      price: '',
      features: [],
      category: 'Electronics'
    },
    {
      name: 'Geyser',
      description: 'Kuhaan Traders offers French door refrigerators from leading international brands, sourced through a robust global procurement network. Known for spacious interiors, energy efficiency, and premium finish, these refrigerators cater to both residential and commercial needs. As a sourcing specialist, Kuhaan Traders delivers quality, reliability, and competitive trade solutions worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759247197/french-door-refrigerator-global-sourcing-kuhaan-traders_lsz01e.jpg',
      price: '',
      features: [],
      category: 'Electronics'
    }
  ],
  electrical: [
    {
      name: 'String Light Pole Stand with Tank Base',
      description: 'Kuhaan Traders specializes in sourcing high-quality string light pole stands with tank bases from trusted global manufacturers. Designed for stability, portability, and long-term durability, these stands are perfect for outdoor lighting solutions including events, patios, and commercial spaces. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable supply chain management, and end-to-end procurement services for businesses worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759248475/string-light-pole-stand-tank-base-global-sourcing-kuhaan-traders_ce6hyv.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Decorative Anchor Base LED Pole Kit with Lantern Light',
      description: 'Kuhaan Traders sources high-quality decorative LED pole kits with anchor bases and integrated lantern lights from trusted global manufacturers. Designed for durability, aesthetic appeal, and efficient lighting, these kits are perfect for outdoor gardens, patios, pathways, and commercial areas. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable supply, and end-to-end procurement services for businesses and distributors worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759248651/decorative-anchor-base-led-pole-kit-lantern-light-global-sourcing-kuhaan-traders_oruoak.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Adjustable String Light Stand with Weighted Base',
      description: 'Kuhaan Traders specializes in sourcing adjustable string light stands with weighted bases from leading global manufacturers. Built for stability, easy installation, and long-lasting durability, these stands are ideal for outdoor events, patios, gardens, and commercial lighting needs. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable supply chain management, and complete procurement solutions for businesses worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759294708/Adjustable_String_Light_Stand_with_Weighted_Base_xyqhmt.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Decorative Aluminum Light Poles',
      description: 'Kuhaan Traders specializes in sourcing premium decorative aluminum light poles from trusted international manufacturers. Designed for strength, weather resistance, and elegant aesthetics, these poles are perfect for outdoor applications including streets, parks, gardens, and commercial complexes. As a global sourcing specialist, Kuhaan Traders provides competitive pricing, quality assurance, and end-to-end procurement services to meet the needs of businesses worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759294854/Decorative_Aluminum_Light_Poles_hxueki.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Heavy-Duty String Light Pole Stand with Tank Base',
      description: 'Kuhaan Traders sources premium heavy-duty string light pole stands with tank bases from leading international manufacturers. Engineered for strength, stability, and long-term outdoor use, these stands are ideal for events, patios, gardens, and commercial lighting applications. As a global sourcing specialist, Kuhaan Traders ensures quality assurance, competitive pricing, and seamless procurement services to meet diverse B2B lighting requirements worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759294967/Heavy-Duty_String_Light_Pole_Stand_with_Tank_Base_lxa8a9.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Ceiling Lights (LED Panels, Chandeliers, Pendant Lights)',
      description: 'Kuhaan Traders specializes in sourcing high-quality ceiling lights including modern LED panels, decorative chandeliers, and stylish pendant lights from trusted international manufacturers. Designed for energy efficiency, durability, and aesthetic appeal, these ceiling lights are ideal for homes, offices, hotels, and commercial establishments. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, strict quality assurance, and end-to-end procurement services for B2B clients worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295223/Ceiling_Lights_LED_panels_chandeliers_pendant_lights_mpsulb.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Wall Lights (sconces, decorative wall lamps)',
      description: 'Kuhaan Traders specializes in sourcing stylish wall lights including modern sconces and decorative wall lamps from leading international manufacturers. Designed to enhance interiors with functional lighting and elegant aesthetics, these wall lights are ideal for homes, hotels, offices, and commercial spaces. As a global sourcing specialist, Kuhaan Traders ensures reliable procurement, competitive pricing, and quality assurance for B2B lighting needs worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295273/Wall_Lights_sconces_decorative_wall_lamps_fqdlq7.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Table Lamps',
      description: 'Kuhaan Traders sources a wide collection of high-quality table lamps from trusted international manufacturers. Our range includes modern, classic, and decorative designs that enhance interiors while providing functional lighting. Perfect for bedrooms, living rooms, office desks, and hospitality spaces, our table lamps combine durability, energy efficiency, and premium aesthetics. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable delivery, and premium lighting solutions tailored to diverse market needs',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295461/table-lamps-global-sourcing-decorative-lighting-kuhaan-traders_m25rss.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Track Lighting',
      description: 'Kuhaan Traders offers premium track lighting solutions sourced from leading international manufacturers. Our collection includes flexible track systems, adjustable spotlights, and energy-efficient LED track lights designed to highlight spaces with precision. Ideal for retail showrooms, galleries, offices, and hospitality projects, these track lighting systems combine functionality with sleek design. As a global sourcing specialist, Kuhaan Traders ensures reliable procurement, competitive pricing, and world-class quality tailored to diverse project requirements.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295525/track-lighting-global-sourcing-commercial-lighting-kuhaan-traders_ue9i0b.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Garden Lights (pathway lights, bollards, spike lights)',
      description: 'Kuhaan Traders specializes in sourcing premium garden lights designed to enhance outdoor landscapes with durability and style. Our collection includes pathway lights, bollard lamps, and spike lights suitable for gardens, walkways, resorts, hotels, and public spaces. Crafted for weather resistance and energy efficiency, these outdoor lighting solutions provide both safety and aesthetics. As a global sourcing specialist, Kuhaan Traders ensures trusted procurement, competitive pricing, and timely delivery for all landscaping and exterior lighting projects.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295625/garden-lights-pathway-bollards-spike-lights-global-sourcing-kuhaan-traders_zgzjys.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Flood Lights (for stadiums, buildings, and outdoors)',
      description: 'Kuhaan Traders offers a wide range of energy-efficient LED flood lights sourced from leading international manufacturers. Engineered for superior brightness, durability, and long lifespan, our flood lights are ideal for stadiums, building facades, warehouses, parking lots, and large outdoor spaces. With weatherproof design and advanced optics, these flood lights ensure reliable performance in demanding environments. As a global sourcing specialist, Kuhaan Traders delivers trusted procurement, competitive pricing, and high-quality flood lighting solutions for commercial, industrial, and public projects.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295706/flood-lights-stadium-building-outdoor-global-sourcing-kuhaan-traders_y1qct2.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Spotlights (for showrooms, exhibitions, and displays)',
      description: 'Kuhaan Traders specializes in sourcing high-performance spotlights from leading global manufacturers. Our spotlights are designed to provide focused, adjustable lighting for showrooms, exhibitions, retail displays, galleries, and commercial spaces. Engineered for energy efficiency, long lifespan, and aesthetic appeal, these spotlights enhance the presentation of products and interiors. As a global sourcing specialist, Kuhaan Traders ensures reliable procurement, competitive pricing, and end-to-end supply solutions for B2B clients worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759295888/Spotlights_for_showrooms_exhibitions_and_displays_begkln.jpg',
      price: '',
      features: [],
      category: 'electrical'
    },
    {
      name: 'Architectural Accent Lights',
      description: 'Kuhaan Traders specializes in sourcing high-quality architectural accent lights from trusted international manufacturers. Our accent lights are designed to highlight building facades, interior features, pathways, and commercial spaces with precision and style. Engineered for durability, energy efficiency, and aesthetic appeal, these lights are perfect for hotels, offices, public spaces, and residential projects. As a global sourcing specialist, Kuhaan Traders ensures competitive pricing, reliable procurement, and end-to-end supply solutions for B2B clients worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759296003/architectural-accent-lights-global-sourcing-kuhaan-traders_b5zyyk.jpg',
      price: '',
      features: [],
      category: 'electrical'
    }
  ],
  hospitality: [
    {
      name: 'guest-room-linens-luxury-bed-sheets-towels-pillow-covers-kuhaan-trader',
      description: 'Kuhaan Traders offers premium guest room linens sourced globally, including luxurious bed sheets, soft towels, and pillow covers. Designed for hotels and resorts, our durable and comfortable linens ensure a superior guest experience and lasting quality. Trust Kuhaan Traders for reliable hospitality linen solutions worldwide.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759298291/guest-room-linens-luxury-bed-sheets-towels-pillow-covers-kuhaan-trader_i1ayuz.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Amenity kits (shampoo, soap, dental kits)',
      description: 'Kuhaan Traders supplies high-quality amenity kits including shampoo, soap, and dental kits, sourced globally for the hospitality industry. Perfect for hotels and resorts, these essential kits enhance guest comfort and hygiene with premium, reliable products.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759298548/Amenity_kits_shampoo_soap_dental_kits_ukqedx.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Mini-bar appliances (kettles, refrigerators, coffee makers)',
      description: 'Kuhaan Traders provides premium mini-bar appliances including kettles, refrigerators, and coffee makers sourced globally for hospitality businesses. Ideal for hotels and resorts, these reliable appliances enhance guest convenience and room functionality.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759298710/mini-bar-appliances-kettles-refrigerators-coffee-makers-kuhaan-trader_xye3jj.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Room decor items (wall art, clocks, lamps)',
      description: 'Kuhaan Traders offers stylish room decor items including wall art, clocks, and lamps, sourced globally for the hospitality sector. Perfect for hotels and resorts, these décor solutions elevate guest room ambiance and enhance overall aesthetics.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759298838/room-decor-items-wall-art-clocks-lamps-kuhaan-traders_oh4ty3.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Restaurant tableware (cutlery, plates, glassware)',
      description: '',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759299043/restaurant-tableware-cutlery-plates-glassware-kuhaan-traders_opausi.jpg',
      price: 'Kuhaan Traders supplies premium restaurant tableware including cutlery, plates, and glassware, globally sourced for the hospitality industry. Ideal for hotels and dining establishments, these elegant and durable products enhance the dining experience.',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Cleaning equipment (vacuums, housekeeping carts, sanitizer dispensers)',
      description: 'Kuhaan Traders offers quality cleaning equipment including vacuums, housekeeping carts, and sanitizer dispensers, sourced globally for the hospitality industry. Essential for hotels and resorts, these products ensure cleanliness, hygiene, and efficient facility management.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759299139/cleaning-equipment-vacuums-housekeeping-carts-sanitizer-dispensers-kuhaan-traders_ti20fq.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Uniforms (staff clothing, aprons, chef coats)',
      description: 'Kuhaan Traders provides durable and stylish hospitality uniforms including staff clothing, aprons, and chef coats, sourced globally for hotels and restaurants. These uniforms combine comfort and professionalism to enhance staff appearance and brand image.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759299236/hospitality-uniforms-staff-clothing-aprons-chef-coats-kuhaan-traders_pbp5nf.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Technology solutions (hotel room tablets, smart locks)',
      description: 'Kuhaan Traders delivers advanced technology solutions for the hospitality industry, including hotel room tablets and smart locks. Sourced globally, these innovative products enhance guest convenience, security, and operational efficiency in hotels and resorts.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759299350/technology-solutions-hotel-room-tablets-smart-locks-kuhaan-traders_lzvur7.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    },
    {
      name: 'Lobby furnishings (sofas, reception desks, plants)',
      description: 'Kuhaan Traders offers stylish lobby furnishings including sofas, reception desks, and decorative plants, sourced globally for the hospitality sector. Perfect for hotels and resorts, these furnishings create a welcoming and elegant first impression for guests.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759299490/lobby-furnishings-sofas-reception-desks-plants-kuhaan-traders_emypf5.jpg',
      price: '',
      features: [],
      category: 'hospitality'
    }
  ],
  sanitary: [
    {
      name: 'Bathware (bathtubs, shower panels, washbasins)',
      description: 'Kuhaan Traders offers premium bathware including bathtubs, shower panels, and washbasins sourced globally. Designed for modern bathrooms, our durable and stylish products elevate comfort and aesthetics in homes and hospitality spaces.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759302989/bathware-bathtubs-shower-panels-washbasins-kuhaan-traders_xc19nk.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Commodes (western toilets, squatting pans, wall-mounted toilets)',
      description: 'Kuhaan Traders offers a wide range of commodes including western toilets, squatting pans, and wall-mounted toilets sourced globally. Designed to meet diverse bathroom needs, our durable and hygienic sanitaryware enhances comfort and functionality for homes and commercial spaces.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759303279/commodes-western-toilets-squatting-pans-wall-mounted-kuhaan-traders_ainund.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Faucets and Taps (mixer taps, sensor taps, bib taps)',
      description: 'Kuhaan Traders provides a wide range of high-quality faucets and taps including mixer taps, sensor taps, and bib taps sourced globally. Perfect for residential and commercial bathrooms, these durable and stylish fixtures enhance functionality and hygiene with modern designs.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759303427/faucets-taps-mixer-sensor-bib-kuhaan-traders_kylwie.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Bathroom Accessories (soap dispensers, towel racks, shower rods)',
      description: 'Kuhaan Traders offers a wide range of bathroom accessories including soap dispensers, towel racks, and shower rods sourced globally. These stylish and functional accessories enhance bathroom organization, hygiene, and décor for homes and hospitality spaces.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759303598/bathroom-accessories-soap-dispensers-towel-racks-shower-rods-kuhaan-traders_vrizdc.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Water Closets and Flush Tanks',
      description: 'Kuhaan Traders offers high-quality water closets and flush tanks with modern designs and efficient flushing systems. Our durable and hygienic sanitaryware ensures superior performance and comfort for residential and commercial bathrooms.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759303793/water-closets-flush-tanks-modern-design-kuhaan-traders_bc9xe6.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Shower Enclosures and Screens',
      description: 'Kuhaan Traders offers premium shower enclosures and screens featuring durable tempered glass and modern designs. Perfect for residential and hospitality bathrooms, our stylish enclosures ensure water containment, easy maintenance, and enhanced bathroom aesthetics.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759303896/shower-enclosures-screens-glass-modern-kuhaan-traders_ebnt0a.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Bathroom Furniture (vanity units, cabinets)',
      description: 'Kuhaan Traders offers stylish bathroom furniture including vanity units and cabinets, sourced globally for modern homes and hospitality spaces. Our durable and elegant furniture enhances bathroom storage, organization, and aesthetics.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759304092/bathroom-furniture-vanity-units-cabinets-kuhaan-trader_mwpqds.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Pipes and Fittings (PVC pipes, connectors, elbows)',
      description: 'Kuhaan Traders offers durable pipes and fittings including PVC pipes, connectors, and elbows, sourced globally for plumbing and sanitary applications. Our high-quality products ensure reliable water flow, easy installation, and long-lasting performance in residential and commercial projects.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759304189/pipes-fittings-pvc-connectors-elbows-kuhaan-traders_qlgsno.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Bathroom Mirrors and Lighting Solutions',
      description: 'Kuhaan Traders offers elegant bathroom mirrors and lighting solutions designed to enhance style and functionality. Our globally sourced products provide optimal illumination and aesthetic appeal, perfect for modern homes and hospitality bathrooms.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759304283/bathroom-mirrors-lighting-solutions-modern-kuhaan-traders_x7uktf.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    },
    {
      name: 'Drainage Solutions and Traps',
      description: 'Kuhaan Traders offers reliable drainage solutions and traps designed for efficient water management and plumbing systems. Our high-quality products ensure clog-free drainage, hygiene, and durability for residential and commercial applications.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759304376/drainage-solutions-traps-efficient-plumbing-kuhaan-traders_khc5iz.jpg',
      price: '',
      features: [],
      category: 'sanitary'
    }
  ],
  playzone: [
    {
      name: 'Soft Play Equipment Sets',
      description: 'Kuhaan Traders offers vibrant soft play equipment sets designed for safe and engaging childrens play areas. Perfect for indoor playgrounds and family entertainment centers, our colorful and durable play sets promote creativity and active fun.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759305962/soft-play-equipment-sets-colorful-childrens-play-kuhaan-traders_fs55eg.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'VR Headsets (Oculus, HTC Vive, PlayStation VR)',
      description: 'Kuhaan Traders offers top VR headsets including Oculus, HTC Vive, and PlayStation VR, delivering immersive virtual reality experiences. Ideal for gaming enthusiasts and entertainment centers, our VR headsets provide high-resolution visuals, precise motion tracking, and comfortable design for extended use.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759306073/vr-headsets-oculus-htc-vive-playstation-kuhaan-traders_nev3xp.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Indoor Climbing Frames',
      description: 'Kuhaan Traders offers sturdy indoor climbing frames that promote childrens motor skills, coordination, and confidence through safe, active play. Perfect for homes, schools, and play centers, these multifunctional climbing structures provide endless fun and developmental benefits.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308147/indoor-climbing-frames-kids-play-kuhaan-traders_xqktc4.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Ball Pits and Tunnels',
      description: 'Kuhaan Traders offers fun-filled ball pits and tunnels that promote physical development, sensory stimulation, and imaginative play for children. Ideal for indoor play zones and family entertainment centers, these colorful and safe play structures enhance motor skills and social interaction.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308284/ball-pits-tunnels-kids-play-kuhaan-traders_jtehuk.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'VR Motion Controllers',
      description: 'Kuhaan Traders offers cutting-edge VR motion controllers compatible with Oculus, HTC Vive, and other leading VR brands. Designed for precision tracking and immersive interaction, these controllers enhance virtual reality gaming and experiences for enthusiasts and entertainment centers.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308512/vr-motion-controllers-oculus-htc-vive-kuhaan-traders_ry65pl.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Play Mats and Foam Flooring',
      description: 'Kuhaan Traders offers durable and soft play mats and foam flooring designed for safe and comfortable play areas. Ideal for kids rooms, daycare centers, and indoor playgrounds, our non-toxic mats provide cushioning, slip resistance, and easy maintenance.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308622/play-mats-foam-flooring-kids-safe-kuhaan-traders_ff7k5p.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Slides and Swings for Kids',
      description: 'Kuhaan Traders offers safe and durable slides and swings designed for kids’ playgrounds and play areas. Our high-quality playground equipment promotes active outdoor play, motor skill development, and endless fun for children of all ages.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308721/kids-slides-swings-playground-equipment-kuhaan-traders_pojwo7.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Interactive Play Panels',
      description: 'Kuhaan Traders offers interactive play panels that stimulate childrens cognitive development, fine motor skills, and social interaction through engaging sensory activities. Perfect for playgrounds and educational centers, these panels provide creative, reflective play that enhances learning and collaboration.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308815/interactive-play-panels-sensory-cognitive-kids-kuhaan-traders_ghnkdx.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Educational Activity Toys',
      description: 'Kuhaan Traders offers educational activity toys that foster cognitive development, motor skills, creativity, and social interaction in children. Designed for early learning, these interactive toys provide fun and engaging ways to support brain growth and skill-building.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759308984/educational-activity-toys-cognitive-motor-skills-kuhaan-traders_fyphji.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'VR Gaming PCs and Laptops',
      description: 'Kuhaan Traders offers high-performance VR gaming PCs and laptops optimized for immersive virtual reality experiences. Featuring powerful graphics, fast processors, and VR-ready configurations, our systems deliver smooth gameplay and seamless VR interaction for gamers and entertainment centers.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309119/vr-gaming-pcs-laptops-high-performance-kuhaan-traders_ny5kbc.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Ride-on Toys and Push Cars',
      description: 'Kuhaan Traders offers a variety of ride-on toys and push cars designed to enhance kids’ motor skills, balance, and independence through active play. Ideal for indoor and outdoor use, these durable and fun toys keep children engaged while promoting physical development and coordination.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309214/ride-on-toys-push-cars-kids-motor-skills-kuhaan-traders_ofmvb7.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'VR Racing Wheels and Pedals',
      description: 'Kuhaan Traders offers precision VR racing wheels and pedals with advanced force feedback and realistic controls for an immersive racing simulation experience. Ideal for VR driving enthusiasts and gaming centers, these high-performance accessories deliver accurate handling and enhanced gameplay.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309389/vr-racing-wheels-pedals-precision-force-feedback-kuhaan-traders_bd9ni5.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'VR Gaming Chairs and Accessories',
      description: 'Kuhaan Traders offers advanced VR gaming chairs and accessories designed to deliver immersive 360-degree motion, ergonomic comfort, and enhanced gameplay. Compatible with major VR headsets, these chairs feature modular designs, haptic feedback, and wireless connectivity for an unrivaled virtual reality experience.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309483/vr-gaming-chairs-accessories-immersive-comfort-kuhaan-traders_ntibas.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Immersive Audio Headphones for VR',
      description: 'Kuhaan Traders offers immersive audio headphones designed for VR gaming and virtual reality experiences with 3D spatial sound and noise isolation. These headphones deliver crystal-clear, surround sound audio to enhance immersion, comfort, and extended play sessions.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309627/immersive-audio-headphones-vr-surround-sound-kuhaan-traders_rydk6v.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'Multiplayer VR Games and Software',
      description: 'Kuhaan Traders offers exciting multiplayer VR games and software that provide immersive virtual reality experiences for group play and social interaction. Our cutting-edge VR titles deliver engaging gameplay, realistic graphics, and smooth online connectivity, perfect for gaming centers and VR enthusiasts.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309702/multiplayer-vr-games-software-immersive-kuhaan-traders_t6tipt.jpg',
      price: '',
      features: [],
      category: 'playzone'
    },
    {
      name: 'VR Treadmills and Motion Platforms',
      description: 'Kuhaan Traders offers state-of-the-art VR treadmills and motion platforms that enable full-body immersion and natural movement in virtual reality. Ideal for gaming, fitness, training, and rehabilitation, these devices enhance physical activity and reduce motion sickness, creating a realistic and engaging VR experience.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759309826/vr-treadmills-motion-platforms-immersive-fitness-kuhaan-traders_mu3uhl.jpg',
      price: '',
      features: [],
      category: 'playzone'
    }
  ],
  hardware: [
    {
      name: 'Decorative Laminates Sheets',
      description: 'Kuhaan Traders offers stylish and durable decorative laminate sheets with scratch and heat resistance. Perfect for enhancing furniture, walls, and cabinets, these laminates provide long-lasting beauty and easy maintenance for residential and commercial spaces.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759310557/decorative-laminates-sheets-stylish-durable-kuhaan-traders_uvgv2u.jpg',
      price: '',
      features: [],
      category: 'hardware'
    },
    {
      name: 'High-Pressure Laminates (HPL)',
      description: 'Kuhaan Traders offers high-pressure laminates (HPL) known for durability, scratch resistance, and moisture protection. Ideal for furniture, countertops, and interiors, HPL sheets deliver versatile design options and long-lasting performance.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759310651/high-pressure-laminates-durable-versatile-kuhaan-traders_vnoglv.jpg',
      price: '',
      features: [],
      category: 'hardware'
    },
    {
      name: 'Wooden and PVC Doors',
      description: 'Kuhaan Traders offers a variety of durable wooden and PVC doors—perfect for homes, offices, and hotels. Our doors combine style, strength, and low maintenance for long-lasting interior and exterior applications.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759310919/wooden-pvc-doors-kuhaan-traders_lzertp.jpg',
      price: '',
      features: [],
      category: 'hardware'
    },
    {
      name: 'Door Frames and Architraves',
      description: 'Kuhaan Traders offers durable and stylish door frames and architraves designed to complement any door and enhance interior aesthetics. Perfect for residential and commercial projects, these frames provide strong support and elegant finishing touches.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759311042/door-frames-architraves-durable-stylish-kuhaan-traders_vgwfmj.jpg',
      price: '',
      features: [],
      category: 'hardware'
    },
    {
      name: 'Mortise and Pad Locks',
      description: 'Kuhaan Traders offers robust mortise and pad locks that provide high security and durability for residential and commercial use. Designed to resist forced entry and tampering, these locks ensure reliable protection with sleek designs and easy installation.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759311170/mortise-pad-locks-secure-durable-kuhaan-traders_slmmro.jpg',
      price: '',
      features: [],
      category: 'hardware'
    },
    {
      name: 'Drawer Slides and Cabinet Hardware',
      description: 'Kuhaan Traders offers smooth and durable drawer slides and cabinet hardware designed for effortless operation and long-lasting performance. Ideal for kitchen cabinets, wardrobes, and furniture, these products enhance functionality and aesthetics.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759311402/drawer-slides-cabinet-hardware-smooth-durable-kuhaan-traders_ik7tv8.jpg',
      price: '',
      features: [],
      category: 'hardware'
    },
    {
      name: 'Flush Doors and Solid Core Doors',
      description: 'Kuhaan Traders provides durable flush doors and solid core doors that offer excellent sound insulation and long-lasting strength. Ideal for bedrooms, offices, and high-traffic areas, these doors combine sleek design with superior privacy and security.',
      image: 'https://res.cloudinary.com/dluvb9lgh/image/upload/v1759312372/flush-doors-solid-core-doors-durable-soundproof-kuhaan-trader_sjkw5c.jpg',
      price: '',
      features: [],
      category: 'hardware'
    }
  ]
};

interface CategoryPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.id === params.id);
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.'
    };
  }

  return {
    title: `${category.name} - Kuhaan Traders`,
    description: category.description,
    keywords: `${category.name}, procurement, sourcing, ${category.id} supplies, business products`,
    openGraph: {
      title: `${category.name} - Kuhaan Traders`,
      description: category.description,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} - Kuhaan Traders`,
      description: category.description,
      images: [category.image]
    }
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.id === params.id);
  const categoryProducts = products[params.id] || [];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Badge variant="secondary" className="mb-4 bg-orange-500 text-white hover:bg-orange-600">
                  {category.name}
                </Badge>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  {category.name}
                </h1>
                <p className="text-lg md:text-xl mb-6 text-blue-100">
                  {category.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/quote">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 text-lg">
                      Get Quote
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white text-blue-900 bg-white/10 hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 text-lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured {category.name} Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our curated selection of premium {category.name.toLowerCase()} products. 
              All sourced from trusted suppliers with guaranteed quality.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categoryProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-orange-500 text-white">
                      {product.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span>Premium Quality</span>
                      </div>
                      <Link href="/quote">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Custom {category.name} Solutions?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              With our extensive network of 200+ suppliers, we can source any {category.name.toLowerCase()} product 
              you need, even if it's not listed here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg">
                  Request Custom Sourcing
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg">
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our {category.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver excellence in {category.name.toLowerCase()} sourcing and procurement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                All our {category.name.toLowerCase()} products are sourced from trusted suppliers and undergo strict quality control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Best Prices
              </h3>
              <p className="text-gray-600">
                Get competitive pricing through our strong supplier relationships and bulk purchasing power.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Reliable Delivery
              </h3>
              <p className="text-gray-600">
                Timely and dependable delivery with our robust supply chain and logistics network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}