import { CampusData } from '../types.js';

export const DATA_UW: CampusData = {
  locations: [
    {
      name: "Student Life Centre (SLC)",
      type: "Study Spot / Social",
      description: "The hub of student life. Open 24/7.",
      features: ["Food Court", "Study Tables", "Turnkey Desk", "Great Hall"],
      hours: "24/7",
      coordinates: [43.4716, -80.5453]
    },
    {
      name: "Dana Porter Library (DP)",
      type: "Library",
      description: "Main library for arts and humanities. The 'Sugar Cube'.",
      features: ["Quiet Study Floors (6-10)", "Group Study Rooms", "Cafeteria"],
      hours: "8:00 AM - 11:00 PM",
      coordinates: [43.4700, -80.5422]
    },
    {
      name: "Davis Centre (DC) Library",
      type: "Library",
      description: "Engineering and Math library. Very busy during exams.",
      features: ["Silent Study", "Private Rooms", "Computer Labs"],
      hours: "Open 24/7 during exams",
      coordinates: [43.4728, -80.5422]
    },
    {
      name: "Grad House",
      type: "Social / Bar",
      description: "A place for grad students to relax (undergrads welcome too).",
      features: ["Outdoor Patio", "Pub Food", "Trivia Nights"],
      coordinates: [43.4694, -80.5443]
    },
    {
      name: "Velocity Innovation Hub",
      type: "Innovation / Entrepreneurship",
      description: "Canada's most productive startup incubator, located on campus.",
      features: ["Mentorship", "Funding Programs", "Coworking Space", "Networking Events"],
      coordinates: [43.4729, -80.5396]
    },
    {
      name: "Physical Activities Complex (PAC)",
      type: "Gym / Recreation",
      description: "Main athletics facility with pool and fitness centre.",
      features: ["Swimming Pool", "Gyms", "Squash Courts", "Fitness Classes"],
      hours: "6:00 AM - 11:00 PM",
      coordinates: [43.4724, -80.5462]
    },
    // === FOOD SPOTS - UNIVERSITY PLAZA ===
    {
      name: "Shinwa",
      type: "Food / Restaurant",
      description: "Popular Chinese restaurant in the Plaza with generous portions. Cash discount available. Student favorite for affordable meals.",
      features: ["Chinese Cuisine", "Dine-in", "Cash Discount", "Large Portions"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Aunty's Kitchen",
      type: "Food / Restaurant",
      description: "Indian restaurant in the Plaza known for large portions of biryani, butter chicken, and fusion dishes.",
      features: ["Indian Cuisine", "Biryani", "Butter Chicken", "Halal Options"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Chen's",
      type: "Food / Restaurant",
      description: "Affordable Chinese restaurant in the Plaza. Famous for mapo tofu.",
      features: ["Chinese Cuisine", "Budget-Friendly", "Mapo Tofu"],
      hours: "11:00 AM - 9:30 PM"
    },
    {
      name: "Gol's Lanzhou Noodles",
      type: "Food / Restaurant",
      description: "Hand-pulled noodles in beef broth. Often has a line-up but worth the wait!",
      features: ["Chinese Cuisine", "Hand-Pulled Noodles", "Beef Broth", "Popular"],
      hours: "11:00 AM - 9:00 PM"
    },
    {
      name: "Lazeez Shawarma",
      type: "Food / Restaurant",
      description: "The OG shawarma spot in SLC. Famous 'Lazeez on the Sticks' with rice. Halal certified.",
      features: ["Shawarma", "Halal", "Rice Bowls", "Quick Service"],
      hours: "10:00 AM - 11:00 PM",
      coordinates: [43.4716, -80.5453]
    },
    {
      name: "iPotato (Shawarma Plus)",
      type: "Food / Restaurant",
      description: "Shawarma spot in the Plaza. Known for deals and loaded shawarma plates.",
      features: ["Shawarma", "Halal", "Deals", "Wraps"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Sowon",
      type: "Food / Restaurant",
      description: "Korean restaurant in the Plaza. Excellent Korean fried chicken.",
      features: ["Korean Cuisine", "Fried Chicken", "Korean BBQ"],
      hours: "11:30 AM - 9:30 PM"
    },
    {
      name: "Ken Sushi",
      type: "Food / Restaurant",
      description: "One of the better sushi places near campus, across Philip Street from the Plaza.",
      features: ["Sushi", "Japanese Cuisine", "Fresh Fish"],
      hours: "11:30 AM - 9:00 PM"
    },
    {
      name: "Mel's Diner",
      type: "Food / Restaurant",
      description: "Classic American diner in the Plaza. Home of the 'Godfather burger challenge'.",
      features: ["American Cuisine", "Burgers", "Breakfast", "Diner"],
      hours: "7:00 AM - 9:00 PM"
    },
    {
      name: "Williams Fresh Cafe",
      type: "Food / Cafe",
      description: "Cafe in the Plaza offering sandwiches, soups, and quality coffee.",
      features: ["Sandwiches", "Soups", "Coffee", "Salads"],
      hours: "7:00 AM - 8:00 PM"
    },
    {
      name: "Sweet Dreams Teashop",
      type: "Food / Bubble Tea",
      description: "Popular bubble tea shop with board games and calm atmosphere. Great study spot.",
      features: ["Bubble Tea", "Board Games", "Study Friendly", "Calm Vibes"],
      hours: "12:00 PM - 10:00 PM"
    },
    {
      name: "Morals Village",
      type: "Food / Restaurant",
      description: "Epic value hotpot place in the Plaza. All-you-can-eat option available.",
      features: ["Hotpot", "Chinese Cuisine", "All-You-Can-Eat", "Value"],
      hours: "11:30 AM - 10:00 PM"
    },
    // === ON-CAMPUS FOOD ===
    {
      name: "SLC Food Court",
      type: "Food / Food Court",
      description: "Main campus food court in the Student Life Centre. Multiple vendors under one roof.",
      features: ["Pizza Pizza", "Subway", "Shawarma Hub", "Quesada", "Teriyaki Experience", "Fresh Xpress"],
      hours: "8:00 AM - 10:00 PM",
      coordinates: [43.4716, -80.5453]
    },
    {
      name: "ML Diner (Modern Languages)",
      type: "Food / Restaurant",
      description: "Hidden gem on campus! Known for warrior burgers, poutines, and milkshakes. Tim Hortons nearby.",
      features: ["Burgers", "Poutine", "Milkshakes", "Hidden Gem"],
      hours: "8:00 AM - 4:00 PM"
    },
    {
      name: "Browser's Cafe (Dana Porter Library)",
      type: "Food / Cafe",
      description: "Cozy cafe inside DP Library. Coffee, teas, and pastries while you study.",
      features: ["Coffee", "Tea", "Pastries", "In-Library"],
      hours: "8:00 AM - 8:00 PM",
      coordinates: [43.4700, -80.5422]
    },
    {
      name: "Southside Marketplace (SCH)",
      type: "Food / Food Court",
      description: "Large cafeteria in South Campus Hall with diverse cuisines.",
      features: ["Shawarma", "Pizza", "Salad Bar", "Sushi", "Variety"],
      hours: "8:00 AM - 7:00 PM"
    },
    {
      name: "Math C&D",
      type: "Food / Cafe",
      description: "The cheapest coffee on campus! Run by the Math Society. Cash only.",
      features: ["Cheap Coffee", "Snacks", "Cash Only", "Math Building"],
      hours: "9:00 AM - 5:00 PM"
    }
  ],
  resources: [
    {
      name: "Registrar's Office",
      contact: "askthecentre@uwaterloo.ca",
      description: "Handles enrollment, transcripts, and financial aid. Located in Needles Hall."
    },
    {
      name: "Campus Wellness",
      contact: "519-888-4096",
      description: "Health Services and Counselling Services located in the Health Services building."
    },
    {
      name: "Writing and Communication Centre",
      contact: "writing@uwaterloo.ca",
      description: "Free one-on-one appointments for writing support. Located in Dana Porter Library."
    },
    {
      name: "Co-operative Education",
      contact: "cecs@uwaterloo.ca",
      description: "World's largest co-op program. Main office in Tatham Centre (TC)."
    }
  ],
  faq: [
    {
      question: "Where can I get coffee?",
      answer: "Tim Hortons in SLC, DC, and SCH. Starbucks in STC and AHS. Math C&D is great for cheap coffee."
    },
    {
      question: "How do I book a study room?",
      answer: "Use the LibCal system on the library website to reserve rooms in DP or DC Library."
    },
    {
      question: "Where is the best place to study late at night?",
      answer: "SLC is open 24/7. DC Library is also 24/7 during exam periods."
    },
    {
      question: "What is a WatCard and what can I do with it?",
      answer: "Your WatCard is your official student ID, debit card for campus food purchases, U-Pass for unlimited GRT bus and LRT rides, library card, gym pass for PAC and CIF, and printing card. Get it at the WatCard office in Needles Hall."
    },
    {
      question: "How do I add money to my WatCard?",
      answer: "Add funds online through the WatCard website, at the WatCard office in Needles Hall, at Food Services terminals, Turnkey Desk, or main libraries. You can add Flex Dollars (usable anywhere) or Meal Plan money (Food Services only)."
    },
    {
      question: "How do I print on campus?",
      answer: "Use uPrint at any campus printer. Load Flex Dollars onto your WatCard to pay. You can print from computer labs or send documents via the uPrint web portal."
    },
    {
      question: "Where can I park on campus?",
      answer: "Visitor parking at Lot C, Lot X, and various pay-and-display lots. Students can purchase permits through Parking Services in the Commission Street garage. Check the Parking Services website for rates."
    },
    {
      question: "Is there free food on campus?",
      answer: "Yes! The WUSA Food Bank in SLC provides free groceries. Nourish'n'Go offers free lunches at Grad House. Follow @uwloosechange on Instagram for free food alerts from club events."
    },
    {
      question: "How do I get a locker?",
      answer: "Lockers in academic buildings are managed by individual faculties - contact your faculty office. PAC gym lockers can be rented at the front desk ($39/term full-size, $28.50/term half-size). Bring your own lock for day-use lockers."
    },
    {
      question: "Where can I nap on campus?",
      answer: "DP Library has nap pods on the 2nd floor. SLC has couches in various areas. The Turnkey Desk has bean bag chairs available to borrow."
    },
    {
      question: "How do I get around campus in winter?",
      answer: "Most buildings are connected via tunnels or indoor walkways. The main tunnel connects DC, MC, and other engineering buildings. Download the UWaterloo campus map app for indoor navigation."
    },
    {
      question: "How do I use the GRT bus with my WatCard?",
      answer: "Full-time undergrad and grad students get a U-Pass included in fees. Just tap your WatCard on the reader when boarding any GRT bus or ION train."
    },
    {
      question: "What is the Turnkey Desk?",
      answer: "Located in SLC, Turnkey is your go-to for lost and found, WatCard funds, GO bus tickets, equipment loans (games, bean bags, phone chargers), room bookings, and campus information."
    },
    {
      question: "Where can I find halal food on campus?",
      answer: "Lazeez Shawarma in SLC, Shinwa in the Plaza, and various options in the SLC Food Court. Check UW Food Services website for current halal-certified options."
    },
    {
      question: "How do I access Health Services?",
      answer: "Health Services is in the Health Services building near Ring Road. Book appointments through the Patient Portal or call 519-888-4096. Same-day urgent appointments available."
    },
    {
      question: "Where is the Food Bank?",
      answer: "The WUSA Food Bank is in the SLC (Student Life Centre). It's free for all students - just bring your WatCard. No questions asked."
    },
    {
      question: "How do I join clubs?",
      answer: "Check out clubs at the WUSA Clubs website or attend the Clubs Fair at the start of each term in SLC. Most clubs also recruit through social media and posters."
    },
    {
      question: "Where can I do laundry on campus?",
      answer: "Laundry machines are in all residence buildings. Pay with Flex Dollars on your WatCard. Off-campus students can use the laundromat on Phillip Street."
    },
    {
      question: "What's the best way to get to Toronto?",
      answer: "GO Bus from the Davis Centre stop runs frequently to Square One and Union Station. Buy tickets at Turnkey Desk or use Presto. Rideshare groups also available on Facebook."
    },
    {
      question: "Where can I find Jumu'ah prayers?",
      answer: "Friday prayers are held in the SLC Multi-Faith Room (SLC 3252/3254) and MC 2018. Check with the UW Muslim Students' Association (@uwmsa on Instagram) for exact times as they change seasonally."
    }
  ],
  events: [
    {
      id: 'uw1',
      title: 'Black, Indigenous, and Racialized Students\' Writing Cafe',
      date: 'Jan 6, 2026',
      time: '3:00 PM - 5:00 PM',
      location: 'Dana Porter Library',
      description: 'A social writing group where students write together to create a community of writers who can cheer each other on.',
      category: 'Academic'
    },
    {
      id: 'uw2',
      title: 'In-person Grad Writing Cafés',
      date: 'Jan 7, 2026',
      time: '2:00 PM - 4:30 PM',
      location: 'Dana Porter Library',
      description: 'Grab a coffee and get writing. Join graduate students, postdocs, and faculty writers at the Grad Writing Café!',
      category: 'Academic'
    },
    {
      id: 'uw3',
      title: 'Antagonism and Intimidation in Academia Speaker Series',
      date: 'Jan 12, 2026',
      time: '3:00 PM - 5:00 PM',
      location: 'Campus TBD',
      description: 'Panel session focusing on issues related to free speech, hate speech laws, and freedom of expression in university environments.',
      category: 'Academic'
    },
    {
      id: 'uw4',
      title: 'Nourish\'n\' Go - Free Grad Student Lunch',
      date: 'Jan 13, 2026',
      time: '11:30 AM - 12:30 PM',
      location: 'Graduate House',
      description: 'Come enjoy a free prepared, ready to go meal courtesy of The GSA. While quantities last.',
      category: 'Wellness'
    },
    {
      id: 'uw5',
      title: 'Velocity Innovation Open House',
      date: 'Jan 13, 2026',
      time: '4:00 PM - 6:00 PM',
      location: 'Velocity (E7)',
      description: 'Connect with fellow driven students and explore innovation and entrepreneurship options on campus including Velocity, Conrad School, GreenHouse, and more.',
      category: 'Career'
    },
    {
      id: 'uw6',
      title: 'Winter 2026 International Student Mixer',
      date: 'Jan 13, 2026',
      time: '6:00 PM - 9:00 PM',
      location: 'SLC',
      description: 'A social event for international students to hang out and make connections while enjoying free pizza and playing board games.',
      category: 'Social'
    },
    {
      id: 'uw7',
      title: 'Cracking the Code: Tips for Technical Interview Success',
      date: 'Jan 14, 2026',
      time: '12:00 PM - 1:30 PM',
      location: 'Tatham Centre (TC)',
      description: 'Insider tips from a D2L recruiter and senior developer, plus two upper year co-op students who share what works in technical interviews.',
      category: 'Career'
    },
    {
      id: 'uw8',
      title: 'Multilingual Writers\' Studio: Revision Strategies',
      date: 'Jan 15, 2026',
      time: '10:00 AM - 12:00 PM',
      location: 'Writing Centre',
      description: '5-week workshop series integrating practical revision tools with antiracist and decolonial perspectives on writing.',
      category: 'Academic'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uw-mf-1',
      name: 'SLC Multi-Faith Prayer Room',
      location: 'SLC 3rd Floor, Rooms 3252/3254',
      description: 'Main multi-faith space on campus. Open to all users for prayer and meditation. Not bookable - drop-in only.',
      amenities: ['Prayer mats', 'Shoe racks', 'Dividers available'],
      hours: '5:30 AM - 11:30 PM daily'
    },
    {
      id: 'uw-mf-2',
      name: 'Davis Centre Prayer Room',
      location: 'DC 3578, 3rd Floor (door code: 338822)',
      description: 'Prayer space in the Engineering/Math building. Not bookable.',
      amenities: ['Prayer mats', 'Quiet space'],
      hours: '24/7 (capacity: 6-8 people)'
    },
    {
      id: 'uw-mf-3',
      name: 'Engineering 5 Prayer Room',
      location: 'E5-3051 (door code: 338822)',
      description: 'Engineering building prayer space.',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: '24/7'
    },
    {
      id: 'uw-mf-4',
      name: 'Engineering 7 Prayer Room',
      location: 'E7-7433 (door code: 338822)',
      description: 'Prayer space in E7 building.',
      amenities: ['Prayer mats'],
      hours: 'Mon-Fri 8:00 AM - 5:00 PM'
    },
    {
      id: 'uw-mf-5',
      name: 'Carl A. Pollock Hall Prayer Rooms',
      location: 'CPH 3654 (unlocked) and CPH 3657 (code: 338822)',
      description: 'Engineering prayer spaces. Contact Engineering Society if CPH 3654 is locked.',
      amenities: ['Prayer mats', 'Quiet space'],
      hours: 'Building hours (capacity: 4-6 people)'
    },
    {
      id: 'uw-mf-6',
      name: 'CPH-2374B Prayer Room',
      location: 'CPH-2374B (unlocked)',
      description: 'Additional Engineering prayer space. Contact Karen Dubois for concerns.',
      amenities: ['Quiet space'],
      hours: '24/7'
    },
    {
      id: 'uw-mf-7',
      name: 'School of Architecture Prayer Room',
      location: 'ARC-3001 (unlocked)',
      description: 'Architecture building prayer space. Contact Andri Efstathiou for concerns.',
      amenities: ['Quiet space'],
      hours: '24/7'
    },
    {
      id: 'uw-mf-8',
      name: 'Math & Computer Building Multi-Faith Space',
      location: 'MC 2018 A and B',
      description: 'Large bookable multi-faith space. Feds clubs use Feds event form; others contact Donna Schell at ext. 32207.',
      amenities: ['Large capacity', 'Configurable space', 'AV equipment'],
      hours: 'Building hours (capacity: ~100 people)'
    },
    {
      id: 'uw-mf-9',
      name: 'Village 1 (V1) Prayer Room',
      location: 'V1 191 (accessible from cafeteria eating area)',
      description: 'Residence prayer space. Book at V1 front desk with WatCard.',
      amenities: ['Ablution facilities', 'Prayer mats'],
      hours: '24/7 (capacity: ~9 people)'
    },
    {
      id: 'uw-mf-10',
      name: 'Claudette Millar Hall (UWPlace) Prayer Room',
      location: 'Main floor, Room 1113',
      description: 'Residence prayer space. Obtain key from residence front desk with WatCard.',
      amenities: ['Ablution facilities', 'Prayer mats'],
      hours: '24/7 (capacity: ~15 people)'
    },
    {
      id: 'uw-mf-11',
      name: 'East Campus 3 (EC3) Prayer Room',
      location: 'EC3 1038',
      description: 'Pharmacy building prayer space. Not bookable.',
      amenities: ['Ablution facilities', 'Prayer mats'],
      hours: 'Building hours (capacity: ~5 people)'
    },
    {
      id: 'uw-mf-12',
      name: 'B.C. Matthews Hall Prayer Room',
      location: 'BMH 3023',
      description: 'Health building prayer room. Not bookable.',
      amenities: ['Prayer mats available'],
      hours: 'Building hours (capacity: ~6 people)'
    },
    {
      id: 'uw-mf-13',
      name: 'Research Advancement Centre Prayer Room',
      location: 'RAC 2116',
      description: 'Research building prayer space. Not bookable.',
      amenities: ['Quiet space'],
      hours: 'Building hours (capacity: 6-8 people)'
    },
    {
      id: 'uw-mf-14',
      name: 'Optometry Building Prayer Space',
      location: 'OPT 1019, 1st Floor',
      description: 'Bookable prayer space. Contact Jennifer Fleet at ext. 32626.',
      amenities: ['Prayer mats', 'Quiet space'],
      hours: 'Building hours (capacity: ~20 people)'
    },
    {
      id: 'uw-mf-15',
      name: 'Tatham Centre Prayer Space',
      location: 'TC 0232',
      description: 'Small prayer/meditation space. Ask at TC front desk or contact Mike McQuarrie.',
      amenities: ['Quiet space', 'Sanitizing supplies'],
      hours: 'Building hours (capacity: 1 person)'
    },
    {
      id: 'uw-mf-16',
      name: 'Dana Porter Smudging Space',
      location: 'DP 7th Floor, Room 702',
      description: 'Space for Indigenous spiritual practices. Smudging also permitted in 3rd floor Study Rooms 3a-f. Contact Jermal Jones.',
      amenities: ['Ventilation for smudging', 'Quiet space'],
      hours: 'Contact for access'
    },
    {
      id: 'uw-mf-17',
      name: 'Renison Multi-Faith Prayer Space',
      location: 'REN 0103 (basement level, below Ministry Centre & Lusi Wong Library)',
      description: 'Newly established multi-faith space. Thursday noon meditation sessions.',
      amenities: ['Carpeted floor', 'Quiet space', 'Shelving'],
      hours: 'Open during college hours (capacity: ~8 people)'
    },
    {
      id: 'uw-mf-18',
      name: 'Renison St. Bede\'s Chapel',
      location: 'REN 2400',
      description: 'Chapel with regular services. Monday evening chapel (6pm), Mon/Wed/Fri midday prayer (12pm), Tuesday meditation (12pm).',
      amenities: ['Pews', 'Organ', 'Bookable through Chaplain Scott McLeod'],
      hours: '24/7 for Renison students; open to all during college hours (capacity: ~50)'
    },
    {
      id: 'uw-mf-19',
      name: 'St. Jerome\'s Notre Dame Chapel',
      location: 'St. Jerome\'s University',
      description: 'Beautiful chapel. Mass: Sunday 9:30am, 11:30am, 7pm; Tuesday 12pm. Bookable through Marta Fauteux at 519-884-8111 ext. 28215.',
      amenities: ['Pews', 'Quiet reflection', 'Bookable for events'],
      hours: 'Mon-Fri 8:30 AM - 4:30 PM; Sunday services'
    },
    {
      id: 'uw-mf-20',
      name: 'St. Jerome\'s Quiet Reflection Room',
      location: 'SJ1, Room 1027 (Spirituality Centre)',
      description: 'Multi-faith quiet reflection room at St. Jerome\'s.',
      amenities: ['Quiet space', 'Meditation'],
      hours: 'Open during university hours'
    },
    {
      id: 'uw-mf-21',
      name: 'Conrad Grebel Chapel',
      location: 'Conrad Grebel University College',
      description: 'Mennonite chapel available for all. Weekly midweek prayers Thursday noon.',
      amenities: ['Pews', 'Labyrinth (2nd Thursday of month)'],
      hours: 'Open during college hours; Sunday mornings reserved for chapel service'
    },
    {
      id: 'uw-mf-22',
      name: 'E5-6002 Prayer Room',
      location: 'E5-6002 (unlocked)',
      description: 'SYDE department prayer space. Contact SYDE admin for concerns.',
      amenities: ['Quiet space'],
      hours: 'Business hours'
    }
  ]
};

export const DATA_UOFT: CampusData = {
  locations: [
    {
      name: "Robarts Library",
      type: "Library",
      description: "The massive brutalist concrete turkey. Main research library.",
      features: ["Reading Rooms", "Cafeteria", "Late Night Study"],
      hours: "24/5 (Mon-Fri)",
      coordinates: [43.6644, -79.3996]
    },
    {
      name: "Hart House",
      type: "Student Centre",
      description: "Gothic revival student centre. A cultural hub.",
      features: ["Gym", "Gallery", "Reading Room", "Arbor Room Cafe"],
      hours: "7:00 AM - 12:00 AM",
      coordinates: [43.6640, -79.3944]
    },
    {
      name: "Gerstein Science Information Centre",
      type: "Library",
      description: "Beautiful heritage building for science students.",
      features: ["Quiet Study", "Group Rooms"],
      hours: "8:30 AM - 10:00 PM",
      coordinates: [43.6621, -79.3939]
    },
    {
      name: "Multi-Faith Centre (Koffler House)",
      type: "Spiritual / Wellness",
      description: "Main hub for spiritual practice and events at 569 Spadina Ave.",
      features: ["Prayer Rooms", "Meditation Spaces", "Kitchen"],
      hours: "9:00 AM - 10:00 PM",
      coordinates: [43.6640, -79.4025]
    },
    {
      name: "Athletic Centre (AC)",
      type: "Gym",
      description: "Main fitness facility with track and pool.",
      features: ["Olympic Pool", "Track", "Weight Room", "Studios"],
      hours: "6:00 AM - 11:00 PM",
      coordinates: [43.6630, -79.3960]
    },
    // === FOOD SPOTS ===
    {
      name: "Robarts Library Food Court",
      type: "Food / Food Court",
      description: "Multiple food options inside Robarts. Grab-n-go, pizza, sushi, burritos, and BBQ.",
      features: ["Pasta Pappardelle", "Stone Oven Pizzeria", "So Sushi", "Central Smoke BBQ", "Mexican Tortillas"],
      hours: "8:00 AM - 8:00 PM",
      coordinates: [43.6644, -79.3996]
    },
    {
      name: "Arbor Room (Hart House)",
      type: "Food / Restaurant",
      description: "Elegant restaurant in Hart House basement. Breakfast, lunch, and dinner with a refined atmosphere.",
      features: ["All-Day Breakfast", "Sit-Down Dining", "Historic Setting"],
      hours: "11:30 AM - 8:00 PM",
      coordinates: [43.6640, -79.3944]
    },
    {
      name: "Salad King",
      type: "Food / Restaurant",
      description: "Thai restaurant on Yonge St near campus. Famous for cheap, filling Thai food. Student staple since 1992.",
      features: ["Thai Cuisine", "Pad Thai", "Green Curry", "Budget-Friendly"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Sushi on Bloor",
      type: "Food / Restaurant",
      description: "Popular affordable sushi spot on Bloor Street West. Great value lunch specials.",
      features: ["Sushi", "Japanese Cuisine", "Lunch Specials"],
      hours: "11:30 AM - 10:00 PM"
    },
    {
      name: "Koreatown",
      type: "Food / Neighborhood",
      description: "Korean restaurant district on Bloor St W near Christie station. Dozens of Korean BBQ, noodle, and fried chicken spots.",
      features: ["Korean BBQ", "Korean Fried Chicken", "Bubble Tea", "Noodles"],
      hours: "Varies by restaurant"
    },
    {
      name: "Baldwin Street",
      type: "Food / Neighborhood",
      description: "Charming food street near campus with Italian, sushi, and Indian restaurants. Great for sit-down meals.",
      features: ["Italian", "Sushi", "Indian", "Patio Dining"],
      hours: "Varies by restaurant"
    },
    {
      name: "Pai Northern Thai Kitchen",
      type: "Food / Restaurant",
      description: "Famous Thai restaurant near campus. Known for khao soi and incredible flavors. Usually has a wait.",
      features: ["Thai Cuisine", "Khao Soi", "Popular", "Worth the Wait"],
      hours: "11:30 AM - 10:00 PM"
    },
    {
      name: "Anoush Shawarma",
      type: "Food / Restaurant",
      description: "Halal shawarma on College Street. Quick and affordable Middle Eastern food.",
      features: ["Shawarma", "Halal", "Quick Service", "Falafel"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Banh Mi Boys",
      type: "Food / Restaurant",
      description: "Famous for fusion banh mi and steamed bao. The fried chicken bao is legendary.",
      features: ["Banh Mi", "Steamed Bao", "Fusion", "Quick Service"],
      hours: "11:00 AM - 9:00 PM"
    },
    {
      name: "Cora Pizza",
      type: "Food / Restaurant",
      description: "Near the Athletic Centre. Known for massive pizza slices at good prices.",
      features: ["Pizza", "Large Slices", "Budget-Friendly"],
      hours: "11:00 AM - 9:00 PM"
    }
  ],
  resources: [
    {
      name: "Registrar (ArtSci)",
      contact: "ask.artsci@utoronto.ca",
      description: "Sidney Smith Hall. Handles course selection for Arts & Science."
    },
    {
      name: "Black Research Network",
      contact: "brn@utoronto.ca",
      description: "Supports Black scholarship and community at U of T."
    },
    {
      name: "Centre for Entrepreneurship",
      contact: "entrepreneurship@utoronto.ca",
      description: "Resources for student startups and business development."
    }
  ],
  faq: [
    {
      question: "Is there a tunnel system?",
      answer: "No, U of T doesn't have extensive tunnels like some other universities, but some buildings are connected. Check the campus map for indoor routes between buildings like Sidney Smith to the Medical Sciences Building."
    },
    {
      question: "Where can I find therapy dogs on campus?",
      answer: "Check events listings - destressor events with therapy dogs happen during midterms and finals in Sidney Smith Lobby, Robarts, and other locations. Follow @uikiut on Instagram for updates."
    },
    {
      question: "What is a TCard and how do I get one?",
      answer: "Your TCard is your official U of T student ID used for library access, gym entry, exams, building access, and more. Get it at the TCard office in Robarts Library (1st floor). You can also add funds for printing."
    },
    {
      question: "How do I print on campus?",
      answer: "Use UTORprint stations in libraries and computer labs. Load funds via your TCard online at tcard.utoronto.ca. Robarts has the most printers and is available 24/5."
    },
    {
      question: "How do I get to the other campuses (UTM and UTSC)?",
      answer: "Free inter-campus shuttle buses run between St. George, UTM (Mississauga), and UTSC (Scarborough). Check the Tri-Campus Transit page for schedules. GO Transit also connects all campuses."
    },
    {
      question: "Where can I find halal food on campus?",
      answer: "Robarts Library Café, Innis Café, Veda (Sidney Smith), and various food trucks offer halal options. The Multi-Faith Centre maintains updated lists of halal-friendly vendors."
    },
    {
      question: "How do I book study rooms?",
      answer: "Use the library booking system at library.utoronto.ca. Robarts and Gerstein have group study rooms bookable online. Hart House also has quiet study spaces. Book early during exams!"
    },
    {
      question: "Where can I nap on campus?",
      answer: "Hart House has quiet lounges on the upper floors. Sidney Smith has benches. Robarts 9th floor reading room is very quiet. Some college common rooms also have couches."
    },
    {
      question: "Is there a food bank on campus?",
      answer: "Yes! The UTSU Food Bank provides free groceries to students. Located in the Student Commons at 230 College St. No appointment needed - just bring your TCard."
    },
    {
      question: "How do I use the TTC?",
      answer: "U of T students don't have a universal transit pass, but you can get a Post-Secondary Monthly Pass at a discounted rate. Use Presto card or buy tokens. Spadina and St. George subway stations are closest to St. George campus."
    },
    {
      question: "Where can I park on campus?",
      answer: "Limited parking available at various lots around campus. Check parking.utoronto.ca for rates and locations. Street parking is very limited. Consider transit or biking instead."
    },
    {
      question: "How do I access Health & Wellness?",
      answer: "Health & Wellness Centre is at 214 College St. Book appointments online at studentlife.utoronto.ca/hwc or call 416-978-8030. Same-day appointments available for urgent needs."
    },
    {
      question: "How do I join clubs?",
      answer: "Check out clubs at ulife.utoronto.ca or attend the Club Fairs in September and January. Each college also has its own clubs and events."
    },
    {
      question: "What are the different colleges?",
      answer: "U of T has 7 colleges (Victoria, Trinity, St. Michael's, University, Innis, New, Woodsworth) each with their own registrar, residence, and community. You're assigned one when admitted but can access resources across all."
    },
    {
      question: "Where can I study 24 hours?",
      answer: "Robarts Library is open 24/5 (closes Friday night, reopens Sunday evening). During exams, extended hours are common across libraries. Sidney Smith computer labs also have late hours."
    },
    {
      question: "Where can I find Jumu'ah prayers?",
      answer: "Friday prayers are held at the Multi-Faith Centre (569 Spadina) and Hart House (Debates Room). Check the Multi-Faith Centre website for exact times which change seasonally."
    }
  ],
  events: [
    {
      id: 'uoft1',
      title: 'Hart House Holidays Open',
      date: 'Dec 19-21, 2025',
      time: 'Various',
      location: 'Hart House',
      description: 'Holiday activities and events at Hart House.',
      category: 'Social'
    },
    {
      id: 'uoft2',
      title: 'Casual Chess Fridays',
      date: 'Fridays',
      time: 'Various',
      location: 'Hart House',
      description: 'Drop-in chess sessions for all skill levels.',
      category: 'Social'
    },
    {
      id: 'uoft3',
      title: 'Navigating U of T\'s Internal Grant Landscape',
      date: 'Jan 8, 2026',
      time: 'TBD',
      location: 'Online/Campus',
      description: 'Black Research Network event on securing internal grants.',
      category: 'Academic'
    },
    {
      id: 'uoft4',
      title: 'Do More in Four: Why It\'s Time for a Shorter Workweek',
      date: 'Jan 8, 2026',
      time: 'Evening',
      location: 'Rotman School of Management',
      description: 'Talk by Joe O\'Connor and Jared Lindzon on the four-day workweek movement.',
      category: 'Academic'
    },
    {
      id: 'uoft5',
      title: 'INFORMATION SESSION: Hult Prize @ U of T',
      date: 'Jan 9, 2026',
      time: 'TBD',
      location: 'Centre for Entrepreneurship',
      description: 'Learn about the Hult Prize social entrepreneurship competition.',
      category: 'Career'
    },
    {
      id: 'uoft6',
      title: '2026 Tri-Campus Undergraduate Research Conference (TURC)',
      date: 'Jan 9, 2026',
      time: 'All Day',
      location: 'Munk School of Global Affairs',
      description: 'Showcase undergraduate research across all three U of T campuses.',
      category: 'Academic'
    },
    {
      id: 'uoft7',
      title: 'FemSTEM 2026 Kickoff Event & Panel',
      date: 'Jan 13, 2026',
      time: 'TBD',
      location: 'Campus TBD',
      description: 'Kickoff event for FemSTEM, supporting women in STEM fields.',
      category: 'Career'
    },
    {
      id: 'uoft8',
      title: 'SRI Seminar Series: Saffron Huang, Collective Intelligence Project',
      date: 'Jan 14, 2026',
      time: 'TBD',
      location: 'Schwartz Reisman Institute',
      description: 'Seminar on AI and technology by the Schwartz Reisman Institute.',
      category: 'Academic'
    },
    {
      id: 'uoft9',
      title: '2026 Economic Outlook Roundtable',
      date: 'Jan 14, 2026',
      time: 'TBD',
      location: 'Rotman School of Management',
      description: 'Insights on the economic year ahead from leading experts.',
      category: 'Career'
    },
    {
      id: 'uoft10',
      title: 'Data Sciences Institute - Talent Showcase',
      date: 'Jan 22, 2026',
      time: 'TBD',
      location: 'Data Sciences Institute',
      description: 'Showcase event connecting data science talent with employers.',
      category: 'Career'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uoft-mf-1',
      name: 'Multi-Faith Centre (Koffler House)',
      location: '569 Spadina Avenue',
      description: 'Main hub with four rooms for prayer, worship, meditation, and spiritual events. Beautiful backlit translucent white onyx ceiling with living bio wall in meditation room.',
      amenities: ['Main Activity Hall (largest, marble ceiling, faces east)', 'Quiet Room', 'Meeting Room', 'Kitchen', 'Ablution facilities'],
      hours: 'Office: Mon-Fri 8:45 AM - 5 PM; Meditation Room (KP215): Mon-Fri 7 AM - 10 PM'
    },
    {
      id: 'uoft-mf-2',
      name: 'Hart House Multi-Faith Space',
      location: '7 Hart House Circle',
      description: 'Historic space for private prayer and meditation. Jumu\'ah prayers held Fridays in Debates Room with Muslim community.',
      amenities: ['Configurable seating for 30', 'Mats available', 'Storage', 'Bookable for special functions'],
      hours: 'Building hours; Jumu\'ah Fridays'
    },
    {
      id: 'uoft-mf-3',
      name: 'Robarts Library Prayer Space',
      location: 'Robarts Library',
      description: 'Convenient prayer space in main library. Drop-in with some bookable time.',
      amenities: ['Prayer mats', 'Foot-washing station in washroom', 'Storage', 'No food or drink'],
      hours: 'Library hours'
    },
    {
      id: 'uoft-mf-4',
      name: 'Emmanuel College Prayer Room',
      location: 'Room EM005, Lower Level, Emmanuel College (Victoria College campus)',
      description: 'Prayer space directly across from Faculty of Law. Reserved Muslim prayer hours.',
      amenities: ['Carpeted floor', 'Quiet space'],
      hours: 'Muslim prayer: Mon-Fri 12:30-3:00 PM & 3:30-8:00 PM'
    },
    {
      id: 'uoft-mf-5',
      name: 'OISE Multi-Faith Space',
      location: 'OISE Building, 252 Bloor St. W., Room 4-409 (4th floor)',
      description: 'Multi-faith space in education building. Note: Room 4-409 may have temporary closures.',
      amenities: ['Prayer mats', 'Chairs', 'Ablution rooms: 12-302 (men\'s), 5-502 (women\'s)'],
      hours: 'Building hours (capacity: 10-15 people)'
    },
    {
      id: 'uoft-mf-6',
      name: 'Medical Sciences Building Prayer Spaces',
      location: '1 King\'s College Circle (144 College St.), Basement Rooms B220 & B222',
      description: 'Two small prayer rooms near Queen\'s Park subway station.',
      amenities: ['Quiet space', 'Two separate rooms'],
      hours: 'Building hours (capacity: 5 people each)'
    },
    {
      id: 'uoft-mf-7',
      name: 'Bahen Centre Prayer Space',
      location: 'Bahen Centre, Room 2270',
      description: 'Quiet reflection room commonly used for daily prayers in Computer Science building.',
      amenities: ['Carpeted floor', 'Quiet zone'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-8',
      name: 'Falconer Hall Prayer Room',
      location: 'Falconer Hall, Basement Room 20',
      description: 'Law school prayer space. Access code available at reception office.',
      amenities: ['Quiet space', 'Access code required'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-9',
      name: 'Woodsworth College Multi-Faith Space',
      location: '21 Sussex Ave. (at Huron)',
      description: 'Carpeted room for individual or small group prayer. Bookable when not in use.',
      amenities: ['Carpeted floor', 'No furnishings'],
      hours: 'Building hours (capacity: ~10 people)'
    },
    {
      id: 'uoft-mf-10',
      name: 'Dalla Lana School of Public Health Meditation Space',
      location: 'DLSPH, Room HS 786',
      description: 'Open to DLSPH and Nursing students for quiet meditation and prayer.',
      amenities: ['Yoga mats', 'Small storage cabinet', 'Washroom available'],
      hours: 'Building hours (capacity: 3 people)'
    },
    {
      id: 'uoft-mf-11',
      name: 'Factor-Inwentash Faculty of Social Work Prayer Room',
      location: 'FIFSW, 4th Floor',
      description: 'Inclusive space for all faiths. Foot washing bins on 3rd, 6th, and 7th floor single-user all-gender washrooms.',
      amenities: ['Prayer mats', 'Foot washing supplies on multiple floors'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-12',
      name: 'Innis College Prayer Space',
      location: 'Innis College',
      description: 'Multi-faith space in Innis College residence area.',
      amenities: ['Yoga mats', 'Prayer mats', 'Chairs', 'Washroom available'],
      hours: '8:00 AM - 8:00 PM (capacity: 8-10 people)'
    },
    {
      id: 'uoft-mf-13',
      name: 'UTM Multifaith Prayer Space',
      location: 'UTM Davis Building',
      description: 'Main prayer space at Mississauga campus. Managed by UTMSU.',
      amenities: ['Prayer mats', 'Washroom available'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-14',
      name: 'UTM Reflection Bays',
      location: 'Multiple: Deerfield Hall (3rd & 4th floors), Instructional Building (3rd floor), Maanjiwe Nendamowninan (2nd & 3rd floors)',
      description: 'Quiet reflection spaces across Mississauga campus for meditation, prayer, or relaxation.',
      amenities: ['Quiet reflection', 'Individual use'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-15',
      name: 'UTSC Multi-Faith Space',
      location: 'UTSC Campus',
      description: 'Prayer and meditation space at Scarborough campus.',
      amenities: ['Prayer mats', 'Quiet space'],
      hours: 'Building hours'
    }
  ]
};

export const DATA_MAC: CampusData = {
  locations: [
    {
      name: "Mills Memorial Library",
      type: "Library",
      description: "Main humanities and social sciences library.",
      features: ["Learning Commons", "Makerspace"],
      hours: "8:00 AM - 11:00 PM",
      coordinates: [43.2623, -79.9183]
    },
    {
      name: "Thode Library",
      type: "Library",
      description: "Science and Engineering library. Known as the 'Party Library' by some due to noise levels on lower floors.",
      features: ["Group Study", "Makerspace"],
      hours: "24/7 during exams",
      coordinates: [43.2614, -79.9228]
    },
    {
      name: "MUSC (McMaster University Student Centre)",
      type: "Student Centre",
      description: "Central hub for food and clubs.",
      features: ["La Piazza", "Club Space", "Starbucks"],
      coordinates: [43.2632, -79.9183]
    },
    {
      name: "Pulse (David Braley Athletic Centre)",
      type: "Gym",
      description: "State-of-the-art fitness centre.",
      features: ["Pool", "Fitness Centre", "Climbing Wall", "Studios"],
      hours: "6:00 AM - 11:00 PM",
      coordinates: [43.2620, -79.9200]
    },
    {
      name: "Ron Joyce Stadium",
      type: "Athletics",
      description: "Home of the McMaster Marauders football team.",
      features: ["Football Field", "Track", "Seating for 6,000"],
      coordinates: [43.2595, -79.9240]
    },
    // === FOOD SPOTS ===
    {
      name: "La Piazza (MUSC)",
      type: "Food / Food Court",
      description: "Main campus food court in the Student Centre. Pizza, poutine, salad bar, pho, wraps, and breakfast.",
      features: ["Pizza", "Poutine", "Pho", "Salad Bar", "Wraps"],
      hours: "8:00 AM - 8:00 PM",
      coordinates: [43.2632, -79.9183]
    },
    {
      name: "The Phoenix",
      type: "Food / Restaurant",
      description: "On-campus restaurant and bar with great atmosphere. Student favorite for meals and socializing.",
      features: ["Pub Food", "Bar", "Good Atmosphere", "Student Hangout"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Pinks Burgers",
      type: "Food / Restaurant",
      description: "Popular burger joint on Main Street West near campus.",
      features: ["Burgers", "Fries", "Quick Service"],
      hours: "11:00 AM - 9:00 PM"
    },
    {
      name: "Saigon (Westdale)",
      type: "Food / Restaurant",
      description: "Affordable Vietnamese restaurant in Westdale Village. Student favorite for pho.",
      features: ["Vietnamese Cuisine", "Pho", "Affordable", "Rice Dishes"],
      hours: "11:00 AM - 9:00 PM"
    },
    {
      name: "The Burnt Tongue",
      type: "Food / Restaurant",
      description: "Soup, salads, and sandwiches in Westdale. Great for healthy lunch options.",
      features: ["Soups", "Salads", "Sandwiches", "Healthy Options"],
      hours: "11:00 AM - 7:00 PM"
    },
    {
      name: "Basilique",
      type: "Food / Restaurant",
      description: "Westdale spot known for cheap, good chicken shawarma wraps.",
      features: ["Shawarma", "Wraps", "Halal", "Budget-Friendly"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Snooty Fox",
      type: "Food / Pub",
      description: "Westdale pub known for specials like half-price wings and all-you-can-eat perogies.",
      features: ["Wings", "Perogies", "Pub Food", "Specials"],
      hours: "11:00 AM - 12:00 AM"
    },
    {
      name: "Pita Pit",
      type: "Food / Restaurant",
      description: "Quick pitas in Westdale. Student discounts available.",
      features: ["Pitas", "Quick Service", "Student Discounts"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Lazeez Shawarma",
      type: "Food / Restaurant",
      description: "Popular shawarma spot in Westdale. Same 'on the sticks' style as other locations.",
      features: ["Shawarma", "Halal", "Rice Bowls"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "The Reactor (Thode Library)",
      type: "Food / Cafe",
      description: "Quick meals, pastries, and specialty drinks inside Thode Library.",
      features: ["Coffee", "Pastries", "Snacks", "In-Library"],
      hours: "8:00 AM - 8:00 PM",
      coordinates: [43.2614, -79.9228]
    }
  ],
  resources: [
    {
      name: "Student Success Centre",
      contact: "studentsuccess@mcmaster.ca",
      description: "Gilmour Hall 110. Career counseling, academic skills, and global opportunities."
    },
    {
      name: "McMaster Health Forum",
      contact: "mhf@mcmaster.ca",
      description: "Hub for health policy research and public events."
    },
    {
      name: "Student Wellness Centre",
      contact: "wellness@mcmaster.ca",
      description: "Mental health, medical services, and wellness support in the Student Centre."
    }
  ],
  faq: [
    {
      question: "Where are the deer?",
      answer: "Cootes Paradise! Just a short walk from campus behind the stadium. It's a beautiful nature sanctuary - perfect for hiking and spotting wildlife."
    },
    {
      question: "What is the Silhouette?",
      answer: "McMaster's student newspaper, published weekly and available online and in print across campus. Great way to stay informed about campus news and events."
    },
    {
      question: "How do I use the HSR bus with my student card?",
      answer: "Full-time undergrads get an HSR bus pass included in student fees. Just tap your student card when boarding any Hamilton Street Railway bus. The pass works year-round."
    },
    {
      question: "Where can I print on campus?",
      answer: "Mills and Thode libraries have printing stations. Load funds to your student account through Mosaic. The Hub also has printing services."
    },
    {
      question: "Where is good cheap food on campus?",
      answer: "La Piazza in MUSC has affordable options. The Hub's Student Marketplace offers bagels and snacks. Mac Farmstand sells fresh produce. Check MSU Maroons social media for free food events."
    },
    {
      question: "How do I book a study room?",
      answer: "Use the library booking system at library.mcmaster.ca for Mills and Thode rooms. The Hub also has collaboration suites bookable through MSU."
    },
    {
      question: "Is there a food bank on campus?",
      answer: "Yes, the MSU Food Collective Centre in MUSC provides emergency food support and affordable groceries to students. No judgment, just support."
    },
    {
      question: "Where can I park on campus?",
      answer: "Visitor parking at Lot M and pay lots near MUSC. Students can purchase permits through Parking and Security Services. Check parking.mcmaster.ca for rates and availability."
    },
    {
      question: "What is my MacID and how do I use it?",
      answer: "Your MacID is your McMaster username for email, Mosaic, Avenue to Learn, library access, and more. Set it up through the MacID portal when you're admitted."
    },
    {
      question: "How do I access Health Services?",
      answer: "Student Wellness Centre is in MUSC. Book appointments through Mosaic or call 905-525-9140 ext. 27700. Same-day appointments available for urgent needs."
    },
    {
      question: "Where can I study 24 hours?",
      answer: "Thode Library is 24/7 during exams. Mills Library has extended hours during finals. Check library.mcmaster.ca for current hours."
    },
    {
      question: "How do I join clubs?",
      answer: "Check out clubs at msumcmaster.ca/clubs or attend ClubsFest at the start of each semester in MUSC. Over 300 clubs to choose from!"
    },
    {
      question: "Where can I find Jumu'ah prayers?",
      answer: "Friday prayers are held in Smith Gym at the David Braley Athletic Centre, organized by the MSA. Check @mcmastermsa on Instagram for times."
    },
    {
      question: "What is Mosaic?",
      answer: "Mosaic is McMaster's student information system for course enrollment, grades, finances, and personal information. Access it at mosaic.mcmaster.ca with your MacID."
    },
    {
      question: "Where can I nap on campus?",
      answer: "The Hub has comfortable seating areas. MUSC has quiet corners. Mills Library upper floors are quiet. Some students also use the grass on the main quad in nice weather."
    },
    {
      question: "Is there a shuttle to other campuses?",
      answer: "Yes, there's a shuttle to the Burlington campus (Ron Joyce Centre). Check the McMaster Parking website for schedules."
    }
  ],
  events: [
    {
      id: 'mac1',
      title: 'Marauders Basketball vs Ottawa',
      date: 'Jan 9, 2026',
      time: '6:00 PM',
      location: 'Burridge Gym',
      description: 'Cheer on the Marauders basketball team! Students get in free with ID.',
      category: 'Social'
    },
    {
      id: 'mac2',
      title: 'Marauders Basketball Game',
      date: 'Jan 10, 2026',
      time: '6:00 PM',
      location: 'Burridge Gym',
      description: 'Home basketball game. Free for students with valid McMaster ID.',
      category: 'Social'
    },
    {
      id: 'mac3',
      title: 'Engineering Information Session',
      date: 'Jan 7, 2026',
      time: '7:00 PM - 8:00 PM',
      location: 'Online',
      description: 'Learn about McMaster\'s engineering programs for prospective students.',
      category: 'Academic'
    },
    {
      id: 'mac4',
      title: 'International Student Session',
      date: 'Jan 13, 2026',
      time: '8:00 AM - 9:00 AM',
      location: 'Online',
      description: 'Information session for international prospective students.',
      category: 'Academic'
    },
    {
      id: 'mac5',
      title: 'RISE Virtual Fireside Chat for OHTs',
      date: 'Jan 19, 2026',
      time: '12:00 PM',
      location: 'Online',
      description: 'McMaster Health Forum hosts Ontario Health Teams virtual fireside chat.',
      category: 'Academic'
    },
    {
      id: 'mac6',
      title: 'Marauders Volleyball',
      date: 'Jan 16, 2026',
      time: '6:00 PM',
      location: 'Burridge Gym',
      description: 'Home volleyball match. Students free with McMaster ID.',
      category: 'Social'
    },
    {
      id: 'mac7',
      title: 'Hiking Cootes Paradise',
      date: 'Sundays',
      time: '10:00 AM',
      location: 'Meet at MUSC',
      description: 'Group hike organized by the Outdoor Club. Bring water.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'mac-mf-1',
      name: 'Spiritual Care and Learning Centre',
      location: 'MUSC 212',
      description: 'Main spiritual support hub with lounge, reading materials, halal/kosher treats, and herbal teas. Coordinated by Spiritual Care team.',
      amenities: ['Prayer mats', 'Meditation cushions', 'Lounge space', 'Reading materials', 'Ablution room nearby', 'Halal/kosher snacks'],
      hours: 'Mon-Sun 10:00 AM - 4:00 PM (Sept-Apr); extended to 8:00 PM during Ramadan; by appointment May-Aug'
    },
    {
      id: 'mac-mf-2',
      name: 'The Hub Multi-Faith Prayer Rooms',
      location: 'The Hub, 3rd Floor',
      description: 'MSU-managed mixed-gender and mixed-faith prayer rooms. Mandir permanently established. Respect all faiths; smudging with prior approval.',
      amenities: ['Prayer mats', 'Sacred texts in closet storage', 'Mandir', 'Shoe removal encouraged', 'Smudging with approval from studentlife@msu.mcmaster.ca'],
      hours: 'Mon-Sat 9:00 AM - 9:00 PM'
    },
    {
      id: 'mac-mf-3',
      name: 'The Hub Loft',
      location: 'The Hub, 4th Floor',
      description: 'Extended space for evening prayers, especially during Ramadan for Iftar and Taraweeh.',
      amenities: ['Large space', 'Quiet zone'],
      hours: '6:00 PM until Iftar/Taraweeh'
    },
    {
      id: 'mac-mf-4',
      name: 'Mills Library Prayer Corner',
      location: 'Mills Library, 3rd Floor',
      description: 'Quiet prayer space in main humanities library.',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: '8:00 AM - 11:00 PM'
    },
    {
      id: 'mac-mf-5',
      name: 'Thode Library Prayer Room',
      location: 'Thode Library, Room B117A',
      description: 'Prayer space in Science and Engineering library.',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: '8:00 AM - 11:00 PM'
    },
    {
      id: 'mac-mf-6',
      name: 'Muslim Student Association Prayer Space',
      location: 'T13, Rooms 106 and 112',
      description: 'MSA-managed prayer space. Jumu\'ah Friday prayers held in Smith Gym, David Braley Athletic Centre.',
      amenities: ['Prayer mats', 'Separate rooms', 'Ablution facilities'],
      hours: 'Mon-Sat'
    },
    {
      id: 'mac-mf-7',
      name: 'Smith Gym - Jumu\'ah Friday Prayer',
      location: 'David Braley Athletic Centre, Smith Gym',
      description: 'Weekly Friday congregational prayer hosted by MSA.',
      amenities: ['Large capacity', 'Prayer mats'],
      hours: 'Fridays (prayer time)'
    },
    {
      id: 'mac-mf-8',
      name: 'McMaster Children\'s Hospital Chapel',
      location: 'Health Sciences Centre, 2nd Floor',
      description: 'Hospital chapel available for all faiths, 24/7.',
      amenities: ['Pews', 'Quiet reflection', 'Chaplaincy services'],
      hours: '24/7'
    },
    {
      id: 'mac-mf-9',
      name: 'MDCL Prayer Room',
      location: 'Michael DeGroote Centre for Learning, Room 3018',
      description: 'Quiet space in medical/health sciences building.',
      amenities: ['Quiet zone'],
      hours: 'Building hours'
    },
    {
      id: 'mac-mf-10',
      name: 'Hamilton Hall Prayer Spaces',
      location: 'Hamilton Hall, Rooms 312 and 410',
      description: 'Academic building prayer spaces with scheduled availability.',
      amenities: ['Quiet zones'],
      hours: 'Mon-Thu (check posted times)'
    },
    {
      id: 'mac-mf-11',
      name: 'David Braley Health Sciences Centre Prayer Space',
      location: 'DBHSC Room 2001B, 100 Main Street West, Hamilton',
      description: 'Downtown Hamilton campus prayer space.',
      amenities: ['Quiet space'],
      hours: 'Building hours'
    },
    {
      id: 'mac-mf-12',
      name: 'Paul and Sally Bates Interfaith Centre',
      location: 'Ron Joyce Centre, Room 265, 4350 South Service Rd, Burlington',
      description: 'Interfaith space at DeGroote Burlington campus. Shuttle service available from main campus.',
      amenities: ['Multi-faith resources', 'Quiet space', 'Interfaith programming'],
      hours: 'Building hours'
    }
  ]
};

export const DATA_WESTERN: CampusData = {
  locations: [
    {
      name: "The D.B. Weldon Library",
      type: "Library",
      description: "The main library on campus. A brutalist landmark.",
      features: ["Group Study Rooms", "Reading Hall", "Access to UCC"],
      hours: "8:00 AM - 11:00 PM",
      coordinates: [43.0083, -81.2739]
    },
    {
      name: "University Community Centre (UCC)",
      type: "Student Centre",
      description: "The heart of student activity. Includes the Spoke and the Wave.",
      features: ["The Spoke (Bagels/Pub)", "Movie Theatre", "Grocery Store"],
      hours: "24/7",
      coordinates: [43.0096, -81.2737]
    },
    {
      name: "Western Student Recreation Centre (WSRC)",
      type: "Gym",
      description: "State-of-the-art fitness facility.",
      features: ["Pool", "Squash Courts", "Weight Room"],
      coordinates: [43.0070, -81.2750]
    },
    {
      name: "TD Stadium",
      type: "Athletics",
      description: "Home of the Western Mustangs football team. Capacity: 8,000.",
      features: ["Football Field", "Track", "Home Games"],
      coordinates: [43.0065, -81.2760]
    },
    {
      name: "Indigenous Student Centre",
      type: "Student Support",
      description: "Support and community space for Indigenous students in WSSB.",
      features: ["Cultural Events", "Monthly Corn Soup Lunch", "Advising"],
      hours: "9:00 AM - 5:00 PM",
      coordinates: [43.0090, -81.2735]
    },
    // === FOOD SPOTS ===
    {
      name: "The Spoke",
      type: "Food / Pub",
      description: "Famous UCC pub known for fresh bagels and cheap beer. A Western institution.",
      features: ["Bagels", "Pub Food", "Beer", "Student Hangout"],
      hours: "8:00 AM - 12:00 AM",
      coordinates: [43.0096, -81.2737]
    },
    {
      name: "The Wave",
      type: "Food / Food Court",
      description: "Food court in UCC with multiple options including sushi, pizza, and salads.",
      features: ["Sushi", "Pizza", "Salads", "Quick Service"],
      hours: "8:00 AM - 8:00 PM",
      coordinates: [43.0096, -81.2737]
    },
    {
      name: "The Grad Club",
      type: "Food / Pub",
      description: "Grad student pub with great atmosphere. Undergrads welcome too.",
      features: ["Pub Food", "Bar", "Trivia Nights", "Patio"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Omzzy's Shawarma",
      type: "Food / Restaurant",
      description: "Fresh Middle Eastern cuisine near Western. Chicken shawarma, gyros, and falafel.",
      features: ["Shawarma", "Halal", "Gyros", "Falafel"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "King Richie's Pizzeria",
      type: "Food / Restaurant",
      description: "Quality pizza spot on Richmond Street.",
      features: ["Pizza", "Sit-Down", "Quality"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Richmond Row",
      type: "Food / Neighborhood",
      description: "Main dining and nightlife strip in London. Dozens of restaurants, bars, and cafes within walking distance.",
      features: ["Variety", "Bars", "Restaurants", "Nightlife"],
      hours: "Varies by restaurant"
    },
    {
      name: "The Bungalow",
      type: "Food / Restaurant",
      description: "Popular Northside spot known for their burgers.",
      features: ["Burgers", "Pub Food", "Student Favorite"],
      hours: "11:00 AM - 12:00 AM"
    },
    {
      name: "Ozen Korea",
      type: "Food / Restaurant",
      description: "Student-recommended Korean restaurant near campus.",
      features: ["Korean Cuisine", "Korean BBQ", "Bibimbap"],
      hours: "11:30 AM - 9:30 PM"
    }
  ],
  resources: [
    {
      name: "Student Experience",
      contact: "studentexperience@uwo.ca",
      description: "Support for leadership, careers, and wellness. Located in UCC."
    },
    {
      name: "Office of the Registrar",
      contact: "registrar@uwo.ca",
      description: "Enrollment, transcripts, and academic records."
    },
    {
      name: "Chief AI Officer",
      contact: "caio@uwo.ca",
      description: "Resources and community of practice for AI in education."
    }
  ],
  faq: [
    {
      question: "Where can I get the best bagel?",
      answer: "The Spoke in the UCC. Get a BLT bagel - it's legendary!"
    },
    {
      question: "When are the corn soup lunches?",
      answer: "First Wednesday of each month at the Indigenous Student Centre in WSSB Room 2100. All are welcome!"
    },
    {
      question: "How do I use the LTC bus with my student card?",
      answer: "Full-time students get a bus pass included in fees. Just tap your Western OneCard when boarding any London Transit Commission bus. Works year-round."
    },
    {
      question: "Where can I print on campus?",
      answer: "Weldon Library, Taylor Library, and most computer labs have printing stations. Load funds via your Western OneCard online."
    },
    {
      question: "Where is the tunnel system?",
      answer: "Western has underground tunnels connecting several buildings including the Natural Sciences Centre, Physics & Astronomy, Chemistry, and more. Check campus maps for tunnel access points - great for winter!"
    },
    {
      question: "How do I get tickets to Mustangs games?",
      answer: "Students get free admission to most regular season games with their Western OneCard. Check gowesternmustangs.ca for schedules. Football games at TD Stadium are a must!"
    },
    {
      question: "Where is cheap food on campus?",
      answer: "The Spoke in UCC has great value (those bagels!). The Wave grocery store in UCC for snacks. Check the USC for free food events and club socials."
    },
    {
      question: "Is there a food bank?",
      answer: "Yes, the USC Food Support Services provides free groceries to students in need. Located in UCC. Confidential and judgment-free."
    },
    {
      question: "What is my Western Identity and OneCard?",
      answer: "Your Western Identity is your username for all Western systems (OWL, Student Center, email). Your OneCard is your physical student ID for building access, library, gym, transit, and purchases."
    },
    {
      question: "How do I book study rooms?",
      answer: "Use the library booking system at lib.uwo.ca. Weldon, Taylor, and other libraries have bookable group study rooms. Book early during exams!"
    },
    {
      question: "How do I access Health Services?",
      answer: "Student Health Services is in the UCC. Book appointments through the Student Center or call 519-661-3030. Walk-in hours also available."
    },
    {
      question: "Where can I study 24 hours?",
      answer: "UCC is open 24/7 and has study spaces. Weldon Library has extended hours during exams. Check library hours at lib.uwo.ca."
    },
    {
      question: "How do I join clubs?",
      answer: "Check out clubs at westernusc.ca/clubs or attend the Club Fair during O-Week and in January. Over 200 clubs available!"
    },
    {
      question: "Where can I find Jumu'ah prayers?",
      answer: "Friday prayers are held in UCC Room 38A. Check with the MSA (@westernmsa on Instagram) for exact times as they change seasonally."
    },
    {
      question: "What are the affiliate colleges?",
      answer: "Western has three affiliates: King's University College, Brescia University College, and Huron University. Each has its own campus, residence, and community but students can take courses across all."
    },
    {
      question: "Where can I park on campus?",
      answer: "Visitor parking available in various lots around campus. Students can purchase permits through Parking Services. Check parking.uwo.ca for rates and locations."
    }
  ],
  events: [
    {
      id: 'uwo1',
      title: 'Indigenous Student Corn Soup Lunch',
      date: 'Jan 7, 2026',
      time: '12:00 PM',
      location: 'ISC, WSSB Room 2100',
      description: 'Monthly Oneida style corn soup or vegan alternative. All welcome.',
      category: 'Social'
    },
    {
      id: 'uwo2',
      title: 'Maritsa Brookes Concerto Competition – Final Round',
      date: 'Jan 10, 2026',
      time: '12:30 PM',
      location: 'von Kuster Hall',
      description: 'Final round of the annual concerto competition at the Don Wright Faculty of Music.',
      category: 'Social'
    },
    {
      id: 'uwo3',
      title: 'Generative AI Community of Practice',
      date: 'Jan 12, 2026',
      time: '2:30 PM - 3:30 PM',
      location: 'Online',
      description: 'Discussion on integrating generative AI into course design and learning experiences.',
      category: 'Academic'
    },
    {
      id: 'uwo4',
      title: 'Fred Pattison Piano Award Winner\'s Recital',
      date: 'Jan 15, 2026',
      time: '8:00 PM',
      location: 'von Kuster Hall',
      description: '2025 winner Sophie Huang performs works by Bach, Mozart, Schumann, Debussy, Rachmaninoff, and Peeters.',
      category: 'Social'
    },
    {
      id: 'uwo5',
      title: 'Fred Pattison Piano Award 2026 Competition – Final Round',
      date: 'Jan 16, 2026',
      time: '8:00 PM',
      location: 'von Kuster Hall',
      description: 'Final round of the annual piano competition.',
      category: 'Social'
    },
    {
      id: 'uwo6',
      title: 'Fred Pattison Piano Masterclass',
      date: 'Jan 17, 2026',
      time: '10:00 AM',
      location: 'von Kuster Hall',
      description: 'Masterclass with 2026 competition adjudicator Michael Berkovsky.',
      category: 'Academic'
    },
    {
      id: 'uwo7',
      title: 'Late Night Breakfast',
      date: 'Exam Period',
      time: '10:00 PM',
      location: 'UCC Atrium',
      description: 'Free breakfast food during exam season.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uwo-mf-1',
      name: 'Muslim Prayer Room (UCC)',
      location: 'University Community Centre, Room 38A',
      description: 'Main Muslim prayer room on campus. Managed by Western MSA. Note: Students have advocated for additional spaces due to high demand.',
      amenities: ['Prayer mats', 'Shoe racks', 'Ablution stations nearby'],
      hours: 'Building hours (capacity: 30-35 people)'
    },
    {
      id: 'uwo-mf-2',
      name: 'Multi-Faith Centre (Middlesex College)',
      location: 'Middlesex College',
      description: 'Multi-faith space with Chaplains\' offices. Serves as additional prayer space.',
      amenities: ['Prayer space', 'Chaplaincy services', 'Spiritual support'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-3',
      name: 'King\'s University College Chapel',
      location: 'King\'s University College',
      description: 'Beautiful chapel open 24/7 for quiet reflective prayer. Used for Christian and Catholic liturgies but open to all.',
      amenities: ['Pews', 'Quiet reflection', 'Weekly services'],
      hours: '24/7'
    },
    {
      id: 'uwo-mf-4',
      name: 'King\'s Abrahamic Gardens',
      location: 'King\'s University College Quad (between Dante Lenardon Building, South Annex, Faculty Building)',
      description: 'Outdoor interfaith space with sacred art from three Abrahamic traditions and Peace Pole created by Interfaith Peace Camp.',
      amenities: ['Benches', 'Sacred art', 'Peace Pole', 'Outdoor reflection'],
      hours: 'Always accessible'
    },
    {
      id: 'uwo-mf-5',
      name: 'King\'s Reflection Circle',
      location: 'King\'s University College',
      description: 'Inclusive outdoor space (created 2021) for private reflection or group gatherings. Supports Indigenous sacred gatherings.',
      amenities: ['Outdoor seating', 'Indigenous ceremony support', 'Group gatherings'],
      hours: 'Always accessible'
    },
    {
      id: 'uwo-mf-6',
      name: 'King\'s Muslim Prayer Rooms',
      location: 'King\'s University College, Faculty Building Room FB003',
      description: 'Prayer space for Muslim students at King\'s affiliate.',
      amenities: ['Prayer mats', 'Quiet space'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-7',
      name: 'Brescia University College Chapel',
      location: 'Brescia University College',
      description: 'Catholic chapel at Brescia affiliate. Daily mass and open for quiet prayer.',
      amenities: ['Pews', 'Daily mass', 'Quiet reflection'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-8',
      name: 'Huron University College Chapel',
      location: 'Huron University College',
      description: 'Anglican chapel at Huron affiliate. Services and quiet reflection.',
      amenities: ['Pews', 'Services', 'Quiet reflection'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-9',
      name: 'Amit Chakma Engineering Building',
      location: 'Amit Chakma Engineering Building, Stairwells',
      description: 'Note: Students sometimes use stairwells for prayer when other spaces are full. University is working to identify additional spaces.',
      amenities: ['Informal space'],
      hours: 'Building hours'
    }
  ]
};

export const DATA_QUEENS: CampusData = {
  locations: [
    {
      name: "Stauffer Library",
      type: "Library",
      description: "Main humanities and social sciences library. Massive gothic-style building.",
      features: ["The Loggia", "Cafe", "Spiral Staircase"],
      hours: "8:00 AM - 2:00 AM",
      coordinates: [44.2277, -76.4951]
    },
    {
      name: "John Deutsch University Centre (JDUC)",
      type: "Student Centre",
      description: "Currently under renovation but the temporary hub is active.",
      features: ["Tricolour Outlet", "Clubs"],
      coordinates: [44.2284, -76.4955]
    },
    {
      name: "Arc (Athletics and Recreation Centre)",
      type: "Gym",
      description: "Main gym on campus. Lots of windows. Home to Gaels sports.",
      features: ["Pool", "Cardio Zones", "Studios", "Main Gym"],
      coordinates: [44.2310, -76.4960]
    },
    {
      name: "Kingston Memorial Centre",
      type: "Arena",
      description: "Home arena for Gaels hockey teams.",
      features: ["Ice Rink", "Seating"],
      coordinates: [44.2350, -76.4900]
    },
    {
      name: "Common Ground (CoGro)",
      type: "Cafe / Social",
      description: "Student-run coffee house in Mitchell Hall with live music nights.",
      features: ["Coffee", "Live Music", "Study Space"],
      hours: "8:00 AM - 10:00 PM",
      coordinates: [44.2280, -76.4950]
    },
    // === FOOD SPOTS ===
    {
      name: "Bubba's Poutine & Pizzeria",
      type: "Food / Restaurant",
      description: "Late-night favorite! Open until 3 AM. Delivers anywhere on campus. Famous for poutine and subs.",
      features: ["Poutine", "Pizza", "Subs", "Late Night", "Delivery"],
      hours: "11:00 AM - 3:00 AM"
    },
    {
      name: "Wooden Heads Gourmet Pizza",
      type: "Food / Restaurant",
      description: "Wood-fired pizzas with lively atmosphere. Student favorite for quality pizza at reasonable prices.",
      features: ["Wood-Fired Pizza", "Great Atmosphere", "Sit-Down Dining"],
      hours: "11:30 AM - 10:00 PM"
    },
    {
      name: "Chez Piggy",
      type: "Food / Restaurant",
      description: "Kingston classic with stone-walled ambiance. Duck confit poutine is legendary. Worth a splurge.",
      features: ["Fine Dining", "Duck Confit", "Patio", "Special Occasion"],
      hours: "11:30 AM - 10:00 PM"
    },
    {
      name: "Gangnam Style",
      type: "Food / Restaurant",
      description: "Student favorite for Korean food near campus.",
      features: ["Korean Cuisine", "Korean Fried Chicken", "Affordable"],
      hours: "11:00 AM - 9:30 PM"
    },
    {
      name: "Mekong",
      type: "Food / Restaurant",
      description: "Top choice for Vietnamese food in Kingston. Great pho, green curry, and pad Thai.",
      features: ["Vietnamese Cuisine", "Pho", "Thai Food", "Affordable"],
      hours: "11:00 AM - 9:00 PM"
    },
    {
      name: "Shawarma Dubai",
      type: "Food / Restaurant",
      description: "Popular halal shawarma spot near campus. Quick and delicious.",
      features: ["Shawarma", "Halal", "Quick Service"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Sophie's Noodle House",
      type: "Food / Restaurant",
      description: "Known for flavorful noodle broths. Cozy spot.",
      features: ["Noodles", "Asian Cuisine", "Cozy"],
      hours: "11:30 AM - 9:00 PM"
    },
    {
      name: "Pan Chancho Bakery",
      type: "Food / Cafe",
      description: "Amazing bakery and cafe. Great for breakfast, baked goods, and coffee.",
      features: ["Bakery", "Breakfast", "Coffee", "Fresh Bread"],
      hours: "7:30 AM - 5:00 PM"
    },
    {
      name: "Fryway",
      type: "Food / Food Truck",
      description: "On-campus chip truck. Best poutine on campus!",
      features: ["Poutine", "Fries", "Quick", "On-Campus"],
      hours: "11:00 AM - 8:00 PM"
    }
  ],
  resources: [
    {
      name: "Student Wellness Services",
      contact: "613-533-2506",
      description: "Mitchell Hall. Medical and counselling appointments."
    },
    {
      name: "Queen's International Student Centre (QUIC)",
      contact: "quic@queensu.ca",
      description: "Support services for international students including orientation and advising."
    },
    {
      name: "Student Experience Office",
      contact: "student.experience@queensu.ca",
      description: "Leadership, clubs, and student life support. JDUC Room 216."
    }
  ],
  faq: [
    {
      question: "What is a Tam?",
      answer: "A traditional Scottish bonnet worn by Queen's students. The pom-pom color represents your faculty - it's a beloved Queen's tradition!"
    },
    {
      question: "How do I get tickets to Gaels games?",
      answer: "Full-time students can reserve free tickets for regular season games through the Gaels Tickets website. Playoffs and special events may have different policies."
    },
    {
      question: "How do I use Kingston Transit with my student card?",
      answer: "Full-time students get a Kingston Transit bus pass included in student fees. Just tap your student card when boarding any Kingston Transit bus."
    },
    {
      question: "Where can I print on campus?",
      answer: "Stauffer Library, Douglas Library, and computer labs have printing stations. Add funds to your student account through SOLUS to print."
    },
    {
      question: "Where is cheap food on campus?",
      answer: "Common Ground (CoGro) in Mitchell Hall has great prices. The Queen's Pub is affordable. Food trucks visit campus regularly. Check AMS for free food events."
    },
    {
      question: "Is there a food bank?",
      answer: "Yes, the AMS Food Bank provides free groceries to students in need. Located in the JDUC area. Confidential and no questions asked."
    },
    {
      question: "How do I book study rooms?",
      answer: "Use the library booking system at library.queensu.ca for Stauffer and Douglas Library rooms. The JDUC (when open) also has bookable meeting spaces."
    },
    {
      question: "Where can I find Jumu'ah prayers?",
      answer: "Weekly Friday prayers are organized by QUMSA (Queen's University Muslim Students Association). Check qumsa.com or their Instagram for current location and times."
    },
    {
      question: "What is SOLUS?",
      answer: "SOLUS is Queen's student information system for course enrollment, grades, finances, tax forms, and personal information. Access it at my.queensu.ca."
    },
    {
      question: "How do I access Health Services?",
      answer: "Student Wellness Services is in Mitchell Hall. Book appointments through the Patient Portal or call 613-533-2506. Walk-in hours available."
    },
    {
      question: "Where can I study late at night?",
      answer: "Stauffer Library is open until 2 AM. During exams, libraries have extended hours. Check library.queensu.ca for current schedules."
    },
    {
      question: "How do I join clubs?",
      answer: "Check out clubs at myams.org/clubs or attend the Clubs Fair during Orientation Week and in January. Over 400 clubs to choose from!"
    },
    {
      question: "What is the AMS?",
      answer: "The Alma Mater Society (AMS) is Queen's student government. They run services like the food bank, Walkhome, clubs, and advocate for students."
    },
    {
      question: "Where can I park on campus?",
      answer: "Limited parking available in various lots. Check parking.queensu.ca for visitor and student permit information. Street parking around campus is also limited."
    },
    {
      question: "What is the JDUC renovation status?",
      answer: "The John Deutsch University Centre is undergoing major renovations expected to complete in 2024-2025. New prayer spaces and student services are included in the plans."
    },
    {
      question: "Where can I nap on campus?",
      answer: "Stauffer Library has quiet floors. Mitchell Hall has some quiet areas. The ARC has comfortable seating. Some students use the grass on campus in nice weather."
    }
  ],
  events: [
    {
      id: 'queens1',
      title: 'International Student Welcome Days',
      date: 'Jan 5-9, 2026',
      time: 'Various',
      location: 'QUIC / Campus',
      description: 'Orientation events for international students starting in Winter 2026.',
      category: 'Social'
    },
    {
      id: 'queens2',
      title: 'Gaels Volleyball vs York',
      date: 'Jan 9, 2026',
      time: '6:00 PM',
      location: 'Main Gym - ARC',
      description: 'Cheer on the Gaels volleyball team! Free for students with ID.',
      category: 'Social'
    },
    {
      id: 'queens3',
      title: 'Gaels Men\'s Hockey',
      date: 'Jan 9, 2026',
      time: '7:30 PM',
      location: 'Kingston Memorial Centre',
      description: 'Home hockey game. Free tickets for students.',
      category: 'Social'
    },
    {
      id: 'queens4',
      title: 'Gaels Volleyball Saturday',
      date: 'Jan 10, 2026',
      time: '4:00 PM',
      location: 'Main Gym - ARC',
      description: 'Saturday volleyball matchup at the ARC.',
      category: 'Social'
    },
    {
      id: 'queens5',
      title: 'Winter 2026 Intramurals Registration Opens',
      date: 'Jan 11, 2026',
      time: 'All Day',
      location: 'ARC',
      description: 'Sign up for intramural leagues including basketball, volleyball, ice hockey, and more.',
      category: 'Social'
    },
    {
      id: 'queens6',
      title: 'Live Guided Virtual Campus Tour',
      date: 'Jan 14, 2026 onwards',
      time: 'Various',
      location: 'Online (Zoom)',
      description: 'Join campus tour team for a live guided virtual tour of Queen\'s campus.',
      category: 'Academic'
    },
    {
      id: 'queens7',
      title: 'Gaels Basketball',
      date: 'Jan 16, 2026',
      time: '6:00 PM',
      location: 'Main Gym - ARC',
      description: 'Home basketball game. Students free with Queen\'s ID.',
      category: 'Social'
    },
    {
      id: 'queens8',
      title: 'Queen\'s Gaels 3X3 Basketball Tournament',
      date: 'Mar 6-8, 2026',
      time: 'All Day',
      location: 'ARC Main Gym',
      description: 'Annual 3X3 basketball tournament with Open and Mixed leagues. Includes Tri-Colour Challenge with Three-Point Contest and Free Throw Showdown.',
      category: 'Social'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'queens-mf-1',
      name: 'Interfaith Room (Mitchell Hall)',
      location: 'Mitchell Hall, Room 215',
      description: 'Newly upgraded peaceful, non-denominational space. Soulful Singing held every Wednesday. Grief support group with Bereaved Families of Ontario-Kingston. Muslim worship services available.',
      amenities: ['Prayer rugs', 'Meditation cushions', 'Accessible', 'Weekly programs', 'Chaplain resources'],
      hours: '8:00 AM - 8:00 PM'
    },
    {
      id: 'queens-mf-2',
      name: 'Rideau Hall Prayer Space',
      location: 'Rideau Hall',
      description: 'Only 24-hour prayer space on campus. Note: Space was reduced when AMS services relocated to Rideau; QUMSA advocating for larger space in new JDUC.',
      amenities: ['24/7 access', 'Prayer mats'],
      hours: '24/7'
    },
    {
      id: 'queens-mf-3',
      name: 'JDUC Prayer Spaces (Coming 2024-2025)',
      location: 'John Deutsch University Centre (under renovation)',
      description: 'New designated prayer spaces planned for renovated JDUC. QUMSA advocated for years for larger, centrally-located space with separate male and female areas.',
      amenities: ['Larger space (planned)', 'Central location', 'Separate male/female areas (planned)'],
      hours: 'TBD (renovations expected complete 2024-2025)'
    },
    {
      id: 'queens-mf-4',
      name: 'Morgan Memorial Chapel',
      location: 'Theological Hall',
      description: 'Historic chapel space available for quiet contemplation and scheduled services.',
      amenities: ['Pews', 'Organ', 'Historic architecture'],
      hours: 'By appointment or scheduled service'
    },
    {
      id: 'queens-mf-5',
      name: 'Faith and Spiritual Life Office',
      location: 'Mitchell Hall',
      description: 'Chaplaincy office offering spiritual guidance, meditation instruction, and resources from various religious and spiritual traditions.',
      amenities: ['Chaplain consultations', 'Meditative practice resources', 'Interfaith programs', 'Interfaith Friendship Circles'],
      hours: 'Office hours Mon-Fri'
    },
    {
      id: 'queens-mf-6',
      name: 'Ban Righ Centre',
      location: 'Ban Righ Hall',
      description: 'Space for mature women students with quiet reflection areas.',
      amenities: ['Quiet space', 'Community support'],
      hours: 'Building hours'
    },
    {
      id: 'queens-mf-7',
      name: 'QUMSA Jumu\'ah Friday Prayer',
      location: 'Various campus locations',
      description: 'Weekly Friday congregational prayers organized by Queen\'s University Muslim Students Association (QUMSA), established 1963.',
      amenities: ['Large capacity', 'Community gathering'],
      hours: 'Fridays (prayer time)'
    }
  ]
};

export const DATA_TMU: CampusData = {
  locations: [
    {
      name: "Student Learning Centre (SLC)",
      type: "Study/Student Centre",
      description: "Iconic modern glass building on Yonge St.",
      features: ["Amphitheatre", "The Beach (Floor 6)", "Study Rooms", "Reflection Room (4th Floor)"],
      hours: "6:00 AM - 1:00 AM",
      coordinates: [43.6585, -79.3807]
    },
    {
      name: "Mattamy Athletic Centre (The MAC)",
      type: "Gym/Arena",
      description: "Located in the historic Maple Leaf Gardens.",
      features: ["Ice Rink", "Basketball Court", "Fitness Centre"],
      coordinates: [43.6622, -79.3802]
    },
    {
      name: "Kerr Hall",
      type: "Academic",
      description: "The square building surrounding the quad. Very easy to get lost in.",
      features: ["Quad", "Classrooms"],
      coordinates: [43.6580, -79.3790]
    },
    {
      name: "Toronto Metropolitan University Student Centre",
      type: "Student Centre",
      description: "Historic Oakham House with meeting rooms and event spaces.",
      features: ["Meeting Rooms", "Multi-Faith Room", "Event Spaces"],
      hours: "9:00 AM - 10:00 PM",
      coordinates: [43.6588, -79.3795]
    },
    {
      name: "Library Building",
      type: "Library",
      description: "Connected to SLC via bridge from Floor 2.",
      features: ["Study Spaces", "Research Resources", "Computer Labs"],
      hours: "8:00 AM - 11:00 PM",
      coordinates: [43.6587, -79.3810]
    },
    // === FOOD SPOTS ===
    {
      name: "Oakham Café",
      type: "Food / Restaurant",
      description: "On-campus café with affordable options in Oakham House. Great breakfast wraps and homefries.",
      features: ["Breakfast", "Affordable", "On-Campus"],
      hours: "8:00 AM - 6:00 PM"
    },
    {
      name: "Hub Café (Jorgenson Hall)",
      type: "Food / Cafe",
      description: "Grab-and-go market with soups, salads, pizza, and the 'Friendly Fiver' special.",
      features: ["Grab-and-Go", "Soups", "Salads", "Pizza"],
      hours: "8:00 AM - 5:00 PM"
    },
    {
      name: "The Met Campus Pub",
      type: "Food / Pub",
      description: "Campus pub for dining and socializing. Try the cauliflower bites!",
      features: ["Pub Food", "Student Hangout", "Beer"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Salad King",
      type: "Food / Restaurant",
      description: "Legendary Thai restaurant on Yonge St. Super cheap, filling, and delicious. Student staple since 1992.",
      features: ["Thai Cuisine", "Cheap", "Large Portions", "Student Legend"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Kinton Ramen",
      type: "Food / Restaurant",
      description: "Popular ramen spot near campus. Great tonkotsu broth.",
      features: ["Ramen", "Japanese Cuisine", "Trendy"],
      hours: "11:00 AM - 10:00 PM"
    },
    {
      name: "Banh Mi Boys",
      type: "Food / Restaurant",
      description: "Famous for fusion banh mi and steamed bao. Must try the fried chicken bao.",
      features: ["Banh Mi", "Steamed Bao", "Fusion"],
      hours: "11:00 AM - 9:00 PM"
    },
    {
      name: "Al Madinah Pizzeria",
      type: "Food / Restaurant",
      description: "Halal pizza slices with student discount. Great value.",
      features: ["Pizza", "Halal", "Student Discount", "Affordable"],
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "H Mart Food Court",
      type: "Food / Food Court",
      description: "Korean grocery store with food court at Yonge and Gould. Multiple Asian food options.",
      features: ["Korean Food", "Asian Cuisine", "Quick Service"],
      hours: "9:00 AM - 10:00 PM"
    },
    {
      name: "Eaton Centre Food Court",
      type: "Food / Food Court",
      description: "Massive mall food court 5-min walk south. Every chain restaurant you can imagine.",
      features: ["Variety", "Chains", "Shopping Mall"],
      hours: "10:00 AM - 9:00 PM"
    },
    {
      name: "The Pickle Barrel (Yonge-Dundas)",
      type: "Food / Restaurant",
      description: "Large menu with something for everyone at Yonge-Dundas Square.",
      features: ["Variety", "Large Menu", "Sit-Down Dining"],
      hours: "11:00 AM - 11:00 PM"
    }
  ],
  resources: [
    {
      name: "ServiceHub",
      contact: "ask@torontomu.ca",
      description: "POD 150. One-stop shop for registrar, fees, and enrollment."
    },
    {
      name: "Career, Co-op & Student Success Centre",
      contact: "careers@torontomu.ca",
      description: "Career counseling, job fairs, and co-op support."
    },
    {
      name: "TMSU (Student Union)",
      contact: "info@yourtmsu.ca",
      description: "Student government and advocacy services."
    }
  ],
  faq: [
    {
      question: "Where is the library?",
      answer: "The main library building is connected to the SLC. You can cross the bridge from SLC Floor 2. It's a quick indoor connection!"
    },
    {
      question: "Where is the multi-faith room?",
      answer: "Main multi-faith room is on 3rd floor of Oakham House (OAK-319). Additional space at TRS 7th floor. Note: Oakham House room reopened Jan 12, 2026 after renovations with new furniture."
    },
    {
      question: "What is a OneCard and how do I get one?",
      answer: "Your OneCard is your TMU student ID used for library access, gym entry, building access after hours, and exams. Get it at ServiceHub in POD 150."
    },
    {
      question: "How do I print on campus?",
      answer: "Use TMU Print stations in the library and computer labs. Load funds via your student account online at torontomu.ca. Check the library for printer locations."
    },
    {
      question: "How do I navigate Kerr Hall?",
      answer: "Kerr Hall has 4 wings (North, East, South, West) surrounding the Quad. Not all floors connect between wings! Google Maps has indoor navigation for Kerr Hall - highly recommended."
    },
    {
      question: "Where is cheap food on campus?",
      answer: "Oakham Café has affordable options. Tim Hortons in Kerr Hall. The Good Food Centre offers free groceries. Check TMSU for free food events throughout the semester."
    },
    {
      question: "Is there a food bank?",
      answer: "Yes, the TMU Good Food Centre provides free groceries to students in need. No judgment, just support for students facing food insecurity."
    },
    {
      question: "Where can I find Jumu'ah prayers?",
      answer: "TMU MSA hosts Friday prayers at the International Living Centre (ILC). Check @tmu.msa on Instagram for current times and exact location as it may vary."
    },
    {
      question: "How do I get TTC with my student card?",
      answer: "TMU students can purchase a discounted Post-Secondary Monthly Pass with valid student ID. Buy passes at TTC stations or use Presto. No universal pass included in fees."
    },
    {
      question: "How do I access Health Services?",
      answer: "Health Services is part of Student Wellbeing. Book appointments through my.torontomu.ca or call 416-979-5000. Mental health support also available."
    },
    {
      question: "Where can I study late at night?",
      answer: "SLC is open 6 AM - 1 AM daily. The library has varying hours. During exams, some spaces have extended hours. Check torontomu.ca for current schedules."
    },
    {
      question: "How do I join clubs?",
      answer: "Check out clubs on the TMSU website or attend the Clubs Fair during orientation. Hundreds of clubs cover academic, cultural, recreational, and social interests."
    },
    {
      question: "What is my.torontomu.ca?",
      answer: "It's TMU's student portal for course enrollment, grades, finances, and personal information. Log in with your TMU credentials."
    },
    {
      question: "Where can I park on campus?",
      answer: "TMU has very limited campus parking in downtown Toronto. Check parking.torontomu.ca for options. Most students use TTC or bike."
    },
    {
      question: "What is The MAC?",
      answer: "The Mattamy Athletic Centre is TMU's gym and arena, located in the historic Maple Leaf Gardens on Carlton Street. It has fitness facilities, ice rinks, and the basketball court."
    },
    {
      question: "Where can I nap on campus?",
      answer: "SLC has various seating areas and 'The Beach' on floor 6 has bean bags. The 4th floor Reflection Room is quiet. Oakham House has some comfortable spots too."
    }
  ],
  events: [
    {
      id: 'tmu1',
      title: 'New Student Orientation Session',
      date: 'Dec 2, 2025',
      time: '8:30 AM - 9:30 AM',
      location: 'Online',
      description: 'Everything you need to know before the start of undergraduate classes for January 2026 students.',
      category: 'Academic'
    },
    {
      id: 'tmu2',
      title: 'Multi-Faith Room Reopening',
      date: 'Jan 12, 2026',
      time: 'All Day',
      location: 'Oakham House',
      description: 'Multi-faith room reopens after repairs and reset with new furniture and storage.',
      category: 'Wellness'
    },
    {
      id: 'tmu3',
      title: 'OHS Panel and Networking Session',
      date: 'Jan 28, 2026',
      time: 'TBD',
      location: 'Campus',
      description: '10th annual Occupational Health & Safety panel and networking event.',
      category: 'Career'
    },
    {
      id: 'tmu4',
      title: 'TMU Career Fair',
      date: 'Feb 4, 2026',
      time: '11:00 AM - 3:00 PM',
      location: 'Kerr Hall West Upper Gym',
      description: 'Meet top employers from downtown Toronto. Networking breakfast at 10:00 AM for equity-deserving groups.',
      category: 'Career'
    },
    {
      id: 'tmu5',
      title: 'Women in STEM Session',
      date: 'Mar 4, 2026',
      time: 'TBD',
      location: 'Campus',
      description: 'Annual session for female-identifying students in STEM to connect with industry professionals.',
      category: 'Career'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'tmu-mf-1',
      name: 'Multi-Faith Room (Oakham House)',
      location: 'Student Campus Centre OAK-319, 3rd Floor, 55 Gould St.',
      description: 'Main multi-faith room on campus. Reopened Jan 12, 2026 after renovations with new furniture and storage. Note: Room often crowded with 3-4 prayer sessions needed per prayer time.',
      amenities: ['Prayer mats', 'New furniture (2026)', 'Storage for religious items', 'Dividers'],
      hours: 'Posted on door (OneCard required after 6 PM)'
    },
    {
      id: 'tmu-mf-2',
      name: 'TRS EDI Well-Being Space',
      location: 'Ted Rogers School of Management, TRS 1-045, 7th Floor, 55 Dundas St W',
      description: 'Student-advocated space (funded by TRSS) for all faiths to pray, meditate, reflect, grieve, or find quiet. Created after decade of student requests; 99% survey support.',
      amenities: ['Quiet space', 'All faiths welcome', 'Meditation', 'Grief support'],
      hours: 'Building hours'
    },
    {
      id: 'tmu-mf-3',
      name: 'SLC Reflection Room',
      location: 'Student Learning Centre, 4th Floor',
      description: 'Quiet space for individual silent prayer or meditation in iconic glass building.',
      amenities: ['Cushions', 'Natural light', 'Quiet zone'],
      hours: '6:00 AM - 1:00 AM (same as SLC)'
    },
    {
      id: 'tmu-mf-4',
      name: 'ILC International Room (Temporary)',
      location: 'International Living and Learning Centre, Main Floor',
      description: 'Temporary prayer space available during Oakham House room closure (Dec 15, 2025 - Jan 9, 2026).',
      amenities: ['OneCard access required'],
      hours: '9:00 AM - 10:00 PM (specific dates only)'
    },
    {
      id: 'tmu-mf-5',
      name: 'Friday Jumu\'ah Prayer Space',
      location: 'International Living Centre (ILC)',
      description: 'TMU MSA hosts Friday congregational prayers. Location may vary by semester - check MSA announcements.',
      amenities: ['Large capacity', 'Weekly Jumu\'ah'],
      hours: 'Fridays (prayer time)'
    },
    {
      id: 'tmu-mf-6',
      name: 'Centre for Urban Innovation Meeting Room',
      location: 'CUI Building',
      description: 'Bookable meeting room that can be used for brief private prayer or meditation when available. Roll down blinds for privacy.',
      amenities: ['Blinds for privacy', 'Bookable by CUI staff'],
      hours: 'Building hours (check availability)'
    }
  ]
};