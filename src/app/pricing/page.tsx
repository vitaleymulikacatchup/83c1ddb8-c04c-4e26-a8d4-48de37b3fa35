"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Crown, Sparkles, Gem, Instagram, Facebook, Twitter } from "lucide-react";

export default function PricingPage() {
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
            { name: "Home", id: "/" },
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

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Treatment Packages"
          description="Choose the perfect package for your beauty and wellness journey"
          tag="Pricing"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Essential",
              badgeIcon: Sparkles,
              price: "$120",
              subtitle: "Perfect for first-time clients",
              buttons: [
                { text: "Book Now", href: "/contact" },
                { text: "Learn More", href: "/pricing" }
              ],
              features: [
                "60-minute signature facial",
                "Skin consultation",
                "Product recommendations",
                "Relaxation aromatherapy"
              ]
            },
            {
              id: "2",
              badge: "Premium",
              badgeIcon: Crown,
              price: "$250",
              subtitle: "Our most popular package",
              buttons: [
                { text: "Book Now", href: "/contact" },
                { text: "Learn More", href: "/pricing" }
              ],
              features: [
                "90-minute deluxe facial",
                "Advanced skin treatments",
                "Premium product application",
                "Personalized skincare routine",
                "Complimentary touch-up session"
              ]
            },
            {
              id: "3",
              badge: "Luxury",
              badgeIcon: Gem,
              price: "$400",
              subtitle: "Ultimate beauty experience",
              buttons: [
                { text: "Book Now", href: "/contact" },
                { text: "Learn More", href: "/pricing" }
              ],
              features: [
                "2-hour comprehensive treatment",
                "Multiple advanced therapies",
                "Luxury product collection",
                "Private consultation room",
                "6-month maintenance program",
                "Priority booking privileges"
              ]
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
            icon: Instagram,
            href: "https://instagram.com/freshalicebeauty",
            ariaLabel: "Follow us on Instagram"
          },
          {
            icon: Facebook,
            href: "https://facebook.com/freshalicebeauty",
            ariaLabel: "Like us on Facebook"
          },
          {
            icon: Twitter,
            href: "https://twitter.com/freshalicebeauty",
            ariaLabel: "Follow us on Twitter"
          }
        ]}
      />
    </ThemeProvider>
  );
}