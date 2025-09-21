import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Inter({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Adarsh Sugandhe — Portfolio",
  description:
    "Hi, I'm Adarsh. I build thoughtful, user-friendly websites and apps using React, Next.js, and Node.js. Take a look at my projects and what I’m passionate about.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}]`}>
        {children}
      </body>
    </html>
  );
}
