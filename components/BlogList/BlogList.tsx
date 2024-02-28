"use client";
import styles from './BlogList.module.scss'
import Link from "next/link";
import axios from "axios";
import {useState} from "react";

type Post = {
    title: string,
    description: string,
    author: string,
    urlToImage: string,
}

function BlogList({posts}: any) {
    return (
        <div className={styles.blogWrapper}>
            <h2 className='mb-4'>Most Recent Posts</h2>
            <div className={styles.recentPostWrapper}>
                {posts && posts?.map((post: Post, index: number) => (
                    <div className={index === 0 ? `${styles.recentPostWrapper__single}` : `${styles.recentPostWrapper__short}`}
                    key={index}>
                        {index === 0 && (
                            <Link href="/blog/still-to-be-done/">
                                <div style={{backgroundImage: `url("${post.urlToImage}")`}} className={`${styles.blogBackground}`}></div>
                            </Link>
                        )}
                        <div>
                            <Link href="/blog/still-to-be-done/">
                                {index === 0 ? <h2>{post.title}</h2> : <h4>{post.title}</h4>}
                            </Link>
                            {post.description && (
                                <p>{post.description}</p>
                            )}
                            <span className={styles.dateAuthor}>February 27, 2024 {post?.author ? ` | ${post.author}` : null}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList