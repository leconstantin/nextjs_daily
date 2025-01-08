import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "lucide-react";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  title: {
    default: "Next Daily - Sharing things about Next.js",
    template: `%s - Next Daily`,
  },
  description: "",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative flex min-h-screen w-full bg-background font-sans text-foreground antialiased",
          geistSans.variable
        )}
      >
        <Providers>
          <Sidebar />
          <main className="flex-1">{children}</main>
        </Providers>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
