import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicToolTestimonial from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/Upcoming-Webinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/ui/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <MusicToolTestimonial/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
    </main>
  );
}
