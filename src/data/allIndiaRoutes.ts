export interface ParcelRoute {
  id: string;
  from: 'Bangalore' | 'Chennai' | 'Tirupur' | 'South Hubs';
  to: string;
  state: string;
  region: 'south' | 'north' | 'west' | 'east' | 'himalayan';
  regionLabel: string;
  transitTime: string;
  serviceType: string;
  badge?: string;
  freq: string;
}

export const ALL_INDIA_PARCEL_ROUTES: ParcelRoute[] = [
  // ==================== SOUTH INDIA CORRIDORS ====================
  { id: "r1", from: "Chennai", to: "Bangalore", state: "Karnataka", region: "south", regionLabel: "Interstate IT & Industrial Corridor", transitTime: "7 Hours", serviceType: "Daily Express FTL & PTL Parcel", badge: "Daily Express", freq: "Every 2 Hours" },
  { id: "r2", from: "Chennai", to: "Tirupur", state: "Tamil Nadu", region: "south", regionLabel: "Garment & Textile Export Highway", transitTime: "7.5 Hours", serviceType: "Express Textile Consignments", badge: "Primary Hub", freq: "Daily 4 Trips" },
  { id: "r3", from: "Chennai", to: "Coimbatore", state: "Tamil Nadu", region: "south", regionLabel: "Engineering & Pump SIPCOT Belt", transitTime: "8 Hours", serviceType: "Industrial Freight & Parcel", badge: "Primary Hub", freq: "Daily 3 Trips" },
  { id: "r4", from: "Chennai", to: "Erode", state: "Tamil Nadu", region: "south", regionLabel: "Textile & Turmeric Trading Hub", transitTime: "6 Hours", serviceType: "Powerloom & Agro Consignment", freq: "Daily Direct" },
  { id: "r5", from: "Chennai", to: "Hosur", state: "Tamil Nadu", region: "south", regionLabel: "Automotive SIPCOT Corridor", transitTime: "5.5 Hours", serviceType: "Auto Components & FTL Haulage", badge: "Auto Belt", freq: "Daily Express" },
  { id: "r6", from: "Chennai", to: "Salem", state: "Tamil Nadu", region: "south", regionLabel: "Steel & Heavy Metal Hub", transitTime: "5 Hours", serviceType: "Heavy Freight & Sago Parcel", freq: "Daily Direct" },
  { id: "r7", from: "Chennai", to: "Karur", state: "Tamil Nadu", region: "south", regionLabel: "Home Textile Export Capital", transitTime: "6.5 Hours", serviceType: "Export Goods Consignment", freq: "Daily Direct" },
  { id: "r8", from: "Chennai", to: "Hyderabad", state: "Telangana", region: "south", regionLabel: "Pharma & Tech Interstate Gateway", transitTime: "12 Hours", serviceType: "Interstate Parcel & FTL Fleet", badge: "Metro Route", freq: "Daily 2 Trips" },
  { id: "r9", from: "Chennai", to: "Vijayawada", state: "Andhra Pradesh", region: "south", regionLabel: "Andhra Commercial Distribution Terminal", transitTime: "9 Hours", serviceType: "Daily Express Cargo", freq: "Daily Direct" },
  { id: "r10", from: "Chennai", to: "Visakhapatnam", state: "Andhra Pradesh", region: "south", regionLabel: "Major Seaport & Steel Freight Desk", transitTime: "16 Hours", serviceType: "Seaport Container & FTL", badge: "Seaport Corridor", freq: "Daily Direct" },
  { id: "r11", from: "Chennai", to: "Tirupati & Chittoor", state: "Andhra Pradesh", region: "south", regionLabel: "Sri City SEZ & Electronics Belt", transitTime: "3.5 Hours", serviceType: "Industrial Parcel & FTL", freq: "Daily Express" },
  { id: "r12", from: "Chennai", to: "Kochi (Ernakulam)", state: "Kerala", region: "south", regionLabel: "Kerala Seaport & Cargo Corridor", transitTime: "14 Hours", serviceType: "Interstate Express Consignment", badge: "Seaport Line", freq: "Daily Direct" },
  { id: "r13", from: "Chennai", to: "Thiruvananthapuram", state: "Kerala", region: "south", regionLabel: "Vizhinjam Seaport & Capital Line", transitTime: "16 Hours", serviceType: "Interstate Cargo Desk", freq: "Daily Direct" },
  { id: "r14", from: "Chennai", to: "Puducherry", state: "Puducherry UT", region: "south", regionLabel: "Union Territory Industrial Corridor", transitTime: "3.5 Hours", serviceType: "Daily UT Express Goods", freq: "Daily Direct" },
  { id: "r15", from: "Chennai", to: "Ambur & Ranipet", state: "Tamil Nadu", region: "south", regionLabel: "Leather Industrial SIPCOT Belt", transitTime: "3 Hours", serviceType: "Leather Export Parcel & FTL", freq: "Daily Direct" },
  { id: "r16", from: "Chennai", to: "Kanchipuram & Sriperumbudur", state: "Tamil Nadu", region: "south", regionLabel: "Global Auto & Electronics SEZ", transitTime: "2 Hours", serviceType: "Industrial FTL Express", badge: "Auto Hub", freq: "Hourly Dispatch" },
  { id: "r17", from: "Chennai", to: "Madurai & Dindigul", state: "Tamil Nadu", region: "south", regionLabel: "South TN Commercial Trade Highway", transitTime: "7 Hours", serviceType: "Express Parcel Line", freq: "Daily 2 Trips" },
  { id: "r18", from: "Chennai", to: "Tuticorin (Thoothukudi)", state: "Tamil Nadu", region: "south", regionLabel: "VOC Deepwater Seaport Cargo", transitTime: "10 Hours", serviceType: "Seaport Container & Heavy FTL", badge: "Seaport Hub", freq: "Daily Direct" },

  { id: "r19", from: "Bangalore", to: "Mysuru", state: "Karnataka", region: "south", regionLabel: "Heritage & Tech Industrial Expressway", transitTime: "3.5 Hours", serviceType: "Intrastate Express Parcel", freq: "Daily 4 Trips" },
  { id: "r20", from: "Bangalore", to: "Hubballi-Dharwad", state: "Karnataka", region: "south", regionLabel: "North Karnataka Freight Terminal", transitTime: "7.5 Hours", serviceType: "Interstate & State Parcel", freq: "Daily 2 Trips" },
  { id: "r21", from: "Bangalore", to: "Mangaluru", state: "Karnataka", region: "south", regionLabel: "Coastal Seaport & Oil Hub", transitTime: "7 Hours", serviceType: "Port Cargo & Express FTL", badge: "Seaport Hub", freq: "Daily Direct" },
  { id: "r22", from: "Bangalore", to: "Belagavi", state: "Karnataka", region: "south", regionLabel: "Foundry & Heavy Engineering Belt", transitTime: "9 Hours", serviceType: "Industrial Machinery Freight", freq: "Daily Direct" },
  { id: "r23", from: "Bangalore", to: "Ballari & Hospet", state: "Karnataka", region: "south", regionLabel: "Steel Plant & Mining Corridor", transitTime: "6.5 Hours", serviceType: "Heavy Freight & Mineral FTL", freq: "Daily Direct" },
  { id: "r24", from: "Bangalore", to: "Anantapur (KIA Hub)", state: "Andhra Pradesh", region: "south", regionLabel: "Automobile Manufacturing Belt", transitTime: "4.5 Hours", serviceType: "Auto Component Express", freq: "Daily Direct" },
  { id: "r25", from: "Bangalore", to: "Kurnool & Kadapa", state: "Andhra Pradesh", region: "south", regionLabel: "Rayalaseema Trade Corridor", transitTime: "7 Hours", serviceType: "Commercial Express Parcel", freq: "Daily Direct" },

  { id: "r26", from: "Tirupur", to: "Coimbatore", state: "Tamil Nadu", region: "south", regionLabel: "Textile & Pump Manufacturing Twin Hub", transitTime: "1 Hour", serviceType: "Shuttle Parcel Service", badge: "Local Shuttle", freq: "Hourly Shuttles" },
  { id: "r27", from: "Tirupur", to: "Kochi & Palakkad", state: "Kerala", region: "south", regionLabel: "Kerala Textile Consignment Highway", transitTime: "4 Hours", serviceType: "Express Garment Parcel", freq: "Daily 3 Trips" },
  { id: "r28", from: "Tirupur", to: "Kozhikode (Calicut)", state: "Kerala", region: "south", regionLabel: "Malabar Garment Trading Corridor", transitTime: "5.5 Hours", serviceType: "Daily Textile Express", freq: "Daily Direct" },
  { id: "r29", from: "Tirupur", to: "Thrissur", state: "Kerala", region: "south", regionLabel: "Commercial Textile Market Line", transitTime: "4.5 Hours", serviceType: "Garment & Goods Parcel", freq: "Daily Direct" },
  { id: "r30", from: "Tirupur", to: "Virudhunagar & Sivakasi", state: "Tamil Nadu", region: "south", regionLabel: "Printing & Garment Export Zone", transitTime: "4 Hours", serviceType: "Industrial Parcel & Goods", freq: "Daily Direct" },
  { id: "r31", from: "Tirupur", to: "Tirunelveli & Nagercoil", state: "Tamil Nadu", region: "south", regionLabel: "Southern TN Garment Freight", transitTime: "5.5 Hours", serviceType: "Express Parcel Line", freq: "Daily Direct" },

  // ==================== WEST COAST & INDUSTRIAL CORRIDORS ====================
  { id: "r32", from: "Bangalore", to: "Mumbai (Bhiwandi Hub)", state: "Maharashtra", region: "west", regionLabel: "Pan-India Financial & Seaport Trunk", transitTime: "20 Hours", serviceType: "Heavy Freight & Express FTL", badge: "Seaport Trunk", freq: "Daily 3 Trips" },
  { id: "r33", from: "Bangalore", to: "Pune (Chakan SIPCOT)", state: "Maharashtra", region: "west", regionLabel: "Automobile & Engineering Corridor", transitTime: "16 Hours", serviceType: "Auto Component FTL & Parcel", badge: "Auto Trunk", freq: "Daily 2 Trips" },
  { id: "r34", from: "Bangalore", to: "Thane & JNPT Port", state: "Maharashtra", region: "west", regionLabel: "JNPT Container Seaport Terminal", transitTime: "21 Hours", serviceType: "Ocean Container Haulage & FTL", badge: "JNPT Seaport", freq: "Daily Direct" },
  { id: "r35", from: "Bangalore", to: "Nagpur", state: "Maharashtra", region: "west", regionLabel: "Zero-Mile National Transit Junction", transitTime: "18 Hours", serviceType: "Central Express Freight", freq: "Daily Direct" },
  { id: "r36", from: "Bangalore", to: "Nashik & Aurangabad", state: "Maharashtra", region: "west", regionLabel: "Pharma & Electrical Industrial Belt", transitTime: "21 Hours", serviceType: "Industrial FTL & Consignment", freq: "Daily Direct" },
  { id: "r37", from: "Bangalore", to: "Kolhapur & Solapur", state: "Maharashtra", region: "west", regionLabel: "Foundry & Garment Trading Hub", transitTime: "12 Hours", serviceType: "Express Goods Parcel", freq: "Daily Direct" },
  { id: "r38", from: "Bangalore", to: "Ahmedabad", state: "Gujarat", region: "west", regionLabel: "Gujarat Trade & Garment Capital", transitTime: "28 Hours", serviceType: "Textile & Goods Freight FTL", badge: "Textile Trunk", freq: "Daily Direct" },
  { id: "r39", from: "Bangalore", to: "Surat", state: "Gujarat", region: "west", regionLabel: "Diamond & Synthetic Fabric Capital", transitTime: "26 Hours", serviceType: "Express Fabric & Machinery FTL", freq: "Daily Direct" },
  { id: "r40", from: "Bangalore", to: "Vadodara", state: "Gujarat", region: "west", regionLabel: "Chemical & Heavy Power Equipment", transitTime: "29 Hours", serviceType: "Heavy Cargo & Chemical FTL", freq: "Daily Direct" },
  { id: "r41", from: "Bangalore", to: "Gandhidham & Kandla Port", state: "Gujarat", region: "west", regionLabel: "Deendayal Deepwater Seaport", transitTime: "34 Hours", serviceType: "International Port Cargo FTL", badge: "Deepwater Port", freq: "Daily Direct" },
  { id: "r42", from: "Bangalore", to: "Morbi", state: "Gujarat", region: "west", regionLabel: "Ceramic & Tiles Industrial Hub", transitTime: "32 Hours", serviceType: "Heavy Tiles Cargo & FTL", freq: "Daily Direct" },
  { id: "r43", from: "Bangalore", to: "Vapi & Ankleshwar", state: "Gujarat", region: "west", regionLabel: "Asia Largest Chemical Belt", transitTime: "27 Hours", serviceType: "Hazmat & Chemical Freight", freq: "Daily Direct" },
  { id: "r44", from: "Bangalore", to: "Goa (Verna Industrial Estate)", state: "Goa", region: "west", regionLabel: "Pharma & Commercial Hub", transitTime: "12 Hours", serviceType: "Daily Express Consignment", freq: "Daily Direct" },
  { id: "r45", from: "Bangalore", to: "Silvassa & Daman", state: "Dadra & Daman UT", region: "west", regionLabel: "UT Plastics & Yarn Industrial Complex", transitTime: "28 Hours", serviceType: "Industrial Parcel & FTL", freq: "Daily Direct" },

  // ==================== NORTH & CENTRAL INDIA CORRIDORS ====================
  { id: "r46", from: "South Hubs", to: "Delhi NCR Central", state: "Delhi NCT", region: "north", regionLabel: "National Capital Region Gateway", transitTime: "36 Hours", serviceType: "Pan-India Air-Suspension FTL", badge: "Capital Metro", freq: "Daily 3 Trips" },
  { id: "r47", from: "South Hubs", to: "Gurugram (Gurgaon)", state: "Haryana", region: "north", regionLabel: "NCR Corporate & Auto Logistics Zone", transitTime: "36 Hours", serviceType: "Enterprise Express FTL", freq: "Daily Direct" },
  { id: "r48", from: "South Hubs", to: "Noida & Greater Noida", state: "Uttar Pradesh", region: "north", regionLabel: "Electronics & Mobile SEZ Corridor", transitTime: "38 Hours", serviceType: "Tech Cargo & Parcel", freq: "Daily Direct" },
  { id: "r49", from: "South Hubs", to: "Jaipur", state: "Rajasthan", region: "north", regionLabel: "Marble, Garment & Handicraft HQ", transitTime: "40 Hours", serviceType: "Handicraft & Textile FTL", freq: "Daily Direct" },
  { id: "r50", from: "South Hubs", to: "Bhiwadi", state: "Rajasthan", region: "north", regionLabel: "NCR Industrial & Auto Ancillary Zone", transitTime: "38 Hours", serviceType: "Auto Components & FTL", freq: "Daily Direct" },
  { id: "r51", from: "South Hubs", to: "Kanpur", state: "Uttar Pradesh", region: "north", regionLabel: "UP Leather Export & Industrial Hub", transitTime: "40 Hours", serviceType: "Leather Cargo & Heavy Parcel", freq: "Daily Direct" },
  { id: "r52", from: "South Hubs", to: "Lucknow", state: "Uttar Pradesh", region: "north", regionLabel: "Central UP Distribution Gateway", transitTime: "42 Hours", serviceType: "Commercial Interstate Parcel", freq: "Daily Direct" },
  { id: "r53", from: "South Hubs", to: "Varanasi & Gorakhpur", state: "Uttar Pradesh", region: "north", regionLabel: "Silk Weaving & Trade Junction", transitTime: "44 Hours", serviceType: "Handloom & Agro Freight", freq: "Daily Direct" },
  { id: "r54", from: "South Hubs", to: "Indore & Pithampur", state: "Madhya Pradesh", region: "north", regionLabel: "Pharma Capital & Commercial Hub", transitTime: "24 Hours", serviceType: "Express Pharma Cargo FTL", badge: "Pharma Hub", freq: "Daily Direct" },
  { id: "r55", from: "South Hubs", to: "Bhopal & Gwalior", state: "Madhya Pradesh", region: "north", regionLabel: "Central Electricals & Trade Hub", transitTime: "26 Hours", serviceType: "Interstate Transit Parcel", freq: "Daily Direct" },
  { id: "r56", from: "South Hubs", to: "Ludhiana", state: "Punjab", region: "north", regionLabel: "Textile, Hosiery & Cycle Industry HQ", transitTime: "44 Hours", serviceType: "Textile & Hardware FTL", badge: "Textile Hub", freq: "Daily Direct" },
  { id: "r57", from: "South Hubs", to: "Amritsar & Jalandhar", state: "Punjab", region: "north", regionLabel: "Border Trade & Sports Goods Hub", transitTime: "46 Hours", serviceType: "Export Goods & Hand Tools", freq: "Daily Direct" },
  { id: "r58", from: "South Hubs", to: "Panipat & Ambala", state: "Haryana", region: "north", regionLabel: "Carpet Export & Scientific Hub", transitTime: "40 Hours", serviceType: "Handloom & Equipment Parcel", freq: "Daily Direct" },
  { id: "r59", from: "South Hubs", to: "Chandigarh", state: "Chandigarh UT", region: "north", regionLabel: "Tri-City Commercial Capital", transitTime: "42 Hours", serviceType: "Daily UT Express Parcel", freq: "Daily Direct" },

  // ==================== EAST & NORTH-EAST CORRIDORS ====================
  { id: "r60", from: "Chennai", to: "Kolkata (Dankuni Hub)", state: "West Bengal", region: "east", regionLabel: "Eastern India Seaport & Logistics HQ", transitTime: "34 Hours", serviceType: "Pan-India FTL & Parcel Fleet", badge: "Eastern HQ", freq: "Daily 2 Trips" },
  { id: "r61", from: "Chennai", to: "Howrah & Haldia Port", state: "West Bengal", region: "east", regionLabel: "Hardware Market & Industrial Seaport", transitTime: "35 Hours", serviceType: "Seaport Container & Heavy FTL", freq: "Daily Direct" },
  { id: "r62", from: "Chennai", to: "Bhubaneswar", state: "Odisha", region: "east", regionLabel: "Odisha Commercial & IT Hub", transitTime: "24 Hours", serviceType: "Interstate Express Freight", freq: "Daily Direct" },
  { id: "r63", from: "Chennai", to: "Cuttack & Paradip Port", state: "Odisha", region: "east", regionLabel: "Deepwater Port & Trade Depot", transitTime: "26 Hours", serviceType: "Seaport Cargo & Parcel", badge: "Deepwater Port", freq: "Daily Direct" },
  { id: "r64", from: "Chennai", to: "Rourkela & Jharsuguda", state: "Odisha", region: "east", regionLabel: "Steel Plant & Mining Corridor", transitTime: "29 Hours", serviceType: "Heavy Industrial Cargo FTL", freq: "Daily Direct" },
  { id: "r65", from: "Chennai", to: "Patna & Muzaffarpur", state: "Bihar", region: "east", regionLabel: "Bihar Trade & Commercial Center", transitTime: "40 Hours", serviceType: "Commercial Parcel & FTL", freq: "Daily Direct" },
  { id: "r66", from: "Chennai", to: "Ranchi & Jamshedpur", state: "Jharkhand", region: "east", regionLabel: "Tata Steel & Heavy Engineering City", transitTime: "35 Hours", serviceType: "Steel Cargo & Heavy Machinery", badge: "Steel Capital", freq: "Daily Direct" },
  { id: "r67", from: "Chennai", to: "Dhanbad & Bokaro", state: "Jharkhand", region: "east", regionLabel: "Coal Mining & Steel Industrial City", transitTime: "36 Hours", serviceType: "Coal Mining Equipment & FTL", freq: "Daily Direct" },
  { id: "r68", from: "Chennai", to: "Raipur & Bhilai", state: "Chhattisgarh", region: "east", regionLabel: "Bhilai Steel Complex & Rice Hub", transitTime: "26 Hours", serviceType: "Heavy Metal Cargo FTL", freq: "Daily Direct" },
  { id: "r69", from: "Chennai", to: "Guwahati", state: "Assam", region: "east", regionLabel: "Gateway Terminal to North-East India", transitTime: "52 Hours", serviceType: "Seven-Sister Express Corridor", badge: "NE Gateway", freq: "Daily Direct" },
  { id: "r70", from: "Chennai", to: "Siliguri", state: "West Bengal", region: "east", regionLabel: "North Bengal, Sikkim & Bhutan Gate", transitTime: "42 Hours", serviceType: "Interstate Parcel Hub", freq: "Daily Direct" },
  { id: "r71", from: "Chennai", to: "Shillong & Agartala", state: "Meghalaya / Tripura", region: "east", regionLabel: "North-East Hill Trade Corridor", transitTime: "58 Hours", serviceType: "Special Hill Freight Line", freq: "Daily Express" },
  { id: "r72", from: "Chennai", to: "Port Blair", state: "Andaman & Nicobar UT", region: "east", regionLabel: "Ocean Seaport Vessel Route from Chennai Port", transitTime: "Vessel Schedule", serviceType: "Ocean Container Freight Cargo", badge: "Ocean Seaport", freq: "Weekly Vessels" },

  // ==================== HIMALAYAN & NORTHERN FRONTIER ====================
  { id: "r73", from: "South Hubs", to: "Dehradun & Haridwar", state: "Uttarakhand", region: "himalayan", regionLabel: "SIDCUL Auto & Consumer Goods Belt", transitTime: "44 Hours", serviceType: "Express Pharma & Industrial FTL", freq: "Daily Direct" },
  { id: "r74", from: "South Hubs", to: "Baddi & Solan", state: "Himachal Pradesh", region: "himalayan", regionLabel: "Asia Largest Pharma Manufacturing Hub", transitTime: "48 Hours", serviceType: "Pharma Express Air-Suspension FTL", badge: "Asia Pharma HQ", freq: "Daily Direct" },
  { id: "r75", from: "South Hubs", to: "Shimla & Mandi", state: "Himachal Pradesh", region: "himalayan", regionLabel: "Apple & Agro Cold Freight Desk", transitTime: "52 Hours", serviceType: "Himalayan Express Parcel", freq: "Daily Direct" },
  { id: "r76", from: "South Hubs", to: "Jammu City", state: "Jammu & Kashmir UT", region: "himalayan", regionLabel: "Railway Terminal & Frontier Gateway", transitTime: "54 Hours", serviceType: "Frontier FTL & Express Goods", freq: "Daily Direct" },
  { id: "r77", from: "South Hubs", to: "Srinagar Valley", state: "Jammu & Kashmir UT", region: "himalayan", regionLabel: "Saffron, Handicraft & Apple Hub", transitTime: "62 Hours", serviceType: "All-Weather Covered Fleet", badge: "Valley Line", freq: "Daily Direct" },
  { id: "r78", from: "South Hubs", to: "Leh & Kargil", state: "Ladakh UT", region: "himalayan", regionLabel: "High-Altitude Defense Cargo Route", transitTime: "70 Hours", serviceType: "Special Expedition Logistics Fleet", badge: "High Altitude", freq: "Bi-Weekly Fleet" }
];