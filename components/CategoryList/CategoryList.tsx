import styles from './CategoryList.module.scss'
import Image from "next/image";
import Link from "next/link";

export default function CategoryList() {
    return (
        <div className={'section-container'}>
            <div className={`${styles.categorySectionWrapper} container`}>
                <div className="row">
                    <div className={`${styles.categorySectionWrapper__item} col-md-12 col-lg-4`}>
                        <Link href={'/'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Restorani</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-md-12 col-lg-4`}>
                        <Link href={'/'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Prodavnice</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-md-12 col-lg-4`}>
                        <Link href={'/'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Grooming saloni</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}