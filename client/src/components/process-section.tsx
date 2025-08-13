import { FileText, Search, UserCheck, Plane, Users, Building, Shield, Clock, HeartHandshake, Award, Globe, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';

// Based on the PDF recruitment process flow
const processSteps = [
  {
    title: "Requirement Received",
    description: "Client submits detailed manpower requirements with job specifications and quantities",
    icon: FileText,
    color: "bg-blue-600"
  },
  {
    title: "Database Search",
    description: "Leveraging our extensive candidate database built since 2011 with sophisticated IT systems",
    icon: Search,
    color: "bg-green-600"
  },
  {
    title: "Candidate Selection",
    description: "Screening qualified candidates with similar skills and qualifications from our database",
    icon: UserCheck,
    color: "bg-purple-600"
  },
  {
    title: "Documentation & Mobilization",
    description: "Fast completion of formalities through excellent relations with consulates and airlines",
    icon: Plane,
    color: "bg-orange-600"
  }
];

// Based on PDF commitment content
const commitments = [
  {
    title: "Premier Recruitment Solutions",
    description: "Positioned amongst topmost recruitment service providers since 2011, delivering services across all industries",
    icon: Award,
    highlight: "Since 2011"
  },
  {
    title: "Extensive Database",
    description: "Large database of candidates with sophisticated information technology ensuring easy accessibility and flexibility",
    icon: Users,
    highlight: "IT-Enabled"
  },
  {
    title: "Gulf/Middle East Expertise",
    description: "Specialized in overseas manpower recruitment for Gulf and Middle East markets with proven track record",
    icon: Globe,
    highlight: "Gulf Specialist"
  },
  {
    title: "Government Relations",
    description: "Excellent relations with consulates, airlines and local government authorities for quick mobilization",
    icon: Building,
    highlight: "Fast Processing"
  },
  {
    title: "Quality Assurance",
    description: "Guarantee performance and core values, ensuring complete client satisfaction today and years to come",
    icon: Shield,
    highlight: "Guaranteed"
  },
  {
    title: "Complete Satisfaction",
    description: "Endeavor to be the preferred recruitment solution provider ensuring complete satisfaction",
    icon: HeartHandshake,
    highlight: "100% Focus"
  }
];

const industries = [
  { name: "Construction", icon: "🏗️" },
  { name: "Oil & Gas", icon: "⛽" },
  { name: "Hospitality", icon: "🏨" },
  { name: "Mechanical", icon: "⚙️" },
  { name: "Housekeeping", icon: "🧹" },
  { name: "Manufacturing", icon: "🏭" }
];

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" ref={ref} className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recruitment Process Section */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Recruitment Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sophisticated information technology ensuring easy accessibility and quick mobilization since 2011
          </p>
        </div>

        {/* Process Flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative">
                <Card 
                  className={`timeline-item text-center cursor-pointer hover:shadow-xl transition-all duration-300 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">
                      Step {index + 1}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector for larger screens */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Industries We Serve */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Industries We Are <span className="text-primary">Serving</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-8">
            {industries.map((industry, index) => (
              <Card 
                key={industry.name}
                className={`text-center hover:shadow-lg transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 lg:p-6">
                  <div className="text-3xl lg:text-4xl mb-3">{industry.icon}</div>
                  <h4 className="font-semibold text-sm lg:text-base text-gray-900">{industry.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Endeavoring to be the preferred recruitment solution provider of premier corporations worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <Card 
                  key={commitment.title}
                  className={`group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 lg:p-8 text-center">
                    <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-full inline-block mb-4">
                      <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>
                    <div className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                      {commitment.highlight}
                    </div>
                    <h4 className="text-lg lg:text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {commitment.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{commitment.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
