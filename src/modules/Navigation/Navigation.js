import React, { useState, useEffect } from "react"
import styles from "./Navigation.module.css"
import { Burger, Navbar } from "./components"
import Art1us from "assets/images/common/art1us.png"
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
                    <img src={Art1us} className={styles.logo} alt="" />
                </div>
                <Navbar />
                <Burger />
            </div>
        </div>
    )
}
