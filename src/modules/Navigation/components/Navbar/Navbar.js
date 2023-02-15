import React from "react"
import styles from "./Navbar.module.css"

import { NavigationList } from "../common"
import { SocialsIcon } from "../common/SocialsIcon"

export default function Navbar() {
    return (
        <>
            <NavigationList />
            <div className={styles.icons}>
                <SocialsIcon />
            </div>
        </>
    )
}
