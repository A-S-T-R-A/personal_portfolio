import { ProjectItem } from "../ProjectItem/ProjectItem"
import styles from "./FilteredProjects.module.css"

export function FilteredProjects({ data }) {
    return (
        <div className={styles.container}>
            {data.map((proj, index) => {
                return <ProjectItem key={index} data={proj} />
            })}
        </div>
    )
}
