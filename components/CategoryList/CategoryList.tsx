import styles from './CategoryList.module.scss'
import Image from "next/legacy/image";
import Link from "next/link";

export default function CategoryList() {
    return (
        <div className={'section-container'}>
            <div className={`${styles.categorySectionWrapper} container`}>
                <div className={'text-center mb-5'}>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="row">
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/restorani'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/formatted/pet-in-restaurant.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Restorani</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/prodavnice'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/formatted/pet-store-shop.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Prodavnice</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/saloni'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/formatted/pet-in-grooming-saloon.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Saloni</span></p>
                            </div>
                        </Link>
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        <Link href={'/veterinari'}>
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/formatted/veterinarians.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                       loading={'lazy'}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Veterinari</span></p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}