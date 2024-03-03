import styles from './CategoryList.module.scss'
import Image from "next/legacy/image";
import Link from "next/link";

export default function CategoryList() {
    return (
        <div className={'section-container'}>
            <div className={`${styles.categorySectionWrapper} container`}>
                <div className={'text-center mb-5'}>
                    <h2>Here are some of the categories which you can choose on our website..</h2>
                    <p>And some more text will probably come here..</p>
                </div>
                <div className="row">
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                    <Link href={'/restaurants'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Restaurants</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/shops'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Shops</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/saloons'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Sallons</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/veterinarians'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Veterinarians</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}