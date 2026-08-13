export interface CityDistrict {
  name: string;
  type: string;
  transitTime: string;
}

export interface StateCoverage {
  id: string;
  name: string;
  code: string;
  region: string;
  transitTime: string;
  serviceType: string;
  districts: CityDistrict[];
}

export interface HubCoverage {
  hubId: 'bangalore' | 'chennai' | 'tirupur';
  hubName: string;
  badge: string;
  tagline: string;
  phone: string;
  email: string;
  states: StateCoverage[];
}

export const ALL_HUB_COVERAGE: HubCoverage[] = [
  {
    hubId: 'bangalore',
    hubName: 'Bangalore (Head Office & Central Hub)',
    badge: 'Headquarters & Interstate Transit Gateway',
    tagline: 'Direct daily dispatches connecting Karnataka to Western, Northern, Central India & UTs',
    phone: '+91 95667 38884',
    email: 'bangalore@lithintransport.com',
    states: [
      {
        id: 'karnataka',
        name: 'Karnataka',
        code: 'KA',
        region: 'South Central',
        transitTime: '4 - 12 Hours',
        serviceType: 'Intrastate & Interstate FTL / PTL Cargo',
        districts: [
          { name: 'Bengaluru Urban & Rural', type: 'Corporate HQ & Tech Logistics Hub', transitTime: 'Same Day' },
          { name: 'Mysuru', type: 'Industrial & Commercial Belt', transitTime: '4 Hours' },
          { name: 'Hubballi - Dharwad', type: 'North Karnataka Transit Terminal', transitTime: '8 Hours' },
          { name: 'Mangaluru', type: 'New Mangalore Seaport & Oil Complex', transitTime: '7 Hours' },
          { name: 'Belagavi', type: 'Foundry & Heavy Engineering Zone', transitTime: '10 Hours' },
          { name: 'Davanagere', type: 'Textile & Agricultural Market Hub', transitTime: '6 Hours' },
          { name: 'Ballari & Hospet', type: 'Steel & Mining Industrial Corridor', transitTime: '7 Hours' },
          { name: 'Tumakuru', type: 'Vasanthanarasapura SIPCOT Park', transitTime: '2 Hours' },
          { name: 'Shivamogga', type: 'Malnad Trade & Goods Depot', transitTime: '6 Hours' },
          { name: 'Kalaburagi', type: 'Cement & Grain Logistics Belt', transitTime: '11 Hours' },
          { name: 'Udupi', type: 'Coastal Commercial Corridor', transitTime: '8 Hours' },
          { name: 'Hassan', type: 'SEZ & Coffee Export Terminal', transitTime: '4.5 Hours' },
          { name: 'Bagalkote & Bidar', type: 'North-East Karnataka Industrial Belt', transitTime: '12 Hours' },
          { name: 'Chitradurga & Haveri', type: 'National Highway Highway Transit Belt', transitTime: '5 Hours' }
        ]
      },
      {
        id: 'maharashtra',
        name: 'Maharashtra',
        code: 'MH',
        region: 'West India',
        transitTime: '18 - 24 Hours',
        serviceType: 'Express Heavy Cargo & Daily Parcel Line',
        districts: [
          { name: 'Mumbai (Bhiwandi Logistics Hub)', type: 'Commercial Seaport & National Cargo Terminal', transitTime: '22 Hours' },
          { name: 'Pune (Chakan & Pimpri)', type: 'Automobile & Heavy Engineering SIPCOT', transitTime: '18 Hours' },
          { name: 'Thane & Navi Mumbai', type: 'JNPT Port & Warehouse Corridor', transitTime: '22 Hours' },
          { name: 'Nagpur', type: 'Zero-Mile All-India Transit Hub', transitTime: '20 Hours' },
          { name: 'Nashik', type: 'Pharma & Agricultural Industrial Belt', transitTime: '22 Hours' },
          { name: 'Chhatrapati Sambhajinagar (Aurangabad)', type: 'Auto Component & Electrical Zone', transitTime: '20 Hours' },
          { name: 'Solapur', type: 'Garment & Textile Manufacturing Hub', transitTime: '14 Hours' },
          { name: 'Kolhapur', type: 'Foundry & Sugar Machinery Belt', transitTime: '12 Hours' },
          { name: 'Sangli & Satara', type: 'Agro & Industrial Freight Corridor', transitTime: '13 Hours' },
          { name: 'Amravati & Nanded', type: 'Vidarbha & Marathwada Trade Depot', transitTime: '22 Hours' },
          { name: 'Jalgaon & Dhule', type: 'North MH Chemical & Agri Goods Zone', transitTime: '24 Hours' }
        ]
      },
      {
        id: 'gujarat',
        name: 'Gujarat',
        code: 'GJ',
        region: 'West Coast',
        transitTime: '28 - 34 Hours',
        serviceType: 'Textile, Chemical & Heavy Freight Line',
        districts: [
          { name: 'Ahmedabad', type: 'State Financial & Textile Capital', transitTime: '30 Hours' },
          { name: 'Surat', type: 'Diamond & Synthetic Fabric Capital', transitTime: '28 Hours' },
          { name: 'Vadodara', type: 'Chemical, Fertilizer & Power Equipment', transitTime: '32 Hours' },
          { name: 'Rajkot', type: 'Engineering & Auto Spare Parts Zone', transitTime: '34 Hours' },
          { name: 'Gandhidham & Kandla', type: 'Deendayal Port International Cargo Terminal', transitTime: '36 Hours' },
          { name: 'Morbi', type: 'Asia Largest Ceramic & Tiles Hub', transitTime: '34 Hours' },
          { name: 'Vapi & Ankleshwar', type: 'Asia Largest Chemical Industrial Belt', transitTime: '30 Hours' },
          { name: 'Bharuch & Anand', type: 'Petrochemical & Dairy Freight Zone', transitTime: '31 Hours' },
          { name: 'Bhavnagar & Jamnagar', type: 'Shipbuilding & Brass Metal Capital', transitTime: '35 Hours' }
        ]
      },
      {
        id: 'goa',
        name: 'Goa',
        code: 'GA',
        region: 'West Coast',
        transitTime: '12 - 16 Hours',
        serviceType: 'Pharma & Daily Commercial Express',
        districts: [
          { name: 'Panaji', type: 'State Capital & Commercial Center', transitTime: '14 Hours' },
          { name: 'Verna Industrial Estate', type: 'Major Pharma & Electronics SIPCOT', transitTime: '13 Hours' },
          { name: 'Margao & Mormugao', type: 'Seaport Freight & Mining Cargo Terminal', transitTime: '14 Hours' },
          { name: 'Vasco da Gama & Mapusa', type: 'Port Logistics & North Goa Trade', transitTime: '14.5 Hours' }
        ]
      },
      {
        id: 'telangana',
        name: 'Telangana',
        code: 'TS',
        region: 'Deccan Plateau',
        transitTime: '12 - 16 Hours',
        serviceType: 'Express Freight & Daily Consignments',
        districts: [
          { name: 'Hyderabad & Secunderabad', type: 'Pharma Capital & Tech Logistics Hub', transitTime: '12 Hours' },
          { name: 'Warangal', type: 'Textile Park & Agricultural Trade Center', transitTime: '15 Hours' },
          { name: 'Karimnagar', type: 'Granite & Agricultural Freight Belt', transitTime: '16 Hours' },
          { name: 'Nizamabad', type: 'Turmeric & Commercial Agro Terminal', transitTime: '17 Hours' },
          { name: 'Khammam', type: 'Coal & Mineral Mining Transit Corridor', transitTime: '14 Hours' },
          { name: 'Ramagundam', type: 'Thermal Power & Fertilizer SIPCOT', transitTime: '16 Hours' },
          { name: 'Mahbubnagar & Nalgonda', type: 'South Telangana Trade Junction', transitTime: '13 Hours' }
        ]
      },
      {
        id: 'delhi-ncr',
        name: 'Delhi (NCT)',
        code: 'DL',
        region: 'North India',
        transitTime: '36 - 42 Hours',
        serviceType: 'Express Air-Suspension FTL & Pan-India Parcel',
        districts: [
          { name: 'New Delhi Central', type: 'National Freight Capital & Airport Cargo', transitTime: '36 Hours' },
          { name: 'Okhla & Mayapuri', type: 'Central Delhi Industrial Estate', transitTime: '36 Hours' },
          { name: 'Gurugram (Gurgaon)', type: 'Corporate Supply Chain & Auto SIPCOT', transitTime: '36 Hours' },
          { name: 'Noida & Greater Noida', type: 'Electronics & Mobile Manufacturing Hub', transitTime: '38 Hours' },
          { name: 'Faridabad & Ghaziabad', type: 'Machinery & Cargo Rail Junction', transitTime: '37 Hours' }
        ]
      },
      {
        id: 'rajasthan',
        name: 'Rajasthan',
        code: 'RJ',
        region: 'North West',
        transitTime: '38 - 44 Hours',
        serviceType: 'Stone, Textile & Handicraft Freight Line',
        districts: [
          { name: 'Jaipur', type: 'Handicraft, Marble & Garment Capital', transitTime: '40 Hours' },
          { name: 'Bhiwadi', type: 'NCR Industrial & Auto Ancillary Zone', transitTime: '38 Hours' },
          { name: 'Jodhpur', type: 'Handicrafts & Wooden Furniture Capital', transitTime: '44 Hours' },
          { name: 'Udaipur', type: 'Marble & Zinc Mining Industrial Belt', transitTime: '42 Hours' },
          { name: 'Bhilwara', type: 'Textile & Suiting Manufacturing Capital', transitTime: '40 Hours' },
          { name: 'Kota & Ajmer', type: 'Stone Freight & Educational Hub', transitTime: '41 Hours' }
        ]
      },
      {
        id: 'madhya-pradesh',
        name: 'Madhya Pradesh',
        code: 'MP',
        region: 'Central India',
        transitTime: '24 - 30 Hours',
        serviceType: 'Central Interstate Logistics Corridor',
        districts: [
          { name: 'Indore & Pithampur', type: 'Pharma & Auto SIPCOT Capital', transitTime: '24 Hours' },
          { name: 'Bhopal', type: 'Heavy Electricals (BHEL) & Industrial Center', transitTime: '26 Hours' },
          { name: 'Gwalior', type: 'Engineering & Textile Zone', transitTime: '30 Hours' },
          { name: 'Jabalpur', type: 'Defense Equipment & Railway Hub', transitTime: '28 Hours' },
          { name: 'Dewas & Ujjain', type: 'Chemical & Commercial Trade Center', transitTime: '25 Hours' },
          { name: 'Satna & Singrauli', type: 'Cement & Energy Mining Belt', transitTime: '32 Hours' }
        ]
      },
      {
        id: 'punjab',
        name: 'Punjab',
        code: 'PB',
        region: 'North India',
        transitTime: '44 - 48 Hours',
        serviceType: 'Textile, Agri & Hardware Freight Express',
        districts: [
          { name: 'Ludhiana', type: 'Textile, Hosiery & Cycle Industry HQ', transitTime: '44 Hours' },
          { name: 'Amritsar', type: 'Trade Gateway & Dry Port Terminal', transitTime: '48 Hours' },
          { name: 'Jalandhar', type: 'Sports Goods & Hand Tools Capital', transitTime: '46 Hours' },
          { name: 'Mohali (SAS Nagar)', type: 'IT & Electronics Industrial Hub', transitTime: '44 Hours' },
          { name: 'Patiala & Bathinda', type: 'Agro Machinery & Thermal Energy Hub', transitTime: '47 Hours' }
        ]
      },
      {
        id: 'haryana',
        name: 'Haryana',
        code: 'HR',
        region: 'North India',
        transitTime: '38 - 44 Hours',
        serviceType: 'Industrial Auto & Textile Express Corridor',
        districts: [
          { name: 'Panipat', type: 'Asia Largest Handloom & Carpet Export Hub', transitTime: '40 Hours' },
          { name: 'Ambala', type: 'Scientific Instruments & Army Transit Hub', transitTime: '42 Hours' },
          { name: 'Karnal & Sonipat', type: 'Rice Export & Food Processing Zone', transitTime: '41 Hours' },
          { name: 'Hisar & Rohtak', type: 'Steel & Textile Commercial Center', transitTime: '42 Hours' },
          { name: 'Yamunanagar & Rewari', type: 'Plywood Industry & Metal Hub', transitTime: '43 Hours' }
        ]
      },
      {
        id: 'dadra-daman',
        name: 'Dadra & Nagar Haveli and Daman & Diu (UT)',
        code: 'DH/DD',
        region: 'West Coast UT',
        transitTime: '30 - 34 Hours',
        serviceType: 'Industrial Freight & UT Tax-Exempt Zone',
        districts: [
          { name: 'Silvassa', type: 'Major Textile, Yarn & Plastics SIPCOT Estate', transitTime: '32 Hours' },
          { name: 'Daman', type: 'Pharma, Packaging & Chemical Cargo Center', transitTime: '30 Hours' },
          { name: 'Diu', type: 'Seaport Freight & Tourism Goods Hub', transitTime: '34 Hours' }
        ]
      },
      {
        id: 'lakshadweep',
        name: 'Lakshadweep (UT)',
        code: 'LD',
        region: 'Island UT',
        transitTime: 'Island Cargo Route',
        serviceType: 'Special Ocean & Air Cargo Transport',
        districts: [
          { name: 'Kavaratti', type: 'Union Territory Capital Freight Depot', transitTime: 'Vessel Schedule' },
          { name: 'Agatti & Amini', type: 'Island Air Cargo & Seaport Terminal', transitTime: 'Vessel Schedule' }
        ]
      }
    ]
  },
  {
    hubId: 'chennai',
    hubName: 'Chennai (Branch Office & Seaport Hub)',
    badge: 'Seaport Gateway & North-East Logistics Depot',
    tagline: 'Primary marine seaport freight hub connecting Coastal Andhra, Odisha, Bengal, North-East & Island Territories',
    phone: '+91 93423 17996',
    email: 'chennai@lithintransport.com',
    states: [
      {
        id: 'tamil-nadu-north',
        name: 'Tamil Nadu (North & Central)',
        code: 'TN',
        region: 'South East',
        transitTime: '2 - 6 Hours',
        serviceType: 'Seaport, Auto & Industrial Express',
        districts: [
          { name: 'Chennai Metro & Port', type: 'International Container Terminal & Automotive HQ', transitTime: 'Same Day' },
          { name: 'Sriperumbudur & Oragadam', type: 'Global Auto & Electronics SIPCOT Hub', transitTime: '2 Hours' },
          { name: 'Kanchipuram', type: 'Silk & Industrial Freight Belt', transitTime: '2.5 Hours' },
          { name: 'Ranipet & Ambur', type: 'Leather Export Industrial Cluster', transitTime: '3 Hours' },
          { name: 'Vellore', type: 'Medical & Commercial Freight Hub', transitTime: '3 Hours' },
          { name: 'Cuddalore & Ennore', type: 'Chemical SIPCOT & Thermal Seaport', transitTime: '4 Hours' },
          { name: 'Villupuram & Tiruvannamalai', type: 'Central TN Trade Corridor', transitTime: '3.5 Hours' },
          { name: 'Nagapattinam & Mayiladuthurai', type: 'Coastal Agro & Port Terminal', transitTime: '5 Hours' }
        ]
      },
      {
        id: 'andhra-pradesh',
        name: 'Andhra Pradesh',
        code: 'AP',
        region: 'East Coast',
        transitTime: '6 - 16 Hours',
        serviceType: 'Port Cargo, Steel & Daily Express Parcel',
        districts: [
          { name: 'Visakhapatnam (Vizag)', type: 'Major Seaport, Naval Dockyard & Steel Plant', transitTime: '16 Hours' },
          { name: 'Vijayawada', type: 'State Commercial & Express Distribution Hub', transitTime: '9 Hours' },
          { name: 'Guntur', type: 'Spice, Cotton & Agricultural Market', transitTime: '9.5 Hours' },
          { name: 'Kakinada', type: 'Deepwater Port & Fertilizer Freight Hub', transitTime: '14 Hours' },
          { name: 'Rajahmundry', type: 'Paper & Commercial Trade Depot', transitTime: '12 Hours' },
          { name: 'Tirupati & Chittoor', type: 'Electronics & Pilgrimage Freight Hub', transitTime: '4 Hours' },
          { name: 'Nellore & Krishnapatnam', type: 'Seaport Freight Corridor', transitTime: '6 Hours' },
          { name: 'Anantapur & Kurnool', type: 'KIA Auto Manufacturing & Mineral Belt', transitTime: '8 Hours' },
          { name: 'Ongole & Eluru', type: 'Agro & Granite Export Hub', transitTime: '10 Hours' },
          { name: 'Srikakulam & Vizianagaram', type: 'North Coastal Trade Terminal', transitTime: '17 Hours' }
        ]
      },
      {
        id: 'puducherry',
        name: 'Puducherry (UT)',
        code: 'PY',
        region: 'South East UT',
        transitTime: '3 - 5 Hours',
        serviceType: 'Daily Direct Express Consignments',
        districts: [
          { name: 'Pondicherry City', type: 'UT Commercial & Industrial Estate', transitTime: '3.5 Hours' },
          { name: 'Karaikal Port', type: 'Seaport Freight & Chemical Terminal', transitTime: '5 Hours' },
          { name: 'Yanam & Mahe', type: 'Special Coastal UT Enclaves', transitTime: '12 Hours' }
        ]
      },
      {
        id: 'odisha',
        name: 'Odisha',
        code: 'OD',
        region: 'East Coast',
        transitTime: '24 - 30 Hours',
        serviceType: 'Mining Heavy Cargo & Inter-State Freight',
        districts: [
          { name: 'Bhubaneswar', type: 'State Capital & IT Industrial Zone', transitTime: '24 Hours' },
          { name: 'Cuttack', type: 'Primary Wholesale Trade & Goods Terminal', transitTime: '25 Hours' },
          { name: 'Rourkela', type: 'Steel Authority (SAIL) Industrial City', transitTime: '30 Hours' },
          { name: 'Paradip', type: 'Major Deepwater Seaport Cargo Terminal', transitTime: '26 Hours' },
          { name: 'Jharsuguda', type: 'Aluminium & Power Plant Hub', transitTime: '28 Hours' },
          { name: 'Balasore & Berhampur', type: 'North & South Coastal Cargo Depot', transitTime: '27 Hours' },
          { name: 'Angul & Sambalpur', type: 'Coal & Mineral Mining Hub', transitTime: '29 Hours' }
        ]
      },
      {
        id: 'west-bengal',
        name: 'West Bengal',
        code: 'WB',
        region: 'East India',
        transitTime: '32 - 38 Hours',
        serviceType: 'Seaport FTL, Railway & Parcel Line',
        districts: [
          { name: 'Kolkata (Dankuni)', type: 'Eastern India Logistics Capital & Seaport', transitTime: '34 Hours' },
          { name: 'Howrah', type: 'Engineering & Hardware Wholesale Market', transitTime: '34 Hours' },
          { name: 'Siliguri', type: 'North Bengal & North-East Gateway Junction', transitTime: '42 Hours' },
          { name: 'Asansol & Durgapur', type: 'Coal Mining & Steel Production Belt', transitTime: '36 Hours' },
          { name: 'Haldia', type: 'Petrochemical & Major Industrial Seaport', transitTime: '35 Hours' },
          { name: 'Kharagpur & Malda', type: 'Railway Hub & Agro Trade Terminal', transitTime: '36 Hours' }
        ]
      },
      {
        id: 'bihar',
        name: 'Bihar',
        code: 'BR',
        region: 'East Central',
        transitTime: '38 - 44 Hours',
        serviceType: 'Commercial Express & Parcel Line',
        districts: [
          { name: 'Patna', type: 'State Capital & Main Commercial Consignment Hub', transitTime: '40 Hours' },
          { name: 'Muzaffarpur', type: 'North Bihar Trade & Distribution Center', transitTime: '42 Hours' },
          { name: 'Bhagalpur', type: 'Silk & Handloom Textile Hub', transitTime: '43 Hours' },
          { name: 'Gaya & Darbhanga', type: 'Central & North Bihar Freight Hub', transitTime: '41 Hours' },
          { name: 'Purnia & Begusarai', type: 'Agro Processing & Refinery Belt', transitTime: '44 Hours' }
        ]
      },
      {
        id: 'jharkhand',
        name: 'Jharkhand',
        code: 'JH',
        region: 'East Central',
        transitTime: '34 - 38 Hours',
        serviceType: 'Heavy Industrial Freight & Steel Cargo',
        districts: [
          { name: 'Ranchi', type: 'State Capital & Heavy Engineering (HEC) City', transitTime: '36 Hours' },
          { name: 'Jamshedpur (Tata Steel)', type: 'Automobile & Steel Industrial HQ', transitTime: '34 Hours' },
          { name: 'Dhanbad & Bokaro', type: 'Coal Mining Capital & Steel City', transitTime: '36 Hours' },
          { name: 'Hazaribagh & Deoghar', type: 'Mineral Mining & Trade Hub', transitTime: '37 Hours' }
        ]
      },
      {
        id: 'assam',
        name: 'Assam',
        code: 'AS',
        region: 'North East',
        transitTime: '50 - 58 Hours',
        serviceType: 'Seven-Sister Gateway Logistics Corridor',
        districts: [
          { name: 'Guwahati', type: 'Primary Freight Gateway to North-East India', transitTime: '52 Hours' },
          { name: 'Dibrugarh & Tinsukia', type: 'Tea & Oil Refinery Industrial Belt', transitTime: '60 Hours' },
          { name: 'Silchar', type: 'Barak Valley Commercial Hub', transitTime: '58 Hours' },
          { name: 'Jorhat & Nagaon', type: 'Upper Assam Trade & Goods Depot', transitTime: '56 Hours' },
          { name: 'Tezpur & Bongaigaon', type: 'Refinery & Transit Junction', transitTime: '54 Hours' }
        ]
      },
      {
        id: 'manipur',
        name: 'Manipur',
        code: 'MN',
        region: 'North East',
        transitTime: '62 - 70 Hours',
        serviceType: 'Border Trade & Dedicated Long-Haul Fleet',
        districts: [
          { name: 'Imphal', type: 'State Capital & Main Commercial Terminal', transitTime: '64 Hours' },
          { name: 'Churachandpur & Thoubal', type: 'Regional Trade & Goods Center', transitTime: '66 Hours' }
        ]
      },
      {
        id: 'meghalaya',
        name: 'Meghalaya',
        code: 'ML',
        region: 'North East',
        transitTime: '54 - 60 Hours',
        serviceType: 'Hill Freight & Mineral Logistics',
        districts: [
          { name: 'Shillong', type: 'State Capital & Main Commercial Hub', transitTime: '56 Hours' },
          { name: 'Tura & Jowai', type: 'Coal & Cement Industrial Belt', transitTime: '58 Hours' },
          { name: 'Nongpoh', type: 'Assam-Meghalaya Border Highway Gate', transitTime: '54 Hours' }
        ]
      },
      {
        id: 'tripura',
        name: 'Tripura',
        code: 'TR',
        region: 'North East',
        transitTime: '64 - 72 Hours',
        serviceType: 'International Border Cargo Corridor',
        districts: [
          { name: 'Agartala', type: 'State Capital & Main Trade Terminal', transitTime: '66 Hours' },
          { name: 'Dharmanagar & Udaipur', type: 'Rubber & Timber Cargo Hub', transitTime: '68 Hours' }
        ]
      },
      {
        id: 'andaman-nicobar',
        name: 'Andaman & Nicobar Islands (UT)',
        code: 'AN',
        region: 'Island UT',
        transitTime: 'Ocean Vessel Schedule',
        serviceType: 'Ocean Container Freight from Chennai Port',
        districts: [
          { name: 'Port Blair', type: 'Island Capital & Seaport Cargo Terminal', transitTime: 'Direct Vessel' },
          { name: 'Havelock & Car Nicobar', type: 'Inter-Island Freight Dispatch', transitTime: 'Direct Vessel' }
        ]
      }
    ]
  },
  {
    hubId: 'tirupur',
    hubName: 'Tirupur (Branch Office & Textile Cargo Hub)',
    badge: 'Garment Export Capital & All-India Textile Terminal',
    tagline: 'World-renowned garment export corridor connecting Southern Tamil Nadu, Kerala, UP, North & Himalayan States',
    phone: '+91 95667 38884 / +91 93423 17996',
    email: 'tirupur@lithintransport.com',
    states: [
      {
        id: 'tamil-nadu-south',
        name: 'Tamil Nadu (South & Textile Industrial Belt)',
        code: 'TN',
        region: 'South India',
        transitTime: '1 - 6 Hours',
        serviceType: 'Express Textile, Machinery & Agro Freight',
        districts: [
          { name: 'Tirupur (Knitting Capital)', type: 'Global Knitwear Export HQ & Cargo Hub', transitTime: 'Same Day' },
          { name: 'Coimbatore', type: 'Pump, Textile Machinery & Heavy Foundry', transitTime: '1.5 Hours' },
          { name: 'Erode', type: 'Turmeric & Powerloom Fabric Wholesale Belt', transitTime: '1.5 Hours' },
          { name: 'Salem & Attur', type: 'Steel Plant, Sago & Textile Hub', transitTime: '2.5 Hours' },
          { name: 'Karur', type: 'Home Textile Export & Bus Body Building Hub', transitTime: '2 Hours' },
          { name: 'Namakkal', type: 'Poultry Capital & Heavy Trucking HQ', transitTime: '2 Hours' },
          { name: 'Madurai', type: 'South TN Commercial Capital & Garment Center', transitTime: '3.5 Hours' },
          { name: 'Dindigul', type: 'Lock, Leather & Agro Logistics Hub', transitTime: '3 Hours' },
          { name: 'Tuticorin (Thoothukudi)', type: 'V O C Deepwater Seaport & Chemical Belt', transitTime: '5 Hours' },
          { name: 'Virudhunagar & Sivakasi', type: 'Fireworks, Printing & Garment Hub', transitTime: '4.5 Hours' },
          { name: 'Tirunelveli & Kanyakumari', type: 'Windmill, Spices & Southern Terminal', transitTime: '5.5 Hours' }
        ]
      },
      {
        id: 'kerala',
        name: 'Kerala',
        code: 'KL',
        region: 'South West',
        transitTime: '6 - 14 Hours',
        serviceType: 'Interstate Daily Express Parcel',
        districts: [
          { name: 'Kochi (Ernakulam)', type: 'Cochin Seaport, Vallarpadam Container Terminal', transitTime: '7 Hours' },
          { name: 'Thiruvananthapuram', type: 'State Capital & Vizhinjam Seaport Complex', transitTime: '10 Hours' },
          { name: 'Palakkad', type: 'KINFRA Industrial Park & Border Cargo Gate', transitTime: '3.5 Hours' },
          { name: 'Kozhikode (Calicut)', type: 'Malabar Trade & Commercial Logistics', transitTime: '6 Hours' },
          { name: 'Thrissur', type: 'Gold Jewellery Manufacturing & Commercial Hub', transitTime: '5 Hours' },
          { name: 'Kannur & Kasaragod', type: 'Handloom & Textile Export Belt', transitTime: '8 Hours' },
          { name: 'Kollam & Alappuzha', type: 'Cashew, Coir & Marine Cargo Hub', transitTime: '9 Hours' },
          { name: 'Kottayam & Pathanamthitta', type: 'Rubber & Spices Commercial Depot', transitTime: '8.5 Hours' }
        ]
      },
      {
        id: 'uttar-pradesh',
        name: 'Uttar Pradesh',
        code: 'UP',
        region: 'North India',
        transitTime: '40 - 46 Hours',
        serviceType: 'Textile & Leather Inter-State FTL',
        districts: [
          { name: 'Kanpur', type: 'Leather Export Capital & Commercial Freight Hub', transitTime: '40 Hours' },
          { name: 'Lucknow', type: 'State Capital & Central UP Consignment HQ', transitTime: '42 Hours' },
          { name: 'Varanasi', type: 'Silk Weaving & Handloom Trade Center', transitTime: '44 Hours' },
          { name: 'Agra & Mathura', type: 'Footwear & Foundry Industrial Belt', transitTime: '41 Hours' },
          { name: 'Moradabad', type: 'Brassware Export & Handicraft Terminal', transitTime: '45 Hours' },
          { name: 'Meerut & Aligarh', type: 'Sports Goods & Hardware Lock Industry', transitTime: '42 Hours' },
          { name: 'Gorakhpur & Ayodhya', type: 'East UP Trade & Consignment Junction', transitTime: '45 Hours' },
          { name: 'Jhansi & Bareilly', type: 'Bundelkhand Transit & Agro Logistics', transitTime: '43 Hours' }
        ]
      },
      {
        id: 'uttarakhand',
        name: 'Uttarakhand',
        code: 'UK',
        region: 'Himalayan North',
        transitTime: '44 - 50 Hours',
        serviceType: 'Pharma & Industrial Express Freight',
        districts: [
          { name: 'Dehradun', type: 'State Capital & Main Commercial Depot', transitTime: '46 Hours' },
          { name: 'Haridwar & Pantnagar', type: 'SIDCUL Auto & Consumer Goods SIPCOT', transitTime: '44 Hours' },
          { name: 'Roorkee & Haldwani', type: 'Engineering & Kumaon Gateway Depot', transitTime: '45 Hours' },
          { name: 'Rudrapur & Kashipur', type: 'Industrial Processing Zone', transitTime: '44 Hours' }
        ]
      },
      {
        id: 'himachal-pradesh',
        name: 'Himachal Pradesh',
        code: 'HP',
        region: 'Himalayan North',
        transitTime: '48 - 54 Hours',
        serviceType: 'Pharma & Agro Cold Freight Corridor',
        districts: [
          { name: 'Baddi', type: 'Asia Largest Pharmaceutical Manufacturing Hub', transitTime: '48 Hours' },
          { name: 'Shimla', type: 'State Capital & Fruit Logistics Center', transitTime: '52 Hours' },
          { name: 'Solan & Kangra', type: 'Industrial & Trade Depot', transitTime: '50 Hours' },
          { name: 'Mandi & Kullu', type: 'Agro Goods & Hydro Project Logistics', transitTime: '53 Hours' }
        ]
      },
      {
        id: 'jammu-kashmir',
        name: 'Jammu & Kashmir (UT)',
        code: 'JK',
        region: 'Northern Frontier UT',
        transitTime: '54 - 64 Hours',
        serviceType: 'All-Weather Pan-India Long-Haul Fleet',
        districts: [
          { name: 'Jammu City', type: 'Railway Terminal & Trade Gateway', transitTime: '54 Hours' },
          { name: 'Srinagar', type: 'Kashmir Valley Saffron, Handicraft & Apple Hub', transitTime: '62 Hours' },
          { name: 'Samba & Kathua', type: 'Industrial SIPCOT Corridor', transitTime: '53 Hours' },
          { name: 'Anantnag & Baramulla', type: 'Valley Trade & Goods Depot', transitTime: '64 Hours' }
        ]
      },
      {
        id: 'ladakh',
        name: 'Ladakh (UT)',
        code: 'LA',
        region: 'High-Altitude Frontier UT',
        transitTime: '68 - 76 Hours',
        serviceType: 'Special High-Altitude Fleet Logistics',
        districts: [
          { name: 'Leh', type: 'Territory Capital & Defense Supply Logistics', transitTime: '70 Hours' },
          { name: 'Kargil', type: 'Frontier Cargo & Trade Hub', transitTime: '75 Hours' }
        ]
      },
      {
        id: 'chandigarh',
        name: 'Chandigarh (UT)',
        code: 'CH',
        region: 'Tri-City UT',
        transitTime: '42 - 46 Hours',
        serviceType: 'Daily Direct Express Parcel',
        districts: [
          { name: 'Chandigarh City', type: 'Union Territory Tri-City Commercial Capital', transitTime: '44 Hours' }
        ]
      },
      {
        id: 'arunachal-pradesh',
        name: 'Arunachal Pradesh',
        code: 'AR',
        region: 'North East',
        transitTime: '60 - 70 Hours',
        serviceType: 'Frontier Express Freight Desk',
        districts: [
          { name: 'Itanagar & Naharlagun', type: 'State Capital & Primary Trade Center', transitTime: '62 Hours' },
          { name: 'Pasighat & Tawang', type: 'Regional Goods & Hydro Project Hub', transitTime: '68 Hours' }
        ]
      },
      {
        id: 'mizoram',
        name: 'Mizoram',
        code: 'MZ',
        region: 'North East',
        transitTime: '64 - 72 Hours',
        serviceType: 'Interstate Parcel Express',
        districts: [
          { name: 'Aizawl', type: 'State Capital & Central Trade Terminal', transitTime: '66 Hours' },
          { name: 'Lunglei & Champhai', type: 'Border Trade & Goods Center', transitTime: '70 Hours' }
        ]
      },
      {
        id: 'nagaland',
        name: 'Nagaland',
        code: 'NL',
        region: 'North East',
        transitTime: '58 - 66 Hours',
        serviceType: 'Express Freight & Cargo Line',
        districts: [
          { name: 'Dimapur', type: 'State Railway & Commercial Gateway City', transitTime: '60 Hours' },
          { name: 'Kohima', type: 'State Capital & Goods Terminal', transitTime: '62 Hours' }
        ]
      },
      {
        id: 'sikkim',
        name: 'Sikkim',
        code: 'SK',
        region: 'Himalayan North East',
        transitTime: '48 - 56 Hours',
        serviceType: 'Pharma & Hill Freight Desk',
        districts: [
          { name: 'Gangtok', type: 'State Capital & Main Commercial Depot', transitTime: '50 Hours' },
          { name: 'Jorethang & Rangpo', type: 'Pharma Industrial Belt & Entry Gate', transitTime: '48 Hours' }
        ]
      }
    ]
  }
];
