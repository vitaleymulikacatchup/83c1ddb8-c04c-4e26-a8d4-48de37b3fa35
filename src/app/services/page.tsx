"use client"

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import { Package } from "lucide-react";
import FooterSocial from "@/components/sections/footer/FooterSocial";

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="animatedGrid"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "/services" },
            { name: "About", id: "/about" },
            { name: "Pricing", id: "/pricing" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Fresh Alice"
          button={{
            text: "Book Appointment",
            href: "/contact"
          }}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Premium Beauty Products"
          description="Discover our curated collection of luxury skincare and beauty products"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Radiance Renewal Serum",
              price: "$149",
              imageSrc: "https://pixabay.com/get/g6b96347f62fdc1779f0e1d8587999476718fe23e8defcd2dc6a448f1dd625aeb7630fee16827010f62610515e1c44e0c79f7be3aa44b91c729a0aad4fd237d3a_1280.jpg",
              imageAlt: "Premium skincare serum"
            },
            {
              id: "2",
              name: "Hydrating Face Elixir",
              price: "$89",
              imageSrc: "https://pixabay.com/get/g15a9589ee5a6b4db8d0ee6abbd9bcfe60377980a9ff5e62240363fc2b6413cf25f9e3d501f8add058e9f91121d86a74e15bb1ecf7bc92b9896327b6133b7f832_1280.jpg",
              imageAlt: "Luxury face serum"
            },
            {
              id: "3",
              name: "Nourishing Night Cream",
              price: "$119",
              imageSrc: "https://pixabay.com/get/g22725864bc695ed05adcbbfdee1756e98a16735175874a5bb371efc1e4435b53ec4113d363c37e651230c4facb07d5fd0c1c018be718bbcde50aca2e4cc74843_1280.jpg",
              imageAlt: "Organic skincare cream"
            }
          ]}
        />
      </div>

      <FooterSocial
        brandName="Fresh Alice"
        copyrightText="© 2025 Fresh Alice Beauty Studio. All rights reserved."
        columns={[
          {
            title: "Services",
            items: [
              { label: "Facial Treatments", href: "/services" },
              { label: "Skincare Consultation", href: "/services" },
              { label: "Beauty Products", href: "/services" },
              { label: "Treatment Packages", href: "/pricing" }
            ]
          },
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about" },
              { label: "Our Team", href: "/about" },
              { label: "Testimonials", href: "/about" },
              { label: "Contact", href: "/contact" }
            ]
          },
          {
            title: "Support",
            items: [
              { label: "FAQ", href: "/about" },
              { label: "Book Appointment", href: "/contact" },
              { label: "Gift Cards", href: "/contact" },
              { label: "Cancellation Policy", href: "/about" }
            ]
          }
        ]}
        socialLinks={[
          {
            icon: "Instagram",
            href: "https://instagram.com/freshalicebeauty",
            ariaLabel: "Follow us on Instagram"
          },
          {
            icon: "Facebook",
            href: "https://facebook.com/freshalicebeauty",
            ariaLabel: "Like us on Facebook"
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/freshalicebeauty",
            ariaLabel: "Follow us on Twitter"
          }
        ]}
      />
    </ThemeProvider>
  );
}