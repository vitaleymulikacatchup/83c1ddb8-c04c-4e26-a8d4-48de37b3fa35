"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Sparkles, Package, Instagram, Facebook, Twitter } from "lucide-react";

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

      <div id="services" data-section="services">
        <FeatureCardEight
          title="Our Signature Services"
          description="Discover our comprehensive range of professional beauty treatments designed to enhance your natural radiance"
          tag="Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Advanced Facial Treatments",
              description: "Customized facial treatments using the latest skincare technology and premium products to rejuvenate and restore your skin's natural glow",
              imageSrc: "https://pixabay.com/get/gff3d73e762d6856cb33045a2fdc21a4c7ea692ebfebcdf0ecb2bd2d9b2529772183618a82833c3986639fbc17243927a7204f0b70a35fa397c47746a371948c9_1280.jpg",
              imageAlt: "Professional facial treatment"
            },
            {
              id: 2,
              title: "Skincare Consultation",
              description: "Personalized skin analysis and expert recommendations to create the perfect skincare routine tailored to your unique needs",
              imageSrc: "https://pixabay.com/get/g45867ae2c062bca3b11410c982b505f82fc830fea13518662788156d9475c025c2a8fe538ef14515dd85156e0ce7a11b6c392fc78a7fd013b5b3a49b3f29d69e_1280.jpg",
              imageAlt: "Skincare consultation session"
            },
            {
              id: 3,
              title: "Premium Product Application",
              description: "Professional application of luxury skincare products with techniques that maximize absorption and effectiveness",
              imageSrc: "https://pixabay.com/get/g94bf50ca7db086a7431b9b0550653b8cc8d847a8ffc182b17361ee21add4835b0514db192b57a5e3b2e47933853ec15d54e3807716c81173e3887e525d9773f1_1280.jpg",
              imageAlt: "Beauty product application"
            },
            {
              id: 4,
              title: "Relaxation & Wellness",
              description: "Complete wellness experience combining beauty treatments with relaxation techniques in our tranquil environment",
              imageSrc: "https://pixabay.com/get/g3cf733f6cb37a55eb5736465d7e2cabae09d89989a996a8ba09f223aae840a69b880c406b22a851bbfc02c98419677073e8aaf0f9daaf5ed94450d997c0dc8d2_1280.jpg",
              imageAlt: "Relaxing spa treatment room"
            }
          ]}
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