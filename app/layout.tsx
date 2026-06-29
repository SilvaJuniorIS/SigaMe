import type { Metadata } from "next";
import { Inter, Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Siga a Luz | Estudo semanal inspirado no Vem, e Segue-Me",
  description:
    "Mensagens, reflexoes e temas semanais para fortalecer o estudo pessoal e familiar das escrituras.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Siga a Luz",
    description:
      "Um espaco de estudo, reflexao e inspiracao para seguir a luz de Jesus Cristo a cada semana.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} ${merriweather.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
