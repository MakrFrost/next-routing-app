import Footer from "./components/footer/page";
import Header from "./components/header/page";
import "./globals.scss";

import { Quicksand } from "@next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={quicksand.className}>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
