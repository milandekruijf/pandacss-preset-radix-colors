import "./globals.css";
import { Inter } from "next/font/google";
import { cx, css } from "@pandacss/out/css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={cx(
          inter.className,
          css({
            bg: "slate.1",
          })
        )}
      >
        {children}
      </body>
    </html>
  );
}
