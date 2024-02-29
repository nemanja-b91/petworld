"use client";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

type Result = {
    id: number,
    title: string,
    photo: string,
    city: string,
    category: string,
    contact : [
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
        if(city && city !== '') {
            url = `${process.env.BACKEND_API}/v1/search?city=${city}`
            fetchDataByFilter(url)
        } else if (category && category !== '') {
            url = `${process.env.BACKEND_API}/v1/search?category=${category}`
            fetchDataByFilter(url)
        } else if ((city && city !=='') && (category && category !== '')) {
            url = `${process.env.BACKEND_API}/v1/search?city=${city}$category=${category}`
            fetchDataByFilter(url)
        }
    }, [])

    return (
        <>
            <h1>You've searched for:</h1>
            {city && <p>City: {city}</p>}
            {category && <p>Category: {category}</p>}
            {data && (
                <ul>
                    {data.map((item) => (
                        <li key={item?.id}>{item?.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}