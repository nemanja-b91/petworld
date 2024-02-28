import styles from "@/components/BlogList/BlogList.module.scss";
import SinglePageHero from "@/components/SinglePageHero/SinglePageHero";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <SinglePageHero name={'Blog'}/>
            <div className='container'>
                <div className={styles.blogWrapper}>
                    <h2 className='mb-4'>Most Recent Posts</h2>
                    <div className={styles.recentPostWrapper}>
                        <p className='text-center'>Loading..</p>
                    </div>
                </div>
            </div>
        </>

    )
}