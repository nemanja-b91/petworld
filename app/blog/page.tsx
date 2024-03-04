import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import BlogList from "@/components/BlogList/BlogList";
import {Suspense} from "react";
import {openGraphImage} from "@/app/shared-metadata";

const pageName: String = 'Blog';

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

async function getData() {
    const res = await fetch(
        `${process.env.BACKEND_API}/v1/posts`,
        {
            next: {revalidate: 10},
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function BlogPage() {
    const data = await getData();
    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={pageName}/>
                <Suspense>
                    <BlogList posts={data?.results}/>
                </Suspense>
            </div>
        </div>
    )
}
