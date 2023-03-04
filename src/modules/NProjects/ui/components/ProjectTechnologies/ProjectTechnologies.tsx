import React, { useState } from "react"
import { classNames } from "modules/common/helpers/classNames"
import styles from "./ProjectTechnologies.module.css"
import { Tooltip } from "modules/common/ui"

interface ProjectTechnologiesProps {
    technologies: any
    className?: string
}

function ProjectTechnologies({
    technologies,
    className,
}: ProjectTechnologiesProps) {
    const [showTooltip, setShowTooltip] = useState(-1)

    const containerClassName = classNames(styles.container, {}, [className])

    return (
        <div className={containerClassName}>
            {technologies.map((tech: any, index: number) => (
                <div key={index}>
                    <p
                        className={classNames(styles.tech, {
                            [styles.withTooltip]: tech.tooltip,
                        })}
                        onMouseEnter={() => setShowTooltip(index)}
                        onMouseLeave={() => setShowTooltip(-1)}
                    >
                        {tech.title}
                    </p>
                    {tech.tooltip && (
                        <Tooltip
                            isActive={showTooltip === index}
                            tooltip={tech.tooltip}
                        />
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProjectTechnologies
