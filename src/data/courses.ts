
export interface Course {
  id: string;
  code: string;
  name: string;
  credits: number;
  level: "Undergraduate" | "Postgraduate";
  year: number; // 1-4 for undergrad, 1-2 for postgrad
  description: string;
  prerequisites?: string[];
  professors?: string[];
}

export const courses: Course[] = [
  {
    id: "cs101",
    code: "CS 101",
    name: "Introduction to Computer Science",
    credits: 3,
    level: "Undergraduate",
    year: 1,
    description: "Fundamental concepts of computer science, including problem-solving, algorithms, programming basics, and an introduction to data structures.",
    professors: ["Dr. Esinam"]
  },
  {
    id: "cs201",
    code: "CS 201",
    name: "Data Structures and Algorithms",
    credits: 4,
    level: "Undergraduate",
    year: 2,
    description: "Study of fundamental data structures and algorithms, including lists, stacks, queues, trees, graphs, sorting, and searching.",
    prerequisites: ["CSC 101"],
    professors: ["Dr. Wakilu"]
  },
  {
    id: "cs235",
    code: "CS 235",
    name: "Object-Oriented Programming",
    credits: 3,
    level: "Undergraduate",
    year: 2,
    description: "Principles of object-oriented design and programming with emphasis on abstraction, encapsulation, inheritance, and polymorphism.",
    prerequisites: ["CSC 101"],
    professors: ["Dr. Wumpini"]
  },
  {
    id: "cs315",
    code: "CS 315",
    name: "Web Development",
    credits: 3,
    level: "Undergraduate",
    year: 3,
    description: "Client-side and server-side web development, including HTML, CSS, JavaScript, and backend frameworks.",
    prerequisites: ["CSC 235"],
    professors: ["Dr. Clement"]
  },
  {
    id: "cs330",
    code: "CS 330",
    name: "Database Systems",
    credits: 3,
    level: "Undergraduate",
    year: 3,
    description: "Introduction to database design, implementation, and management, including data models, query languages, and transaction processing.",
    prerequisites: ["CSC 201"],
    professors: ["Dr. Alhassan"]
  },
  {
    id: "cs410",
    code: "CS 410",
    name: "Artificial Intelligence",
    credits: 4,
    level: "Undergraduate",
    year: 4,
    description: "Introduction to artificial intelligence concepts, including problem-solving, knowledge representation, learning, and reasoning.",
    prerequisites: ["CSC 201"],
    professors: ["Dr. Mubarak"]
  },
  {
    id: "cs450",
    code: "CS 450",
    name: "Computer Networks",
    credits: 3,
    level: "Undergraduate",
    year: 4,
    description: "Principles of computer communication networks, including network architectures, protocols, and network programming.",
    prerequisites: ["CSC 201"],
    professors: ["Dr. Esinam"]
  },
  {
    id: "cs501",
    code: "CS 501",
    name: "Advanced Algorithms",
    credits: 4,
    level: "Postgraduate",
    year: 1,
    description: "Advanced study of algorithm design and analysis, including complexity theory, approximation algorithms, and randomized algorithms.",
    prerequisites: ["CSC 201"],
    professors: ["Dr. Delvin"]
  },
  {
    id: "cs550",
    code: "CS 550",
    name: "Machine Learning",
    credits: 4,
    level: "Postgraduate",
    year: 1,
    description: "Principles and applications of machine learning, including supervised and unsupervised learning, neural networks, and deep learning.",
    prerequisites: ["CSC 410"],
    professors: ["Dr. Aisha"]
  },
  {
    id: "cs610",
    code: "CS 610",
    name: "Advanced Database Systems",
    credits: 3,
    level: "Postgraduate",
    year: 2,
    description: "Advanced topics in database systems, including distributed databases, NoSQL databases, and database security.",
    prerequisites: ["CS 330"],
    professors: ["Dr. Clement"]
  }
];
