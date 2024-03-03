import {MetadataRoute} from "next";
const BASE_URL = 'https://www.petworld.com'

async function getData() {
    const res = await fetch(
        `${process.env.BACKEND_API}/v1/get-all-data-by-type?type=veterinarians`,
        {
            next: {revalidate: 10},
        }
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const restaurants = await getData();

    return restaurants.results.map((restaurant: any) => ({
        url: `${BASE_URL}/blog/${restaurant.slug}`,
        lastModified: restaurant.updated_at,
    }))
}