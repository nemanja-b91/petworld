import styles from './SinglePageHero.module.scss'

// @ts-ignore
export default function SinglePageHero({name}: any) {
    return (
        <div className={`${styles.pageHeader} text-center`}>
            <h1>{name}</h1>
        </div>
    )
}