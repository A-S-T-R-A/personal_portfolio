import React from "react"
import styles from "./Navigation.module.css"

import { Burger, Navbar } from "./components"

function Navigation() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>Portfolio</div>
                <Navbar />
                <Burger />
            </div>
        </div>
    )
}

export default Navigation
