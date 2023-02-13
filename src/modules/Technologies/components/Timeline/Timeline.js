import { ListItemYear } from "./components/ListItemYear/ListItemYear"
import { timelineData as experiences } from "../../index"
import styles from "./Timeline.module.css"

export function Timeline() {
    return (
        <div className={styles.container}>
            {experiences.map(experience => (
                <ListItemYear key={experience.id} experience={experience} />
            ))}
        </div>
    )
}
