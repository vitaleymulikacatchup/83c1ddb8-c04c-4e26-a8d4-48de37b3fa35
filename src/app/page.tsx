"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Sparkles } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Fresh Alice"
          description="Experience the art of beauty with our premium skincare treatments and expert care in a luxurious, serene environment"
          buttons={[
            { text: "Book Treatment", href: "/contact" },
            { text: "View Services", href: "/services" }
          ]}
          slides={[
            {
              imageSrc: "https://pixabay.com/get/g8cca10bd90096450247d103ec869a53da0f873cfd7d52b3eaa8c97dac8925c7d7269a22f15b3295b1d77365598cc1983b14014ce91c1b91ec898fe9a50e2d15c_1280.jpg",
              imageAlt: "Luxury beauty salon interior"
            },
            {
              imageSrc: "https://pixabay.com/get/ge4ecf11a74cc611fc99cacbff619aa1a1c8500b67c9ee44ec26239aa6bc32f2d0ee5bf0e526058a93ac0dc5297294f1e949509d4f27a9a3a7673379c435d5987_1280.jpg",
              imageAlt: "Professional treatment room"
            },
            {
              imageSrc: "https://pixabay.com/get/ga9c564b2eccf32e4c99d2f8b80aca2678b18fb951c291ded764aaebb4c3e463dcf60011f778826228b1ebead57ba062c8f123cffe47bb4453073efa79f036ba6_1280.jpg",
              imageAlt: "Elegant beauty studio"
            },
            {
              imageSrc: "https://pixabay.com/get/gedfcc5d291318c1da304953f259a48fe53928ecf093170e89f852e87196d258534160cafbafccaf5300104e32b1c0d4809b9c0a231ae814fa38836f8ff9d890d_1280.jpg",
              imageAlt: "Modern beauty equipment"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We create transformative beauty experiences through expert skincare treatments, premium products, and personalized care in our award-winning studio"
          buttons={[
            { text: "Learn More", href: "/about" },
            { text: "Book Consultation", href: "/contact" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Signature Services"
          description="Discover our comprehensive range of professional beauty treatments designed to enhance your natural radiance"
          tag="Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: "1",
              title: "Advanced Facial Treatments",
              description: "Customized facial treatments using the latest skincare technology and premium products to rejuvenate and restore your skin's natural glow",
              imageSrc: "https://pixabay.com/get/gff3d73e762d6856cb33045a2fdc21a4c7ea692ebfebcdf0ecb2bd2d9b2529772183618a82833c3986639fbc17243927a7204f0b70a35fa397c47746a371948c9_1280.jpg",
              imageAlt: "Professional facial treatment"
            },
            {
              id: "2",
              title: "Skincare Consultation",
              description: "Personalized skin analysis and expert recommendations to create the perfect skincare routine tailored to your unique needs",
              imageSrc: "https://pixabay.com/get/g45867ae2c062bca3b11410c982b505f82fc830fea13518662788156d9475c025c2a8fe538ef14515dd85156e0ce7a11b6c392fc78a7fd013b5b3a49b3f29d69e_1280.jpg",
              imageAlt: "Skincare consultation session"
            },
            {
              id: "3",
              title: "Premium Product Application",
              description: "Professional application of luxury skincare products with techniques that maximize absorption and effectiveness",
              imageSrc: "https://pixabay.com/get/g94bf50ca7db086a7431b9b0550653b8cc8d847a8ffc182b17361ee21add4835b0514db192b57a5e3b2e47933853ec15d54e3807716c81173e3887e525d9773f1_1280.jpg",
              imageAlt: "Beauty product application"
            },
            {
              id: "4",
              title: "Relaxation & Wellness",
              description: "Complete wellness experience combining beauty treatments with relaxation techniques in our tranquil environment",
              imageSrc: "https://pixabay.com/get/g3cf733f6cb37a55eb5736465d7e2cabae09d89989a996a8ba09f223aae840a69b880c406b22a851bbfc02c98419677073e8aaf0f9daaf5ed94450d997c0dc8d2_1280.jpg",
              imageAlt: "Relaxing spa treatment room"
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