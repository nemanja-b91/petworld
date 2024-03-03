import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import {openGraphImage} from "@/app/shared-metadata";
import FilterComponent from "@/components/Filter/Filter";
import {Suspense} from "react";
import Image from "next/legacy/image";
const pageName: String = 'Restaurants';

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

export default function RestaurantsPage() {
    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={pageName}/>
                <div className="row">
                    <div className="col-md-4">
                        <Image src={'/assets/img/formatted/pet-in-restaurant.jpg'}
                               width={400}
                               height={400}
                               priority={false}
                               alt={''}
                               loading={'lazy'}
                               style={{borderRadius: '10px'}}
                        />
                    </div>
                    <div className="col-md-8">
                        <article>
                            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                                PageMaker
                                including versions of Lorem Ipsum.</p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                Richard
                                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
                                through
                                the cites of the word in classical literature, discovered the undoubtable source.</p>
                        </article>
                    </div>
                </div>

                <Suspense>
                    <FilterComponent/>
                </Suspense>
            </div>
        </div>
    )
}
