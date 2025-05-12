
export interface NewsItem {
  id: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  imageUrl?: string;
  category: "announcement" | "event" | "research" | "award" | "general";
  tags?: string[];
}

export const news: NewsItem[] = [
  {
    id: "new-ai-lab-opening",
    title: "New AI Research Lab Opening Ceremony",
    date: "2025-05-10",
    author: "Department of Computer Science",
    summary: "The department is proud to announce the opening of our new state-of-the-art AI Research Laboratory.",
    content: "The Department of Computer Science is thrilled to announce the grand opening of our new Artificial Intelligence Research Laboratory. The facility features cutting-edge hardware including the latest GPU clusters, specialized robotics equipment, and collaborative workspaces designed for interdisciplinary AI research. The lab will support research in machine learning, computer vision, natural language processing, and robotics.\n\nThe opening ceremony will take place on May 15th at 2:00 PM in the Science Building atrium, followed by tours of the new facility. Dr. Thomas Wright, who will direct the lab, will present the inaugural research agenda and opportunities for student involvement.\n\nThis $2.5 million investment represents the university's commitment to advancing AI research and education. The lab will support both undergraduate and graduate research projects and strengthen our department's position as a leader in artificial intelligence education and research.",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "announcement",
    tags: ["AI", "Research", "New Facility"]
  },
  {
    id: "curriculum-update-2025",
    title: "Computer Science Curriculum Update for Fall 2025",
    date: "2025-05-05",
    author: "Dr. Sarah Johnson",
    summary: "Important updates to the undergraduate curriculum will take effect in the Fall 2025 semester.",
    content: "The Department of Computer Science announces significant updates to the undergraduate curriculum beginning in the Fall 2025 semester. These changes are designed to better align our program with industry needs and technological advancements.\n\nKey changes include:\n\n1. A new required course in Data Ethics and AI Responsibility for all CS majors\n2. Expanded machine learning and data science tracks\n3. More flexible prerequisites to allow students to specialize earlier\n4. New capstone options including industry-partnered projects\n\nCurrent students will be grandfathered under the existing requirements but may opt into the new curriculum. Academic advisors will be available to discuss these options during summer orientation sessions.\n\nA detailed curriculum guide will be published next week. Students should schedule appointments with their advisors to discuss how these changes may affect their degree plans.",
    category: "announcement",
    tags: ["Curriculum", "Academic", "Undergraduate"]
  },
  {
    id: "professor-wins-grant",
    title: "Dr. Rodriguez Awarded $1.2M NSF Grant for Mobile Security Research",
    date: "2025-04-28",
    author: "University Communications",
    summary: "Assistant Professor Elena Rodriguez has been awarded a significant NSF grant to study mobile device security.",
    content: "The National Science Foundation has awarded Assistant Professor Elena Rodriguez a $1.2 million grant to study security vulnerabilities in mobile operating systems. The three-year project, titled 'Securing the Mobile Ecosystem: Identifying and Mitigating Cross-Application Threats,' will develop new methodologies for detecting and preventing security breaches in mobile applications.\n\nDr. Rodriguez's research team will include two post-doctoral researchers and four graduate students. The project will also create research opportunities for undergraduate students interested in cybersecurity.\n\n'Mobile devices have become the primary computing platform for most people, yet their security models still have significant gaps,' says Dr. Rodriguez. 'This grant will allow us to develop better protection mechanisms for the billions of mobile users worldwide.'\n\nThe research is expected to result in new security tools that could be incorporated into future versions of major mobile operating systems.",
    imageUrl: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "research",
    tags: ["Research", "Grant", "Mobile Security"]
  },
  {
    id: "hackathon-winners",
    title: "CS Students Win Regional Hackathon",
    date: "2025-04-15",
    author: "Department of Computer Science",
    summary: "A team of four CS students took first place at the State Tech Challenge Hackathon.",
    content: "We're proud to announce that a team of four Computer Science students has won first place at the annual State Tech Challenge Hackathon. The team—consisting of seniors Maya Williams and Jason Chen, and juniors Alex Rodriguez and Priya Patel—developed 'CampusNav,' an accessible navigation app that helps users with disabilities navigate campus buildings.\n\nThe app features indoor mapping with accessibility features, real-time elevator status updates, and route planning that prioritizes accessible entrances and pathways. The judges were particularly impressed with the team's user-centered design process and their integration of crowdsourced accessibility data.\n\nThe team will receive a $10,000 prize and an opportunity to further develop their application with mentoring from industry professionals. 'We're excited to continue working on CampusNav and hope to launch it for all university students by the end of the year,' said team leader Maya Williams.\n\nCongratulations to our outstanding students on this well-deserved recognition!",
    category: "award",
    tags: ["Students", "Hackathon", "Accessibility"]
  },
  {
    id: "summer-internships",
    title: "Summer Internship Opportunities Announced",
    date: "2025-04-02",
    author: "CS Career Office",
    summary: "Several new summer internship opportunities are available exclusively to CS students.",
    content: "The Computer Science Career Office is pleased to announce several exclusive summer internship opportunities for our students. Through our industry partnerships program, the following companies have created positions specifically for State University CS students:\n\n- TechCorp: 5 software engineering internships\n- DataSystems Inc.: 3 data science internships\n- SecureNet: 2 cybersecurity internships\n- MobileFirst: 4 mobile development internships\n\nThese paid internships offer competitive compensation and valuable industry experience. Many past participants have received full-time job offers following their internships.\n\nApplications are open from April 10-30. The Career Office will host a preparation workshop on April 8th at 5:00 PM in Room 301 to help students with their applications and interviews.\n\nPlease log into the CS Career Portal to view complete job descriptions and application instructions.",
    category: "announcement",
    tags: ["Career", "Internships", "Industry"]
  }
];
