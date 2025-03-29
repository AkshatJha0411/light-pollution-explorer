
import React, { useState } from 'react';
import { statesData, getLightPollutionColor, getLightPollutionLevelText, StateData } from '../data/indiaLightPollutionData';

const IndiaMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (state: StateData) => {
    setSelectedState(state);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Map Container */}
      <div className="relative w-full lg:w-2/3 h-[500px] md:h-[600px] bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
        {/* India Map SVG */}
        <svg
          viewBox="65 5 30 40"
          className="w-full h-full"
        >
          {/* Maharashtra */}
          <path
            d="M78.3,26.2 L79.8,26.8 L81.6,27.4 L82.6,28.9 L83.3,30.0 L83.9,30.8 L83.1,31.6 L82.0,32.1 L81.3,33.2 L80.8,34.1 L79.5,33.7 L78.3,32.9 L77.1,31.8 L76.4,31.0 L75.9,29.9 L76.1,28.6 L76.5,27.7 Z"
            fill={hoveredState === "MH" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "MH")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("MH")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "MH") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Gujarat */}
          <path
            d="M72.5,24.6 L73.8,24.2 L75.2,24.5 L76.4,25.2 L77.3,26.1 L78.1,27.1 L77.5,27.9 L76.8,28.5 L76.2,29.3 L75.4,28.7 L74.3,28.1 L73.1,27.4 L72.2,26.5 L72.0,25.6 Z"
            fill={hoveredState === "GJ" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "GJ")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("GJ")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "GJ") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Rajasthan */}
          <path
            d="M73.1,20.4 L74.5,21.1 L75.6,22.0 L76.3,23.1 L76.1,24.3 L75.4,25.2 L74.2,25.6 L73.0,25.3 L71.9,24.7 L71.2,23.5 L71.5,22.3 L72.1,21.2 Z"
            fill={hoveredState === "RJ" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "RJ")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("RJ")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "RJ") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Madhya Pradesh */}
          <path
            d="M76.8,25.4 L78.2,25.9 L79.3,26.7 L79.8,27.9 L79.4,29.0 L78.5,29.7 L77.3,29.9 L76.1,29.5 L75.2,28.6 L74.9,27.4 L75.3,26.3 L76.1,25.7 Z"
            fill={hoveredState === "MP" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "MP")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("MP")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "MP") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Karnataka */}
          <path
            d="M77.8,32.3 L79.0,32.8 L80.1,33.6 L80.6,34.8 L80.2,35.9 L79.2,36.6 L77.9,36.7 L76.7,36.1 L76.1,35.0 L76.2,33.8 L76.9,32.8 Z"
            fill={hoveredState === "KA" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "KA")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("KA")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "KA") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Tamil Nadu */}
          <path
            d="M79.8,36.3 L80.9,36.8 L81.7,37.6 L81.9,38.8 L81.4,39.9 L80.4,40.5 L79.3,40.3 L78.5,39.5 L78.1,38.3 L78.5,37.2 L79.2,36.6 Z"
            fill={hoveredState === "TN" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "TN")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("TN")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "TN") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Andhra Pradesh */}
          <path
            d="M80.3,31.8 L81.6,32.3 L82.5,33.2 L82.8,34.4 L82.4,35.5 L81.5,36.3 L80.2,36.4 L79.1,35.8 L78.5,34.7 L78.7,33.5 L79.4,32.5 Z"
            fill={hoveredState === "AP" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "AP")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("AP")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "AP") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Telangana */}
          <path
            d="M79.4,30.1 L80.6,30.6 L81.5,31.4 L81.7,32.6 L81.3,33.7 L80.3,34.3 L79.0,34.2 L78.1,33.5 L77.8,32.4 L78.1,31.2 L78.7,30.5 Z"
            fill={hoveredState === "TS" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "TS")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("TS")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "TS") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Kerala */}
          <path
            d="M77.0,36.9 L78.1,37.3 L78.9,38.2 L79.0,39.4 L78.5,40.4 L77.5,40.9 L76.4,40.6 L75.7,39.7 L75.5,38.5 L76.0,37.5 Z"
            fill={hoveredState === "KL" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "KL")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("KL")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "KL") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Uttar Pradesh */}
          <path
            d="M77.1,21.3 L78.6,21.8 L79.7,22.7 L80.2,23.9 L79.8,25.0 L78.9,25.8 L77.7,25.9 L76.3,25.5 L75.3,24.6 L74.9,23.4 L75.4,22.2 L76.2,21.6 Z"
            fill={hoveredState === "UP" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "UP")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("UP")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "UP") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Bihar */}
          <path
            d="M82.6,24.1 L83.8,24.6 L84.5,25.5 L84.6,26.7 L84.0,27.6 L82.9,28.0 L81.7,27.6 L81.0,26.7 L80.9,25.5 L81.5,24.5 Z"
            fill={hoveredState === "BR" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "BR")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("BR")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "BR") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* West Bengal */}
          <path
            d="M84.2,26.0 L85.3,26.5 L86.1,27.3 L86.2,28.5 L85.7,29.6 L84.7,30.1 L83.5,29.8 L82.8,28.9 L82.6,27.8 L83.1,26.8 Z"
            fill={hoveredState === "WB" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "WB")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("WB")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "WB") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Odisha */}
          <path
            d="M82.0,29.3 L83.2,29.7 L84.1,30.6 L84.3,31.8 L83.8,32.8 L82.8,33.3 L81.5,33.1 L80.7,32.2 L80.5,31.0 L81.0,30.0 Z"
            fill={hoveredState === "OR" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "OR")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("OR")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "OR") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Punjab */}
          <path
            d="M74.1,18.2 L75.2,18.6 L75.9,19.4 L76.0,20.5 L75.5,21.4 L74.6,21.9 L73.5,21.6 L72.8,20.8 L72.6,19.7 L73.1,18.8 Z"
            fill={hoveredState === "PB" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "PB")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("PB")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "PB") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Haryana */}
          <path
            d="M74.7,19.4 L75.9,19.9 L76.6,20.8 L76.7,21.9 L76.1,22.9 L75.1,23.3 L74.0,22.9 L73.3,22.0 L73.3,20.9 L73.8,20.0 Z"
            fill={hoveredState === "HR" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "HR")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("HR")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "HR") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Delhi */}
          <path
            d="M75.8,21.6 L76.2,21.9 L76.4,22.4 L76.3,22.9 L76.0,23.2 L75.5,23.3 L75.1,23.0 L74.9,22.5 L75.0,22.0 L75.4,21.7 Z"
            fill={hoveredState === "DL" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "DL")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("DL")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "DL") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />

          {/* Northeastern states simplified as one region */}
          <path
            d="M87.0,23.5 L88.2,24.0 L88.9,24.9 L89.0,26.1 L88.5,27.1 L87.4,27.5 L86.3,27.1 L85.6,26.2 L85.5,25.0 L86.0,24.0 Z"
            fill={hoveredState === "NE" ? "#fff" : getLightPollutionColor(4.0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("NE")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "AS") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />

          {/* Chhattisgarh */}
          <path
            d="M80.1,28.5 L81.2,29.0 L82.0,29.9 L82.1,31.0 L81.6,32.0 L80.6,32.5 L79.4,32.2 L78.7,31.3 L78.5,30.1 L79.1,29.2 Z"
            fill={hoveredState === "CG" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "CG")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("CG")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "CG") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Jharkhand */}
          <path
            d="M82.8,26.7 L83.9,27.2 L84.6,28.1 L84.7,29.2 L84.1,30.2 L83.1,30.6 L82.0,30.2 L81.3,29.3 L81.2,28.2 L81.8,27.2 Z"
            fill={hoveredState === "JH" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "JH")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("JH")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "JH") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Uttarakhand */}
          <path
            d="M76.9,19.2 L77.9,19.7 L78.5,20.6 L78.6,21.7 L78.0,22.6 L77.0,23.0 L76.0,22.6 L75.4,21.7 L75.3,20.6 L76.0,19.7 Z"
            fill={hoveredState === "UK" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "UK")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("UK")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "UK") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Himachal Pradesh */}
          <path
            d="M75.3,17.5 L76.3,18.0 L77.0,18.9 L77.0,20.1 L76.4,21.0 L75.4,21.4 L74.4,21.0 L73.8,20.1 L73.8,18.9 L74.4,18.0 Z"
            fill={hoveredState === "HP" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "HP")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("HP")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "HP") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Jammu and Kashmir */}
          <path
            d="M73.5,14.8 L74.8,15.4 L75.7,16.4 L75.8,17.7 L75.1,18.7 L74.0,19.1 L72.7,18.6 L71.8,17.6 L71.7,16.3 L72.4,15.3 Z"
            fill={hoveredState === "JK" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "JK")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("JK")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "JK") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
          
          {/* Goa (small) */}
          <path
            d="M76.5,33.2 L76.8,33.3 L76.9,33.6 L76.8,33.9 L76.5,34.0 L76.2,33.9 L76.1,33.6 L76.2,33.3 Z"
            fill={hoveredState === "GA" ? "#fff" : getLightPollutionColor(statesData.find(s => s.id === "GA")?.lightPollutionIndex || 0)}
            stroke="#333"
            strokeWidth="0.1"
            onMouseEnter={() => setHoveredState("GA")}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => handleStateClick(statesData.find(s => s.id === "GA") as StateData)}
            className="cursor-pointer transition-colors duration-200"
          />
        </svg>
        
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
            <p className="text-gray-300 mb-8">Click on any state to view detailed information about its light pollution levels.</p>
            
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
