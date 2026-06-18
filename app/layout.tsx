import { Poiret_One, Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
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
  title: {
    template: "%s - marquingyase",
    default: "Home - marquingyase",
  },
  description:
    "marquingyase is a creative agency that specializes in web design and development.",
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
      </body>
    </html>
  );
}
