
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
      title: 'Co-op Resume Critique',
      date: 'Oct 24',
      time: '5:00 PM - 7:00 PM',
      location: 'Tatham Centre (TC)',
      description: 'Get your resume reviewed by senior students and advisors before the main round.',
      category: 'Career'
    },
    {
      id: 'uw2',
      title: 'Bomber Wednesday',
      date: 'Oct 25',
      time: '8:00 PM - 1:00 AM',
      location: 'The Bomber',
      description: 'Weekly social night at the campus pub. 19+ only.',
      category: 'Social'
    },
    {
      id: 'uw3',
      title: 'Midnight Breakfast',
      date: 'Oct 26',
      time: '11:00 PM - 1:00 AM',
      location: 'SLC Great Hall',
      description: 'Free pancakes and bacon to fuel your late night study session.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uw-mf-1',
      name: 'SLC Multi-Faith Prayer Room',
      location: 'SLC 3rd Floor',
      description: 'A quiet, carpeted space available for individual prayer and meditation for students of all faiths.',
      amenities: ['Shoe racks', 'Prayer mats', 'Dividers available'],
      hours: '24/7 (with WatCard access)'
    },
    {
      id: 'uw-mf-2',
      name: 'Wudhu Stations',
      location: 'SLC 3rd Floor Washrooms',
      description: 'Dedicated ablution stations located adjacent to the prayer room.',
      amenities: ['Foot wash stations', 'Seating'],
      hours: '24/7'
    },
    {
      id: 'uw-mf-3',
      name: 'Chaplains Offices',
      location: 'Various Colleges (St. Jerome\'s, Conrad Grebel, etc.)',
      description: 'Offices for university chaplains offering spiritual support and guidance.',
      amenities: ['Counselling', 'Private discussion'],
      hours: '9:00 AM - 5:00 PM'
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
      title: 'Hart House Jazz Night',
      date: 'Friday',
      time: '8:00 PM',
      location: 'Arbor Room',
      description: 'Live jazz performances by students and local artists. Free entry.',
      category: 'Social'
    },
    {
      id: 'uoft2',
      title: 'Exam Destressor with Puppies',
      date: 'Monday',
      time: '12:00 PM - 2:00 PM',
      location: 'Sidney Smith Lobby',
      description: 'Therapy dogs visiting campus to help you relax before midterms.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uoft-mf-1',
      name: 'Multi-Faith Centre',
      location: 'Koffler House (569 Spadina Ave)',
      description: 'The main hub for spiritual practice, including prayer rooms, meditation spaces, and events.',
      amenities: ['Main Activity Hall', 'Quiet Room', 'Ablution facilities', 'Kitchen'],
      hours: '9:00 AM - 10:00 PM'
    },
    {
      id: 'uoft-mf-2',
      name: 'Bahen Centre Prayer Space',
      location: 'Bahen Centre, Room 2270',
      description: 'A quiet reflection room commonly used for daily prayers.',
      amenities: ['Carpeted floor'],
      hours: 'Open during building hours'
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
      title: 'Marauders Football Game',
      date: 'Saturday',
      time: '1:00 PM',
      location: 'Ron Joyce Stadium',
      description: 'Cheer on the team! Students get in free with ID.',
      category: 'Social'
    },
    {
      id: 'mac2',
      title: 'Hiking Cootes Paradise',
      date: 'Sunday',
      time: '10:00 AM',
      location: 'Meet at MUSC',
      description: 'Group hike organized by the Outdoor Club. Bring water.',
      category: 'Wellness'
    },
    {
      id: 'mac3',
      title: 'Chemistry Help Session',
      date: 'Tuesday',
      time: '6:00 PM',
      location: 'Burke Science Building',
      description: 'Drop-in help for CHEM 1A03.',
      category: 'Academic'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'mac-mf-1',
      name: 'Spiritual Care and Learning Centre',
      location: 'MUSC 212',
      description: 'A welcoming space for students of all backgrounds to practice their faith or seek spiritual support.',
      amenities: ['Prayer mats', 'Meditation cushions', 'Ablution room nearby'],
      hours: '9:00 AM - 5:00 PM (Mon-Fri)'
    },
    {
      id: 'mac-mf-2',
      name: 'MDCL Prayer Room',
      location: 'Michael DeGroote Centre for Learning, Room 3018',
      description: 'Quiet space designated for prayer and reflection.',
      amenities: ['Quiet zone'],
      hours: 'Building hours'
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
      title: 'Homecoming Football',
      date: 'Saturday',
      time: '1:00 PM',
      location: 'TD Stadium',
      description: 'Wear purple and cheer on the Mustangs!',
      category: 'Social'
    },
    {
      id: 'uwo2',
      title: 'Late Night Breakfast',
      date: 'Thursday',
      time: '10:00 PM',
      location: 'UCC Atrium',
      description: 'Free breakfast food during exam season.',
      category: 'Wellness'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'uwo-mf-1',
      name: 'Multi-Faith Space',
      location: 'UCC Room 2200',
      description: 'A dedicated space for prayer, meditation, and reflection for the Western community.',
      amenities: ['Prayer mats', 'Shoe racks', 'Ablution stations nearby'],
      hours: '9:00 AM - 9:00 PM'
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
      title: 'Tricolour Open House',
      date: 'Sept 08',
      time: '10:00 AM - 4:00 PM',
      location: 'ARC Main Gym',
      description: 'Explore over 300 student clubs and organizations.',
      category: 'Social'
    },
    {
      id: 'queens2',
      title: 'Common Ground Coffee House Music Night',
      date: 'Wednesday',
      time: '7:00 PM',
      location: 'CoGro (Mitchell Hall)',
      description: 'Live acoustic music and great coffee.',
      category: 'Social'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'queens-mf-1',
      name: 'Interfaith Room',
      location: 'Mitchell Hall, Room 215',
      description: 'A quiet space designed for prayer, meditation, and reflection.',
      amenities: ['Prayer rugs', 'Meditation cushions'],
      hours: '8:00 AM - 8:00 PM'
    },
    {
      id: 'queens-mf-2',
      name: 'Morgan Memorial Chapel',
      location: 'Theological Hall',
      description: 'A historic chapel space available for quiet contemplation and services.',
      amenities: ['Pews', 'Organ'],
      hours: 'By appointment or scheduled service'
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
      title: 'Week of Welcome Concert',
      date: 'Friday',
      time: '6:00 PM',
      location: 'Kerr Hall Quad',
      description: 'Outdoor concert to kick off the semester.',
      category: 'Social'
    },
    {
      id: 'tmu2',
      title: 'Career Fair',
      date: 'Tuesday',
      time: '10:00 AM - 3:00 PM',
      location: 'MAC Arena',
      description: 'Meet top employers from downtown Toronto.',
      category: 'Career'
    }
  ],
  multiFaithSpaces: [
    {
      id: 'tmu-mf-1',
      name: 'Multi-Faith Room',
      location: 'SCC-321 (Student Campus Centre)',
      description: 'Space provided by the RSU for prayer and reflection.',
      amenities: ['Ablution facilities nearby', 'Dividers'],
      hours: '9:00 AM - 6:00 PM'
    },
    {
      id: 'tmu-mf-2',
      name: 'Reflection Room',
      location: 'SLC 4th Floor',
      description: 'A quiet space intended for individual silent prayer or meditation.',
      amenities: ['Cushions', 'Natural Light'],
      hours: 'Same as SLC hours'
    }
  ]
};
