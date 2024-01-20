import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Machine Coding Questions",
  description:
    "This is a project which contains a collection of quality Frontend Machine Coding Round Questions that are usually asked in frontend interviews.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-zinc-200">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
