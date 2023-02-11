import React from "react"
import styles from "./SectionTitle.module.css"
import { classNames } from "modules/common/helpers/classNames"

function SectionTitle({ children, isMain = false, isCenter = false }) {
    const className = classNames(
        styles.title,
        { [styles.main]: isMain, [styles.center]: isCenter },
        []
    )

    return <h2 className={className}>{children}</h2>
}

export default SectionTitle
