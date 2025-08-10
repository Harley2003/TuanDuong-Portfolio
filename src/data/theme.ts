import { ThemeOption } from "@/types";
import { Palette, Sun, Moon } from "lucide-react";

export const themeOptions: ThemeOption[] = [
  {
    name: "Light",
    value: "light",
    icon: Sun
  },
  {
    name: "Dark", 
    value: "dark",
    icon: Moon
  },
  {
    name: "System",
    value: "system",
    icon: Palette
  }
];
