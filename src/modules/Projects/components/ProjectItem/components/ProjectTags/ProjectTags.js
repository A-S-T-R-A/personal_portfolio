import styles from "./ProjectTags.module.css"

function ProjectTags({ tags }) {
    return (
        <div className={styles.tagsContainer}>
            {tags.slice(0, 3).map(tag => (
                <p className={styles.tag}>{tag}</p>
            ))}
        </div>
    )
}

export default ProjectTags
