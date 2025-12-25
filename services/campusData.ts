
import { CampusData } from '../types';

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
    }
  ],
  faq: [
    {
      question: "Where can I get coffee?",
      answer: "Tim Hortons in SLC, DC, and SCH. Starbucks in STC and AHS. Math C&D is great for cheap coffee."
    }
  ],
  events: [
    {
      id: 'uw1',
      title: 'Winter Term Kickoff: New Year, New Goals',
      date: 'Jan 06',
      time: '12:00 PM - 2:00 PM',
      location: 'SLC Great Hall',
      description: 'Start the term right with goal-setting workshops, free lunch, and meet new students.',
      category: 'Wellness'
    },
    {
      id: 'uw2',
      title: 'Co-op Job Search Workshop',
      date: 'Jan 07',
      time: '4:00 PM - 5:30 PM',
      location: 'Tatham Centre (TC 2218)',
      description: 'Learn strategies for finding and landing co-op positions this term.',
      category: 'Career'
    },
    {
      id: 'uw3',
      title: 'Bomber Wednesday: Winter Edition',
      date: 'Jan 08',
      time: '8:00 PM - 12:00 AM',
      location: 'The Bomber',
      description: 'Weekly campus pub night. 19+ with valid WatCard.',
      category: 'Social'
    },
    {
      id: 'uw4',
      title: 'Grad Writing Café',
      date: 'Jan 09',
      time: '1:00 PM - 4:00 PM',
      location: 'Dana Porter Library',
      description: 'Drop-in writing support for graduate students.',
      category: 'Academic'
    },
    {
      id: 'uw5',
      title: 'Wellness Week: Yoga & Meditation',
      date: 'Jan 13',
      time: '6:00 PM - 7:00 PM',
      location: 'PAC Multi-Purpose Room',
      description: 'Free yoga and meditation session to de-stress.',
      category: 'Wellness'
    },
    {
      id: 'uw6',
      title: 'Velocity Innovation Open House',
      date: 'Jan 14',
      time: '5:00 PM - 7:00 PM',
      location: 'Velocity Garage',
      description: 'Learn about startup incubator programs and meet founders.',
      category: 'Career'
    },
    {
      id: 'uw7',
      title: 'International Student Mixer',
      date: 'Jan 15',
      time: '7:00 PM - 9:00 PM',
      location: 'SLC Multi-Purpose Room',
      description: 'Meet international students from around the world.',
      category: 'Social'
    },
    {
      id: 'uw8',
      title: 'Tech Interview Prep Session',
      date: 'Jan 16',
      time: '6:00 PM - 8:00 PM',
      location: 'Davis Centre (DC 1302)',
      description: 'Practice coding interviews and get tips from upper-years.',
      category: 'Career'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uw-mf-1',
      name: 'SLC Multi-Faith Room',
      location: 'SLC 3109 (3rd Floor)',
      description: 'Main multi-faith space open to all students for prayer and meditation. Capacity ~100 people.',
      amenities: ['Prayer mats', 'Shoe racks', 'Dividers', 'Ablution facilities nearby'],
      hours: '5:00 AM - 12:00 AM'
    },
    {
      id: 'uw-mf-2',
      name: 'Davis Centre Prayer Space',
      location: 'DC 3578 (3rd Floor)',
      description: 'Quiet prayer space for engineering and math students. Door code: 338822.',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: 'Building hours'
    },
    {
      id: 'uw-mf-3',
      name: 'Dana Porter Reflection Room',
      location: 'DP 702 (7th Floor)',
      description: 'Carpeted space for reflection, prayer, relaxation and de-stressing.',
      amenities: ['Mats', 'Chairs', 'Cushions', 'Natural light'],
      hours: 'Library hours'
    },
    {
      id: 'uw-mf-4',
      name: 'The Sanctuary (B.C. Matthews Hall)',
      location: 'BMH 3023',
      description: 'Small intimate prayer space near the School of Pharmacy.',
      amenities: ['Prayer mats available'],
      hours: 'Building hours'
    },
    {
      id: 'uw-mf-5',
      name: 'Renison Multi-Faith Space',
      location: 'REN 0103',
      description: 'Multi-faith prayer space at Renison University College. Capacity ~12.',
      amenities: ['Prayer mats', 'Quiet environment'],
      hours: 'Daily during college hours'
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
    }
  ],
  resources: [
    {
      name: "Registrar (ArtSci)",
      contact: "ask.artsci@utoronto.ca",
      description: "Sidney Smith Hall. Handles course selection for Arts & Science."
    }
  ],
  faq: [
    {
      question: "Is there a tunnel system?",
      answer: "No, UofT doesn't have extensive tunnels like Carleton, but some buildings are connected."
    }
  ],
  events: [
    {
      id: 'uoft1',
      title: 'Winter Welcome Back BBQ',
      date: 'Jan 06',
      time: '11:00 AM - 2:00 PM',
      location: 'Sidney Smith Courtyard',
      description: 'Free lunch and meet fellow students to start the winter semester.',
      category: 'Social'
    },
    {
      id: 'uoft2',
      title: 'Academic Success Workshop',
      date: 'Jan 08',
      time: '3:00 PM - 4:30 PM',
      location: 'Robarts Library, 4th Floor',
      description: 'Learn time management and study strategies for the new term.',
      category: 'Academic'
    },
    {
      id: 'uoft3',
      title: 'Hart House Jazz Night',
      date: 'Jan 10',
      time: '8:00 PM - 10:00 PM',
      location: 'Hart House Arbor Room',
      description: 'Live jazz performances by students and local artists. Free entry.',
      category: 'Social'
    },
    {
      id: 'uoft4',
      title: 'Career Centre Drop-In Hours',
      date: 'Jan 13',
      time: '1:00 PM - 4:00 PM',
      location: 'Koffler Student Services',
      description: 'Get help with resumes, cover letters, and job applications.',
      category: 'Career'
    },
    {
      id: 'uoft5',
      title: 'Wellness Wednesday: Therapy Dogs',
      date: 'Jan 15',
      time: '12:00 PM - 2:00 PM',
      location: 'Sidney Smith Lobby',
      description: 'Therapy dogs visiting campus to help you de-stress.',
      category: 'Wellness'
    },
    {
      id: 'uoft6',
      title: 'Rotman Career Fair',
      date: 'Jan 17',
      time: '10:00 AM - 3:00 PM',
      location: 'Rotman School of Management',
      description: 'Network with top employers in finance, consulting, and tech.',
      category: 'Career'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uoft-mf-1',
      name: 'Multi-Faith Centre',
      location: '569 Spadina Crescent (Koffler House)',
      description: 'The main hub for spiritual practice at UofT. Offers prayer rooms, meditation spaces, workshops, and interfaith programs.',
      amenities: ['Main Activity Hall', 'Quiet Room', 'Ablution facilities', 'Kitchen', 'Resource Library'],
      hours: 'Mon-Fri 8:45 AM - 5:00 PM'
    },
    {
      id: 'uoft-mf-2',
      name: 'Bahen Centre Prayer Space',
      location: 'Bahen Centre, Room 2270',
      description: 'A quiet reflection room commonly used for daily prayers by computer science students.',
      amenities: ['Carpeted floor', 'Quiet zone'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-3',
      name: 'Robarts Library Quiet Floor',
      location: 'Robarts Library, 13th Floor',
      description: 'Silent study floor often used for quiet reflection and meditation.',
      amenities: ['Silent zone', 'Natural light', 'Study carrels'],
      hours: 'Library hours'
    },
    {
      id: 'uoft-mf-4',
      name: 'Hart House Chapel',
      location: 'Hart House, Main Floor',
      description: 'Historic chapel space available for quiet contemplation and spiritual gatherings.',
      amenities: ['Pews', 'Historic architecture', 'Organ'],
      hours: 'Building hours'
    },
    {
      id: 'uoft-mf-5',
      name: 'Gerstein Science Meditation Room',
      location: 'Gerstein Library, Lower Level',
      description: 'Quiet space for science students seeking a moment of peace between classes.',
      amenities: ['Cushions', 'Quiet environment'],
      hours: 'Library hours'
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
    }
  ],
  resources: [
    {
      name: "Student Success Centre",
      contact: "studentsuccess@mcmaster.ca",
      description: "Gilmour Hall 110. Career counseling, academic skills, and global opportunities."
    }
  ],
  faq: [
    {
      question: "Where are the deer?",
      answer: "Cootes Paradise! Just a short walk from campus behind the stadium."
    }
  ],
  events: [
    {
      id: 'mac1',
      title: 'New Year Study Skills Workshop',
      date: 'Jan 07',
      time: '5:00 PM - 6:30 PM',
      location: 'Mills Library Learning Commons',
      description: 'Start the term strong with effective study techniques.',
      category: 'Academic'
    },
    {
      id: 'mac2',
      title: 'Wednesday Night at Quarters',
      date: 'Jan 08',
      time: '9:00 PM - 1:00 AM',
      location: 'Quarters (MUSC)',
      description: 'Student bar night with drink specials. 19+ with ID.',
      category: 'Social'
    },
    {
      id: 'mac3',
      title: 'Cootes Paradise Winter Hike',
      date: 'Jan 11',
      time: '10:00 AM - 12:00 PM',
      location: 'Meet at MUSC entrance',
      description: 'Group hike through snowy trails. Bring warm clothes!',
      category: 'Wellness'
    },
    {
      id: 'mac4',
      title: 'Chemistry Help Session',
      date: 'Jan 14',
      time: '6:00 PM - 8:00 PM',
      location: 'Burke Science Building',
      description: 'Drop-in help for CHEM 1A03 and 1AA3.',
      category: 'Academic'
    },
    {
      id: 'mac5',
      title: 'Marauders Basketball Game',
      date: 'Jan 17',
      time: '7:00 PM',
      location: 'Burridge Gymnasium',
      description: 'Cheer on the Marauders! Free entry with student ID.',
      category: 'Social'
    },
    {
      id: 'mac6',
      title: 'Resume & LinkedIn Workshop',
      date: 'Jan 19',
      time: '2:00 PM - 4:00 PM',
      location: 'Gilmour Hall 110',
      description: 'Build your professional profile for summer opportunities.',
      category: 'Career'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'mac-mf-1',
      name: 'Spiritual Care and Learning Centre (SCLC)',
      location: 'MUSC 212',
      description: 'Main multi-faith hub with prayer space, spiritual guidance, and community lounge with halal/kosher treats.',
      amenities: ['Prayer mats', 'Meditation cushions', 'Lounge', 'Herbal teas', 'Ablution room'],
      hours: 'Office: 10 AM - 4 PM, Prayer: 10:30 AM - 8 PM'
    },
    {
      id: 'mac-mf-2',
      name: 'Mills Library Prayer Space',
      location: 'Mills Library, 2nd Floor Prayer Corner',
      description: 'Quiet prayer area in the main library for students between study sessions.',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: 'Library hours'
    },
    {
      id: 'mac-mf-3',
      name: 'Thode Library Prayer Space',
      location: 'Thode Library, Room B117A',
      description: 'Prayer space for science and engineering students near Thode Library.',
      amenities: ['Prayer mats', 'Quiet environment'],
      hours: '24/7 during exams'
    },
    {
      id: 'mac-mf-4',
      name: 'MDCL Prayer Rooms',
      location: 'Michael DeGroote Centre, Rooms 2242/2246/2249',
      description: 'Multiple prayer rooms in the medical building for health sciences students.',
      amenities: ['Prayer mats', 'Ablution nearby'],
      hours: 'Building hours (varies)'
    },
    {
      id: 'mac-mf-5',
      name: "McMaster Children's Hospital Chapel",
      location: "McMaster Children's Hospital, 2nd Floor",
      description: 'Interfaith chapel space available 24/7 for prayer and quiet reflection.',
      amenities: ['Pews', 'Quiet atmosphere', 'Accessible'],
      hours: '24/7'
    }
  ]
};

