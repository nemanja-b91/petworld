import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/libraries/font-awesome.min.css';
import './globals.scss'
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import BootstrapClient from "@/components/BootstrapClient";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <SpeedInsights/>
      <body className={inter.className}>
      <NavBar/>
      <main>
          {children}
      </main>
      <Footer/>
      <BootstrapClient />
      </body>
      </html>
  );
}
