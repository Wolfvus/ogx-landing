import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Guerrero - Useful content. Real products.",
  description: "No-BS guides, tool picks, and field notes by @OmarGuerreroX.",
  openGraph: {
    title: "Omar Guerrero",
    description: "Useful content. Real products.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@OmarGuerreroX"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
