import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import Sidebar from "@/components/sidebar";
import { TailwindIndicator } from "@/components/tailwind-indicator";

const inter = Inter({
  variable: "--font-inter",
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
    <html className="dark" style={{ colorScheme: "dark" }} lang="en">
      <body
        className={cn(
          "relative flex min-h-screen w-full bg-background font-sans text-foreground antialiased",
          inter.variable
        )}
      >
        <Providers>
          <Sidebar />
          <main className="flex-1">{children}</main>
        </Providers>
        <TailwindIndicator />
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
