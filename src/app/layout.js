import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "@/styles/globals.css";
import { createClient } from "@/prismicio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.side_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable}`}>
        <nav>Navigation!</nav>
        {children}
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
