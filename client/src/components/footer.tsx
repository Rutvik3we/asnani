import { Users, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-accent mb-4 flex items-center">
              <Users className="mr-2" />
              ASNANI HR
            </div>
            <p className="text-gray-400 mb-4">
              Premier manpower consultancy since 2011, connecting talent with opportunity across Gulf/Middle East.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Construction</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Oil & Gas</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hospitality</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">HVAC</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Recruitment</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Manpower Supply</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center"><Phone className="h-4 w-4 mr-2" />+91 95743 17700</p>
              <p className="flex items-center"><Mail className="h-4 w-4 mr-2" />hr@asnanihr.com</p>
              <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" />Vadodara, Gujarat</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Asnani HR Solutions. All rights reserved. | Designed with excellence for talent acquisition.</p>
        </div>
      </div>
    </footer>
  );
}
