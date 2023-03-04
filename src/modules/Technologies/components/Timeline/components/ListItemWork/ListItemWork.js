import styles from "./ListItemWork.module.css"

export function ListItemWork({ work, onMouseEnter, onMouseLeave }) {
    return (
        <>
            <div
                className={styles.workContainer}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <h4 className={styles.workName}>{work.name}</h4>
                <p className={styles.workCompany}>{work.company}</p>
            </div>
        </>
    )
}
