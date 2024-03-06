import styles from "./page.module.scss";
import MainHeroBanner from "@/components/MainHeroBanner/MainHeroBanner";
import CategoryList from "@/components/CategoryList/CategoryList";
import SubscribeBanner from "@/components/SubscribeBanner/SubscribeBanner";
import {openGraphImage} from "@/app/shared-metadata";

export const metadata = {
    metadataBase: new URL('https://petworld-five.vercel.app/'),
    title: 'PetWorld | Sve sto vam je potrebno za vašeg ljubimca',
    description: 'Sve sto vam je potrebno za vašeg ljubimca',
    openGraph: {
        ...openGraphImage,
        title: `PetWorld`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        url: 'petworld.com',
        siteName: 'PetWorld',
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
