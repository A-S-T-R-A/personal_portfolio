import BlurredDescription from "modules/common/ui/BlurredDescription/BlurredDescription"
import ProjectTags from "../ProjectTags/ProjectTags"
import styles from "./ProjectItemContent.module.css"

export function ProjectItemContent({ data }) {
    const { title, description, tags } = data
    return (
        <div className={styles.container}>
            <ProjectTags tags={tags} />
            <h4 className={styles.title}>{title}</h4>
            <BlurredDescription className={styles.desc}>
                {description}
            </BlurredDescription>
        </div>
    )
}
