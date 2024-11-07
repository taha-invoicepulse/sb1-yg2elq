import { UseCasesSection } from '../components/sections/UseCases';
import { Button } from '../components/ui/Button';

export default function UseCases() {
  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Use Cases</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore how different businesses are leveraging our AI voice chat agents
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={() => window.open('https://calendly.com/voiceflows/30-min-podcast-strategy-consultation', '_blank')}>
              Book Demo
            </Button>
          </div>
        </div>
      </div>
      <UseCasesSection />
    </div>
  );
}