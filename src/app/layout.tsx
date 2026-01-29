import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { I18nProvider } from "@/lib/i18n";

const headingFont = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MADEG Foundation | Empowering Children and Mothers in Ethiopia",
  description:
    "MADEG Foundation supports children and mothers in Ethiopia with medical care, education, protection, and social support.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
        <I18nProvider>
          <div className="min-h-screen bg-gray-soft">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
