import styles from './BlogList.module.scss'
import Link from "next/link";
import axios from "axios";

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=20fdfd06be214a1995f13993eec28c9c`)
//     console.log('data: ', res)
//     // Pass data to the page via props
//     return { props: { res } }
// }

// @ts-ignore
export default async function BlogList() {
    const posts = [];
    try {
        const response = await axios.request({
            method: "get",
            url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=20fdfd06be214a1995f13993eec28c9c&pageSize=5&category=business",
            headers: {
                Accept: "application/json",
            },
        })

        posts.push(...response.data.articles)
    } catch (error) {
        console.log(error)
    }

    return (
        <div className={styles.blogWrapper}>
            <h2 className='mb-4'>Most Recent Posts</h2>
            <div className={styles.recentPostWrapper}>
                {posts.map((post, index) => (
                    <div className={index === 0 ? `${styles.recentPostWrapper__single}` : `${styles.recentPostWrapper__short}`}
                    key={index}>
                        {index === 0 && (
                            <Link href="/blog/still-to-be-done/">
                                <div className={`${styles.blogBackground}`}></div>
                            </Link>
                        )}
                        <div>
                            <Link href="/blog/still-to-be-done/">
                                {index === 0 ? <h2>{post.title}</h2> : <h4>{post.title}</h4>}
                            </Link>
                            <p>{post.description}</p>
                            <span className={styles.dateAuthor}>February 27, 2024 {post?.author ? ` | ${post.author}` : null}</span>
                        </div>
                    </div>
                ))}
            </div>
            {/*<div className={styles.recentPostWrapper}>*/}
                {/*<div className={styles.recentPostWrapper__single}>*/}
                {/*    <Link href="/blog/underemployed-college-graduates/">*/}
                {/*        <div className={`${styles.blogBackground}`}></div>*/}
                {/*    </Link>*/}
                {/*    <div>*/}
                {/*        <Link href="/blog/underemployed-college-graduates/">*/}
                {/*            <h2>Pet-Friendly Hotel Etiquette: How to Stay in Hotels with Animals</h2>*/}
                {/*        </Link>*/}
                {/*        <p>Whether you are hitting the road with your teacup poodle, a tomcat, or a terrier, there’s some special considerations to find the best lodging for you and your pet.</p>*/}
                {/*        <span className={styles.dateAuthor}>February 27, 2024</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.recentPostWrapper__short}>*/}
                {/*    <div>*/}
                {/*        <Link href="/blog/underemployed-college-graduates/">*/}
                {/*            <h4>Basic Tips for Grooming Dogs at Home</h4>*/}
                {/*        </Link>*/}
                {/*        <p>Professional dog groomers, professional dog handlers, and some veterinary technicians are well trained in grooming, so you can be assured that your beloved pup is in good*/}
                {/*            hands.</p>*/}
                {/*        <span className={styles.dateAuthor}>February 26, 2024</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.recentPostWrapper__short}>*/}
                {/*    <div>*/}
                {/*        <Link href="/blog/best-online-mft-programs/">*/}
                {/*            <h4>Exotic Pet Ownership Checklist</h4>*/}
                {/*        </Link>*/}
                {/*        <p>Exotic pet species, like reptiles and other wild animals in captivity, have the same needs as they would in the wild. That’s why their needs can be challenging for*/}
                {/*            owners.</p>*/}
                {/*        <span className={styles.dateAuthor}>February 26, 2024</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.recentPostWrapper__short}>*/}
                {/*    <div>*/}
                {/*        <Link href="/blog/easiest-medical-schools-to-get-into/">*/}
                {/*            <h4>Simple Dog Walking Tips Every Dog Owner Should Know</h4>*/}
                {/*        </Link>*/}
                {/*        <p>Walking your dog is necessary for his well-being and can slowly blossom into a rewarding experience for you and your pooch and a chance for you to exercise your muscles*/}
                {/*            after a long day at the office.</p>*/}
                {/*        <span className={styles.dateAuthor}>February 26, 2024</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.recentPostWrapper__short}>*/}
                {/*    <div>*/}
                {/*        <Link href="/blog/best-1-year-mba-programs/">*/}
                {/*            <h4>Reptile Care for Beginners: Simple Tips</h4>*/}
                {/*        </Link>*/}
                {/*        <p>Reptiles and amphibians are*/}
                {/*            unique, interesting animals that family and friends will enjoy learning about. Take the time to carefully research which pet type will best suit you or your family.</p>*/}
                {/*        <span className={styles.dateAuthor}>February 26, 2024</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    )
}