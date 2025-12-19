import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pivot Point Central",
  description: "A UT community built to reduce isolation—and rebuild belonging.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-zinc-900`}>
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Pivot Point Central
            </Link>

            <nav className="flex items-center gap-4 text-sm font-medium text-zinc-700">
              <Link className="hover:text-zinc-900" href="/about">About</Link>
              <Link className="hover:text-zinc-900" href="/events">Events</Link>
              <Link className="hover:text-zinc-900" href="/join">Join</Link>
              <Link className="hover:text-zinc-900" href="/links">Links</Link>
              <Link
                href="/join"
                className="ml-2 rounded-xl bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800"
              >
                Join
              </Link>
            </nav>
          </div>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-10 text-sm leading-6 text-zinc-600">
            <div className="font-medium text-zinc-800">Pivot Point Central</div>
            <p className="mt-2">
              Peer-support community, not therapy. Not for emergencies. If you’re in immediate
              danger call 911. If you’re in crisis, call/text 988 (U.S.).
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

