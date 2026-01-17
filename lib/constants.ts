export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "27th ITCN Asia 2026",
    slug: "itcn-asia-2026",
    location: "Lahore Expo Centre, Lahore, Pakistan",
    date: "2026-01-17",
    time: "10:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Indus AI Week 2026",
    slug: "indus-ai-week-2026",
    location: "Islamabad, Pakistan",
    date: "2026-02-09",
    time: "09:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "Techzone Asia Expo 2026",
    slug: "techzone-asia-expo-2026",
    location: "Peshawar, Pakistan",
    date: "2026-02-14",
    time: "10:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "International Conference on Machine Learning & Big Data (ICMLBDVIT)",
    slug: "icmlbdvit-2026",
    location: "Rawalpindi, Pakistan",
    date: "2026-03-31",
    time: "09:00 AM",
  },
  {
    image: "/images/event5.png",
    title: "International Conference on Cybersecurity & IT Systems (ICCAITSE)",
    slug: "iccaitse-2026",
    location: "Rawalpindi, Pakistan",
    date: "2026-05-08",
    time: "10:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "International Conference on Software Development Methodologies (ICSDMIT)",
    slug: "icsdmit-2026",
    location: "Karachi, Pakistan",
    date: "2026-05-18",
    time: "09:00 AM",
  },
  {
    image: "/images/event-full.png",
    title: "UNconference26 — Startup & Investor Summit",
    slug: "unconference26-2026",
    location: "Serena Hotel, Islamabad, Pakistan",
    date: "2026-04-29",
    time: "10:00 AM",
  },
];

export default events;
