"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Award, Users, MessageSquare, Handshake, HelpCircle, Star, Gem, Instagram, Facebook, Twitter } from "lucide-react";

export default function AboutPage() {
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

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Our commitment to quality and customer satisfaction speaks for itself"
          tag="Achievements"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "2000+",
              title: "Happy Clients",
              description: "Satisfied customers who trust us with their beauty journey",
              icon: Users
            },
            {
              id: "2",
              value: "8",
              title: "Years Experience",
              description: "Decades of expertise in professional beauty treatments",
              icon: Award
            },
            {
              id: "3",
              value: "98%",
              title: "Satisfaction Rate",
              description: "Client satisfaction rating based on post-treatment surveys",
              icon: Star
            },
            {
              id: "4",
              value: "15+",
              title: "Premium Brands",
              description: "Luxury beauty brands we partner with for the best products",
              icon: Gem
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Expert Team"
          description="Professional beauty therapists dedicated to enhancing your natural radiance"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          members={[
            {
              id: "1",
              name: "Alice Thompson",
              role: "Master Aesthetician",
              imageSrc: "https://pixabay.com/get/gce003b65712c4409c7a00a75ba276055583bbc1812c36bd97cde35e477e83588e65154f283fde7b1c48e88a4f81a0e0b257304cdf032f728ba30c062e2f41660_1280.jpg",
              imageAlt: "Alice Thompson professional portrait"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real experiences from our valued clients who trust Fresh Alice with their beauty care"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Marketing Director",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g77a30994431fe83071d5bf8d1186bb02b72127b8cb06da8a0c32fa888f77a7e7cc93fc18958632ad10b05c852f55a84b2a329daa8e622d93c61fa6c569cb83fc_1280.jpg",
              imageAlt: "Sarah Mitchell client testimonial"
            },
            {
              id: "2",
              name: "Emma Rodriguez",
              role: "Business Owner",
              company: "Boutique Fashion",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9932424a13b729eee5e4b855f58b7c5788f541d1760a65906607a71f625b319f08c33fda57a3a5068a1eb7fcc4305d43b6f5f394b3daa41d0322bfd5fa7b40de_1280.jpg",
              imageAlt: "Emma Rodriguez client testimonial"
            },
            {
              id: "3",
              name: "Jessica Chen",
              role: "Attorney",
              company: "Legal Associates",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb8152aa6d1a2b45ce91bf0ab261d4c03e50c4ee21397b04e6858561e7e7b7954b0f5d4648bc9a9fdabbaf0c6f3e50237d1aefae425f55fc4b42342da4f573e14_1280.jpg",
              imageAlt: "Jessica Chen client testimonial"
            },
            {
              id: "4",
              name: "Lisa Johnson",
              role: "Real Estate Agent",
              company: "Premier Properties",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7895c32218665ec637c26bde487cb94d052ac0d10aa90152a8ead71677e67145352379e221a96f3201f1274af6d2b1559e3ae7d9acebafdab79bd5d24c235344_1280.jpg",
              imageAlt: "Lisa Johnson client testimonial"
            },
            {
              id: "5",
              name: "Maria Garcia",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb6b61250aec6323493d250f9807726469e3150712aaf62b608f0d1d4d336921d0059cb0da50d9f064c58586b7ccf2133fc991241a8b4319011d874f922ba8405_1280.jpg",
              imageAlt: "Maria Garcia client testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Beauty Brands"
          description="We partner with the world's leading beauty and skincare brands to bring you the finest products"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          speed={30}
          showCard={true}
          logos={[
            "https://pixabay.com/get/g0c10fc224bebb2a6b0d955e68442242cf7a49abe6305d1337473c12b5f3764a0a7f1308514d7a538ce487556b56574bce21bdf50371ef9d4433a2fca2087496c_1280.jpg",
            "https://pixabay.com/get/g63b8d0ba84e2450996f49a6670c3739aea99356ccc47275fdca58e9e8c3876982ffbdf6d7222212f1985b19071dee4ee28149c09558793c8d7dc1b71003a2294_1280.jpg",
            "https://pixabay.com/get/gecb414d6bfb20524d9d196c74d1c90693875e40ae9fbaf65c6a152fb23ecf4ac1cc3810e8fc68fb316c4e544dae74ded4eaedd1fe957d05c5c86916266697071_1280.jpg",
            "https://pixabay.com/get/g053de18ebf76957f6102b4f5949fc8c134c205c43746ff298daddf15b6fc0ba842307c38f50898b7502645a618c51b916af7c142bd909da07e1d26aeb9cace01_1280.jpg",
            "https://pixabay.com/get/g52973958014da90797a7f98a53052b254c2b2ad7d3cd00988164e1d7d41b9998ad88df26f69aef463b7e4bfacdfd6453b9538630cb3b9b2f7c4c96f19fb870d2_1280.jpg",
            "https://pixabay.com/get/g65b2413113da1070fcf767e7bc7deda0f5e934ca54041e715a327222f69f36d972c5015256818abec9d0f4fc67cec37fc3970b2f755ff28a1794aeeee7fb0c95_1280.jpg",
            "https://pixabay.com/get/ge4952478887c0cd393f2a54c73fc93ae2d0f8d7f3477571a78f1908d528cf2335c847d302cd8c87f4b9bc4e89df2bfc2064f2567d88383926ae82158fa72befb_1280.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our beauty treatments and services"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What should I expect during my first visit?",
              content: "Your first visit begins with a comprehensive skin consultation where we analyze your skin type, concerns, and goals. We'll then recommend the best treatment plan tailored specifically for you, followed by your chosen service in our relaxing treatment room."
            },
            {
              id: "2",
              title: "How often should I book treatments?",
              content: "For optimal results, we recommend scheduling treatments every 4-6 weeks. However, this can vary based on your skin type, chosen services, and personal goals. Our aestheticians will provide personalized recommendations during your consultation."
            },
            {
              id: "3",
              title: "What products do you use?",
              content: "We exclusively use premium, professional-grade skincare products from renowned brands like Chanel, L'Oreal Professional, Clinique, and other luxury lines. All products are carefully selected for their effectiveness and quality."
            },
            {
              id: "4",
              title: "Do you offer package deals?",
              content: "Yes! We offer three comprehensive packages: Essential ($120), Premium ($250), and Luxury ($400). Each package includes different treatment lengths and additional benefits. Package clients also receive priority booking and exclusive perks."
            },
            {
              id: "5",
              title: "How do I prepare for my treatment?",
              content: "Come with clean skin (no makeup if possible), avoid sun exposure 24 hours before, and stay hydrated. If you have sensitive skin or allergies, please inform us when booking. We'll provide specific pre-treatment instructions based on your chosen service."
            },
            {
              id: "6",
              title: "What is your cancellation policy?",
              content: "We require 24-hour notice for cancellations or rescheduling. Same-day cancellations may incur a 50% service charge. No-shows will be charged the full service amount. We understand emergencies happen and will work with you on a case-by-case basis."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Fresh Alice"
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
      </div>
    </ThemeProvider>
  );
}