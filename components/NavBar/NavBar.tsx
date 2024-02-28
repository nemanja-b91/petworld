'use client'
import styles from './Navbar.module.scss';
import {usePathname} from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";

const links = [
    {
        href: '/',
        title: 'Home',
        class: 'menu-item'
    },
    {
        href: '/about',
        title: 'About',
        class: 'menu-item'
    },
    {
        href: '/blog',
        title: 'Blog',
        class: 'menu-item'
    },
    {
        href: '/contact',
        title: 'Contact',
        class: 'menu-item'
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
                <div className={styles.siteBranding}>
                    <Link href={'/'}>
                        <Image src={'/assets/img/pet-hotel-logo.svg'} alt={''}
                               width={52}
                               height={45}
                        />
                    </Link>
                </div>
                <nav id="site-navigation" className={`${styles.mainNavigation} ${isMobileOpened ? styles.mainNavigation__opened : ''}`}>
                    <div className="primary-menu-wrapper">
                        <div className="primary-menu-container">
                            <ul id="primary-menu" className={styles.navMenu}>
                                {links.map((link, index) => (
                                    <li key={index} className={`${styles.navMenu__item} ${link.class}`}>
                                        <Link className={`${styles.navMenu__link} ${pathname === link.href ? `${styles.navMenu__link_active}` : ''}`} href={link.href}>{link.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                <button
                    onClick={onMobileOpen}
                    className={styles.menuToggle} aria-controls="primary-menu">
                    <i className={`fa ${isMobileOpened ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </header>
    )
}