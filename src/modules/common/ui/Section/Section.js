import React from "react"
import styles from "./Section.module.css"

import { classNames } from "modules/common/helpers/classNames"

function Section({
    id,
    children,
    className,
    isGrid = false,
    isRow = false,
    isNopadding = false,
}) {
    const sectionClassName = classNames(
        styles.container,
        {
            [styles.grid]: isGrid,
            [styles.row]: isRow,
            [styles.nopadding]: isNopadding,
        },
        [className]
    )

    return (
        <section id={id} className={sectionClassName}>
            {children}
        </section>
    )
}

export default Section
