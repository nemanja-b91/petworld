'use client'
import styles from './MainHeroBanner.module.scss';
import {useState} from "react";

export default function MainHeroBannerForm() {
    const [selectedCity, setSelectedCity] = useState('All')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [isCategoryDisabled, setIsCategoryDisabled] = useState(true)

    const onFormSubmit = (e: any) => {
        e.preventDefault()
        let redirectUrl = `/search`
        if(selectedCity !== 'All') {
            redirectUrl += `?city=${selectedCity}`;
        }
        if (selectedCategory !== 'All') {
            redirectUrl += `&category=${selectedCategory}`
        }
        window.location.href = redirectUrl;
    }

    const onCityChange = (e: any) => {
        setSelectedCity(e.target.value)
        if (e.target.value !== 'All') {
            setIsCategoryDisabled(false)
        } else {
            setIsCategoryDisabled(true)
            setSelectedCategory('All')
        }
    }
    return (
        <form onSubmit={onFormSubmit} className={styles.searchForm}>
            <div className="mb-3">
                <select name="city" id="city"
                        value={selectedCity}
                        aria-label="City selection"
                        className="form-select form-select-lg"
                        onChange={(e) => onCityChange(e)}>
                    <option disabled={true} defaultValue={'All'}>Please select your city</option>
                    <option value="All">All</option>
                    <option value="Subotica">Subotica</option>
                    <option value="Novi Sad">Novi Sad</option>
                    <option value="Beograd">Beograd</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="category" id="category"
                        value={selectedCategory}
                        aria-label="Category selection"
                        className="form-select form-select-lg"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        disabled={isCategoryDisabled}>
                    <option disabled={true} defaultValue={'All'}>Please select your category</option>
                    <option value="All">All</option>
                    <option value="Restorani">Restorani</option>
                    <option value="Prodavnice">Prodavnice</option>
                    <option value="Grooming saloni">Grooming saloni</option>
                </select>
            </div>
            <button type="submit" className='btn btn-light btn-lg'>Search</button>
        </form>
    )
}