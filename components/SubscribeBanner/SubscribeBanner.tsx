import styles from './SubscribeBanner.module.scss';
export default function SubscribeBanner() {
    return (
        <div className="section-container">
            <div className={`container`}>
                <div className={`card ${styles.subscribeBanner__card}`}>
                    <div className="card-body text-center mb-5">
                        <h3 className="card-title">Card title</h3>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <img src={'/assets/img/banner.png'} className="card-img-bottom" alt="..."/>
                </div>
            </div>
        </div>
    )
}