import styles from "@/app/restaurants/restaurants.module.scss";
import SingleCategoryHero from "@/components/SingleCategoryHero/SingleCategoryHero";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faGlobeEurope, faEnvelope} from "@fortawesome/free-solid-svg-icons";

type Param = {
    params: {
        name: string
    }
}

export async function generateMetadata({params}: any) {
    const data = await getSingleData(params.name)
    return {
        metadataBase: new URL('https://petworld-five.vercel.app/'),
        title: `PetWorld | ${data.item.title}`,
        description: 'Sve sto vam je potrebno za vašeg ljubimca',
        openGraph: {
            images: [data.item?.photo],
            title: `PetWorld | ${data.item.title}`,
            description: 'Sve sto vam je potrebno za vašeg ljubimca',
            url: 'petworld.com',
            siteName: 'PetWorld',
            locale: 'en_US',
            type: 'website',
        }
    }
}

async function getSingleData(slug: string) {
    const url = `${process.env.BACKEND_API}/v1/search-single?name=${slug}`
    const res = await fetch(
        url,
        {
            next: {revalidate: 10},
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function SingleCategoryItemPage({params}: Param) {

    const data = await getSingleData(params.name)
    const markup = {__html: data.item.content};

    return (
        <div className={styles.singleCategoryPage}>
            <SingleCategoryHero
                name={data.item.title}
                photo={data.item?.photo ? data.item.photo : null}
                city={data.item.city}
                address={data.item.address}
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <article dangerouslySetInnerHTML={markup}/>
                    </div>
                    <div className="col-md-4">
                        <h3>Additional information:</h3>
                        <ul className={styles.singleCategoryPage__additionalInfo}>
                            {data.item.website && (
                                <li><FontAwesomeIcon icon={faGlobeEurope}/>Website:
                                    <a href={data.item.website}
                                       target='_blank'>
                                        {data.item.website}
                                    </a>
                                </li>)}
                            {data.item.phone && (
                                <li><FontAwesomeIcon icon={faPhone}/>Phone:
                                    <a href={`tel: ${data.item.phone}`}>{data.item.phone}</a>
                                </li>)}
                            {data.item.email && (
                                <li><FontAwesomeIcon icon={faEnvelope}/>Email:
                                    <a href={`mailto: ${data.item.email}`}>{data.item.email}</a>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}