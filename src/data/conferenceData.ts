import { CommitteeMember, Speaker, ImportantDate, NewsItem, ProceedingVolume } from '../types';

export const CONFERENCE_INFO = {
  title: "NCMSAIDSI–2026",
  fullTitle: "National Conference on Mathematical Sciences and Artificial Intelligence with Data Science Integration",
  dates: "11-12 Dec 2026",
  venue: "Panimalar Engineering College, Chennai, Tamil Nadu, India",
  organizers: "Organized by Department of Mathematics, Panimalar Engineering College",
  organizingSecretaries: [
    {
      name: "Asit Saha",
      email: "asitsaha125@gmail.com",
      role: "Organizing Secretary",
      dept: "Department of Mathematics, SMIT"
    },
    {
      name: "Santo Banerjee",
      email: "santoban@gmail.com",
      role: "Organizing Secretary",
      dept: "Department of Physics & Complex Systems, SMIT"
    }
  ],
  importantDeadlines: {
    submissionStarts: "November 03, 2025",
    submissionEnds: "February 15, 2026",
    acceptanceNotification: "March 10, 2026",
    cameraReady: "March 25, 2026",
    registrationDeadline: "April 01, 2026"
  }
};

export const PAST_PROCEEDINGS: ProceedingVolume[] = [
  {
    volume: 1,
    title: "Proceedings of the National Conference on Mathematical Sciences and Artificial Intelligence (NCMSAIDSI–2024), Volume 1",
    subtitle: "Nonlinear Waves and Plasma Dynamics",
    editors: ["Asit Saha", "Santo Banerjee"],
    description: "Focuses on mathematical modeling, theoretical physics, plasma wave propagation, solitions, and advanced analytical methods in complex physical mediums.",
    topics: ["Solitary Waves & Solitons", "Plasma Dynamics & Instabilities", "Mathematical Modeling in Fluids", "Integrable Systems"],
    publisher: "Springer"
  },
  {
    volume: 2,
    title: "Proceedings of the National Conference on Mathematical Sciences and Artificial Intelligence (NCMSAIDSI–2024), Volume 2",
    subtitle: "Complex Systems, Fractals and Nonlinear Flows",
    editors: ["Asit Saha", "Santo Banerjee"],
    description: "Features high-quality chapters on fractal theory, chaotic attractors, complex network flows, and multi-agent dynamics in biological and socioeconomic systems.",
    topics: ["Chaos & Bifurcations", "Fractal Geometry & Applications", "Complex Networks", "Nonlinear Fluid Mechanics"],
    publisher: "Springer"
  },
  {
    volume: 3,
    title: "Proceedings of the National Conference on Mathematical Sciences and Artificial Intelligence (NCMSAIDSI–2024), Volume 3",
    subtitle: "Dynamical Models, Communications and Networks",
    editors: ["Asit Saha", "Santo Banerjee"],
    description: "Covers the application of nonlinear dynamical models in communication technology, cryptography, neural networks, and secure signal transmission systems.",
    topics: ["Secure Communications", "Artificial Neural Networks", "Nonlinear Electronic Circuits", "Cryptography & Chaos Synchronization"],
    publisher: "Springer"
  }
];

