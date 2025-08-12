import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Star } from 'lucide-react';

// Client data based on typical Gulf/Middle East companies in the industries we serve
const clients = [
  {
    name: "Al Rajhi Construction",
    industry: "Construction",
    logo: "AR",
    country: "Saudi Arabia"
  },
  {
    name: "Emirates Steel",
    industry: "Manufacturing",
    logo: "ES",
    country: "UAE"
  },
  {
    name: "Qatar Petroleum",
    industry: "Oil & Gas",
    logo: "QP",
    country: "Qatar"
  },
  {
    name: "Emaar Hospitality",
    industry: "Hospitality",
    logo: "EH",
    country: "UAE"
  },
  {
    name: "Saudi Aramco",
    industry: "Oil & Gas",
    logo: "SA",
    country: "Saudi Arabia"
  },
  {
    name: "Kuwait Airways",
    industry: "Aviation",
    logo: "KA",
    country: "Kuwait"
  },
  {
    name: "Bahrain Petroleum",
    industry: "Oil & Gas",
    logo: "BP",
    country: "Bahrain"
  },
  {
    name: "Oman Air",
    industry: "Aviation",
    logo: "OA",
    country: "Oman"
  },
  {
    name: "Dubai Airports",
    industry: "Aviation",
    logo: "DA",
    country: "UAE"
  },
  {
    name: "SABIC",
    industry: "Petrochemicals",
    logo: "SB",
    country: "Saudi Arabia"
  },
  {
    name: "Marriott Hotels",
    industry: "Hospitality",
    logo: "MH",
    country: "Regional"
  },
  {
    name: "Hilton Hotels",
    industry: "Hospitality",
    logo: "HH",
    country: "Regional"
  }
];

const testimonials = [
  {
    text: "Asnani HR Solutions provided us with highly skilled construction professionals who exceeded our project expectations. Their screening process is thorough and reliable.",
    client: "Project Manager",
    company: "Major Construction Firm, UAE",
    rating: 5
  },
  {
    text: "We have been working with Asnani HR for over 5 years. They consistently deliver quality candidates for our oil & gas operations across the Gulf region.",
    client: "HR Director",
    company: "Petrochemical Company, Saudi Arabia",
    rating: 5
  },
  {
    text: "Their hospitality recruitment services helped us staff our new hotel with experienced professionals. The mobilization process was smooth and efficient.",
    client: "General Manager",
    company: "Luxury Hotel Chain, Qatar",
    rating: 5
  }
];

export function ClientsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-primary">Trusted Clients</span>
          </h2>
          <p className="text-xl text-gray-600">
            Serving leading organizations across Gulf and Middle East since 2011
          </p>
        </div>

        {/* Animated Client Logos Carousel - Desktop */}
        <div className={`hidden md:block overflow-hidden mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex animate-scroll-horizontal space-x-6">
            {[...clients, ...clients].map((client, index) => (
              <Card 
                key={`${client.name}-${index}`}
                className="industry-card text-center cursor-pointer hover:shadow-lg flex-shrink-0 w-44 lg:w-48"
              >
                <CardContent className="p-4 lg:p-6 flex flex-col items-center">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mb-3 text-lg lg:text-xl font-bold ${
                    index % 4 === 0 ? 'animate-pulse-slow' : ''
                  }`}>
                    {client.logo}
                  </div>
                  <h4 className="font-semibold text-xs lg:text-sm mb-1">{client.name}</h4>
                  <p className="text-xs text-gray-500 mb-1">{client.industry}</p>
                  <p className="text-xs text-gray-400">{client.country}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Static Client Grid for Mobile and Tablet */}
        <div className="md:hidden mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {clients.slice(0, 9).map((client, index) => (
              <Card 
                key={client.name}
                className={`industry-card text-center cursor-pointer hover:shadow-lg ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                } ${index % 3 === 0 ? 'animate-float' : ''}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationDuration: index % 3 === 0 ? `${3 + (index % 2)}s` : undefined
                }}
              >
                <CardContent className="p-3 sm:p-4 flex flex-col items-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center mb-2 text-sm sm:text-base font-bold ${
                    index % 4 === 0 ? 'animate-pulse-slow' : ''
                  }`}>
                    {client.logo}
                  </div>
                  <h4 className="font-semibold text-xs mb-1">{client.name}</h4>
                  <p className="text-xs text-gray-500 mb-1">{client.industry}</p>
                  <p className="text-xs text-gray-400">{client.country}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-3 sm:mb-4 italic text-sm sm:text-base">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="border-t pt-3 sm:pt-4">
                    <p className="font-semibold text-xs sm:text-sm">{testimonial.client}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className={`mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-4 sm:p-6 lg:p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <Building className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-accent mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">500+</h4>
              <p className="opacity-90 text-xs sm:text-sm lg:text-base">Companies Served</p>
            </div>
            <div>
              <Building className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-accent mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">15+</h4>
              <p className="opacity-90 text-xs sm:text-sm lg:text-base">Countries</p>
            </div>
            <div>
              <Building className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-accent mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">98%</h4>
              <p className="opacity-90 text-xs sm:text-sm lg:text-base">Client Satisfaction</p>
            </div>
            <div>
              <Building className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-accent mx-auto mb-2 sm:mb-3 lg:mb-4" />
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">24/7</h4>
              <p className="opacity-90 text-xs sm:text-sm lg:text-base">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}