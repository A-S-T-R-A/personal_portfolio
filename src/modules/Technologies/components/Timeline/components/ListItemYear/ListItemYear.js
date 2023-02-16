import { ListItemWork } from "../ListItemWork/ListItemWork"
import styles from "./ListItemYear.module.css"

export function ListItemYear({ experience }) {
    return (
        <div className={styles.container}>
            <div className={styles.yearContainer}>
                <p className={styles.year}>{experience.year}</p>
            </div>
            <div className={styles.works}>
                {experience.works.map((work, index) => (
                    <ListItemWork key={index} work={work} />
                ))}
            </div>
        </div>
    )
}