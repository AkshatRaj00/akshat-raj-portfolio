import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akshatraj.vercel.app'), // Update with your domain
  title: {
    default: `${personalInfo.name} - AI Engineer & Full-Stack Developer | OnePersonAI`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.tagline}. AI/ML Engineer, Full-Stack Developer, and Founder of OnePersonAI. Specializing in Python, React, TensorFlow, and innovative AI solutions. Building intelligent systems for the future.`,
  keywords: [
    "Akshat Raj",
    "AI Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "OnePersonAI",
    "Python Developer",
    "React Developer",
    "TensorFlow",
    "AI Solutions",
    "Web Development",
    "Chatbot Development",
    "Raipur",
    "Computer Science",
    "Portfolio",
    "Hire Developer",
  ],
  authors: [{ name: personalInfo.name, url: "https://akshatraj.vercel.app" }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshatraj.vercel.app",
    title: `${personalInfo.name} - AI Engineer & Innovator`,
    description: personalInfo.tagline,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - AI Engineer`,
    description: personalInfo.tagline,
    creator: "@Akshat_Raj00",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
  },
  alternates: {
    canonical: "https://akshatraj.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}



