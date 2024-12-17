import localFont from "next/font/local";
import "./globals.css";

import Header from "@/components/Header";
import Transition from "@/components/Transition";

const quantum = localFont({
  src: "./fonts/Quantum.otf",
  variable: "--font-quantum",
  weight: "100 900",
});

const megrim = localFont({
  src: "./fonts/Megrim-Regular.ttf",
  variable: "--font-megrim",
  weight: "100 900",
});

const bruno = localFont({
  src: "./fonts/BrunoAceSC-Regular.ttf",
  variable: "--font-bruno",
  weight: "100 900",
});

const tech = localFont({
  src: "./fonts/OriginTech.otf",
  variable: "--font-tech",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio App",
  description: "Portfolio de apresentação de projetos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${quantum.variable} ${tech.variable} ${bruno.variable} ${megrim.variable} antialiased`}
      >
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
