import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bermuda Tennis",
  description: "Bermuda Tennis",
  icons: {
    icon: [{ url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
