import React from "react"
import styles from "./Tooltip.module.css"
import { classNames } from "modules/common/helpers/classNames"

export function Tooltip({ isActive, tooltip, className = "" }) {
    return (
        <div
            className={classNames(
                styles.description,
                {
                    [styles.active]: isActive,
                },
                [className]
            )}
        >
            {tooltip}
        </div>
    )
}
