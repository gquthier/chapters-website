import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chapters - Build a life you can rewatch",
  description: "Video journal + AI coach. Record 2-minute reflections, get personalized AI coaching, and hit your goals—one tiny win at a time.",
  keywords: ["video journal", "AI coach", "personal growth", "self improvement", "video diary", "goal tracker", "life goals", "reflection", "mindfulness"],
  openGraph: {
    title: "Chapters - Build a life you can rewatch",
    description: "Video journal + AI coach for personal growth",
    url: "https://getchapters.app",
    siteName: "Chapters",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chapters - Build a life you can rewatch",
    description: "Video journal + AI coach for personal growth",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
