import styles from './CategoryList.module.scss'
import Image from "next/legacy/image";
import Link from "next/link";

export default function CategoryList() {
    return (
        <div className={'section-container'}>
            <div className={`${styles.categorySectionWrapper} container`}>
                <div className="row">
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        {/*<Link href={'/'}>*/}
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
                        {/*</Link>*/}
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        {/*<Link href={'/'}>*/}
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
                        {/*</Link>*/}
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        {/*<Link href={'/'}>*/}
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Saloni</span></p>
                            </div>
                        {/*</Link>*/}
                    </div>
                    <div className={`${styles.categorySectionWrapper__item} col-sm-12 col-md-6 col-lg-3`}>
                        {/*<Link href={'/'}>*/}
                            <div className={`${styles.categorySectionWrapper__single}`}>
                                <Image src={'/assets/img/cat.jpg'}
                                       layout='fill'
                                       objectPosition='center'
                                       objectFit='cover'
                                       priority={false}
                                       alt={''}
                                />
                                <p className={styles.categorySectionWrapper__single__title}><span>Veterinari</span></p>
                            </div>
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}