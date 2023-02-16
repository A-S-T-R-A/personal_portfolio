import BlurredDescription from "modules/common/ui/BlurredDescription/BlurredDescription"
import ProjectTags from "../ProjectTags/ProjectTags"
import styles from "./ProjectItemContent.module.css"

export function ProjectItemContent({ data, onClick, filterActive }) {
    const { title, description, tags } = data
    return (
        <div className={styles.container} onClick={onClick}>
            <h4 className={styles.title}>{title}</h4>
            <BlurredDescription className={styles.desc}>
                {description}
            </BlurredDescription>
            <ProjectTags tags={tags} filterActive={filterActive} />
        </div>
    )
}
