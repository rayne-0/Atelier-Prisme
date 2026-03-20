import HeroSection from '@/components/home/HeroSection';
import WhatWeDo from '@/components/home/WhatWeDo';
import FeaturedWork from '@/components/home/FeaturedWork';
import ProcessSection from '@/components/home/ProcessSection';
import WhyPrisme from '@/components/home/WhyPrisme';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <WhatWeDo />
      <FeaturedWork />
      <ProcessSection />
      <WhyPrisme />
      <FinalCTA />
    </div>
  );
}
