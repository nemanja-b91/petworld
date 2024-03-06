import Link from 'next/link'
import styles from "@/app/page.module.scss";

export default async function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={`${styles.notFound__wrapper} text-center text-white`}>
                <h1>Greška</h1>
                <p>Izvinjavamo se, ali stranica koju tražite ne postoji.</p>
                <Link href="/">Povratak na početnu stranu</Link>
            </div>
        </div>
    )
}