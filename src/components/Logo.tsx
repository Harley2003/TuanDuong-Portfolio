"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo() {
  const { theme } = useTheme();

  const logoSrc = theme === "light" ? "/LogoDark.png" : "/LogoLight.png";

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={50}
      height={50}
      className="rounded-full object-cover"
    />
  );
}
