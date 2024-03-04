'use client'
import styles from './Navbar.module.scss';
import {usePathname} from 'next/navigation'
import Link from "next/link";
import Image from "next/legacy/image";
import {useEffect, useState} from "react";

const links = [
    {
        href: '/',
        title: 'Home',
        class: 'nav-item'
    },
    {
        href: '/about',
        title: 'About',
        class: 'nav-item'
    },
    {
        href: '/blog',
        title: 'Blog',
        class: 'nav-item'
    },
    {
        href: '/contact',
        title: 'Contact',
        class: 'nav-item'
    },
]
export default function NavBar() {

    const [isMobileOpened, setIsMobileOpened] = useState(false)
    const pathname = usePathname();

    const onMobileOpen = () => {
        setIsMobileOpened(!isMobileOpened)
    }

    useEffect(() => {
        setIsMobileOpened(false)
    }, [pathname]);


    return (
        <header id={'mainHeader'} className={'siteHeader'}>
            <div className={`${styles.headerContent} container`}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link href={'/'} className={styles.siteBranding}>
                            <Image src={'/assets/img/pet-hotel-logo.svg'} alt={''}
                                   width={52}
                                   height={45}/>
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={onMobileOpen} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isMobileOpened ? 'show' : ''} ${styles.mainNavigation}`} id="mainNavigation">
                            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navMenu}`}>
                                {links.map((link, index) => (
                                    <li key={index} className={`${styles.navMenu__item} ${link.class}`}>
                                        <Link className={`nav-link ${styles.navMenu__link} ${pathname === link.href ? `${styles.navMenu__link_active}` : ''}`} href={link.href}>{link.title}</Link></li>
                                ))}
                                <li className={`nav-link dropdown ${styles.navMenu__link} p-0`}>
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className={`${styles.navMenu__link} ${pathname === '/restaurants' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/restaurants'}>Restaurants</Link></li>
                                        <li><Link className={`${styles.navMenu__link} ${pathname === '/shops' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/shops'}>Shops</Link></li>
                                        <li><Link className={`${styles.navMenu__link} ${pathname === '/saloons' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/saloons'}>Saloons</Link></li>
                                        <li><Link className={`${styles.navMenu__link} ${pathname === '/veterinarians' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/veterinarians'}>Veterinarians</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}