
import React, { useState, useEffect } from 'react';
import { MapPin, TrendingUp, Lightbulb, Download, ExternalLink } from 'lucide-react';
import { statesData, getLightPollutionColor, getLightPollutionLevelText, StateData } from '../data/indiaLightPollutionData';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  // Set Karnataka as the default selected state when component mounts
  useEffect(() => {
    const karnataka = statesData.find(state => state.id === 'KA');
    if (karnataka) {
      setSelectedState(karnataka);
    }
  }, []);

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
  };

  // Get darkest and brightest states (excluding union territories)
  const getExtremeLightPollutionStates = () => {
    // Filter out union territories
    const onlyStates = statesData.filter(state => 
      !['AN', 'CH', 'DN', 'DL', 'LD', 'PY'].includes(state.id)
    );
    
    // Sort by pollution index
    const sortedStates = [...onlyStates].sort((a, b) => 
      a.lightPollutionIndex - b.lightPollutionIndex
    );
    
    return {
      darkest: sortedStates.slice(0, 3),
      brightest: sortedStates.slice(-3).reverse()
    };
  };

  const { darkest, brightest } = getExtremeLightPollutionStates();

  // State coordinates mapped for pin placement based on political map
  const stateCoordinates: Record<string, { x: number, y: number }> = {
    AP: { x: 45, y: 63 },  // Andhra Pradesh
    AR: { x: 66, y: 35 },  // Arunachal Pradesh
    AS: { x: 64, y: 40 },  // Assam
    BR: { x: 53, y: 43 },  // Bihar
    CG: { x: 48, y: 53 },  // Chhattisgarh
    GA: { x: 37, y: 60 },  // Goa
    GJ: { x: 35, y: 48 },  // Gujarat
    HR: { x: 40, y: 36 },  // Haryana
    HP: { x: 43, y: 29 },  // Himachal Pradesh
    JH: { x: 52, y: 48 },  // Jharkhand
    KA: { x: 42, y: 65 },  // Karnataka
    KL: { x: 41, y: 70 },  // Kerala
    MP: { x: 45, y: 48 },  // Madhya Pradesh
    MH: { x: 41, y: 55 },  // Maharashtra
    MN: { x: 65, y: 45 },  // Manipur
    ML: { x: 61, y: 42 },  // Meghalaya
    MZ: { x: 63, y: 47 },  // Mizoram
    NL: { x: 66, y: 41 },  // Nagaland
    OR: { x: 50, y: 57 },  // Odisha
    PB: { x: 40, y: 31 },  // Punjab
    RJ: { x: 35, y: 41 },  // Rajasthan
    SK: { x: 57, y: 38 },  // Sikkim
    TN: { x: 45, y: 72 },  // Tamil Nadu
    TS: { x: 44, y: 60 },  // Telangana
    TR: { x: 61, y: 46 },  // Tripura
    UP: { x: 48, y: 42 },  // Uttar Pradesh
    UK: { x: 46, y: 32 },  // Uttarakhand
    WB: { x: 56, y: 48 },  // West Bengal
    DL: { x: 43, y: 38 },  // Delhi
    JK: { x: 40, y: 26 },  // Jammu & Kashmir
    LA: { x: 43, y: 24 },  // Ladakh
    // Adjusting islands and union territories
    AN: { x: 66, y: 74 },  // Andaman & Nicobar (moved inside the visible area)
    CH: { x: 42, y: 33 },  // Chandigarh
    DN: { x: 37, y: 53 },  // Dadra & Nagar Haveli and Daman & Diu
    LD: { x: 33, y: 72 },  // Lakshadweep
    PY: { x: 46, y: 69 },  // Puducherry
  };

  return (
    <div className="w-full space-y-6">
      {/* Map and State Info Section */}
      <div className="w-full flex flex-col lg:flex-row gap-6 mb-6">
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
                    size={hoveredState === stateId || selectedState?.id === stateId ? 28 : 22} 
                    fill={getLightPollutionColor(state.lightPollutionIndex)} 
                    color={hoveredState === stateId || selectedState?.id === stateId ? "white" : "black"}
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

          {/* Light Pollution Index Scale - Now shown below the map */}
          <div className="absolute bottom-2 left-2 right-2 bg-gray-800/90 px-3 py-2 rounded shadow">
            <h3 className="text-white text-xs font-semibold mb-1.5">Light Pollution Scale</h3>
            <div className="grid grid-cols-5 gap-1 mb-1">
              {[1, 3.5, 6, 7.5, 9].map((level, index) => (
                <div 
                  key={index}
                  className="h-3 rounded"
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

        {/* Information Panel */}
        <div className="w-full lg:w-1/3">
          {selectedState && (
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
          )}
        </div>
      </div>

      {/* Download Report Button */}
      <div className="mb-6 flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-white font-medium"
                onClick={() => window.open("https://drive.google.com/drive/folders/1lMqwKyCzH38K2yWkwcfW_K2B9TO1mJC_?usp=sharing", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Detailed Report
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-md text-sm">
              A report showcasing insights, patterns, and recommendations with proper statistical proof of how light pollution is being affected.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Three Information Boxes Below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Box 1: Darkest and Brightest Regions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Dark vs Bright Regions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-1">Darkest Regions (Best for Observatories)</h4>
                <ul className="text-sm pl-5 list-disc">
                  {darkest.map(state => (
                    <li key={state.id} className="text-white">
                      {state.name} - {getLightPollutionLevelText(state.lightPollutionIndex)}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-1">Brightest Regions (High Pollution)</h4>
                <ul className="text-sm pl-5 list-disc">
                  {brightest.map(state => (
                    <li key={state.id} className="text-white">
                      {state.name} - {getLightPollutionLevelText(state.lightPollutionIndex)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Box 2: Trend Analysis */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>Trend Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Changes Over Last Decade</h4>
            <ul className="text-sm pl-5 list-disc space-y-2">
              <li className="text-white">Urban areas saw 150-250% increase in light pollution</li>
              <li className="text-white">Rural areas experienced 40-100% increase</li>
              <li className="text-white">Industrial corridors show the fastest growth rate</li>
              <li className="text-white">Coastal regions face 120-180% rise in artificial light</li>
            </ul>
          </CardContent>
        </Card>
        
        {/* Box 3: Solutions */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              <span>Sustainable Solutions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h4 className="text-sm font-medium text-gray-300 mb-2">Proposed Outdoor Lighting Policies</h4>
            <ul className="text-sm pl-5 list-disc space-y-2">
              <li className="text-white">LED transition with warm color temperatures (≤2700K)</li>
              <li className="text-white">Full cut-off fixtures to direct light downward</li>
              <li className="text-white">Motion sensors for adaptive lighting systems</li>
              <li className="text-white">Dark sky ordinances in rural and protected areas</li>
              <li className="text-white">Time-based dimming schedules for urban centers</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndiaMap;
