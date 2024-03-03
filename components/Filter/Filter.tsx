"use client";
import {Suspense, useCallback, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
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
    const pathname = usePathname();
    const searchParams = useSearchParams()

    const { replace } = useRouter();
    const category = pathname.replace('/', '');
    const city = searchParams.get('city') ? searchParams.get('city') : ''
    const [data, setData] = useState(Array<Result>)
    const [selectedCity, setSelectedCity]= useState(city ? city : 'All');
    const [isErrorVisible, setIsErrorVisible] = useState(false);

    let url = '';


    const fetchDataByFilter = (url: string) => {
        fetch(
            url,
            {
                next: {revalidate: 10},
            }
        )
            .then(res => res.json())
            .then((response) => {
                setData(response.results)
            })
            .catch((e) => {
                console.log('error')
                setIsErrorVisible(true)
            })
    }

    useEffect(() => {
        setIsErrorVisible(false)
        if (selectedCity && selectedCity !== 'All') {
            url = `${process.env.BACKEND_API}/v1/search?city=${selectedCity}&category=${category}`
            fetchDataByFilter(url)
        } else {
            url = `${process.env.BACKEND_API}/v1/search?category=${category}`
            fetchDataByFilter(url)
        }
    }, [category, selectedCity])

    const noResultsComponent = () => {
        return (
            <>
                <p>No results per selected criteria. Go back to homepage and change filters while we finish developing filtering functionality on search page.</p>
                <p>Sorry for the inconvenience. :)</p>
            </>
        )
    }

    const onChangeSelectedCity = useCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if(value && value !== 'All') {
            setSelectedCity(value)
            params.set('city', value)
            replace(`${pathname}?${params.toString()}`);
        } else {
            setSelectedCity('All')
            params.delete('city')
            replace(`${pathname}`)
        }
    }, [city])

    return (
        <div className={'mt-5'}>
            <div className="row">
                <div className={`col-md-2 ${styles.filterSection}`}>
                    <h5>Filter section</h5>
                    <select name="city" id="city"
                            value={selectedCity}
                            aria-label="City selection"
                            className="form-select form-select-lg"
                            onChange={(e) => onChangeSelectedCity(e.target.value)}>
                        <option disabled={true} defaultValue={'All'}>Please select your city</option>
                        <option value="All">All</option>
                        <option value="Subotica">Subotica</option>
                        <option value="Novi Sad">Novi Sad</option>
                        <option value="Beograd">Beograd</option>
                    </select>
                </div>
                <div className="col-md-10">
                    <h5>Results section</h5>
                    <Suspense>
                        {data && data.length > 0 && <SearchResults results={data}/>}
                        {data.length === 0 && noResultsComponent()}
                    </Suspense>
                    {isErrorVisible && (
                        <p className='text-danger'>Sorry.. Error fetching data.</p>
                    )}
                </div>
            </div>
        </div>
    )
}