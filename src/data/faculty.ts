
export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  office: string;
  imageUrl: string;
  specializations: string[];
  bio: string;
  education: string[];
  researchInterests: string[];
  officeHours: string;
}

export const faculty: FacultyMember[] = [
  {
    id: "sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Department Chair & Professor",
    department: "Computer Science",
    email: "sjohnson@stateuniversity.edu",
    phone: "(555) 123-4567",
    office: "Science Building, Room 305",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Programming Languages", "Compiler Design", "Computer Science Education"],
    bio: "Dr. Johnson has been with the department for over 15 years and specializes in programming language theory and compiler design. She has authored multiple textbooks and received the university's Excellence in Teaching award three times.",
    education: [
      "Ph.D., Computer Science, MIT",
      "M.S., Computer Science, Stanford University",
      "B.S., Computer Science, UCLA"
    ],
    researchInterests: ["Programming language design", "Compiler optimization", "CS pedagogy"],
    officeHours: "Mondays and Wednesdays, 2:00 PM - 4:00 PM"
  },
  {
    id: "james-wilson",
    name: "Dr. James Wilson",
    title: "Associate Professor",
    department: "Computer Science",
    email: "jwilson@stateuniversity.edu",
    phone: "(555) 123-4568",
    office: "Science Building, Room 312",
    imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Algorithms", "Computational Theory", "Graph Theory"],
    bio: "Dr. Wilson's research focuses on algorithm design and analysis, particularly in the areas of graph algorithms and computational complexity. He has published extensively in top-tier conferences and journals.",
    education: [
      "Ph.D., Computer Science, Princeton University",
      "B.S., Mathematics and Computer Science, Harvard University"
    ],
    researchInterests: ["Algorithm optimization", "Complexity theory", "Network algorithms"],
    officeHours: "Tuesdays and Thursdays, 10:00 AM - 12:00 PM"
  },
  {
    id: "elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    title: "Assistant Professor",
    department: "Computer Science",
    email: "erodriguez@stateuniversity.edu",
    phone: "(555) 123-4569",
    office: "Science Building, Room 310",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Software Engineering", "Object-Oriented Design", "Mobile Computing"],
    bio: "Dr. Rodriguez joined the department three years ago after working in industry for a decade. She brings practical experience in software development and specializes in object-oriented design patterns and mobile application development.",
    education: [
      "Ph.D., Computer Science, University of California, Berkeley",
      "M.S., Software Engineering, Carnegie Mellon University",
      "B.S., Computer Science, University of Texas"
    ],
    researchInterests: ["Software design patterns", "Mobile app frameworks", "User experience design"],
    officeHours: "Wednesdays, 1:00 PM - 5:00 PM"
  },
  {
    id: "michael-chen",
    name: "Dr. Michael Chen",
    title: "Associate Professor",
    department: "Computer Science",
    email: "mchen@stateuniversity.edu",
    phone: "(555) 123-4570",
    office: "Science Building, Room 308",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Web Technologies", "Distributed Systems", "Cloud Computing"],
    bio: "Dr. Chen's work bridges web technologies and distributed systems, with a focus on cloud computing architectures. He collaborates extensively with industry partners on research projects.",
    education: [
      "Ph.D., Computer Science, Georgia Tech",
      "M.S., Computer Engineering, University of Michigan",
      "B.S., Computer Science, University of Washington"
    ],
    researchInterests: ["Cloud-native applications", "Microservice architectures", "Edge computing"],
    officeHours: "Mondays and Fridays, 9:00 AM - 11:00 AM"
  },
  {
    id: "lisa-thompson",
    name: "Dr. Lisa Thompson",
    title: "Professor",
    department: "Computer Science",
    email: "lthompson@stateuniversity.edu",
    phone: "(555) 123-4571",
    office: "Science Building, Room 315",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Database Systems", "Data Mining", "Information Retrieval"],
    bio: "With over 20 years in academia, Dr. Thompson is a leader in database research. She has led multiple NSF-funded projects and advises the database research group.",
    education: [
      "Ph.D., Computer Science, Cornell University",
      "B.S., Computer Science and Mathematics, Duke University"
    ],
    researchInterests: ["Query optimization", "NoSQL databases", "Big data analytics"],
    officeHours: "Tuesdays and Thursdays, 2:00 PM - 4:00 PM"
  },
  {
    id: "thomas-wright",
    name: "Dr. Thomas Wright",
    title: "Professor",
    department: "Computer Science",
    email: "twright@stateuniversity.edu",
    phone: "(555) 123-4572",
    office: "Science Building, Room 320",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
    bio: "Dr. Wright directs the AI and Machine Learning Lab, working on projects ranging from NLP to computer vision. His research has been featured in major AI conferences and journals.",
    education: [
      "Ph.D., Computer Science, University of Illinois",
      "M.S., Artificial Intelligence, University of Edinburgh",
      "B.S., Computer Engineering, Purdue University"
    ],
    researchInterests: ["Deep learning", "Reinforcement learning", "Conversational AI"],
    officeHours: "By appointment"
  },
  {
    id: "karen-davis",
    name: "Dr. Karen Davis",
    title: "Associate Professor",
    department: "Computer Science",
    email: "kdavis@stateuniversity.edu",
    phone: "(555) 123-4573",
    office: "Science Building, Room 309",
    imageUrl: "https://images.unsplash.com/photo-1619538189523-51d3e349cd51?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    specializations: ["Computer Networks", "Cybersecurity", "Internet of Things"],
    bio: "Dr. Davis specializes in network security and IoT systems. Before joining academia, she worked at a major tech company's security division and brings practical cybersecurity expertise to her teaching.",
    education: [
      "Ph.D., Computer Science, University of California, San Diego",
      "M.S., Network Security, New York University",
      "B.S., Computer Science, Boston University"
    ],
    researchInterests: ["Network protocols", "IoT security", "Intrusion detection systems"],
    officeHours: "Mondays and Wednesdays, 11:00 AM - 1:00 PM"
  }
];
