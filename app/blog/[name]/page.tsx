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
            images: [
                data.results.featured_image
            ],
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

function readingTime(text: string) {
    const averageWPM = 250;
    const adjustedText = text.replace(/(.)\1+/g, '$1');
    const adjustedSentences = adjustedText.replace(/([.!?])\s*\1+/g, '$1');
    const adjustedCharCount = adjustedSentences.length;
    const adjustedWords = adjustedSentences.trim().split(/\s+/);
    const adjustedWordCount = adjustedWords.length;
    const averageWordLength = adjustedCharCount / adjustedWordCount;
    const adjustedTime = (adjustedCharCount / averageWPM) * (averageWordLength / 5);
    return adjustedTime > 1 ? Math.round(adjustedTime) + " min" : "Manje od 1 min";
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
                        <strong>Autor:</strong> {data.results.author}
                    </span>
                    <span className={'me-5'}>
                        <FontAwesomeIcon color={'#ff6853'} icon={faCalendarAlt} className={'me-2'}/>
                        <strong>Objavljeno:</strong> {moment(data.results.created_at).format('DD MMM, YYYY')}
                    </span>
                    <span>
                        <FontAwesomeIcon color={'#ff6853'} icon={faBookReader} className={'me-2'}/>
                        <strong>Vreme čitanja: </strong> {readingTime(data.results.content)}
                    </span>
                </div>
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        {/*<div className="col-md-2">*/}
                        {/*    <div className={styles.singlePost__socialShare}>*/}
                        {/*        <span><strong>Podeli:</strong></span>*/}
                        {/*        <ul>*/}
                        {/*            <li>*/}
                        {/*                <FontAwesomeIcon style={{fontSize: '30px'}} icon={faGlobe}/>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-md-12">
                            <article className={styles.singlePost__content} dangerouslySetInnerHTML={markup}></article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}