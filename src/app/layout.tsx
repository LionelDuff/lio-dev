import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://lio-dev.fr"),
  alternates: {
    canonical: "https://lio-dev.fr",
  },
  openGraph: {
    title: "Lionel Dufour - Développeur Fullstack",
    description:
      "Développeur web et mobile passionné, spécialisé en JavaScript, React, React Native et Node.js. Découvrez mon portfolio présentant mes projets, mes compétences en développement front-end et back-end.",
    url: "https://lio-dev.fr",
    siteName: "Lionel Dufour - Développeur Fullstack",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Image Open Graph de mon portfolio",
      },
    ],
    locale: "fr-FR",
    type: "website",
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
        <Analytics />
      </body>
    </html>
  );
}
