import styles from './Footer.module.scss'
import Link from "next/link";
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footerContainer}>
            <div className="container">
                <div className={styles.footerContainer__credentials}>
                    <p className='text-center text-white'>Built by <a className='text-white text-decoration-underline' target='_blank' href="https://devifypro.com/">DevifyPro</a></p>
                    <div className="row">
                        <div className="col-md-6">
                            <p className={`text-white mb-0 ${styles.footerContainer__copyright}`}>Copyright &copy; {currentYear}. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className={`d-flex ${styles.footerContainer__links}`}>
                                <li><Link href="/polisa-privatnosti">Polisa privatnosti</Link></li>
                                <li className='ms-2'><Link href="/uslovi-koriscenja">Uslovi korišćenja</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}