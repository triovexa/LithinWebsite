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
    email: 'admin@lithintransport.in',
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
          { name: 'Kalaburagi (Gulbarga)', type: 'Cement & Grain Logistics Belt', transitTime: '11 Hours' },
          { name: 'Udupi & Kundapura', type: 'Coastal Commercial Corridor', transitTime: '8 Hours' },
          { name: 'Hassan', type: 'SEZ & Coffee Export Terminal', transitTime: '4.5 Hours' },
          { name: 'Vijayapura (Bijapur)', type: 'North Karnataka Agri Trade Hub', transitTime: '11 Hours' },
          { name: 'Raichur & Koppal', type: 'Thermal Energy & Rice Mill Belt', transitTime: '9 Hours' },
          { name: 'Mandya & Ramanagara', type: 'Automobile & Sugar Industrial Corridor', transitTime: '2.5 Hours' },
          { name: 'Kolar & Chintamani', type: 'Gold Field & Industrial SIPCOT Belt', transitTime: '2 Hours' },
          { name: 'Chikkamagaluru & Mudigere', type: 'Spices & Coffee Export Belt', transitTime: '5.5 Hours' },
          { name: 'Bagalkote & Jamkhandi', type: 'Cement & Silk Weaving Center', transitTime: '11.5 Hours' },
          { name: 'Bidar & Bhalki', type: 'Northern Frontier Trade Junction', transitTime: '13 Hours' },
          { name: 'Chitradurga & Haveri', type: 'National Highway Highway Transit Belt', transitTime: '5 Hours' },
          { name: 'Karwar & Sirsi', type: 'Coastal Seaport & Timber Depot', transitTime: '9 Hours' },
          { name: 'Gadag & Ron', type: 'Textile & Agricultural Logistics Depot', transitTime: '8.5 Hours' },
          { name: 'Yadgir & Chincholi', type: 'Industrial & Grain Trade Belt', transitTime: '10.5 Hours' }
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
          { name: 'Mumbai (Bhiwandi & Kalamboli)', type: 'Commercial Seaport & National Cargo Terminal', transitTime: '22 Hours' },
          { name: 'Pune (Chakan, Pimpri & Bhosari)', type: 'Automobile & Heavy Engineering SIPCOT', transitTime: '18 Hours' },
          { name: 'Thane, Navi Mumbai & JNPT', type: 'JNPT Ocean Container Seaport Terminal', transitTime: '22 Hours' },
          { name: 'Nagpur & Butibori', type: 'Zero-Mile All-India Transit Hub', transitTime: '20 Hours' },
          { name: 'Nashik & Ambad', type: 'Pharma & Agricultural Industrial Belt', transitTime: '22 Hours' },
          { name: 'Chhatrapati Sambhajinagar (Aurangabad WALUJ)', type: 'Auto Component & Electrical Zone', transitTime: '20 Hours' },
          { name: 'Solapur & Akkalkot', type: 'Garment & Textile Manufacturing Hub', transitTime: '14 Hours' },
          { name: 'Kolhapur & Ichalkaranji', type: 'Foundry & Textile Weaving Belt', transitTime: '12 Hours' },
          { name: 'Sangli & Miraj', type: 'Turmeric, Spices & Agro Freight Corridor', transitTime: '13 Hours' },
          { name: 'Satara & Karad', type: 'Engineering & Sugar Industry Zone', transitTime: '14.5 Hours' },
          { name: 'Amravati & Akola', type: 'Vidarbha Cotton & Oil Mill Trade Depot', transitTime: '22 Hours' },
          { name: 'Nanded & Latur', type: 'Marathwada Commercial Trade Center', transitTime: '19 Hours' },
          { name: 'Jalgaon & Bhusawal', type: 'North MH Chemical, Banana & Railway Hub', transitTime: '24 Hours' },
          { name: 'Dhule & Malegaon', type: 'Powerloom & Highway Transit Corridor', transitTime: '23 Hours' },
          { name: 'Chandrapur & Wardha', type: 'Coal Mining & Cement Industrial Belt', transitTime: '21 Hours' },
          { name: 'Ratnagiri & Sindhudurg', type: 'Konkan Coast Marine Freight Depot', transitTime: '16 Hours' }
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
          { name: 'Ahmedabad & Sanand', type: 'State Financial, Auto & Textile Capital', transitTime: '30 Hours' },
          { name: 'Surat & Hazira', type: 'Diamond, Heavy Port & Synthetic Fabric Capital', transitTime: '28 Hours' },
          { name: 'Vadodara & Halol', type: 'Chemical, Fertilizer & Power Equipment', transitTime: '32 Hours' },
          { name: 'Rajkot & Shapar Metoda', type: 'Engineering & Auto Spare Parts Zone', transitTime: '34 Hours' },
          { name: 'Gandhidham & Kandla (Deendayal Port)', type: 'Deendayal International Seaport Cargo Hub', transitTime: '36 Hours' },
          { name: 'Morbi', type: 'Asia Largest Ceramic Tiles & Sanitaryware Hub', transitTime: '34 Hours' },
          { name: 'Vapi & Ankleshwar', type: 'Asia Largest Chemical Industrial Belt', transitTime: '30 Hours' },
          { name: 'Bharuch & Dahej SEZ', type: 'Petrochemical & Ocean Port Terminal', transitTime: '31 Hours' },
          { name: 'Anand & Nadiad', type: 'Dairy, Agro & Engineering Freight Belt', transitTime: '30.5 Hours' },
          { name: 'Bhavnagar & Alang', type: 'Shipbuilding, Alang Shipbreaking & Brass', transitTime: '35 Hours' },
          { name: 'Jamnagar', type: 'World Largest Petroleum Refinery & Brass Hub', transitTime: '36 Hours' },
          { name: 'Junagadh & Porbandar', type: 'Ocean Marine & Cement Freight Desk', transitTime: '37 Hours' },
          { name: 'Mehsana & Kadi', type: 'Oil & Ceramic Industrial Corridor', transitTime: '32 Hours' },
          { name: 'Navsari & Valsad', type: 'Textile, Paper & Agro Export Belt', transitTime: '29 Hours' }
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
          { name: 'Panaji (Panjim)', type: 'State Capital & Commercial Center', transitTime: '14 Hours' },
          { name: 'Verna Industrial Estate', type: 'Major Pharma & Electronics SIPCOT', transitTime: '13 Hours' },
          { name: 'Margao & Mormugao Port', type: 'Seaport Freight & Ore Mining Cargo Terminal', transitTime: '14 Hours' },
          { name: 'Vasco da Gama', type: 'Port Logistics & Marine Terminal', transitTime: '14 Hours' },
          { name: 'Mapusa & Ponda', type: 'North Goa Trade & Commercial Hub', transitTime: '15 Hours' },
          { name: 'Bicholim & Tuem', type: 'Industrial SIPCOT Estate & Mining Zone', transitTime: '15.5 Hours' }
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
          { name: 'Patancheru & Pashamylaram', type: 'Major Industrial & Chemical SIPCOT Zone', transitTime: '12 Hours' },
          { name: 'Warangal & Kazipet', type: 'Textile Park & Agricultural Trade Center', transitTime: '15 Hours' },
          { name: 'Karimnagar', type: 'Granite & Agricultural Freight Belt', transitTime: '16 Hours' },
          { name: 'Nizamabad & Armoor', type: 'Turmeric & Commercial Agro Terminal', transitTime: '17 Hours' },
          { name: 'Khammam & Kothagudem', type: 'Coal & Mineral Mining Transit Corridor', transitTime: '14 Hours' },
          { name: 'Ramagundam & Mancherial', type: 'Thermal Power & Fertilizer SIPCOT', transitTime: '16 Hours' },
          { name: 'Mahbubnagar & Jadcherla', type: 'Pharma SEZ & South Telangana Junction', transitTime: '13 Hours' },
          { name: 'Nalgonda & Suryapet', type: 'Cement & Grain Commercial Corridor', transitTime: '13.5 Hours' },
          { name: 'Medak & Sangareddy', type: 'Heavy Engineering & Defense Industrial Belt', transitTime: '12.5 Hours' }
        ]
      },
      {
        id: 'delhi-ncr',
        name: 'Delhi (NCT & NCR)',
        code: 'DL',
        region: 'North India',
        transitTime: '36 - 42 Hours',
        serviceType: 'Express Air-Suspension FTL & Pan-India Parcel',
        districts: [
          { name: 'New Delhi Central', type: 'National Freight Capital & Airport Cargo', transitTime: '36 Hours' },
          { name: 'Okhla & Mayapuri', type: 'Central Delhi Industrial Estate', transitTime: '36 Hours' },
          { name: 'Gurugram (Gurgaon)', type: 'Corporate Supply Chain & Auto SIPCOT', transitTime: '36 Hours' },
          { name: 'Noida & Greater Noida', type: 'Electronics & Mobile Manufacturing Hub', transitTime: '38 Hours' },
          { name: 'Faridabad & Ballabhgarh', type: 'Machinery & Heavy Industry Zone', transitTime: '37 Hours' },
          { name: 'Ghaziabad & Sahibabad', type: 'Railway Freight & Engineering Center', transitTime: '37.5 Hours' },
          { name: 'Kundli & Rai (Sonipat NCR)', type: 'Food Processing & Cold Chain Belt', transitTime: '38 Hours' }
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
          { name: 'Jaipur & Sitapura SEZ', type: 'Handicraft, Jewellery & Garment Capital', transitTime: '40 Hours' },
          { name: 'Bhiwadi & Neemrana', type: 'NCR Industrial & Japanese Auto Zone', transitTime: '38 Hours' },
          { name: 'Jodhpur & Boranada', type: 'Handicrafts & Wooden Furniture HQ', transitTime: '44 Hours' },
          { name: 'Udaipur & Sukher', type: 'Marble & Zinc Mining Industrial Belt', transitTime: '42 Hours' },
          { name: 'Bhilwara', type: 'Textile & Suiting Manufacturing Capital', transitTime: '40 Hours' },
          { name: 'Kota & Ramganj Mandi', type: 'Kota Stone Freight & Chemical Hub', transitTime: '41 Hours' },
          { name: 'Ajmer & Kishangarh', type: 'Asia Largest Marble & Granite Trading Hub', transitTime: '41 Hours' },
          { name: 'Alwar & Khairthal', type: 'Edible Oil & Engineering Freight Zone', transitTime: '39 Hours' },
          { name: 'Bikaner & Sri Ganganagar', type: 'Wool, Agro & Gypsum Mining Center', transitTime: '45 Hours' }
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
          { name: 'Bhopal & Mandideep', type: 'Heavy Electricals (BHEL) & Industrial Center', transitTime: '26 Hours' },
          { name: 'Gwalior & Malanpur', type: 'Engineering & Textile Zone', transitTime: '30 Hours' },
          { name: 'Jabalpur', type: 'Defense Equipment & Ordnance Factory Hub', transitTime: '28 Hours' },
          { name: 'Dewas & Ujjain', type: 'Chemical, Printing & Commercial Center', transitTime: '25 Hours' },
          { name: 'Satna & Katni', type: 'Cement & Marble Mining Belt', transitTime: '32 Hours' },
          { name: 'Singrauli & Rewa', type: 'Energy, Coal Mining & Cement Corridor', transitTime: '34 Hours' },
          { name: 'Ratlam & Neemuch', type: 'Agro Goods & Chemical Freight Depot', transitTime: '26 Hours' }
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
          { name: 'Amritsar', type: 'International Border Trade & Dry Port', transitTime: '48 Hours' },
          { name: 'Jalandhar', type: 'Sports Goods & Hand Tools Capital', transitTime: '46 Hours' },
          { name: 'Mohali (SAS Nagar)', type: 'IT & Electronics Industrial Hub', transitTime: '44 Hours' },
          { name: 'Patiala & Rajpura', type: 'Agro Machinery & Railway Workshop Hub', transitTime: '45 Hours' },
          { name: 'Bathinda & Mansa', type: 'Thermal Energy, Oil Refinery & Cotton Belt', transitTime: '47 Hours' },
          { name: 'Pathankot', type: 'Northern Frontier Transit Depot', transitTime: '49 Hours' }
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
          { name: 'Hisar & Sirsa', type: 'Steel Pipes & Cotton Commercial Center', transitTime: '42 Hours' },
          { name: 'Rohtak & Jhajjar', type: 'Footwear & Auto Component Park', transitTime: '40 Hours' },
          { name: 'Yamunanagar & Jagadhri', type: 'Plywood Capital & Metal Hardware Hub', transitTime: '43 Hours' },
          { name: 'Rewari & Manesar', type: 'Auto Manufacturing & Metal Zone', transitTime: '38 Hours' }
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
    email: 'arul.p@lithintransport.in',
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
          { name: 'Kanchipuram & Chengalpattu', type: 'Silk & Industrial Freight Belt', transitTime: '2.5 Hours' },
          { name: 'Ranipet & Wallajah', type: 'Chemical & Tannery Industrial Cluster', transitTime: '3 Hours' },
          { name: 'Ambur & Vaniyambadi', type: 'Global Leather Export Capital', transitTime: '3.5 Hours' },
          { name: 'Vellore & Gudiyatham', type: 'Medical & Matchbox Freight Hub', transitTime: '3 Hours' },
          { name: 'Cuddalore & Neyveli (NLC)', type: 'Chemical SIPCOT & Lignite Energy Seaport', transitTime: '4 Hours' },
          { name: 'Ennore & Ponneri', type: 'Major Marine Container Port Belt', transitTime: '1.5 Hours' },
          { name: 'Villupuram & Tindivanam', type: 'Central TN Trade & Highway Corridor', transitTime: '3.5 Hours' },
          { name: 'Tiruvannamalai & Arani', type: 'Rice Mill & Handloom Silk Capital', transitTime: '3.5 Hours' },
          { name: 'Nagapattinam & Karaikal', type: 'Coastal Agro & Marine Port Terminal', transitTime: '5 Hours' },
          { name: 'Dharmapuri & Harur', type: 'Granite & Agro Commercial Hub', transitTime: '4.5 Hours' }
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
          { name: 'Vijayawada & Amaravati', type: 'State Commercial & Capital Distribution Hub', transitTime: '9 Hours' },
          { name: 'Guntur & Tenali', type: 'Spice, Chilli & Cotton Market Capital', transitTime: '9.5 Hours' },
          { name: 'Kakinada', type: 'Deepwater Ocean Port & Fertilizer Freight Hub', transitTime: '14 Hours' },
          { name: 'Rajahmundry & Kadiyam', type: 'Paper Mill & Agricultural Nursery Depot', transitTime: '12 Hours' },
          { name: 'Tirupati & Sri City SEZ', type: 'Global Electronics & Mobile Manufacturing SEZ', transitTime: '3.5 Hours' },
          { name: 'Chittoor & Madanapalle', type: 'Granite & Mango Pulp Export Zone', transitTime: '4.5 Hours' },
          { name: 'Nellore & Gudur', type: 'Mica Mining & Commercial Trade Depot', transitTime: '5.5 Hours' },
          { name: 'Krishnapatnam Port', type: 'Major Deepwater Marine Container Seaport', transitTime: '6 Hours' },
          { name: 'Anantapur & Hindupur', type: 'KIA Automobile Manufacturing Belt', transitTime: '8 Hours' },
          { name: 'Kurnool & Nandyal', type: 'Cement & Mineral Mining Corridor', transitTime: '9 Hours' },
          { name: 'Kadapa & Proddatur', type: 'Gold Trade & Limestone Industrial Zone', transitTime: '8.5 Hours' },
          { name: 'Ongole', type: 'Galaxy Granite Export Capital', transitTime: '7.5 Hours' },
          { name: 'Eluru & Tadepalligudem', type: 'Aquaculture & Rice Mill Hub', transitTime: '10.5 Hours' },
          { name: 'Srikakulam & Vizianagaram', type: 'North Coastal Jute & Marine Terminal', transitTime: '17 Hours' }
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
          { name: 'Pondicherry City & Mettupalayam', type: 'UT Commercial & Industrial Estate', transitTime: '3.5 Hours' },
          { name: 'Karaikal Port', type: 'Seaport Freight & Chemical Terminal', transitTime: '5 Hours' },
          { name: 'Yanam', type: 'Godavari Coastal UT Enclave', transitTime: '12 Hours' },
          { name: 'Mahe', type: 'Kerala Coast UT Enclave', transitTime: '10 Hours' }
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
          { name: 'Balasore & Bhadrak', type: 'North Coastal Defense & Agro Cargo Depot', transitTime: '27 Hours' },
          { name: 'Berhampur & Gopalpur Port', type: 'South Odisha Marine Trade Port', transitTime: '23 Hours' },
          { name: 'Angul & Talcher', type: 'Coal Mining & Power Complex', transitTime: '29 Hours' },
          { name: 'Sambalpur & Bargarh', type: 'Handloom & Rice Processing Center', transitTime: '29.5 Hours' }
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
          { name: 'Kolkata (Dankuni Hub)', type: 'Eastern India Logistics Capital & Seaport', transitTime: '34 Hours' },
          { name: 'Howrah', type: 'Engineering & Hardware Wholesale Market', transitTime: '34 Hours' },
          { name: 'Siliguri', type: 'North Bengal & North-East Gateway Junction', transitTime: '42 Hours' },
          { name: 'Asansol & Durgapur', type: 'Coal Mining & Steel Production Belt', transitTime: '36 Hours' },
          { name: 'Haldia', type: 'Petrochemical & Major Industrial Seaport', transitTime: '35 Hours' },
          { name: 'Kharagpur', type: 'Railway Logistics & Metallurgical Center', transitTime: '35 Hours' },
          { name: 'Malda & Murshidabad', type: 'Agro, Silk & Jute Trade Depot', transitTime: '39 Hours' },
          { name: 'Bardhaman & Hooghly', type: 'Rice Bowl & Textile Manufacturing Zone', transitTime: '36 Hours' }
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
          { name: 'Gaya & Aurangabad', type: 'South Bihar Industrial Trade Hub', transitTime: '41 Hours' },
          { name: 'Darbhanga & Samastipur', type: 'Agro Freight & Railway Junction', transitTime: '43 Hours' },
          { name: 'Purnia & Katihar', type: 'Jute & Maize Commercial Center', transitTime: '45 Hours' },
          { name: 'Begusarai & Barauni', type: 'Petrochemical Refinery & Industrial Belt', transitTime: '42 Hours' }
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
          { name: 'Dhanbad', type: 'Coal Capital of India & Mining Freight', transitTime: '36 Hours' },
          { name: 'Bokaro Steel City', type: 'Major Steel & Thermal Energy Center', transitTime: '36 Hours' },
          { name: 'Hazaribagh & Ramgarh', type: 'Refractory & Mineral Mining Hub', transitTime: '37 Hours' },
          { name: 'Deoghar & Giridih', type: 'Mica Mining & Commercial Trade Depot', transitTime: '38 Hours' }
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
          { name: 'Dibrugarh & Tinsukia', type: 'Tea Export & Oil Refinery Industrial Belt', transitTime: '60 Hours' },
          { name: 'Silchar', type: 'Barak Valley Commercial Trade Hub', transitTime: '58 Hours' },
          { name: 'Jorhat & Sivasagar', type: 'Tea Garden & Petroleum Depot', transitTime: '56 Hours' },
          { name: 'Nagaon & Tezpur', type: 'Central Assam Agro & Paper Terminal', transitTime: '55 Hours' },
          { name: 'Bongaigaon & Dhubri', type: 'Refinery & International Border Gate', transitTime: '53 Hours' }
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
          { name: 'Churachandpur & Thoubal', type: 'Regional Trade & Goods Center', transitTime: '66 Hours' },
          { name: 'Moreh', type: 'Myanmar Border Trade Gate', transitTime: '68 Hours' }
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
          { name: 'Nongpoh & Byrnihat', type: 'Assam-Meghalaya Border Industrial SIPCOT', transitTime: '54 Hours' }
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
    email: 'deepak@lithintransport.in',
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
          { name: 'Coimbatore & Pollachi', type: 'Pump, Textile Machinery & Heavy Foundry', transitTime: '1.5 Hours' },
          { name: 'Erode & Gobichettipalayam', type: 'Turmeric & Powerloom Fabric Wholesale Belt', transitTime: '1.5 Hours' },
          { name: 'Salem & Mettur', type: 'Steel Plant, Chemical & Sago Hub', transitTime: '2.5 Hours' },
          { name: 'Karur', type: 'Home Textile Export & Bus Body Building Hub', transitTime: '2 Hours' },
          { name: 'Namakkal & Rasipuram', type: 'Poultry Capital & Heavy Trucking HQ', transitTime: '2 Hours' },
          { name: 'Madurai & Melur', type: 'South TN Commercial Capital & Garment Center', transitTime: '3.5 Hours' },
          { name: 'Dindigul & Palani', type: 'Lock, Leather & Agro Logistics Hub', transitTime: '3 Hours' },
          { name: 'Tuticorin (Thoothukudi Port)', type: 'V O C Deepwater Seaport & Chemical Belt', transitTime: '5 Hours' },
          { name: 'Virudhunagar & Rajapalayam', type: 'Surgical Cotton & Textile Mill Belt', transitTime: '4 Hours' },
          { name: 'Sivakasi', type: 'World Printing, Paper & Match Industry HQ', transitTime: '4.5 Hours' },
          { name: 'Tirunelveli & Tenkasi', type: 'Windmill, Spices & Southern Freight Hub', transitTime: '5 Hours' },
          { name: 'Kanyakumari & Nagercoil', type: 'Southernmost Frontier Freight Terminal', transitTime: '6 Hours' },
          { name: 'Trichy (Tiruchirappalli BHEL)', type: 'BHEL Heavy Boiler & Engineering Capital', transitTime: '3 Hours' },
          { name: 'Thanjavur & Kumbakonam', type: 'Delta Agro & Food Grain Logistics Center', transitTime: '4 Hours' },
          { name: 'Pudukkottai & Karaikudi', type: 'Granite & Chettinad Trade Center', transitTime: '4 Hours' },
          { name: 'Perambalur & Ariyalur', type: 'Cement Manufacturing Industrial Belt', transitTime: '3.5 Hours' }
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
          { name: 'Kochi (Ernakulam & Vallarpadam)', type: 'Cochin Seaport, International Container Hub', transitTime: '7 Hours' },
          { name: 'Thiruvananthapuram & Vizhinjam', type: 'State Capital & Vizhinjam Seaport Complex', transitTime: '10 Hours' },
          { name: 'Palakkad & KINFRA Park', type: 'Industrial Park & Border Cargo Gate', transitTime: '3.5 Hours' },
          { name: 'Kozhikode (Calicut) & Beypore', type: 'Malabar Seaport & Commercial Logistics', transitTime: '6 Hours' },
          { name: 'Thrissur & Guruvayur', type: 'Gold Jewellery Manufacturing & Commercial Hub', transitTime: '5 Hours' },
          { name: 'Kannur & Thalassery', type: 'Handloom & Textile Export Belt', transitTime: '8 Hours' },
          { name: 'Kasaragod & Kanhangad', type: 'Northern Kerala Border Freight Gate', transitTime: '9 Hours' },
          { name: 'Kollam & Punalur', type: 'Cashew Export & Marine Cargo Hub', transitTime: '9 Hours' },
          { name: 'Alappuzha & Cherthala', type: 'Coir Export & Seafood Processing Center', transitTime: '8.5 Hours' },
          { name: 'Kottayam & Changanassery', type: 'Natural Rubber & Spices Commercial Depot', transitTime: '8 Hours' },
          { name: 'Pathanamthitta & Adoor', type: 'Central Travancore Goods Terminal', transitTime: '9 Hours' },
          { name: 'Malappuram & Manjeri', type: 'Commercial Trade & Consumer Goods Hub', transitTime: '6.5 Hours' },
          { name: 'Wayanad (Kalpetta)', type: 'Hill Coffee & Spices Export Line', transitTime: '5.5 Hours' }
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
          { name: 'Kanpur & Unnao', type: 'Leather Export Capital & Commercial Freight Hub', transitTime: '40 Hours' },
          { name: 'Lucknow', type: 'State Capital & Central UP Consignment HQ', transitTime: '42 Hours' },
          { name: 'Varanasi & Bhadohi', type: 'Silk Weaving & Handloom Carpet Export Center', transitTime: '44 Hours' },
          { name: 'Agra & Firozabad', type: 'Footwear Export & Glassware Industry', transitTime: '41 Hours' },
          { name: 'Moradabad', type: 'World Brassware Export Capital', transitTime: '45 Hours' },
          { name: 'Meerut & Saharanpur', type: 'Sports Goods, Wooden Carving & Hardware', transitTime: '42 Hours' },
          { name: 'Aligarh', type: 'Hardware Lock & Metal Industry HQ', transitTime: '41.5 Hours' },
          { name: 'Gorakhpur & Ayodhya', type: 'East UP Trade & Consignment Junction', transitTime: '45 Hours' },
          { name: 'Jhansi & Banda', type: 'Bundelkhand Transit & Stone Logistics', transitTime: '43 Hours' },
          { name: 'Bareilly & Rampur', type: 'Zari Embroidery & Furniture Belt', transitTime: '44 Hours' }
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
          { name: 'Baddi & Nalagarh', type: 'Asia Largest Pharmaceutical Manufacturing Hub', transitTime: '48 Hours' },
          { name: 'Shimla', type: 'State Capital & Fruit Logistics Center', transitTime: '52 Hours' },
          { name: 'Solan & Parwanoo', type: 'Pharma & Industrial Gate', transitTime: '49 Hours' },
          { name: 'Kangra & Dharamshala', type: 'North HP Trade Depot', transitTime: '51 Hours' },
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
          { name: 'Jammu City & Bari Brahmana', type: 'Railway Terminal & Industrial Estate', transitTime: '54 Hours' },
          { name: 'Srinagar', type: 'Kashmir Valley Saffron, Handicraft & Apple Hub', transitTime: '62 Hours' },
          { name: 'Samba & Kathua', type: 'Industrial SIPCOT Corridor', transitTime: '53 Hours' },
          { name: 'Anantnag & Pulwama', type: 'Valley Trade & Cold Storage Depot', transitTime: '63 Hours' },
          { name: 'Baramulla & Sopore', type: 'Fruit & Timber Export Terminal', transitTime: '65 Hours' }
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