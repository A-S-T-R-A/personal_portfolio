import React from "react"
import styles from "./Section.module.css"

import { classNames } from "modules/common/helpers/classNames"

function Section({
    id,
    children,
    isGrid = false,
    isRow = false,
    isNopadding = false,
}) {
    const className = classNames(
        styles.container,
        {
            [styles.grid]: isGrid,
            [styles.row]: isRow,
            [styles.nopadding]: isNopadding,
        },
        []
    )

    return (
        <section id={id} className={className}>
            {children}
        </section>
    )
}

export default Section
