import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import BlogList from "@/components/BlogList/BlogList";
import {Suspense} from "react";
const pageName: String = 'Blog';

export const metadata = {
    metadataBase: new URL('https://acme.com'),
    title: `PetWorld | ${pageName}`,
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
async function getData() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=20fdfd06be214a1995f13993eec28c9c&pageSize=5&category=business')
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
                <Suspense>
                    <BlogList posts={data?.articles}/>
                </Suspense>
            </div>
        </div>
    )
}
