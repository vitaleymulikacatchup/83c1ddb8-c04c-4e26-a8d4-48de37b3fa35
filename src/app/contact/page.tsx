"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Calendar, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Appointment"
          title="Ready to Begin Your Beauty Journey?"
          description="Contact us today to schedule your consultation and discover the transformative power of professional beauty care at Fresh Alice."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email address"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our service terms and cancellation policy. We respect your privacy and will never share your information."
          imageSrc="https://pixabay.com/get/g1b393273d6a447784f35c8c16612dec94dd857ab7ea9ba6a4fe02588cb5c265a331599f76b84e057a5c30d07180b928c2edba433980342bc098222d9d41b834f_1280.jpg"
          imageAlt="Fresh Alice beauty studio reception"
          mediaPosition="right"
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