// --- NEW UNIVERSITIES ---

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
    }
  ],
  resources: [
    {
      name: "Student Experience",
      contact: "studentexperience@uwo.ca",
      description: "Support for leadership, careers, and wellness. Located in UCC."
    }
  ],
  faq: [
    {
      question: "Where can I get the best bagel?",
      answer: "The Spoke in the UCC. Get a BLT bagel!"
    }
  ],
  events: [
    {
      id: 'uwo1',
      title: 'Winter Orientation Week Events',
      date: 'Jan 05',
      time: '10:00 AM - 5:00 PM',
      location: 'UCC Atrium',
      description: 'Activities for new and returning students to start the term.',
      category: 'Social'
    },
    {
      id: 'uwo2',
      title: 'Study Skills Seminar',
      date: 'Jan 09',
      time: '4:00 PM - 5:30 PM',
      location: 'Weldon Library Room 2E',
      description: 'Master effective note-taking and exam prep strategies.',
      category: 'Academic'
    },
    {
      id: 'uwo3',
      title: 'Thursday Night at The Spoke',
      date: 'Jan 16',
      time: '10:00 PM - 2:00 AM',
      location: 'The Spoke (UCC)',
      description: 'Weekly student pub night. Great bagels and vibes!',
      category: 'Social'
    },
    {
      id: 'uwo4',
      title: 'Career Services: Internship Fair',
      date: 'Jan 18',
      time: '11:00 AM - 3:00 PM',
      location: 'WSRC Fieldhouse',
      description: 'Meet employers looking for summer interns.',
      category: 'Career'
    },
    {
      id: 'uwo5',
      title: 'Mindfulness & Meditation',
      date: 'Jan 19',
      time: '6:00 PM - 7:00 PM',
      location: 'WSRC Studio A',
      description: 'Free guided meditation to reduce winter stress.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uwo-mf-1',
      name: 'UCC Multi-Faith Space',
      location: 'UCC Room 38B',
      description: 'Bookable multi-faith space for spiritual gatherings. Max 40 people. Reserve 3+ days in advance.',
      amenities: ['Prayer mats', 'Shoe racks', 'Ablution stations nearby'],
      hours: 'UCC hours (reservations required)'
    },
    {
      id: 'uwo-mf-2',
      name: 'Middlesex College Prayer Room',
      location: 'Middlesex College, Room 15A',
      description: 'Drop-in multi-faith space. Access code: 1234*',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-3',
      name: 'Thames Hall Prayer Room',
      location: 'Thames Hall, Room 3186',
      description: 'Drop-in prayer space near business buildings. Access code: 3636*',
      amenities: ['Prayer mats', 'Dividers'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-4',
      name: 'Health Sciences Building Prayer Room',
      location: 'Health Science Building, Room 409',
      description: 'Unlocked prayer room for health sciences students.',
      amenities: ['Prayer mats', 'Quiet environment'],
      hours: 'Building hours'
    },
    {
      id: 'uwo-mf-5',
      name: "King's College Reflection Room",
      location: "King's College, Room 219",
      description: 'Peaceful reflection space at King\'s University College.',
      amenities: ['Quiet zone', 'Natural light'],
      hours: 'Contact conferenceservices@kings.uwo.ca'
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
      description: "Main gym on campus. Lots of windows.",
      features: ["Pool", "Cardio Zones", "Studios"],
      coordinates: [44.2310, -76.4960]
    }
  ],
  resources: [
    {
      name: "Student Wellness Services",
      contact: "613-533-2506",
      description: "Mitchell Hall. Medical and counselling appointments."
    }
  ],
  faq: [
    {
      question: "What is a Tam?",
      answer: "A traditional Scottish bonnet worn by Queen's students. The pom-pom color represents your faculty."
    }
  ],
  events: [
    {
      id: 'queens1',
      title: 'Winter Clubs Fair',
      date: 'Jan 08',
      time: '11:00 AM - 3:00 PM',
      location: 'ARC Main Gym',
      description: 'Explore student clubs and find your community.',
      category: 'Social'
    },
    {
      id: 'queens2',
      title: 'Common Ground Coffee House',
      date: 'Jan 10',
      time: '7:00 PM - 9:00 PM',
      location: 'CoGro (Mitchell Hall)',
      description: 'Live acoustic music and great coffee to start the term.',
      category: 'Social'
    },
    {
      id: 'queens3',
      title: 'Writing Centre Workshop',
      date: 'Jan 13',
      time: '3:00 PM - 4:30 PM',
      location: 'Stauffer Library',
      description: 'Improve your academic writing skills.',
      category: 'Academic'
    },
    {
      id: 'queens4',
      title: 'Career Services: Resume Workshop',
      date: 'Jan 16',
      time: '5:00 PM - 6:30 PM',
      location: 'Gordon Hall',
      description: 'Build a strong resume for co-op and summer positions.',
      category: 'Career'
    },
    {
      id: 'queens5',
      title: 'Wellness Wednesday: Yoga',
      date: 'Jan 15',
      time: '12:00 PM - 1:00 PM',
      location: 'ARC Studio',
      description: 'Free yoga class for all skill levels.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'queens-mf-1',
      name: 'Interfaith Room',
      location: 'Mitchell Hall, Room 210',
      description: 'Main multi-faith space managed by Faith and Spiritual Life office. Open for prayer, meditation, and reflection.',
      amenities: ['Prayer rugs', 'Meditation cushions', 'Quiet zone'],
      hours: 'Building hours (bookable through Chaplain\'s Office)'
    },
    {
      id: 'queens-mf-2',
      name: 'Kolias Family Prayer & Meditation Room',
      location: 'Goodes Hall, Room LL109',
      description: 'Prayer and meditation room in the business school building.',
      amenities: ['Prayer mats', 'Quiet environment'],
      hours: 'Business hours'
    },
    {
      id: 'queens-mf-3',
      name: 'Stauffer Library Prayer Room',
      location: 'Stauffer Library, 2nd Floor',
      description: 'Prayer and meditation room in the main library.',
      amenities: ['Prayer mats', 'Quiet zone'],
      hours: 'Library hours'
    },
    {
      id: 'queens-mf-4',
      name: 'School of Medicine Prayer Room',
      location: 'School of Medicine, Room LL011',
      description: 'Prayer and meditation space for health sciences students.',
      amenities: ['Prayer mats', 'Quiet environment'],
      hours: '7:30 AM - 5:30 PM'
    },
    {
      id: 'queens-mf-5',
      name: 'Morgan Memorial Chapel',
      location: 'Theological Hall, 2nd Floor',
      description: 'Historic chapel space for quiet contemplation. Bookable for ceremonies through the Chaplain\'s Office.',
      amenities: ['Pews', 'Organ', 'Historic architecture'],
      hours: 'Building hours'
    }
  ]
};

