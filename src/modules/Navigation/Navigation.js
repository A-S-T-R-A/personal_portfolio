import React, { useState, useEffect } from "react"
import styles from "./Navigation.module.css"
import { Burger, Navbar } from "./components"
import { Logo } from "assets/images/other"
import { classNames } from "modules/common/helpers/classNames"

export function Navigation({ className }) {
    const [navbarVisible, setNavbarVisible] = useState(false)

    useEffect(() => {
        function scrolled() {
            window.scrollY > 11
                ? setNavbarVisible(true)
                : setNavbarVisible(false)
        }
        window.addEventListener("scroll", scrolled)
        return () => {
            window.removeEventListener("scroll", scrolled)
        }
    }, [])

    const wrapperClassName = classNames(
        styles.wrapper,
        { [styles.isScrolled]: navbarVisible },
        [className]
    )
    return (
        <div className={wrapperClassName}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img src={Logo} className={styles.logo} alt="" />
                </div>
                <Navbar />
                <Burger />
            </div>
        </div>
    )
}
