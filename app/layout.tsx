import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RESTORE™ — Formation en santé sexuelle masculine",
  description: "Reprends le contrôle de ta santé sexuelle. La formation que t'aurais voulu avoir bien plus tôt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
