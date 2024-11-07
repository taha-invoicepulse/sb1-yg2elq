import { useState } from 'react';
import { Store, Laptop, BookOpen, Building2 } from 'lucide-react';

const useCases = [
  {
    id: "ecommerce",
    icon: <Store className="h-5 w-5" />,
    title: "ecommerce voice agent",
    description: "Meet Alex, voice agent for a company called Sunny Kids Emporium.",
    snippet: `https://widget.synthflow.ai/widget/v2/1730992114935x638050770762881300/1730992114833x109185770600900960`,
  },
  {
    id: "saas",
    icon: <Laptop className="h-5 w-5" />,
    title: "SaaS voice agent",
    description: "Meet Alessandro, voice agent for a SaaS Startup called Zenvoice.",
    snippet: `https://widget.synthflow.ai/widget/v2/1730993913989x248348895337955360/1730993913878x511431660968232100`,
  },
  {
    id: "blog",
    icon: <BookOpen className="h-5 w-5" />,
    title: "Website Blog voice agent",
    description: "Meet David, webiste blog voice agent from Healthy Eats.",
    snippet: `https://widget.synthflow.ai/widget/v2/1730995106433x260380851928893700/1730995106269x640763217491218300`,
  },
  {
    id: "local",
    icon: <Building2 className="h-5 w-5" />,
    title: "Local Business Website voice agent",
    description: "Meet John from John's Plumbing.",
    snippet: `https://widget.synthflow.ai/widget/v2/1730995365852x959572368513578000/1730995365746x517065738281371460`,
  },
];

export function UseCasesSection() {
  const [activeId, setActiveId] = useState("ecommerce");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-gray-200 px-4 py-1.5 mb-5">
            <span className="text-sm font-medium leading-none text-gray-900">Use Cases</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.id}
                className={`rounded-lg border transition-colors ${
                  activeId === useCase.id
                    ? "bg-primary/5 border-primary/10"
                    : "bg-background hover:bg-muted/50 cursor-pointer"
                }`}
                onClick={() => setActiveId(useCase.id)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-10 w-10 rounded-lg ${
                        activeId === useCase.id ? "bg-primary/10" : "bg-muted"
                      } flex items-center justify-center`}
                    >
                      <div className={activeId === useCase.id ? "text-primary" : "text-muted-foreground"}>
                        {useCase.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                  </div>
                  {activeId === useCase.id && (
                    <div className="mt-4 text-muted-foreground">{useCase.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <div className="rounded-lg border bg-background p-4 h-[600px]">
              {useCases.map(
                (useCase) =>
                  activeId === useCase.id && (
                    <iframe
                      key={useCase.id}
                      id="audio_iframe"
                      src={useCase.snippet}
                      allow="microphone"
                      width="100%"
                      height="100%"
                      style={{
                        position: "relative",
                        background: "transparent",
                        border: "none",
                      }}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}