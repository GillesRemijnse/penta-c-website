import "./globals.css";
import { Inter, Source_Serif_4 } from "next/font/google";
import SiteShell from "../components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif-4",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Penta-C | M&A advisory, management consultancy & Legal Counsel",
    template: "%s | Penta-C",
  },
  description:
    "Penta-C is een boutique advieskantoor voor M&A advisory, management consultancy, projectbegeleiding en Legal Counsel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body
        className={`${inter.variable} ${sourceSerif.variable} antialiased`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
