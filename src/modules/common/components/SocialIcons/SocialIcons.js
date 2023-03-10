import React from "react"
import styles from "./SocialIcons.module.css"
import { socialsData } from "./index"
import { classNames } from "modules/common/helpers/classNames"

export function SocialIcons({ onClick, className }) {
    const containerClassName = classNames(styles.socials, {}, [className])
    return (
        <div onClick={onClick} className={containerClassName}>
            {socialsData.map((item, index) => {
                return (
                    <a
                        key={index}
                        className={styles.item}
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {item.icon}
                    </a>
                )
            })}
        </div>
    )
}
