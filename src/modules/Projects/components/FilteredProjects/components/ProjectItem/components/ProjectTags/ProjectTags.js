import { useContext } from "react"
import styles from "./ProjectTags.module.css"
import { ProjectsContext } from "../../../../../../providers/ProjectsProvider"
import { ProjectTag } from "modules/Projects/ui/ProjectTag/ProjectTag"

function ProjectTags({ tags }) {
    const { active, setActive } = useContext(ProjectsContext)

    function clickHandler(e, tag) {
        e.stopPropagation()
        if (tag) {
            setActive(tag)
        }
    }
    return (
        <div className={styles.tagsContainer}>
            {active === "All" ? (
                tags.slice(0, 3).map((tag, index) => (
                    <ProjectTag
                        className={styles.tag}
                        key={index}
                        onClick={e => clickHandler(e, tag)}
                    >
                        {tag.length > 7 ? `${tag.slice(0, 6)}...` : tag}
                    </ProjectTag>
                ))
            ) : (
                <ProjectTag className={styles.tag} onClick={clickHandler}>
                    {active}
                </ProjectTag>
            )}
        </div>
    )
}

export default ProjectTags