export const DATA_TMU: CampusData = {
  locations: [
    {
      name: "Student Learning Centre (SLC)",
      type: "Study/Student Centre",
      description: "Iconic modern glass building on Yonge St.",
      features: ["Amphitheatre", "The Beach (Floor 6)", "Study Rooms"],
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
    }
  ],
  resources: [
    {
      name: "ServiceHub",
      contact: "ask@torontomu.ca",
      description: "POD 150. One-stop shop for registrar, fees, and enrollment."
    }
  ],
  faq: [
    {
      question: "Where is the library?",
      answer: "The main library building is connected to the SLC. You can cross the bridge from SLC Floor 2."
    }
  ],
  events: [
    {
      id: 'tmu1',
      title: 'Winter Welcome Week Kickoff',
      date: 'Jan 06',
      time: '12:00 PM - 4:00 PM',
      location: 'Kerr Hall Quad',
      description: 'Free food, music, and activities to start the semester.',
      category: 'Social'
    },
    {
      id: 'tmu2',
      title: 'Study Smart Workshop',
      date: 'Jan 09',
      time: '2:00 PM - 3:30 PM',
      location: 'SLC Beach (6th Floor)',
      description: 'Learn effective study habits for the new term.',
      category: 'Academic'
    },
    {
      id: 'tmu3',
      title: 'Downtown Toronto Career Fair',
      date: 'Jan 14',
      time: '10:00 AM - 3:00 PM',
      location: 'MAC Arena',
      description: 'Meet top employers from the Toronto area.',
      category: 'Career'
    },
    {
      id: 'tmu4',
      title: 'Creative Writing Workshop',
      date: 'Jan 15',
      time: '5:00 PM - 6:30 PM',
      location: 'SLC Room 302',
      description: 'Develop your creative writing skills with peer feedback.',
      category: 'Academic'
    },
    {
      id: 'tmu5',
      title: 'Wellness Drop-In: Mindfulness',
      date: 'Jan 17',
      time: '12:00 PM - 1:00 PM',
      location: 'SLC Reflection Room',
      description: 'Practice mindfulness techniques to manage stress.',
      category: 'Wellness'
    },
    {
      id: 'tmu6',
      title: 'Friday Night Concert Series',
      date: 'Jan 17',
      time: '7:00 PM - 10:00 PM',
      location: 'Kerr Hall Quad',
      description: 'Live performances from student bands and local artists.',
      category: 'Social'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'tmu-mf-1',
      name: 'SCC Multi-Faith Room',
      location: 'Oakham House, Room OAK-319 (55 Gould St)',
      description: 'Main multi-faith space for prayer, worship, meditation, and spiritual activities. Drop-in basis for all faiths.',
      amenities: ['Prayer mats', 'Dividers', 'Ablution facilities nearby'],
      hours: 'Posted on door'
    },
    {
      id: 'tmu-mf-2',
      name: 'TRS EDI Well-being Space',
      location: 'Ted Rogers School, TRS 1-045 (7th Floor, 55 Dundas St W)',
      description: 'Well-being space for prayer, meditation, reflection, or quiet time. Open to all TMU community members.',
      amenities: ['Prayer mats', 'Quiet environment', 'Accessible'],
      hours: 'Building hours'
    },
    {
      id: 'tmu-mf-3',
      name: 'SLC Reflection Room',
      location: 'Student Learning Centre, 4th Floor',
      description: 'Quiet space for individual silent prayer or meditation with natural light.',
      amenities: ['Cushions', 'Natural light', 'Quiet zone'],
      hours: '6:00 AM - 1:00 AM'
    },
    {
      id: 'tmu-mf-4',
      name: 'Kerr Hall Quiet Space',
      location: 'Kerr Hall, Lower Level',
      description: 'Informal quiet space near the quad for brief reflection.',
      amenities: ['Seating', 'Accessible'],
      hours: 'Building hours'
    },
    {
      id: 'tmu-mf-5',
      name: 'CUI Meeting Room (Bookable)',
      location: 'Centre for Urban Innovation',
      description: 'Bookable meeting room that can be used for brief private prayer or meditation when available.',
      amenities: ['Private space', 'Table/chairs'],
      hours: 'By reservation'
    }
  ]
};
