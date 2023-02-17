import { classNames } from "modules/common/helpers/classNames"
import { ProjectsContext } from "../../../../../../providers/ProjectsProvider"
import { useContext } from "react"
import styles from "./ProjectTags.module.css"

function ProjectTags({ tags }) {
    const { active } = useContext(ProjectsContext)
    return (
        <div className={styles.tagsContainer}>
            {active === "All" ? (
                tags.slice(0, 3).map((tag, index) => (
                    <p className={styles.tag} key={index}>
                        {tag.length > 7 ? `${tag.slice(0, 6)}...` : tag}
                    </p>
                ))
            ) : (
                <p className={classNames(styles.tag, {}, [styles.active])}>
                    {active}
                </p>
            )}
        </div>
    )
}

export default ProjectTags
