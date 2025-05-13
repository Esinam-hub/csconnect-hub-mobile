
export interface Event {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
  organizer: string;
  type: "seminar" | "workshop" | "deadline" | "social" | "competition" | "other";
  registrationRequired: boolean;
  registrationUrl?: string;
  imageUrl?: string;
}

export const events: Event[] = [
  {
    id: "ai-seminar-2025",
    title: "Frontiers in AI Research Seminar",
    date: "2025-05-20",
    startTime: "14:00",
    endTime: "16:00",
    location: "Science Building, Lecture Hall 101",
    description: "Join us for a special seminar featuring Dr. Amelia Chang, Lead Research Scientist at OpenAI. Dr. Chang will discuss recent breakthroughs in multimodal learning systems and their applications in scientific research. The talk will be followed by a Q&A session and light refreshments.",
    organizer: "AI Research Group",
    type: "seminar",
    registrationRequired: true,
    registrationUrl: "https://cs.stateuniversity.edu/events/ai-seminar-registration",
    imageUrl: ""
  },
  {
    id: "project-showcase-2025",
    title: "Senior Project Showcase",
    date: "2025-05-25",
    startTime: "13:00",
    endTime: "17:00",
    location: "Computer Science Building, Atrium",
    description: "Come see innovative projects created by our graduating seniors! This showcase features projects spanning AI, mobile applications, web services, game development, and more. Industry partners will be in attendance, and there will be awards for the most innovative and impactful projects.",
    organizer: "Department of Computer Science",
    type: "other",
    registrationRequired: false,
    imageUrl: ""
  },
  {
    id: "career-fair-spring-2025",
    title: "CS Spring Career Fair",
    date: "2025-05-30",
    startTime: "10:00",
    endTime: "15:00",
    location: "University Center, Grand Ballroom",
    description: "The Spring Computer Science Career Fair brings together over 50 tech companies recruiting for internships and full-time positions. Bring multiple copies of your resume and dress professionally. Companies attending include Google, Microsoft, Amazon, Meta, and many local and regional tech firms.",
    organizer: "CS Career Services",
    type: "other",
    registrationRequired: true,
    registrationUrl: "https://cs.stateuniversity.edu/career/fair-registration"
  },
  {
    id: "research-proposals-deadline",
    title: "Undergraduate Research Proposals Deadline",
    date: "2025-06-01",
    startTime: "23:59",
    endTime: "23:59",
    location: "Online Submission",
    description: "Last day to submit proposals for the Undergraduate Summer Research Program. Selected students will receive a $5,000 stipend to conduct research with a faculty mentor during the summer term. Proposals should be submitted through the research portal and include a project description, timeline, and faculty endorsement.",
    organizer: "Office of Undergraduate Research",
    type: "deadline",
    registrationRequired: false
  },
  {
    id: "game-dev-workshop",
    title: "Game Development Workshop Series",
    date: "2025-06-05",
    startTime: "18:00",
    endTime: "20:00",
    location: "Computer Lab 204",
    description: "First session of our four-part game development workshop series. This hands-on workshop will introduce you to the Unity game engine and basic concepts in game design. No prior experience necessary! Bring your laptop with Unity installed. This workshop series will continue every Thursday evening in June.",
    organizer: "Game Development Club",
    type: "workshop",
    registrationRequired: true,
    registrationUrl: "https://cs.stateuniversity.edu/clubs/gamedev/workshop-signup"
  },
  {
    id: "hackathon-2025",
    title: "Annual CS Hackathon",
    date: "2025-06-10",
    startTime: "09:00",
    endTime: "21:00",
    location: "Innovation Center",
    description: "Our 48-hour hackathon challenges teams to build innovative solutions addressing this year's theme: 'Technology for Environmental Sustainability.' Teams of up to 4 students will compete for prizes including internship opportunities, tech gadgets, and cash awards. Meals and snacks will be provided throughout the event.",
    organizer: "CS Student Association",
    type: "competition",
    registrationRequired: true,
    registrationUrl: "https://cs.stateuniversity.edu/hackathon",
    imageUrl: ""
  }
];
