import { Container } from "@/components/Container";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import ProofSection from "@/components/ProofSection";
import Image from "next/image";
import {faqItems} from '@/constants/FAQdata';
import { Contact } from "@/components/Contact";
import { TeamSection } from "@/components/Team";




export default function Home() {
  return (
    <Container>
    <HeroSection/>
  
    <ProofSection/>
    <Process/>
    <Pricing/>
    <FAQ items={faqItems}/>
    <TeamSection/>
    <Contact/>
  
  
    <Footer/>
     
    </Container>
  );
}
