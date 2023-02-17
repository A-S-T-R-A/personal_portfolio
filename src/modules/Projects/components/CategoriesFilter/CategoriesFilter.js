import { ProjectsContext } from "modules/Projects/providers/ProjectsProvider"
import { useContext } from "react"
import { ProjectTag } from "../ProjectTag/ProjectTag"
import styles from "./CategoriesFilter.module.css"

export function CategoriesFilter() {
    const { active, setActive, projectCategories } = useContext(ProjectsContext)

    return (
        <div className={styles.container}>
            {projectCategories.map((item, index) => {
                return (
                    <ProjectTag
                        key={index}
                        isActive={active === item}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </ProjectTag>
                )
            })}
        </div>
    )
}
