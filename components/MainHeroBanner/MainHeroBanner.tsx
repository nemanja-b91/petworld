import styles from './MainHeroBanner.module.scss'
import MainHeroBannerForm from "@/components/MainHeroBanner/MainHeroBannerForm";
import Image from "next/legacy/image";

export default function MainHeroBanner() {
    return (
        <div className={styles.mainHeroBanner}>
            <div className="container">
                <div className="row align-items-center">
                    <div id='main-filter' className={`col-md-6 ${styles.mainHeroBanner__wrapper}`}>
                        <div className={styles.mainHeroBanner__content}>
                            <h1>WOW, neki top naslov</h1>
                            <p>Izaberi filter i vidi..</p>
                            <MainHeroBannerForm/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image src={'/assets/img/woof.png'}
                               alt={''}
                               width={660}
                               height={770}
                               priority={true}
                               style={{width: '100%', height: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}