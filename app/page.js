import Hero from "@/components/Hero";
import SimpleDivider from "../components/SimpleDivider";
import Blogs from "@/components/Blogs";
import SocialProof from "@/components/SocialProof";
import NewsLetterCTA from "@/components/NewsLetterCTA";
import ScrollToTop from "@/components/ScrollToTop";
import BlogsCard from "@/components/BlogsCard";

export default function Home() {
  return (
    <div>
      <ScrollToTop/>
      <Hero />
      <SimpleDivider type="gradient" />
      <Blogs/>
      <SimpleDivider type="gradient" />
      <SocialProof/>
      <SimpleDivider type="gradient" />
      <NewsLetterCTA/>
      <SimpleDivider type="gradient" />
      <BlogsCard/>      
      <SimpleDivider type="gradient"/>
    </div>
  );
}
