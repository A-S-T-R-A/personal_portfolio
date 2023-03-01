import React, { useEffect, useState } from "react"
import styles from "./CardDescription.module.css"

import { GoLinkExternal } from "react-icons/go"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies"
import { classNames } from "modules/common/helpers/classNames"

interface CardDescriptionProps {
    title: string
    description: string
    technologies: any
    isActive: any
}

function CardDescription({
    title,
    description,
    technologies,
    isActive,
}: CardDescriptionProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const containerClassName = classNames(styles.container, {
        [styles.expanded]: isExpanded,
        [styles.notActive]: !isActive,
    })

    const contentClassName = classNames(styles.content, {
        [styles.expanded]: isExpanded,
        [styles.collapsed]: !isExpanded,
    })

    const cardTtitleClassName = classNames(styles.cardTitle, {
        [styles.expanded]: isExpanded,
    })

    const cardDescClassName = classNames(styles.cardDesc, {
        [styles.expanded]: isExpanded,
    })

    const technologiesClassName = classNames(styles.technologiesContainer, {
        [styles.expanded]: isExpanded,
    })

    useEffect(() => {
        return () => {
            setIsExpanded(false)
        }
    }, [isActive])

    return (
        <div className={containerClassName}>
            <div className={contentClassName}>
                <h2 className={cardTtitleClassName}>{title}</h2>
                <p className={cardDescClassName}>{description}</p>

                <ProjectTechnologies
                    technologies={technologies}
                    className={technologiesClassName}
                />
            </div>

            <div className={styles.btnContainer}>
                <Button
                    variant={ButtonVariant.FILLED}
                    className={styles.btn}
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    <GoLinkExternal className={styles.btnIcon} />
                    Details
                </Button>
                <Button variant={ButtonVariant.OUTLINED} className={styles.btn}>
                    <GoLinkExternal className={styles.btnIcon} />
                    Visit
                </Button>
            </div>
        </div>
    )
}

export default CardDescription
