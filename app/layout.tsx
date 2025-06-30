import "./styles/globals.css";
import { Inter } from "next/font/google";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SimulationProvider } from "./contexts/SimulationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fenadis Kalanza | My Portfolio",
  description:
    "Explore the innovative projects and skills of Fenadis Kalanza, a passionate and creative developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-zIwgzWfRPvleL6mONblyc60IKiGKzB.png"
        />
      </head>
      <body className={inter.className}>
        <SimulationProvider>
          <ThemeProvider>
            <ParticleBackground />
            <Navbar />
            {children}
          </ThemeProvider>
        </SimulationProvider>
      </body>
    </html>
  );
}
