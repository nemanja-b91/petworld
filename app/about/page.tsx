import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import {openGraphImage} from "@/app/shared-metadata";
const pageName: String = 'About';

export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: `PetWorld | ${pageName}`,
    description: 'Sve sto vam je potrebno za vašeg ljubimca',
    openGraph: {
        ...openGraphImage,
        title: `PetWorld | ${pageName}`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        url: 'petworld.com',
        siteName: 'PetWorld',
        locale: 'en_US',
        type: 'website',
    }
}


export default function AboutPage() {

    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={pageName}/>
                <article>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                        McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                        the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                        McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                        the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                        Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                        including versions of Lorem Ipsum.</p>
                </article>
            </div>
        </div>
    )
}
