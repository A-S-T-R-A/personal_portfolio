import { ProjectItem } from "./components/ProjectItem/ProjectItem"
import styles from "./PaginationProjects.module.css"

export function PaginationProjects({ projects }) {
    return (
        <div className={styles.container}>
            {projects.map((proj, index) => {
                return <ProjectItem key={index} data={proj} />
            })}
        </div>
    )
}