export const COMMITTEE_DATA: CommitteeMember[] = [
  {
    role: "Chief Patrons",
    members: [
      { name: "Dr. K. Ramnarayan", designation: "Chancellor", institution: "Sikkim Manipal University" },
      { name: "Vice Admiral (Dr.) Dilip Kumar", designation: "Vice Chancellor", institution: "Sikkim Manipal University" }
    ]
  },
  {
    role: "Patrons",
    members: [
      { name: "Prof. (Dr.) G. L. Sharma", designation: "Director", institution: "Sikkim Manipal Institute of Technology (SMIT)" },
      { name: "Prof. (Dr.) S. S. Roy", designation: "Associate Director", institution: "SMIT" }
    ]
  },
  {
    role: "Advisory Committee",
    members: [
      { name: "Prof. Celso Grebogi", designation: "Professor", institution: "University of Aberdeen, UK" },
      { name: "Prof. Jürgen Kurths", designation: "Senior Investigator", institution: "Potsdam Institute for Climate Impact Research, Germany" },
      { name: "Prof. Syamal K. Dana", designation: "Former Scientist", institution: "CSIR-IICB, Kolkata" },
      { name: "Prof. Rajarshi Roy", designation: "Professor", institution: "University of Maryland, USA" },
      { name: "Prof. Ram Ramaswamy", designation: "Professor Emeritus", institution: "JNU, New Delhi" }
    ]
  },
  {
    role: "Technical Program Committee",
    members: [
      { name: "Dr. Stefano Boccaletti", designation: "Senior Researcher", institution: "CNR-Institute of Complex Systems, Florence, Italy" },
      { name: "Prof. Awadhesh Prasad", designation: "Professor of Physics", institution: "University of Delhi" },
      { name: "Prof. Ranjit Kumar Upadhyay", designation: "Professor of Mathematics", institution: "IIT Dhanbad" },
      { name: "Dr. Pinaki Pal", designation: "Associate Professor", institution: "NIT Durgapur" }
    ]
  },
  {
    role: "Local Organizing Committee",
    members: [
      { name: "Dr. Biswajit Deb", designation: "Head, Dept. of Mathematics", institution: "SMIT" },
      { name: "Dr. Udit Kr. Chakraborty", designation: "Head, Dept. of CSE", institution: "SMIT" },
      { name: "Dr. Archana Sharma", designation: "Assistant Professor", institution: "SMIT" },
      { name: "Dr. Sourav Ghosh", designation: "Assistant Professor", institution: "SMIT" }
    ]
  }
];

export const SPEAKERS_DATA: Speaker[] = [
  {
    name: "Prof. Celso Grebogi",
    designation: "Sixth Century Chair in Nonlinear Science",
    institution: "University of Aberdeen, United Kingdom",
    topic: "Recent Advances in Control of Chaotic Systems & Ecological Networks",
    type: "Keynote",
    imagePlaceholderColor: "bg-indigo-600"
  },
  {
    name: "Dr. Stefano Boccaletti",
    designation: "Senior Scientist & Director of Research",
    institution: "CNR - Institute of Complex Systems, Florence, Italy",
    topic: "Multilayer Networks and Synchronization Dynamics",
    type: "Keynote",
    imagePlaceholderColor: "bg-emerald-600"
  },
  {
    name: "Prof. Syamal K. Dana",
    designation: "Distinguished Professor of Mathematics",
    institution: "Jadavpur University & CSIR-IICB, India",
    topic: "Extreme Events in Coupled Nonlinear Oscillators",
    type: "Plenary",
    imagePlaceholderColor: "bg-amber-600"
  },
  {
    name: "Prof. Awadhesh Prasad",
    designation: "Professor of Physics",
    institution: "University of Delhi, India",
    topic: "Bistability and Control in Nonlinear Dynamical Networks",
    type: "Plenary",
    imagePlaceholderColor: "bg-rose-600"
  },
  {
    name: "Dr. Chittaranjan Hens",
    designation: "Assistant Professor",
    institution: "Indian Institute of Science Education and Research (IISER) Kolkata",
    topic: "Predicting Critical Transitions in Complex Financial Networks",
    type: "Invited",
    imagePlaceholderColor: "bg-sky-600"
  },
  {
    name: "Dr. Dibakar Ghosh",
    designation: "Professor of Mathematics",
    institution: "Indian Statistical Institute (ISI) Kolkata",
    topic: "Relational Dynamics on Time-varying Hypergraphs",
    type: "Invited",
    imagePlaceholderColor: "bg-violet-600"
  }
];

