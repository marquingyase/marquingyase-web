import { Poiret_One, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const poiret = Poiret_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poiret",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marquingyase.com"),

  title: {
    default: "marquingyase | Web Development, Graphic Design & IT Support",
    template: "%s | marquingyase",
  },

  description:
    "marquingyase provides web development, graphic design, branding, IT support, computer maintenance, website design, and digital solutions for businesses in Ghana and worldwide.",

  keywords: [
    "marquingyase",
    "Web Developer Ghana",
    "Graphic Designer Ghana",
    "IT Support Ghana",
    "Website Design Ghana",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Brand Identity Design",
    "Logo Design",
    "Computer Repair",
    "Technical Support",
    "Software Installation",
    "Web Design Accra",
    "Graphic Design Accra",
    "Digital Solutions Ghana",
  ],

  authors: [
    {
      name: "marquingyase",
      url: "https://marquingyase.com",
    },
  ],

  creator: "marquingyase",
  publisher: "marquingyase",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://marquingyase.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marquingyase.com",
    siteName: "marquingyase",
    title: "marquingyase | Web Development, Graphic Design & IT Support",
    description:
      "Professional web development, graphic design, branding and IT support services for businesses worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "marquingyase",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "marquingyase | Web Development, Graphic Design & IT Support",
    description:
      "Professional web development, graphic design, branding and IT support services.",
    creator: "@marquingyase_",
    images: ["/og-image.png"],
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${poiret.variable} tracking-tight font-sans antialiased`}
      >
        {/* <CustomCursor /> */}
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",

              name: "marquingyase",
              url: "https://marquingyase.com",

              logo: "https://marquingyase.com/logos/long-blue-logo.svg",

              image: "https://marquingyase.com/og-image.png",

              description:
                "Web development, graphic design, branding, IT support and digital solutions.",

              telephone: "+233555155455",

              email: "contact@marquingyase.com",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Accra",
                addressCountry: "GH",
              },

              areaServed: "Worldwide",

              sameAs: [
                "https://instagram.com/marquingyase",
                "https://facebook.com/marquingyase",
                "https://youtube.com/@marquingyase",
                "https://tiktok.com/@marquingyase",
                "https://behance.net/marquingyase",
                "https://pinterest.com/marquingyase",
                "https://twitch.tv/marquingyase",
                "https://x.com/marquingyase_",
                "https://linkedin.com/in/marquingyase",
                "https://github.com/marquingyase",
              ],

              knowsAbout: [
                "Web Development",
                "Graphic Design",
                "IT Support",
                "Next.js",
                "React",
                "Node.js",
                "MongoDB",
                "Brand Design",
                "Website Development",
                "Computer Maintenance",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
