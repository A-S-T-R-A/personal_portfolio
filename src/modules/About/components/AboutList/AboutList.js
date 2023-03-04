import styles from "./AboutList.module.css"
import { aboutData } from "../../index"
import { AboutItem } from "../AboutItem/AboutItem"

export function AboutList() {
    return (
        <div className={styles.container}>
            {aboutData.map(aboutItem => (
                <AboutItem
                    key={aboutItem.id}
                    data={aboutItem}
                    className={styles.gridItem}
                />
            ))}
        </div>
    )
}
