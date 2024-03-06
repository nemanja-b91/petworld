import styles from "@/app/blog/Blog.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";
import {openGraphImage} from "@/app/shared-metadata";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookReader, faCalendarAlt, faGlobe, faUserGear} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Image from "next/legacy/image";

export async function generateMetadata({params}: any) {
    const data = await getPostData(params.name)
    return {
        metadataBase: new URL('https://petworld-five.vercel.app/'),
        title: `PetWorld | ${data.results.title}`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        openGraph: {
            ...openGraphImage,
            title: `PetWorld`,
            description: 'Sve sto vam je potrebno za vašeg ljubimca',
            url: '/',
            siteName: 'PetWorld',
            locale: 'en_US',
            type: 'website',
        }
    }
}


async function getPostData(slug: any) {
    const res = await fetch(
        `${process.env.BACKEND_API}/v1/post?slug=${slug}`,
        {
            next: {revalidate: 10},
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function SingleBlogPage({params}: any) {

    const data = await getPostData(params.name)
    const markup = {__html: data.results.content};
    return (
        <div className={styles.main}>
            <div className="container">
                <div className="col-md-10 mx-auto">
                    <SinglePageHero name={data.results.title}/>
                </div>
                <div className={styles.singlePost__featuredImage}>
                    <Image src={data.results.featured_image} alt={data.results.title}
                           width={1920}
                           height={1080}
                           style={{width: '100%', height: '100%'}}
                    />
                </div>
                <div className={styles.singlePost__details}>
                    <span className={'me-5'}>
                        <FontAwesomeIcon color={'#ff6853'} icon={faUserGear} className={'me-2'}/>
                        <strong>Author:</strong> {data.results.author}
                    </span>
                    <span className={'me-5'}>
                        <FontAwesomeIcon color={'#ff6853'} icon={faCalendarAlt} className={'me-2'}/>
                        <strong>Published:</strong> {moment(data.results.created_at).format('DD MMM, YYYY')}
                    </span>
                    <span>
                        <FontAwesomeIcon color={'#ff6853'} icon={faBookReader} className={'me-2'}/>
                        <strong>Reading time: </strong> 2 minutes
                    </span>
                </div>
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-md-2">
                            <div className={styles.singlePost__socialShare}>
                                <span><strong>Share:</strong></span>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon style={{fontSize: '30px'}} icon={faGlobe}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <article dangerouslySetInnerHTML={markup}></article>
                            {/*<h2>Some headline from post</h2>*/}
                            {/*<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.*/}
                            {/*    Richard*/}
                            {/*    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going*/}
                            {/*    through*/}
                            {/*    the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"*/}
                            {/*    (The*/}
                            {/*    Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem*/}
                            {/*    Ipsum,*/}
                            {/*    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>*/}
                            {/*<p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus*/}
                            {/*    PageMaker*/}
                            {/*    including versions of Lorem Ipsum.</p>*/}

                            {/*<h2>Yet, another headline</h2>*/}
                            {/*<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.*/}
                            {/*    Richard*/}
                            {/*    McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going*/}
                            {/*    through*/}
                            {/*    the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"*/}
                            {/*    (The*/}
                            {/*    Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem*/}
                            {/*    Ipsum,*/}
                            {/*    "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>*/}
                            {/*<p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus*/}
                            {/*    PageMaker*/}
                            {/*    including versions of Lorem Ipsum.</p>*/}

                            {/*<h3>Hey, look! Smaller headline</h3>*/}
                            {/*<p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus*/}
                            {/*    PageMaker*/}
                            {/*    including versions of Lorem Ipsum.</p>*/}
                            {/*<blockquote>*/}
                            {/*    WOWWWWWW !!! This is some quoted text.*/}
                            {/*</blockquote>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}