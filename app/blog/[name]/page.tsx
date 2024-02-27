import styles from "@/app/page.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";

export async function generateMetadata({params}: any) {
    return {
        metadataBase: new URL('https://acme.com'),
        title: `PetWorld | ${params.name}`,
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