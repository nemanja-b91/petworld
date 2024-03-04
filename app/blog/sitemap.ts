import {MetadataRoute} from "next";
const BASE_URL = 'https://www.petworld.com'

async function getData() {
    const res = await fetch(
        `${process.env.BACKEND_API}/v1/posts`,
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
    const posts = await getData()
    return posts.results.map((product: any) => ({
        url: `${BASE_URL}/blog/${product.title}`,
        lastModified: product.created_at,
    }))
}