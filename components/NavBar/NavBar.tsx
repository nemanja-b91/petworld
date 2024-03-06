'use client'
import styles from './Navbar.module.scss';
import {usePathname} from 'next/navigation'
import Link from "next/link";
import Image from "next/legacy/image";
import {useEffect, useState} from "react";

const links = [
    {
        href: '/',
        title: 'Početna',
        class: 'nav-item'
    },
    {
        href: '/o-nama',
        title: 'O Nama',
        class: 'nav-item'
    },
    {
        href: '/blog',
        title: 'Blog',
        class: 'nav-item'
    },
    {
        href: '/kontakt',
        title: 'Kontakt',
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
                <nav className="navbar navbar-light navbar-expand-lg bg-light fixed-top">
                    <div className="container">
                        <Link href={'/'} className={styles.siteBranding}>
                            <Image src={'/assets/img/pet-hotel-logo.svg'} alt={''}
                                   width={52}
                                   height={45}/>
                        </Link>
                        <button className="navbar-toggler" onClick={onMobileOpen} type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`offcanvas offcanvas-start${isMobileOpened ? ' show' : ''}`} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <Image src={'/assets/img/pet-hotel-logo.svg'} alt={''}
                                       width={52}
                                       height={45}/>
                                <button type="button" className="btn-close text-reset" onClick={onMobileOpen} aria-label="Close"></button>
                            </div>
                            <div className={`offcanvas-body ${styles.mainNavigation}`}>
                                <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navMenu}`}>
                                    {links.map((link, index) => (
                                        <li key={index} className={`${styles.navMenu__item} ${link.class}`}>
                                            <Link className={`nav-link ${styles.navMenu__link} ${pathname === link.href ? `${styles.navMenu__link_active}` : ''}`} href={link.href}>{link.title}</Link>
                                        </li>
                                    ))}
                                    <li className={`${styles.navMenu__item} nav-item dropdown`}>
                                        <a className={`nav-link dropdown-toggle ${styles.navMenu__link}`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className={`${styles.navMenu__link} ${pathname === '/restorani' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/restorani'}>
                                                    Restorani
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={`${styles.navMenu__link} ${pathname === '/prodavnice' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/prodavnice'}>
                                                    Prodavnice
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={`${styles.navMenu__link} ${pathname === '/saloni' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/saloni'}>
                                                    Saloni
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className={`${styles.navMenu__link} ${pathname === '/veterinari' ? `${styles.navMenu__link_active}` : ''} dropdown-item`} href={'/veterinari'}>
                                                    Veterinari
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}