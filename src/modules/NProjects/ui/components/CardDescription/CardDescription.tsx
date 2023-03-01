import React, { useEffect, useRef, useState } from "react"
import styles from "./CardDescription.module.css"

import { GoLinkExternal } from "react-icons/go"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies"
import { classNames } from "modules/common/helpers/classNames"

interface CardDescriptionProps {
    title: string
    description: string
    technologies: any
}

function CardDescription({
    title,
    description,
    technologies,
}: CardDescriptionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenContent, setIsOpenContent] = useState(false)

    const containerClassName = classNames(styles.container, {
        [styles.open]: isOpen,
    })

    const contentClassName = classNames(styles.content, {
        [styles.open]: isOpen,
    })

    const cardTtitleClassName = classNames(styles.cardTitle, {
        [styles.open]: isOpen,
    })

    const cardDescClassName = classNames(styles.cardDesc, {
        [styles.open]: isOpen,
    })

    const technologiesClassName = classNames(styles.technologiesContainer, {
        [styles.open]: isOpen,
    })

    console.log(isOpenContent)

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
                    onClick={() => {
                        setIsOpen(prev => !prev)
                        setIsOpenContent(prev => !prev)
                        /* setTimeout(() => {
                            setIsOpenContent(prev => !prev)
                        }, 1) */
                    }}
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
