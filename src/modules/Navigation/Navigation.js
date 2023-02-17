import React from "react"
import styles from "./Navigation.module.css"

import { Burger, Navbar } from "./components"

import Art1us from "assets/images/common/art1us.png"

export function Navigation() {
    return (
        <div className={styles.wrapper}>
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