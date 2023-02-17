import { useState } from "react"
import styles from "./ListItemWork.module.css"

export function ListItemWork({ work }) {
    const [showDescription, setShowDescription] = useState(false)

    return (
        <>
            <div
                className={styles.workContainer}
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
            >
                <h4 className={styles.workName}>{work.name}</h4>
                <p className={styles.workCompany}>{work.company}</p>
                {showDescription ? (
                    <div className={styles.description}>{work.description}</div>
                ) : (
                    ""
                )}
            </div>
        </>
    )
}
