import './globals.scss'
import {Baloo_2} from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/libraries/font-awesome.min.css';
import Footer from "@/components/Footer/Footer";

const baloo = Baloo_2({subsets: ["latin"]});
import {SpeedInsights} from "@vercel/speed-insights/next"
import BootstrapClient from "@/components/BootstrapClient";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import CookieConsent from "@/components/CookieConsent/CookieConsent";
import {headers} from "next/headers";

config.autoAddCss = false;


export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <SpeedInsights/>
        <body className={baloo.className}>
        <NavBar/>
        <main>
            {children}
            <CookieConsent/>
        </main>
        <Footer/>
        <BootstrapClient/>
        </body>
        </html>
    );
}
