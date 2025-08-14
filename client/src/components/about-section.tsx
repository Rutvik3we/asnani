import { Globe, Users } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team meeting" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className={isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Positioned Among the <span className="text-primary">Top Recruitment</span> Service Providers
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 2011, Asnani HR Solution Manpower Consultancy has been a trusted recruitment partner for oil, refinery, petrochemical, civil and mechanical sectors across the Gulf/Middle East.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We maintain a robust network of qualified candidates and leverage modern technology to match the right talent to the right role—fast and reliably.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Globe className="h-12 w-12 text-primary mb-2 mx-auto" />
                <h4 className="font-semibold">Global Reach</h4>
                <p className="text-sm text-gray-600">Gulf/Middle East Focus</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Users className="h-12 w-12 text-primary mb-2 mx-auto" />
                <h4 className="font-semibold">Large Database</h4>
                <p className="text-sm text-gray-600">Skilled Candidates</p>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              Strong ties with consulates, airlines and authorities help us expedite formalities and mobilization—delivering a smooth, dependable hiring experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
