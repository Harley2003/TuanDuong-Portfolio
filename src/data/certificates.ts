import { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Foundations of User Experience (UX) Design",
    issuer: "Coursera",
    date: "April 2024",
    description: "Comprehensive course covering UX design principles, user research, wireframing, and prototyping.",
    image: "/images/placeholder.svg",
    credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/xxxxxxxxxxxx",
    skills: ["UX Design", "User Research", "Wireframing", "Prototyping"],
    type: "certification"
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "May 2024",
    description: "Complete responsive web design curriculum covering HTML, CSS, CSS Grid, Flexbox, and accessibility.",
    image: "/images/placeholder.svg",
    credentialUrl: "https://www.freecodecamp.org/certification/xxxxxxxxxxxx/responsive-web-design",
    skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
    type: "certification"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "FPT University",
    date: "2024",
    description: "Comprehensive course covering modern web development technologies including React, Node.js, and database design.",
    image: "/images/placeholder.svg",
    credentialUrl: "",
    skills: ["React", "Node.js", "JavaScript", "MongoDB", "Express.js"],
    type: "course"
  }
];
