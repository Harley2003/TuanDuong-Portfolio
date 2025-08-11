import { SocialLink } from "@/types";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export const socialLinks: SocialLink[] = [
  { 
    icon: FaGithub, 
    href: "https://github.com/Harley2003", 
    label: "GitHub" 
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yang-yang-b3799a238",
    label: "LinkedIn"
  },
  { 
    icon: Mail, 
    href: "mailto:nguyenkimtuanduong@gmail.com", 
    label: "Email" 
  }
];
