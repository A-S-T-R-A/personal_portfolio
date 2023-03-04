import React from "react"
import styles from "./SectionTitle.module.css"
import { classNames } from "modules/common/helpers/classNames"

function SectionTitle({
    children,
    className = null,
    isMain = false,
    isCenter = true,
    withDescription = false,
}) {
    const titleClassName = classNames(
        styles.title,
        {
            [styles.main]: isMain,
            [styles.center]: isCenter,
            [styles.withDescription]: withDescription,
        },
        [className]
    )

    return <h2 className={titleClassName}>{children}</h2>
}

export default SectionTitle
