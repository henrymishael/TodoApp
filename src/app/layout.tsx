import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo App",
  description:
    "A beautiful, minimalist todo application built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={syne.className}>
        {children}
        <Toaster position='top-right' richColors closeButton />
      </body>
    </html>
  );
}
