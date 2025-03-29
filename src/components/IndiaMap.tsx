
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { statesData, getLightPollutionColor, getLightPollutionLevelText, StateData } from '../data/indiaLightPollutionData';

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
  };

  // Updated state coordinates mapped for pin placement based on political map
  const stateCoordinates: Record<string, { x: number, y: number }> = {
    AP: { x: 48, y: 71 },  // Andhra Pradesh
    AR: { x: 77, y: 33 },  // Arunachal Pradesh
    AS: { x: 74, y: 38 },  // Assam
    BR: { x: 60, y: 45 },  // Bihar
    CG: { x: 52, y: 55 },  // Chhattisgarh
    GA: { x: 32, y: 69 },  // Goa
    GJ: { x: 28, y: 55 },  // Gujarat
    HR: { x: 40, y: 36 },  // Haryana
    HP: { x: 39, y: 28 },  // Himachal Pradesh
    JH: { x: 59, y: 51 },  // Jharkhand
    KA: { x: 38, y: 72 },  // Karnataka
    KL: { x: 37, y: 84 },  // Kerala
    MP: { x: 45, y: 53 },  // Madhya Pradesh
    MH: { x: 40, y: 64 },  // Maharashtra
    MN: { x: 77, y: 44 },  // Manipur
    ML: { x: 70, y: 42 },  // Meghalaya
    MZ: { x: 75, y: 47 },  // Mizoram
    NL: { x: 76, y: 40 },  // Nagaland
    OR: { x: 59, y: 58 },  // Odisha
    PB: { x: 36, y: 30 },  // Punjab
    RJ: { x: 35, y: 43 },  // Rajasthan
    SK: { x: 67, y: 36 },  // Sikkim
    TN: { x: 45, y: 82 },  // Tamil Nadu
    TS: { x: 47, y: 65 },  // Telangana
    TR: { x: 72, y: 45 },  // Tripura
    UP: { x: 50, y: 42 },  // Uttar Pradesh
    UK: { x: 46, y: 32 },  // Uttarakhand
    WB: { x: 65, y: 48 },  // West Bengal
    DL: { x: 43, y: 38 },  // Delhi
    JK: { x: 35, y: 20 },  // Jammu & Kashmir
    LA: { x: 33, y: 15 },  // Ladakh
    // Adjusting islands and union territories
    AN: { x: 74, y: 81 },  // Andaman & Nicobar (moved inside the visible area)
    CH: { x: 39, y: 32 },  // Chandigarh
    DN: { x: 30, y: 61 },  // Dadra & Nagar Haveli and Daman & Diu
    LD: { x: 31, y: 86 },  // Lakshadweep
    PY: { x: 48, y: 79 },  // Puducherry
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Map Container */}
      <div className="relative w-full lg:w-2/3 h-[500px] md:h-[600px] bg-gray-950 rounded-lg overflow-hidden border border-gray-800">
        {/* India Outline Image */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src="/lovable-uploads/937fe21e-84f8-40dc-a1d8-447c009ff891.png"
            alt="India Outline"
            className="h-4/5 object-contain"
          />
          
          {/* State Pins */}
          {Object.entries(stateCoordinates).map(([stateId, coords]) => {
            const state = statesData.find(s => s.id === stateId);
            if (!state) return null;
            
            return (
              <div
                key={stateId}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-125"
                style={{ 
                  left: `${coords.x}%`,
                  top: `${coords.y}%`,
                }}
                onMouseEnter={() => setHoveredState(stateId)}
                onMouseLeave={() => setHoveredState(null)}
                onClick={() => handleStateClick(state)}
              >
                <MapPin 
                  size={hoveredState === stateId ? 28 : 22} 
                  fill={getLightPollutionColor(state.lightPollutionIndex)} 
                  color={hoveredState === stateId ? "white" : "black"}
                  strokeWidth={1.5}
                />
              </div>
            );
          })}
        </div>
        
        {hoveredState && (
          <div className="absolute top-2 left-2 bg-gray-800/90 px-3 py-1.5 rounded shadow text-sm">
            {statesData.find(s => s.id === hoveredState)?.name || "Northeast Region"}
          </div>
        )}
      </div>

      {/* Information Panel */}
      <div className="w-full lg:w-1/3">
        {selectedState ? (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-2 text-white flex items-center">
              <span>{selectedState.name}</span>
              <span 
                className="ml-2 w-3 h-3 rounded-full" 
                style={{ backgroundColor: getLightPollutionColor(selectedState.lightPollutionIndex) }}
              />
            </h2>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Light Pollution Level:</span>
                <span className="font-medium text-white">{getLightPollutionLevelText(selectedState.lightPollutionIndex)}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="h-2.5 rounded-full" 
                  style={{ 
                    width: `${(selectedState.lightPollutionIndex / 10) * 100}%`,
                    backgroundColor: getLightPollutionColor(selectedState.lightPollutionIndex) 
                  }}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-300 text-sm font-medium mb-1">Artificial Brightness</h3>
                <p className="text-white">{selectedState.details.artificialBrightness}</p>
              </div>
              
              <div>
                <h3 className="text-gray-300 text-sm font-medium mb-1">Natural Sky Visibility</h3>
                <p className="text-white">{selectedState.details.naturalSkyVisibility}</p>
              </div>
              
              <div>
                <h3 className="text-gray-300 text-sm font-medium mb-1">Percentage Increase</h3>
                <p className="text-white">{selectedState.details.percentageIncrease}</p>
              </div>
              
              <div>
                <h3 className="text-gray-300 text-sm font-medium mb-1">Impact Level</h3>
                <span 
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    selectedState.details.impactLevel === 'Low' 
                      ? 'bg-blue-400/10 text-blue-400' 
                      : selectedState.details.impactLevel === 'Moderate' 
                      ? 'bg-yellow-400/10 text-yellow-400' 
                      : selectedState.details.impactLevel === 'High' 
                      ? 'bg-red-400/10 text-red-400'
                      : 'bg-red-900/10 text-red-900'
                  }`}
                >
                  {selectedState.details.impactLevel}
                </span>
              </div>
              
              <div>
                <h3 className="text-gray-300 text-sm font-medium mb-1">Major Sources</h3>
                <ul className="list-disc pl-5 text-white">
                  {selectedState.details.majorSources.map((source, idx) => (
                    <li key={idx}>{source}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-lg h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">India Light Pollution Explorer</h2>
            <p className="text-gray-300 mb-8">Click on any pin to view detailed information about that state's light pollution levels.</p>
            
            <div className="w-full max-w-sm">
              <h3 className="text-white text-lg font-semibold mb-3">Light Pollution Scale</h3>
              <div className="grid grid-cols-5 gap-1 mb-2">
                {[1, 3.5, 6, 7.5, 9].map((level, index) => (
                  <div 
                    key={index}
                    className="h-4 rounded"
                    style={{ backgroundColor: getLightPollutionColor(level) }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>Very Low</span>
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
                <span>Very High</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndiaMap;
