import React from "react"
import styles from "./Section.module.css"

import { classNames } from "modules/common/helpers/classNames"

function Section({
    id = "",
    children,
    className = "",
    isGrid = false,
    isRow = false,
    isFullHeight = false,
    isNopadding = false,
}) {
    const wrapperClassName = classNames(styles.wrapper, {
        [styles.fullHeight]: isFullHeight,
    })

    const containerClassName = classNames(
        styles.container,
        {
            [styles.grid]: isGrid,
            [styles.row]: isRow,
            [styles.noPadding]: isNopadding,
        },
        [className]
    )

    return (
        <section id={id} className={wrapperClassName}>
            <div className={containerClassName}>{children}</div>
        </section>
    )
}

export default Section
