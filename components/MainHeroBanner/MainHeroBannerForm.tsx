'use client'
import styles from './MainHeroBanner.module.scss';
import {useEffect, useState} from "react";

export default function MainHeroBannerForm() {
    const [selectedCity, setSelectedCity] = useState('All')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const onFormSubmit = (e: any) => {
        e.preventDefault()
        const data = {
            'city': selectedCity,
            'category': selectedCategory
        }
        console.log('data: ', data)
    }
    return (
        <form onSubmit={onFormSubmit} className={styles.searchForm}>
            <div className="mb-3">
                <select name="city" id="city"
                        aria-label="City selection"
                        className="form-select form-select-lg"
                        onChange={(e) => setSelectedCity(e.target.value)}>
                    <option disabled={true} defaultValue={'All'}>Please select your city</option>
                    <option value="All">All</option>
                    <option value="Subotica">Subotica</option>
                    <option value="Novi Sad">Novi Sad</option>
                    <option value="Beograd">Beograd</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="category" id="category"
                        aria-label="Category selection"
                        className="form-select form-select-lg"
                        onChange={(e) => setSelectedCategory(e.target.value)}>
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