'use client'
import styles from './MainHeroBanner.module.scss';
import {useState} from "react";

export default function MainHeroBannerForm() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedCity, setSelectedCity] = useState('All')
    const [isCityDisabled, setIsCityDisabled] = useState(true)

    const onFormSubmit = (e: any) => {
        e.preventDefault()
        let redirectUrl = `/${selectedCategory}`
        if (selectedCity !== 'All') {
            redirectUrl += `?city=${selectedCity}`
        }
        window.location.href = redirectUrl;
    }

    const onCategoryChange = (e: any) => {
        setSelectedCategory(e.target.value)
        if (e.target.value !== 'All') {
            setIsCityDisabled(false)
        } else {
            setIsCityDisabled(true)
            setSelectedCity('All')
        }
    }
    return (
        <form onSubmit={onFormSubmit} className={styles.searchForm}>
            <div className="mb-3">
                <select name="category" id="category"
                        value={selectedCategory}
                        aria-label="Category selection"
                        className="form-select form-select-lg"
                        onChange={(e) => onCategoryChange(e)}>
                    <option disabled={true} defaultValue={'All'}>Please select your category</option>
                    <option value="All">All</option>
                    <option value="restaurants">Restaurants</option>
                    <option value="shops">Shops</option>
                    <option value="saloons">Saloons</option>
                    <option value="veterinarians">Veterinarians</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="city" id="city"
                        value={selectedCity}
                        aria-label="City selection"
                        className="form-select form-select-lg"
                        onChange={(e) => setSelectedCity(e.target.value)}
                        disabled={isCityDisabled}>
                    <option disabled={true} defaultValue={'All'}>Please select your city</option>
                    <option value="All">All</option>
                    <option value="Subotica">Subotica</option>
                    <option value="Novi Sad">Novi Sad</option>
                    <option value="Beograd">Beograd</option>
                </select>
            </div>
            <button type="submit" disabled={selectedCategory === 'All'} className='btn btn-light btn-lg'>Search</button>
        </form>
    )
}