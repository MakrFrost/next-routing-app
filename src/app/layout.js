import Footer from "./components/footer/page";
import Header from "./components/header/page";
import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
