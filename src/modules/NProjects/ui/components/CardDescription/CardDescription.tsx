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
    const [height, setHeight] = useState("0")

    const containerClassName = classNames(styles.container, {
        [styles.containerOpen]: isOpen,
    })

    const contentClassName = classNames(styles.content, {
        [styles.contentOpen]: isOpen,
    })

    const contentRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            //@ts-ignore
            console.log(contentRef.current?.offsetHeight)
        }, 100)
    }, [isOpen])

    return (
        <div className={containerClassName}>
            <div
                className={contentClassName}
                ref={contentRef}
                //@ts-ignore
                style={{ "--height": height }}
            >
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDesc}>{description}</p>

                <ProjectTechnologies
                    technologies={technologies}
                    className={styles.technologiesContainer}
                />
            </div>

            <div className={styles.btnContainer}>
                <Button
                    variant={ButtonVariant.FILLED}
                    className={styles.btn}
                    onClick={() => setIsOpen(prev => !prev)}
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
