import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const PPMon = localFont({
  src: "../../public/font/PPMonumentExtendedVariable/PPMonumentExtended-Variable.woff",
  variable: "--font-PPMon",
});

export const metadata: Metadata = {
  title: "Leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PPMon.variable}`}>{children}</body>
    </html>
  );
}
