import type { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";

import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";

// Font imports
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lionel Dufour - Développeur Fullstack",
  applicationName: "Lio-Dev",
  description:
    "Développeur web et mobile passionné, spécialisé en JavaScript, React, React Native et Node.js. Découvrez mon portfolio présentant mes projets, mes compétences en développement front-end et back-end.",
  creator: "Lionel Dufour",
  keywords: [
    "Lionel Dufour",
    "Développeur Fullstack",
    "Développeur Web",
    "Développeur Mobile",
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    "Next.js",
    "Portfolio",
    "Projets",
    "Compétences",
    "Contact",
    "Développement Front-end",
    "Développement Back-end",
  ],
  alternates: {
    canonical: "https://lio-dev.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${rubikMonoOne.className} antialiased`}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
