import styles from './SingleCategoryHero.module.scss'
import Image from "next/legacy/image";

export default function SingleCategoryHero({name, photo, city, address}: any) {
    return (
        <div className={`${styles.pageHeader} text-center`}>
            <div className={styles.pageHeader__hero}>
                {photo && (<Image src={photo}
                                  layout='fill'
                                  objectPosition='center'
                                  objectFit='cover'
                                  priority={true}
                                  alt={''}
                />)}
                <div className={`container ${styles.pageHeader__content}`}>
                    <h1>{name}</h1>
                    <p>{city + ', ' + address}</p>
                </div>
            </div>
        </div>
    )
}