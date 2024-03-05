"use client";
import styles from './CookieConsent.module.scss';
import {hasCookie, setCookie} from "cookies-next";
import {useEffect, useState} from "react";

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(true);
    useEffect(() => {
        setShowConsent(hasCookie("localConsent"));
    }, []);

    const acceptCookie = () => {
        setShowConsent(true);
        setCookie("localConsent", "true", {});
    };

    if (showConsent) {
        return null;
    }

    return (
        <div className={styles.cookieConsent}>
            <span className="text-dark text-base mr-16">
                  This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.
                </span>
            <button className="btn text-white" onClick={() => acceptCookie()}>
                Accept
            </button>
        </div>
    );
}