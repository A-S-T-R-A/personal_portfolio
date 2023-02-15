import React from "react"
import styles from "./SocialsIcon.module.css"
import { socialsData } from "../../common/data"

export default function SocialsIcon() {
    return (
        <span className={styles.socials}>
            {socialsData.map(item => {
                return (
                    <a className={styles.item} href={item.link}>
                        {item.icon}
                    </a>
                )
            })}
        </span>
    )
}
