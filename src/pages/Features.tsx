import { FeaturesSection } from '../components/sections/Features';
import { Button } from '../components/ui/Button';

export default function Features() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Our Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI voice chat agents can transform your business with these powerful features
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={() => window.open('https://calendly.com/voiceflows/30-min-podcast-strategy-consultation', '_blank')}>
              Book Demo
            </Button>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
}