import { Card, CardContent } from '../ui/Card';
import { Zap, PiggyBank, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-6 pt-2" />,
    title: "Quick & Easy Setup",
    description: "Set up AI voice agents in minutes by simply adding the html code snippets into your desired places.",
  },
  {
    icon: <PiggyBank className="h-8 w-6 pt-2" />,
    title: "Save Money",
    description: "Reduce costs by implementing voice agents who will help in reducing refunds and also help in increasing sales.",
  },
  {
    icon: <TrendingUp className="h-8 w-6 pt-2" />,
    title: "Grow Effortlessly",
    description: "Scale your business easily by handing over customer support product intros to voice agents.",
  },
  {
    icon: <Globe className="h-8 w-6 pt-2" />,
    title: "Always On",
    description: "Stay stress-free with our AI voice agents that are 24/7 online.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-gray-200 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-gray-900">Features</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Features You'll Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:scale-105 hover:bg-muted/50">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
