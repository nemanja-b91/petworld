import styles from "./page.module.scss";
import MainHeroBanner from "@/components/MainHeroBanner/MainHeroBanner";
import CategoryList from "@/components/CategoryList/CategoryList";
import SubscribeBanner from "@/components/SubscribeBanner/SubscribeBanner";

export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: 'PetWorld | Sve sto vam je potrebno za vašeg ljubimca',
    description: 'I am the best web developer ever!',
    openGraph: {
        title: 'Next.js',
        description: 'The React Framework for the Web',
        url: 'https://nextjs.org',
        siteName: 'Next.js',
        images: [
            {
                url: 'https://nextjs.org/og.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'en_US',
        type: 'website',
    }
}
export default function MainContent() {
    return (
        <div className={styles.main}>
            <MainHeroBanner/>
            <CategoryList/>
            <SubscribeBanner/>
        </div>
    );
}
