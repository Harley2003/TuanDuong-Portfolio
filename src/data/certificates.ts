export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Foundations of User Experience (UX) Design",
    issuer: "Coursera",
    date: "April 2024",
    image: "/images/placeholder.svg",
    url: "https://www.coursera.org/account/accomplishments/certificate/xxxxxxxxxxxx",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "May 2024",
    image: "/images/placeholder.svg",
    url: "https://www.freecodecamp.org/certification/xxxxxxxxxxxx/responsive-web-design",
  },
];
