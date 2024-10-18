import { Container } from "@/components/nextly-components/Container";
import { Hero } from "@/components/nextly-components/Hero";
import { SectionTitle } from "@/components/nextly-components/SectionTitle";
import { Benefits } from "@/components/nextly-components/Benefits";
//import { Video } from "@/components/nextly-components/Video";
import { Testimonials } from "@/components/nextly-components/Testimonials";
import { Faq } from "@/components/nextly-components/Faq";
import { Cta } from "@/components/nextly-components/Cta";


import { benefitMain,benefitOne, benefitTwo } from "@/components/nextly-components/data";
export default function Home() {
  return (
    <Container>
    
      <Hero />
      <div className="h-16"></div> {/* 8 is for the spacing, can be adjusted to your needs */}


      <Benefits data={benefitMain} />
      <Benefits imgPos="right" data={benefitOne} />
      <Benefits data={benefitTwo} />

      <SectionTitle
        preTitle="Blockchain + smart contract-powered ecosystem
"
        title="(code + law) x (games)"
      >
        Making decentralized ecosystems more profitable, accessible, and transparent, while reducing fraud . . . enabling greater adoption of crypto worldwide.

      </SectionTitle>

     
      


      <Testimonials />

      
      <Cta />
    </Container>
  );
}
