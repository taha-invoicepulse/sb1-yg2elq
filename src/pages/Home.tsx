import { useTypewriter } from '../hooks/useTypewriter';
import { Button } from '../components/ui/Button';
import { FeaturesSection } from '../components/sections/Features';
import { TrainingSection } from '../components/sections/Training';
import { UseCasesSection } from '../components/sections/UseCases';
import { PricingSection } from '../components/sections/Pricing';

const words = ["e-commerce store", "SaaS website", "Website blog", "Local business website"];

export default function Home() {
  const animatedText = useTypewriter(words);

  return (
    <>
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Deploy real-time AI voice chat agent on your{" "}
              <span className="text-primary-500 inline-block min-w-[280px] animate-pulse">
                {animatedText}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Add human-like real time trained AI Chat agents wherever you want in less than 5 minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" onClick={() => window.open('https://calendly.com/voiceflows/30-min-podcast-strategy-consultation', '_blank')}>
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      <FeaturesSection />
      <TrainingSection />
      <UseCasesSection />
      <PricingSection />
    </>
  );
}