import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import {openGraphImage} from "@/app/shared-metadata";

export async function generateMetadata({params}: any) {
    return {
        metadataBase: new URL('https://acme.com'),
        title: `PetWorld | ${params.name}`,
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
}

export default function SingleBlogPage({params}: any) {
    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={params.name}/>
            </div>
        </div>
    )
}