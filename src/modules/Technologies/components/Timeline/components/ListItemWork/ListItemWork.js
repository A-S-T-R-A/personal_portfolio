import { useState } from "react"
import styles from "./ListItemWork.module.css"

export function ListItemWork({ work }) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <>
            <div
                className={styles.workContainer}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <h4 className={styles.workName}>{work.name}</h4>
                <p className={styles.workCompany}>{work.company}</p>
                {showTooltip ? (
                    <div className={styles.description}>{work.tooltip}</div>
                ) : (
                    ""
                )}
            </div>
        </>
    )
}
