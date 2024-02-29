import Image from "next/image";
import styles from './SearchResults.module.scss';

export default function SearchResults({results}: any) {
    const photo = '/assets/img/blog5.jpg';
    return (
        <div className={styles.resultItems}>
            <div className="row">
                {results.map((item: any) => (
                        <div className="col-sm-4 mb-3" key={item?.id}>
                            <div className={`card ${styles.resultItems__item}`}>
                                <Image
                                    alt={item.title}
                                    src={photo}
                                    width={290}
                                    height={198}
                                    style={{width: '100%'}}
                                />
                                <div className={`card-body ${styles.resultItems__item_content}`}>
                                    <h5 className="card-title">{item?.title}</h5>
                                    <p className="card-text">{item?.excerpt}</p>
                                    <button
                                        onClick={(e) => e.preventDefault()}
                                        className={`btn rounded-5 ${styles.resultItems__item_btn}`}>Read more</button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

    )

}