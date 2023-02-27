import React from "react"
import styles from "./Navbar.module.css"

import { NavigationList } from "../common"
import { SocialIcons } from "modules/common/components/SocialIcons"

export function Navbar() {
    return (
        <div className={styles.navBar}>
            <NavigationList />
            <SocialIcons />
        </div>
    )
}
