import React from "react"
import styles from "./NavigationLink.module.css"

function NavigationLink({ children, link, onClick }) {
    return (
        <li className={styles.item} onClick={onClick}>
            <a href={link}>{children}</a>
        </li>
    )
}

export default NavigationLink