export const IMPORTANT_DATES_DATA: ImportantDate[] = [
  { event: "Paper Submission Website Opens", date: "November 03, 2025", status: "passed" },
  { event: "Full Paper Submission Deadline", date: "February 15, 2026", status: "active", highlight: true },
  { event: "Notification of Acceptance", date: "March 10, 2026", status: "upcoming" },
  { event: "Camera-Ready Submission Deadline", date: "March 25, 2026", status: "upcoming" },
  { event: "Early Bird Registration Deadline", date: "March 20, 2026", status: "upcoming" },
  { event: "Conference Presentation Dates", date: "April 08-10, 2026", status: "upcoming", highlight: true }
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: "news-1",
    title: "Welcome to NCMSAIDSI–2026",
    date: "August 16, 2025",
    content: "We welcome you all to the official portal of the National Conference on Mathematical Sciences and Artificial Intelligence with Data Science Integration (NCMSAIDSI–2026). The conference will be organized in a Hybrid format at Panimalar Engineering College, Chennai, Tamil Nadu, India.",
    category: "General"
  },
  {
    id: "news-2",
    title: "Paper Submission Portal Active",
    date: "November 03, 2025",
    content: "The online paper submission portal through EquinOCS / EasyChair is now fully operational. Please check the 'Paper Submission' page or the call for papers for templates, tracks, and submission guidelines.",
    category: "Submissions"
  },
  {
    id: "news-3",
    title: "Springer Proceedings Approved",
    date: "December 10, 2025",
    content: "We are pleased to announce that, like previous editions, the proceedings of NCMSAIDSI–2026 will be published as peer-reviewed volumes in the Springer Series of 'Springer Proceedings in Physics'.",
    category: "Publications"
  },
  {
    id: "news-4",
    title: "Distinguished Keynote Speakers Confirmed",
    date: "January 05, 2026",
    content: "World-renowned physicists and mathematicians Prof. Celso Grebogi (UK) and Dr. Stefano Boccaletti (Italy) have officially confirmed their Keynote addresses. Check the Speakers tab for more updates.",
    category: "Speakers"
  }
];

export const REGISTRATION_PRICING = {
  national: [
    { category: "UG / PG Student", earlyBird: "₹ 3,500", regular: "₹ 4,500" },
    { category: "PhD Scholar / Research Fellow", earlyBird: "₹ 5,000", regular: "₹ 6,000" },
    { category: "Academic Faculty / Scientist", earlyBird: "₹ 7,500", regular: "₹ 9,000" },
    { category: "Industry Delegates", earlyBird: "₹ 10,000", regular: "₹ 12,000" }
  ],
  international: [
    { category: "Student / Scholar", earlyBird: "$ 150", regular: "$ 200" },
    { category: "Academician / Faculty", earlyBird: "$ 250", regular: "$ 300" },
    { category: "Industry Delegates", earlyBird: "$ 400", regular: "$ 500" }
  ],
  notes: [
    "Registration fee includes admission to all technical sessions, conference kit, tea/coffee breaks, conference lunches, and publication charges for accepted papers.",
    "At least one author must register for the conference for the paper to be included in the proceedings.",
    "For hybrid/online presenters, a discount of 20% applies to the registration fees."
  ]
};

export const CALL_FOR_PAPERS_INFO = {
  description: "NCMSAIDSI–2026 invites original, high-quality, unpublished research papers describing theoretical, mathematical, numerical, or experimental work in all areas of Mathematical Sciences, Artificial Intelligence, and Data Science Integration.",
  tracks: [
    {
      title: "Track 1: Mathematical Foundations & Methods",
      topics: [
        "Analytical & numerical methods for nonlinear differential equations",
        "Integrable systems & soliton theory",
        "Bifurcation theory and path-following algorithms",
        "Fractional-order systems & applications"
      ]
    },
    {
      title: "Track 2: Chaos, Fractals & Complex Networks",
      topics: [
        "Spatio-temporal chaos & control of chaos",
        "Fractal analysis, multifractals, & self-similarity",
        "Complex network topology, synchronization, & multi-agent systems",
        "Extreme events & critical transitions in complex systems"
      ]
    },
    {
      title: "Track 3: Engineering, Physics & Natural Applications",
      topics: [
        "Nonlinear optics & plasma waves",
        "Dynamical mechanics, structural vibrations & acoustics",
        "Nonlinear circuits, memristors, and analog chaotic systems",
        "Climate modeling, seismic dynamics & ecological models"
      ]
    },
    {
      title: "Track 4: Interdisciplinary & Emerging Domains",
      topics: [
        "Mathematical biology, epidemic spread, & neurodynamics",
        "Socio-economic systems & financial engineering",
        "Chaos-based secure communication & cryptography",
        "Machine learning & neural networks for forecasting chaotic systems"
      ]
    }
  ],
  submissionGuidelines: [
    "Papers must be written in English and formatted according to the Springer Proceedings in Physics template (LaTeX or MS Word).",
    "The maximum length of the paper is 8-12 pages, including figures, tables, and references.",
    "All submissions will undergo a double-blind peer-review process by the Technical Program Committee.",
    "Papers should be submitted through the EquinOCS online system."
  ]
};
