import React from "react"
import styles from "./SocialsIcon.module.css"
import { socialsData } from "../../common/data"

export default function SocialsIcon({ onClick }) {
    return (
        <span onClick={onClick} className={styles.socials}>
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
