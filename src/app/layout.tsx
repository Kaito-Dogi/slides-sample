import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  description: "nextjs-template",
  title: "nextjs-template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="flex justify-center bg-black">
        <div className="w-full sm:max-w-screen-sm">{children}</div>
      </body>
    </html>
  );
}
