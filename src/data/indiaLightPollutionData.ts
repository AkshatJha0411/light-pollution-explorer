
export interface StateData {
  id: string;
  name: string;
  lightPollutionIndex: number; // 0-10 scale where 10 is highest pollution
  coordinates: [number, number]; // [latitude, longitude] for state center
  details: {
    artificialBrightness: string;
    naturalSkyVisibility: string;
    percentageIncrease: string;
    impactLevel: 'Low' | 'Moderate' | 'High' | 'Severe';
    majorSources: string[];
  };
}

export const statesData: StateData[] = [
  {
    id: "AP",
    name: "Andhra Pradesh",
    lightPollutionIndex: 7.2,
    coordinates: [15.9129, 79.7400],
    details: {
      artificialBrightness: "8.3 times above natural levels",
      naturalSkyVisibility: "Poor in urban centers, moderate in rural areas",
      percentageIncrease: "184% in the last decade",
      impactLevel: "High",
      majorSources: ["Urban development", "Industrial zones", "Highway lighting"]
    }
  },
  {
    id: "AR",
    name: "Arunachal Pradesh",
    lightPollutionIndex: 2.1,
    coordinates: [28.2180, 94.7278],
    details: {
      artificialBrightness: "1.8 times above natural levels",
      naturalSkyVisibility: "Good across most regions",
      percentageIncrease: "47% in the last decade",
      impactLevel: "Low",
      majorSources: ["Small urban centers", "Border security lighting"]
    }
  },
  {
    id: "AS",
    name: "Assam",
    lightPollutionIndex: 4.5,
    coordinates: [26.2006, 92.9376],
    details: {
      artificialBrightness: "3.9 times above natural levels",
      naturalSkyVisibility: "Moderate in most areas",
      percentageIncrease: "112% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Urban expansion", "Oil refineries", "Tea garden illumination"]
    }
  },
  {
    id: "BR",
    name: "Bihar",
    lightPollutionIndex: 6.8,
    coordinates: [25.0961, 85.3131],
    details: {
      artificialBrightness: "7.4 times above natural levels",
      naturalSkyVisibility: "Poor in populated areas",
      percentageIncrease: "203% in the last decade",
      impactLevel: "High",
      majorSources: ["Dense urban settlements", "Agricultural processing centers"]
    }
  },
  {
    id: "CG",
    name: "Chhattisgarh",
    lightPollutionIndex: 5.3,
    coordinates: [21.2787, 81.8661],
    details: {
      artificialBrightness: "5.1 times above natural levels",
      naturalSkyVisibility: "Fair in rural areas, poor near industrial zones",
      percentageIncrease: "156% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Mining operations", "Steel plants", "Power plants"]
    }
  },
  {
    id: "GA",
    name: "Goa",
    lightPollutionIndex: 6.7,
    coordinates: [15.2993, 74.1240],
    details: {
      artificialBrightness: "7.2 times above natural levels",
      naturalSkyVisibility: "Poor in coastal tourist areas",
      percentageIncrease: "168% in the last decade",
      impactLevel: "High",
      majorSources: ["Tourism infrastructure", "Coastal development", "Port facilities"]
    }
  },
  {
    id: "GJ",
    name: "Gujarat",
    lightPollutionIndex: 8.1,
    coordinates: [22.2587, 71.1924],
    details: {
      artificialBrightness: "9.4 times above natural levels",
      naturalSkyVisibility: "Very poor in industrial corridors",
      percentageIncrease: "224% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Industrial clusters", "Petrochemical complexes", "Port illumination"]
    }
  },
  {
    id: "HR",
    name: "Haryana",
    lightPollutionIndex: 8.5,
    coordinates: [29.0588, 76.0856],
    details: {
      artificialBrightness: "9.7 times above natural levels",
      naturalSkyVisibility: "Very poor throughout urban areas",
      percentageIncrease: "237% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Industrial growth", "Delhi NCR expansion", "Highway corridors"]
    }
  },
  {
    id: "HP",
    name: "Himachal Pradesh",
    lightPollutionIndex: 3.2,
    coordinates: [31.1048, 77.1734],
    details: {
      artificialBrightness: "2.8 times above natural levels",
      naturalSkyVisibility: "Good in mountain regions, moderate in valleys",
      percentageIncrease: "89% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Tourism development", "Hydroelectric projects", "Urban centers"]
    }
  },
  {
    id: "JH",
    name: "Jharkhand",
    lightPollutionIndex: 5.7,
    coordinates: [23.6102, 85.2799],
    details: {
      artificialBrightness: "5.9 times above natural levels",
      naturalSkyVisibility: "Moderate to poor near industrial zones",
      percentageIncrease: "143% in the last decade",
      impactLevel: "High",
      majorSources: ["Mining operations", "Steel plants", "Urban centers"]
    }
  },
  {
    id: "KA",
    name: "Karnataka",
    lightPollutionIndex: 7.0,
    coordinates: [15.3173, 75.7139],
    details: {
      artificialBrightness: "7.8 times above natural levels",
      naturalSkyVisibility: "Poor in tech corridors and urban centers",
      percentageIncrease: "196% in the last decade",
      impactLevel: "High",
      majorSources: ["IT parks", "Urban sprawl", "Manufacturing zones"]
    }
  },
  {
    id: "KL",
    name: "Kerala",
    lightPollutionIndex: 6.9,
    coordinates: [10.8505, 76.2711],
    details: {
      artificialBrightness: "7.5 times above natural levels",
      naturalSkyVisibility: "Poor in dense urban corridors",
      percentageIncrease: "172% in the last decade",
      impactLevel: "High",
      majorSources: ["Linear urban development", "Tourism infrastructure", "Commercial areas"]
    }
  },
  {
    id: "MP",
    name: "Madhya Pradesh",
    lightPollutionIndex: 5.4,
    coordinates: [22.9734, 78.6569],
    details: {
      artificialBrightness: "5.2 times above natural levels",
      naturalSkyVisibility: "Moderate in most regions",
      percentageIncrease: "138% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Urban centers", "Industrial zones", "Highway corridors"]
    }
  },
  {
    id: "MH",
    name: "Maharashtra",
    lightPollutionIndex: 8.3,
    coordinates: [19.7515, 75.7139],
    details: {
      artificialBrightness: "9.6 times above natural levels",
      naturalSkyVisibility: "Very poor in metropolitan regions",
      percentageIncrease: "248% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Mumbai metropolitan region", "Industrial corridors", "Commercial districts"]
    }
  },
  {
    id: "MN",
    name: "Manipur",
    lightPollutionIndex: 3.1,
    coordinates: [24.6637, 93.9063],
    details: {
      artificialBrightness: "2.7 times above natural levels",
      naturalSkyVisibility: "Good in rural areas",
      percentageIncrease: "76% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Urban centers", "Border area illumination"]
    }
  },
  {
    id: "ML",
    name: "Meghalaya",
    lightPollutionIndex: 2.9,
    coordinates: [25.4670, 91.3662],
    details: {
      artificialBrightness: "2.4 times above natural levels",
      naturalSkyVisibility: "Good throughout most regions",
      percentageIncrease: "62% in the last decade",
      impactLevel: "Low",
      majorSources: ["Urban centers", "Mining operations"]
    }
  },
  {
    id: "MZ",
    name: "Mizoram",
    lightPollutionIndex: 2.5,
    coordinates: [23.1645, 92.9376],
    details: {
      artificialBrightness: "2.1 times above natural levels",
      naturalSkyVisibility: "Good across most of the state",
      percentageIncrease: "58% in the last decade",
      impactLevel: "Low",
      majorSources: ["Aizawl urban area", "Border security lighting"]
    }
  },
  {
    id: "NL",
    name: "Nagaland",
    lightPollutionIndex: 2.7,
    coordinates: [26.1584, 94.5624],
    details: {
      artificialBrightness: "2.3 times above natural levels",
      naturalSkyVisibility: "Good in most regions",
      percentageIncrease: "64% in the last decade",
      impactLevel: "Low",
      majorSources: ["Urban centers", "Military installations"]
    }
  },
  {
    id: "OR",
    name: "Odisha",
    lightPollutionIndex: 5.1,
    coordinates: [20.9517, 85.0985],
    details: {
      artificialBrightness: "4.8 times above natural levels",
      naturalSkyVisibility: "Moderate throughout most regions",
      percentageIncrease: "121% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Industrial corridors", "Mining areas", "Coastal development"]
    }
  },
  {
    id: "PB",
    name: "Punjab",
    lightPollutionIndex: 8.7,
    coordinates: [31.1471, 75.3412],
    details: {
      artificialBrightness: "9.9 times above natural levels",
      naturalSkyVisibility: "Very poor across most populated areas",
      percentageIncrease: "253% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Agricultural processing centers", "Urban areas", "Industrial zones"]
    }
  },
  {
    id: "RJ",
    name: "Rajasthan",
    lightPollutionIndex: 6.2,
    coordinates: [27.0238, 74.2179],
    details: {
      artificialBrightness: "6.5 times above natural levels",
      naturalSkyVisibility: "Good in desert areas, poor near cities",
      percentageIncrease: "167% in the last decade",
      impactLevel: "High",
      majorSources: ["Urban centers", "Tourism infrastructure", "Industrial zones"]
    }
  },
  {
    id: "SK",
    name: "Sikkim",
    lightPollutionIndex: 2.2,
    coordinates: [27.5330, 88.5122],
    details: {
      artificialBrightness: "1.9 times above natural levels",
      naturalSkyVisibility: "Excellent in most regions",
      percentageIncrease: "42% in the last decade",
      impactLevel: "Low",
      majorSources: ["Gangtok urban area", "Tourism infrastructure"]
    }
  },
  {
    id: "TN",
    name: "Tamil Nadu",
    lightPollutionIndex: 7.8,
    coordinates: [11.1271, 78.6569],
    details: {
      artificialBrightness: "8.9 times above natural levels",
      naturalSkyVisibility: "Poor in industrial and urban corridors",
      percentageIncrease: "215% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Manufacturing zones", "Urban areas", "Coastal development"]
    }
  },
  {
    id: "TS",
    name: "Telangana",
    lightPollutionIndex: 7.3,
    coordinates: [18.1124, 79.0193],
    details: {
      artificialBrightness: "8.2 times above natural levels",
      naturalSkyVisibility: "Poor near Hyderabad, moderate elsewhere",
      percentageIncrease: "187% in the last decade",
      impactLevel: "High",
      majorSources: ["IT corridors", "Urban expansion", "Industrial zones"]
    }
  },
  {
    id: "TR",
    name: "Tripura",
    lightPollutionIndex: 3.6,
    coordinates: [23.9408, 91.9882],
    details: {
      artificialBrightness: "3.2 times above natural levels",
      naturalSkyVisibility: "Moderate throughout the state",
      percentageIncrease: "94% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Urban centers", "Border illumination"]
    }
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    lightPollutionIndex: 8.2,
    coordinates: [26.8467, 80.9462],
    details: {
      artificialBrightness: "9.5 times above natural levels",
      naturalSkyVisibility: "Very poor in Gangetic plains",
      percentageIncrease: "242% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Dense urban settlements", "Industrial zones", "Religious tourism"]
    }
  },
  {
    id: "UK",
    name: "Uttarakhand",
    lightPollutionIndex: 4.1,
    coordinates: [30.0668, 79.0193],
    details: {
      artificialBrightness: "3.7 times above natural levels",
      naturalSkyVisibility: "Good in Himalayan regions, poor in valley cities",
      percentageIncrease: "103% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Urban centers", "Tourism infrastructure", "Religious sites"]
    }
  },
  {
    id: "WB",
    name: "West Bengal",
    lightPollutionIndex: 7.6,
    coordinates: [22.9868, 87.8550],
    details: {
      artificialBrightness: "8.6 times above natural levels",
      naturalSkyVisibility: "Very poor in Kolkata region, moderate elsewhere",
      percentageIncrease: "198% in the last decade",
      impactLevel: "High",
      majorSources: ["Kolkata metropolitan area", "Industrial zones", "Port facilities"]
    }
  },
  {
    id: "AN",
    name: "Andaman & Nicobar",
    lightPollutionIndex: 1.8,
    coordinates: [11.7401, 92.6586],
    details: {
      artificialBrightness: "1.5 times above natural levels",
      naturalSkyVisibility: "Excellent in most areas",
      percentageIncrease: "34% in the last decade",
      impactLevel: "Low",
      majorSources: ["Port Blair urban area", "Tourism facilities"]
    }
  },
  {
    id: "CH",
    name: "Chandigarh",
    lightPollutionIndex: 8.9,
    coordinates: [30.7333, 76.7794],
    details: {
      artificialBrightness: "9.8 times above natural levels",
      naturalSkyVisibility: "Very poor throughout the territory",
      percentageIncrease: "212% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Urban grid layout", "Commercial zones", "Industrial areas"]
    }
  },
  {
    id: "DN",
    name: "Dadra & Nagar Haveli and Daman & Diu",
    lightPollutionIndex: 7.1,
    coordinates: [20.1809, 73.0169],
    details: {
      artificialBrightness: "7.9 times above natural levels",
      naturalSkyVisibility: "Poor throughout the territory",
      percentageIncrease: "176% in the last decade",
      impactLevel: "High",
      majorSources: ["Industrial zones", "Urban areas", "Tourism infrastructure"]
    }
  },
  {
    id: "DL",
    name: "Delhi",
    lightPollutionIndex: 9.8,
    coordinates: [28.7041, 77.1025],
    details: {
      artificialBrightness: "12.3 times above natural levels",
      naturalSkyVisibility: "Extremely poor throughout the territory",
      percentageIncrease: "278% in the last decade",
      impactLevel: "Severe",
      majorSources: ["Urban density", "Commercial areas", "Transport corridors"]
    }
  },
  {
    id: "JK",
    name: "Jammu & Kashmir",
    lightPollutionIndex: 4.3,
    coordinates: [33.7782, 76.5762],
    details: {
      artificialBrightness: "4.1 times above natural levels",
      naturalSkyVisibility: "Good in mountain regions, poor in valleys",
      percentageIncrease: "118% in the last decade",
      impactLevel: "Moderate",
      majorSources: ["Urban centers", "Military installations", "Tourism infrastructure"]
    }
  },
  {
    id: "LA",
    name: "Ladakh",
    lightPollutionIndex: 1.4,
    coordinates: [34.2268, 77.5619],
    details: {
      artificialBrightness: "1.2 times above natural levels",
      naturalSkyVisibility: "Excellent in most regions",
      percentageIncrease: "28% in the last decade",
      impactLevel: "Low",
      majorSources: ["Leh urban area", "Military installations", "Tourism facilities"]
    }
  },
  {
    id: "LD",
    name: "Lakshadweep",
    lightPollutionIndex: 2.3,
    coordinates: [10.5667, 72.6417],
    details: {
      artificialBrightness: "2.0 times above natural levels",
      naturalSkyVisibility: "Good across most islands",
      percentageIncrease: "52% in the last decade",
      impactLevel: "Low",
      majorSources: ["Urban settlements", "Tourism facilities"]
    }
  },
  {
    id: "PY",
    name: "Puducherry",
    lightPollutionIndex: 7.4,
    coordinates: [11.9416, 79.8083],
    details: {
      artificialBrightness: "8.4 times above natural levels",
      naturalSkyVisibility: "Poor in urban areas",
      percentageIncrease: "182% in the last decade",
      impactLevel: "High",
      majorSources: ["Urban density", "Tourism infrastructure", "Industrial zones"]
    }
  }
];

// Function to get color based on light pollution index
export const getLightPollutionColor = (index: number): string => {
  if (index < 2.5) return '#073B4C'; // Very low pollution (deep blue)
  if (index < 5) return '#118AB2';   // Low pollution (medium blue)
  if (index < 7) return '#FFD166';   // Moderate pollution (yellow)
  if (index < 8.5) return '#EF476F'; // High pollution (pink)
  return '#9D0208';                  // Very high pollution (dark red)
};

export const getLightPollutionLevelText = (index: number): string => {
  if (index < 2.5) return 'Very Low';
  if (index < 5) return 'Low';
  if (index < 7) return 'Moderate';
  if (index < 8.5) return 'High';
  return 'Very High';
};
