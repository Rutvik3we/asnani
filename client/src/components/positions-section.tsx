import { useState } from 'react';
import { ChevronDown, HardHat, Zap, ConciergeBell, Fan, Check, BrainCircuit, Scissors, Users, Building2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const positionsData = {
  construction: {
    title: "Construction",
    icon: HardHat,
    color: "from-orange-500 to-orange-600",
    positions: [
      "Civil Engineer", "QA QC Engineer / Supervisor", "Estimator", "Land Surveyor", 
      "Quantity Surveyor", "All Trades Supervisor / Foreman / Leadhand", "Lab Technician (Concrete)",
      "Mason (Tiles / Marble / Block / Plaster)", "Marble / Granite Cutter", "Painter (Brush / Spray)",
      "Shuttering Carpenter", "Scaffolder", "Carpenter (Finishing / Furniture / Carving)",
      "Furniture Polisher", "Furniture / Wood Painter (Brush / Spray)", "Glass Cutter", 
      "Gypsum Board Carpenter", "Gypsum Board Fixer", "Steel Fixer", "Aluminium Fitter / Fabricator", 
      "Civil Labourers", "Plumber"
    ]
  },
  electrical: {
    title: "Electrical & Instrumentation",
    icon: BrainCircuit,
    color: "from-blue-500 to-blue-600",
    positions: [
      "Engineer - Electrical / Instrument", "QA / QC Engineer / Supervisor", "Electrical / Instrument",
      "Supervisor / Foreman / Lead hand - Electrical / Instrument", "Electrician - Building / Industrial / Generator",
      "Instrument Technician / Analyzer Technician", "Instrument Fitter", "Cable Jointer",
      "Tray Fitter", "Lineman", "Motor Rewinder", "Electrical Helpers", "Cable Pullers"
    ]
  },
  tailoring: {
    title: "Tailoring & Upholstery",
    icon: Scissors,
    color: "from-purple-500 to-purple-600",
    positions: [
      "Tailor (Gents / Ladies / Tent / Umbrella)", "Curtain Maker", "Cutter Master (Gents & Ladies)",
      "Embroider (Hand / Machine)", "Upholstry Personnel", "Tailoring Helpers", "Juki Machine Mechanic",
      "Juki Machine Operator", "Sewing Machine Operator", "Sofa Cushion Maker", "Sofa Seat Cover Maker"
    ]
  },
  facility: {
    title: "Facility Management Services",
    icon: Building2,
    color: "from-green-500 to-green-600",
    positions: [
      "Cleaners", "Helpers", "Housekeeping Staff", "Technicians", "Multi Skilled Technicians",
      "Supervisors", "Rope Access Cleaners", "Managers"
    ]
  },
  oilgas: {
    title: "Oil & Gas / Mechanical Projects",
    icon: Zap,
    color: "from-red-500 to-red-600",
    positions: [
      "QA / QC Engineer / Supervisor", "Welding Engineer / Supervisor (CSWIP / AWS)",
      "Painting Engineer Supervisor (BGAS)", "Safety Officer (Specialized In Mechanical)",
      "All Trades Supervisor / Foreman / Leadhand", "Fabricator - Pipe / Steel / Structural",
      "Fitter - Pipe / Structural / Mechanical", "Welder - Argon / Arc / MIG / Structural",
      "Mechanical Helpers", "Rigger", "Sand Blaster / Spray Painter", "Scaffolder",
      "Rotating Equipment Technician", "Sheet Metal Fabricator", "Sheet Metal Fitter",
      "Steel Erector", "Millwright Fitter", "Grinder / Gas Cutter"
    ]
  },
  hospitality: {
    title: "Hospitality",
    icon: ConciergeBell,
    color: "from-pink-500 to-pink-600",
    positions: [
      "F & B Manager", "Security Officer", "Laundry Manager", "Floor Supervisor",
      "Accountant", "Cashier", "Receptionist", "Captains", "Cook", "Beautician", 
      "Time Keeper", "Swimming Pool", "Drivers", "Hair Dresser", "Chefs", "Butcher",
      "Roti Maker", "Waiters", "Stewards", "Baker", "Bell Boy", "Carpet Fixer", "Cleaners"
    ]
  },
  hvac: {
    title: "HVAC",
    icon: Fan,
    color: "from-cyan-500 to-cyan-600",
    positions: [
      "HVAC Engineer", "HVAC Supervisor / Foreman / Lead hand", "Duct Supervisor / Foreman / Lead hand",
      "Insulation Supervisor / Foreman / Lead hand", "A/C Mechanic - Window / Split / Central / Chiller",
      "A/C Pipe Fabricator", "A/C Plant Supervisor", "Duct Fabricator", "Duct Insulator",
      "Duct Fitter", "Duct Erector", "HVAC Technician (Copper Brazing)", "Insulate",
      "Water Cooler Mechanic", "Helpers - Air Conditioning / Duct"
    ]
  }
};

export function PositionsSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  const toggleSection = (sectionName: string) => {
    setExpandedSection(expandedSection === sectionName ? null : sectionName);
  };

  return (
    <section id="positions" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Positions We <span className="text-primary">Cover</span>
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive workforce solutions across all skill levels
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(positionsData).map(([key, section], index) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === key;
            
            return (
              <div 
                key={key}
                className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className={`bg-gradient-to-r ${section.color} text-white p-6 rounded-t-lg cursor-pointer hover:shadow-lg transition-all duration-300`}
                  onClick={() => toggleSection(key)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon className="h-8 w-8 mr-4" />
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <ChevronDown 
                      className={`h-6 w-6 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
                
                <div 
                  className={`position-section bg-gray-50 border border-gray-200 rounded-b-lg overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'expanded' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className={`grid ${section.positions.length > 14 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                      {section.positions.map((position, posIndex) => (
                        <div key={position} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{position}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
