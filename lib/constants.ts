
// db/event.model.ts
export interface IEvent {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}


const events: IEvent[] = [
  {
    title: "Intra Debate Championship",
    slug: "intra-debate-championship",
    description: "A thrilling debate competition among students from all departments, focusing on logical reasoning and communication skills.",
    overview: "Teams will engage in multiple rounds debating current socio-political and technological issues.",
    image: "/images/events/event1.jpg",
    venue: "Main Auditorium, DCS Campus",
    location: "DCS Campus, AIUB",
    date: "2024-07-15",
    time: "18:00",
    mode: "Offline",
    audience: "University Students",
    agenda: [
      "Opening ceremony and rules briefing",
      "Preliminary rounds",
      "Final debate and award ceremony",
    ],
    organizer: "Debate Club",
    tags: ["Debate", "Competition", "Public Speaking"],
    createdAt: new Date("2024-06-20"),
    updatedAt: new Date("2024-06-25"),
  },
  {
    title: "Club Alliance Meeting",
    slug: "club-alliance-meeting",
    description: "Monthly meetup of student club leaders to align visions, discuss initiatives, and strengthen inter-club collaboration.",
    overview: "A collaborative forum for discussing future events, budgeting, and leadership development.",
    image: "/images/events/event2.jpg",
    venue: "KFC Conference Room, Wari",
    location: "KFC, Wari, Dhaka",
    date: "2024-08-20",
    time: "19:30",
    mode: "Offline",
    audience: "Club Presidents and Secretaries",
    agenda: [
      "Club performance reports",
      "Planning upcoming inter-club events",
      "Q&A and open discussion",
    ],
    organizer: "Student Council",
    tags: ["Leadership", "Networking", "Collaboration"],
    createdAt: new Date("2024-07-25"),
    updatedAt: new Date("2024-07-29"),
  },
  {
    title: "DCS Seminar on Emerging Tech",
    slug: "dcs-seminar",
    description: "An enlightening seminar exploring the latest developments in AI, ML, and distributed systems.",
    overview: "Industry professionals and researchers share insights on real-world applications of modern computing.",
    image: "/images/events/event3.jpg",
    venue: "DCS Auditorium",
    location: "AIUB DCS Building",
    date: "2024-09-10",
    time: "17:00",
    mode: "Hybrid",
    audience: "Students and Faculty Members",
    agenda: [
      "AI keynote session",
      "Panel discussion on ML ethics",
      "Networking and Q&A",
    ],
    organizer: "DCS Faculty",
    tags: ["AI", "Machine Learning", "Seminar"],
    createdAt: new Date("2024-08-12"),
    updatedAt: new Date("2024-08-14"),
  },
  {
    title: "DCS Hackathon 2024",
    slug: "dcs-hackathon-2024",
    description: "A 24-hour high-energy hackathon where teams build innovative software solutions from scratch.",
    overview: "Participants collaborate to develop real-world applications in just one day, competing for exciting prizes.",
    image: "/images/events/event4.jpg",
    venue: "Computer Lab, DCS",
    location: "AIUB DCS Lab",
    date: "2024-10-05",
    time: "20:00",
    mode: "Offline",
    audience: "Programmers and Innovators",
    agenda: [
      "Team registration and idea pitching",
      "Coding marathon",
      "Project presentations and awards",
    ],
    organizer: "Tech Club",
    tags: ["Hackathon", "Innovation", "Coding"],
    createdAt: new Date("2024-09-01"),
    updatedAt: new Date("2024-09-10"),
  },
  {
    title: "DCS Science Fair",
    slug: "dcs-science-competition",
    description: "A showcase of student-led scientific and engineering projects judged by a panel of experts.",
    overview: "Encouraging scientific curiosity and hands-on experimentation across disciplines.",
    image: "/images/events/event5.jpg",
    venue: "Open Grounds, DCS",
    location: "AIUB DCS Grounds",
    date: "2024-11-12",
    time: "16:30",
    mode: "Offline",
    audience: "STEM Enthusiasts",
    agenda: [
      "Project display and evaluation",
      "Judging round",
      "Prize distribution ceremony",
    ],
    organizer: "Science Club",
    tags: ["Science", "Exhibition", "STEM"],
    createdAt: new Date("2024-10-10"),
    updatedAt: new Date("2024-10-18"),
  },
  {
    title: "Annual Tech Meetup",
    slug: "annual-tech-meetup",
    description: "A grand networking event for tech enthusiasts, startups, and industry professionals to share knowledge and collaborate.",
    overview: "An evening filled with tech talks, workshops, and networking sessions with industry leaders.",
    image: "/images/events/event6.jpg",
    venue: "DCS Hall",
    location: "AIUB Campus",
    date: "2024-12-01",
    time: "18:45",
    mode: "Hybrid",
    audience: "Developers, Designers, Innovators",
    agenda: [
      "Keynote on AI and Cloud",
      "Panel discussion on startup culture",
      "Networking dinner",
    ],
    organizer: "Tech Society",
    tags: ["Technology", "Meetup", "Innovation"],
    createdAt: new Date("2024-11-10"),
    updatedAt: new Date("2024-11-15"),
  },
];

export default events;
