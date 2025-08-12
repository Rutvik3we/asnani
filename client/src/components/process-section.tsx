import { Search, Users, CheckCircle, Plane, Handshake, Clock, HeadphonesIcon } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';

const processSteps = [
  {
    title: "Requirement Analysis",
    description: "Understanding client needs and job specifications in detail",
    icon: Search,
    color: "bg-primary"
  },
  {
    title: "Candidate Sourcing",
    description: "Leveraging our extensive database and network for qualified candidates",
    icon: Users,
    color: "bg-secondary"
  },
  {
    title: "Screening & Selection",
    description: "Rigorous evaluation process to ensure best fit candidates",
    icon: CheckCircle,
    color: "bg-accent"
  },
  {
    title: "Deployment",
    description: "Complete mobilization support with documentation and travel",
    icon: Plane,
    color: "bg-green-600"
  }
];

const commitments = [
  {
    title: "Quality Assurance",
    description: "Rigorous screening ensures only qualified candidates",
    icon: Handshake
  },
  {
    title: "Quick Turnaround",
    description: "Fast processing with government and consulate relations",
    icon: Clock
  },
  {
    title: "Ongoing Support",
    description: "Continuous assistance throughout the deployment process",
    icon: HeadphonesIcon
  }
];

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Recruitment Process</span>
          </h2>
          <p className="text-xl text-gray-600">
            Streamlined process ensuring quality placements
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={step.title}
                className={`timeline-item text-center cursor-pointer ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Our Commitment</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {commitments.map((commitment, index) => {
                const Icon = commitment.icon;
                return (
                  <div key={commitment.title} className="text-center">
                    <Icon className="h-16 w-16 text-primary mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold mb-2">{commitment.title}</h4>
                    <p className="text-gray-600">{commitment.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
