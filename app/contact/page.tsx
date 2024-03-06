import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import {openGraphImage} from "@/app/shared-metadata";
const pageName: String = 'Contact';

export const metadata = {
    metadataBase: new URL('https://petworld-five.vercel.app/'),
    title: `PetWorld | ${pageName}`,
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


export default function ContactPage() {

    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={pageName}/>
            </div>
        </div>
    )
}
