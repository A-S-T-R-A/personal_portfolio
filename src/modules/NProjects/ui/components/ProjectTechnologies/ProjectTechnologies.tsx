import React, { useState } from "react"
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
    const [showTooltip, setShowTooltip] = useState(-1)
    console.log(showTooltip)
    return (
        <div className={containerClassName}>
            {technologies.map((tech: any, index: number) => (
                <>
                    <p
                        key={index}
                        className={classNames(styles.tech, {
                            [styles.withTooltip]: tech.tooltip,
                        })}
                        onMouseEnter={() => setShowTooltip(index)}
                        onMouseLeave={() => setShowTooltip(-1)}
                    >
                        {tech.title}
                    </p>
                    {tech.tooltip && (
                        <div
                            className={classNames(styles.description, {
                                [styles.active]: showTooltip === index,
                            })}
                        >
                            {tech.tooltip}
                        </div>
                    )}
                </>
            ))}
        </div>
    )
}

export default ProjectTechnologies
