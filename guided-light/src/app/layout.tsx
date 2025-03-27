import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Guided Light",
  description: "Explore the beauty and benefits of Tasbeeh (remembrance of Allah) with our interactive counter and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
