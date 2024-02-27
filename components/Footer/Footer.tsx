import styles from './Footer.module.scss'
export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles.footerContainer}>
            <div className="container">
                <div className={styles.footerContainer__credentials}>
                    <p className='text-center text-white'>Built by <a className='text-white text-decoration-underline' target='_blank' href="https://devifypro.com/">DevifyPro</a></p>
                    <p className='text-center text-white mb-0'>Copyright &copy; {currentYear}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}