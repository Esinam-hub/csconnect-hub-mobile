
export interface Timetable {
  id: string;
  title: string;
  semester: string;
  academicYear: string;
  level: string;
  fileUrl: string;
  updatedDate: string;
  fileSize: string;
  description?: string;
}

export const timetables: Timetable[] = [
  {
    id: "ug-y1-s1-2025",
    title: "First Year - Semester 1 Timetable",
    semester: "Semester 1",
    academicYear: "2025/2026",
    level: "Undergraduate Year 1",
    fileUrl: "#",
    updatedDate: "2025-04-15",
    fileSize: "245 KB",
    description: "Complete schedule for all first-year Computer Science courses, including lectures, labs, and tutorials."
  },
  {
    id: "ug-y1-s2-2025",
    title: "First Year - Semester 2 Timetable",
    semester: "Semester 2",
    academicYear: "2025/2026",
    level: "Undergraduate Year 1",
    fileUrl: "#",
    updatedDate: "2025-04-15",
    fileSize: "248 KB"
  },
  {
    id: "ug-y2-s1-2025",
    title: "Second Year - Semester 1 Timetable",
    semester: "Semester 1",
    academicYear: "2025/2026",
    level: "Undergraduate Year 2",
    fileUrl: "#",
    updatedDate: "2025-04-16",
    fileSize: "256 KB"
  },
  {
    id: "ug-y2-s2-2025",
    title: "Second Year - Semester 2 Timetable",
    semester: "Semester 2",
    academicYear: "2025/2026",
    level: "Undergraduate Year 2",
    fileUrl: "#",
    updatedDate: "2025-04-16",
    fileSize: "253 KB"
  },
  {
    id: "ug-y3-s1-2025",
    title: "Third Year - Semester 1 Timetable",
    semester: "Semester 1",
    academicYear: "2025/2026",
    level: "Undergraduate Year 3",
    fileUrl: "#",
    updatedDate: "2025-04-17",
    fileSize: "275 KB",
    description: "Includes elective course schedules and lab assignments for all third-year modules."
  },
  {
    id: "ug-y3-s2-2025",
    title: "Third Year - Semester 2 Timetable",
    semester: "Semester 2",
    academicYear: "2025/2026",
    level: "Undergraduate Year 3",
    fileUrl: "#",
    updatedDate: "2025-04-17",
    fileSize: "278 KB"
  },
  {
    id: "ug-y4-s1-2025",
    title: "Fourth Year - Semester 1 Timetable",
    semester: "Semester 1",
    academicYear: "2025/2026",
    level: "Undergraduate Year 4",
    fileUrl: "#",
    updatedDate: "2025-04-18",
    fileSize: "242 KB"
  },
  {
    id: "ug-y4-s2-2025",
    title: "Fourth Year - Semester 2 Timetable",
    semester: "Semester 2",
    academicYear: "2025/2026",
    level: "Undergraduate Year 4",
    fileUrl: "#",
    updatedDate: "2025-04-18",
    fileSize: "240 KB"
  },
  {
    id: "pg-y1-s1-2025",
    title: "Postgraduate - Semester 1 Timetable",
    semester: "Semester 1",
    academicYear: "2025/2026",
    level: "Postgraduate Year 1",
    fileUrl: "#",
    updatedDate: "2025-04-20",
    fileSize: "235 KB",
    description: "Master's program schedule including core and specialization courses."
  },
  {
    id: "pg-y1-s2-2025",
    title: "Postgraduate - Semester 2 Timetable",
    semester: "Semester 2",
    academicYear: "2025/2026",
    level: "Postgraduate Year 1",
    fileUrl: "#",
    updatedDate: "2025-04-20",
    fileSize: "232 KB"
  }
];
