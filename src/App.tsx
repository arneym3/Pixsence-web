import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { SocialProof } from '@/sections/SocialProof';
import { Problem } from '@/sections/Problem';
import { Modules } from '@/sections/Modules';
import { Architecture } from '@/sections/Architecture';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Pricing } from '@/sections/Pricing';
import { ROICalculator } from '@/sections/ROICalculator';
import { Security } from '@/sections/Security';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e0e]">
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Modules />
        <Architecture />
        <ProductShowcase />
        <Pricing />
        <ROICalculator />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
