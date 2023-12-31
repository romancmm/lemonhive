import { Footer, Header } from "@/components/Layouts";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LemonHive App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between bg-midnight">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
