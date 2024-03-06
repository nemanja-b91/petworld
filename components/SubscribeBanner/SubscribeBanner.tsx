import styles from './SubscribeBanner.module.scss';
import Link from "next/link";

export default function SubscribeBanner() {
    return (
        <div className="section-container">
            <div className={`container`}>
                <div className={`card ${styles.subscribeBanner__card}`}>
                    <div className="card-body text-center mb-5">
                        <h3 className="card-title">Mislite da možemo da vam pomognemo u vašoj potrazi?</h3>
                        <p className="card-text">Izaberite grad u filteru i probajte!</p>
                        <Link href={'#main-filter'} className='btn btn-outline-light btn-lg'>
                            Filter
                        </Link>
                    </div>
                    <img loading={'lazy'} src={'/assets/img/banner.png'} className="card-img-bottom" alt="..."/>
                </div>
            </div>
        </div>
    )
}