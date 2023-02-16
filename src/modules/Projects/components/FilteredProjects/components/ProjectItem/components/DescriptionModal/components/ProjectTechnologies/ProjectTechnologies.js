import { classNames } from "modules/common/helpers/classNames"
import styles from "./ProjectTechnologies.module.css"

function ProjectTechnologies({ technologies, className }) {
    const containerClassName = classNames(styles.container, {}, [className])

    return (
        <div className={containerClassName}>
            {technologies.map((tech, index) => (
                <p key={index} className={styles.tech}>
                    {tech}
                </p>
            ))}
        </div>
    )
}

export default ProjectTechnologies
