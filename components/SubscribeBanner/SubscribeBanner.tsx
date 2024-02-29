import styles from './SubscribeBanner.module.scss';
import Link from "next/link";
export default function SubscribeBanner() {
    return (
        <div className="section-container">
            <div className={`container`}>
                <div className={`card ${styles.subscribeBanner__card}`}>
                    <div className="card-body text-center mb-5">
                        <h3 className="card-title">You think we can help you ?</h3>
                        <p className="card-text">Jump to the filter on top of the screen and try it out !</p>
                        <Link href={'#main-filter'} className='btn btn-outline-light btn-lg rounded-5'>
                            Jump to filter
                        </Link>
                    </div>
                    <img src={'/assets/img/banner.png'} className="card-img-bottom" alt="..."/>
                </div>
            </div>
        </div>
    )
}