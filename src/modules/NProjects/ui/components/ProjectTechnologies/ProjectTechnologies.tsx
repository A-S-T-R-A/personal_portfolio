import React from "react"
import { classNames } from "modules/common/helpers/classNames"
import styles from "./ProjectTechnologies.module.css"

interface ProjectTechnologiesProps {
    technologies: any
    className?: string
}

function ProjectTechnologies({
    technologies,
    className,
}: ProjectTechnologiesProps) {
    const containerClassName = classNames(styles.container, {}, [className])

    return (
        <div className={containerClassName}>
            {technologies.map((tech: string, index: number) => (
                <p key={index} className={styles.tech}>
                    {tech}
                </p>
            ))}
        </div>
    )
}

export default ProjectTechnologies
