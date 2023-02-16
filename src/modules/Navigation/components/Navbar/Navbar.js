import React from "react"
import styles from "./Navbar.module.css"

import { NavigationList } from "../common"
import { SocialsIcon } from "../common"

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <NavigationList />
            <SocialsIcon />
        </div>
    )
}
