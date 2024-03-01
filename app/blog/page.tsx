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
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=20fdfd06be214a1995f13993eec28c9c&pageSize=5&category=business',
        {
            next: {revalidate: 10},
        }
    )
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function BlogPage() {
    const data = await getData()
    return (
        <div className={styles.main}>
            <div className="container">
                <SinglePageHero name={pageName}/>
                <BlogList posts={data?.articles}/>
            </div>
        </div>
    )
}
