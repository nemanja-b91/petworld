import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/libraries/font-awesome.min.css';
import './globals.scss'
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      <main>
          {children}
      </main>
      <Footer/>
      </body>
      </html>
  );
}
