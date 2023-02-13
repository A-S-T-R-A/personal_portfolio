import styles from "./ListItemWork.module.css"

export function ListItemWork({ work }) {
    return (
        <>
            <div className={styles.workContainer}>
                <h4 className={styles.workName}>{work.name}</h4>
                <p className={styles.workCompany}>{work.company}</p>
            </div>
            {/* <div className="skills-tooltip">{work.desc}</div> */}
        </>
    )
}
