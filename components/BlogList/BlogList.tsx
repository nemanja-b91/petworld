"use client";
import styles from './BlogList.module.scss'
import Link from "next/link";
import moment from "moment";

type Post = {
    title: string,
    excerpt: string,
    author: string,
    featured_image: string,
    slug: string,
    created_at: string,
}

function BlogList({posts}: any) {

    const generatePostDate = (date: string) => {
        return moment(date).format('DD MMM, YYYY')
    }

    return (
        <div className={styles.blogWrapper}>
            <h2 className='mb-4'>Most Recent Posts</h2>
            <div className={styles.recentPostWrapper}>
                {posts && posts?.map((post: Post, index: number) => (
                    <div className={index === 0 ? `${styles.recentPostWrapper__single}` : `${styles.recentPostWrapper__short}`}
                    key={index}>
                        {index === 0 && (
                            <Link href={`/blog/${post.slug}/`}>
                                <div style={{backgroundImage: `url("${post.featured_image}")`}} className={`${styles.blogBackground}`}></div>
                            </Link>
                        )}
                        <div>
                            <Link href={`/blog/${post.slug}/`}>
                                {index === 0 ? <h2>{post.title}</h2> : <h4>{post.title}</h4>}
                            </Link>
                            {post.excerpt && (
                                <p>{post.excerpt}</p>
                            )}
                            <span className={styles.dateAuthor}>{generatePostDate(post.created_at)} {post?.author ? ` | ${post.author}` : null}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList