import {MetadataRoute} from "next";
const BASE_URL = 'https://www.petworld.com'

async function getData() {
    const res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=20fdfd06be214a1995f13993eec28c9c&pageSize=5&category=business',
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
    return posts.articles.map((product: any) => ({
        url: `${BASE_URL}/blog/${product.title}`,
        lastModified: product.publishedAt,
    }))
}