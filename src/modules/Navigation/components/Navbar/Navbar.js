import React from "react"
import styles from "./Navbar.module.css"

import { NavigationList } from "../common"
import { SocialIcons } from "../common"

export function Navbar() {
    return (
        <div className={styles.navBar}>
            <NavigationList />
            <SocialIcons />
        </div>
    )
}
