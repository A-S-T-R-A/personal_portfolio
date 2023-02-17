import React from "react"
import styles from "./SocialIcons.module.css"
import { socialsData } from "../../../Navigation/components/common/data"

export function SocialIcons({ onClick }) {
    return (
        <span onClick={onClick} className={styles.socials}>
            {socialsData.map((item, index) => {
                return (
                    <a key={index} className={styles.item} href={item.link}>
                        {item.icon}
                    </a>
                )
            })}
        </span>
    )
}
