"use client";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import styles from "@/app/page.module.scss";
import SearchResults from "@/components/SearchResults/SearchResults";
import Link from "next/link";

type Result = {
    id: number,
    title: string,
    photo: string,
    city: string,
    category: string,
    contact: [
        phone: string,
        email: string
    ]
}

export default function FilterComponent() {
    const [data, setData] = useState(Array<Result>)
    const searchParams = useSearchParams()

    let url = '';
    const city = searchParams.get('city') ? searchParams.get('city') : ''
    const category = searchParams.get('category') ? searchParams.get('category') : '';

    const fetchDataByFilter = (url: string) => {
        fetch(
            url,
            {
                next: {revalidate: 10},
            }
        )
            .then(res => res.json())
            .then((response) => {
                console.log('response: ', response)
                setData(response.results)
            })
    }

    useEffect(() => {
        if (city && city !== '') {
            url = `${process.env.BACKEND_API}/v1/search?city=${city}`
            fetchDataByFilter(url)
        } else if (category && category !== '') {
            url = `${process.env.BACKEND_API}/v1/search?category=${category}`
            fetchDataByFilter(url)
        } else if ((city && city !== '') && (category && category !== '')) {
            url = `${process.env.BACKEND_API}/v1/search?city=${city}$category=${category}`
            fetchDataByFilter(url)
        }
    }, [])

    return (
        <div className={styles.main}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Filter section</h4>
                        <p>Preparing..</p>
                    </div>
                    <div className="col-md-9">
                        <h4>Results section</h4>
                        {data && data?.length > 0 ?
                            <SearchResults results={data}/> :
                            <>
                                <p>No results per selected criteria. Go back to homepage and change filters while we finish developing filtering functionality on search page.</p>
                                <p>Sorry for the inconvenience. :)</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    // return (
    //     <>
    //         {url && url !== '' && (
    //             <>
    //                 <h1>You've searched for:</h1>
    //                 {city && <p>City: {city}</p>}
    //                 {category && <p>Category: {category}</p>}
    //                 {data && data?.length > 0 && (
    //                     <ul>
    //                         {data.map((item) => (
    //                             <li key={item?.id}>{item?.title}</li>
    //                         ))}
    //                     </ul>
    //                 )}
    //             </>
    //         )}
    //         {url === '' && (
    //             <h2>Bice djoka..</h2>
    //         )}
    //
    //     </>
    // )
}