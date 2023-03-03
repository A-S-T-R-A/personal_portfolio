import React, { useEffect, useState } from "react"
import styles from "./CardDescription.module.css"

import { GoLinkExternal } from "react-icons/go"
import { BiDetail } from "react-icons/bi"
import { Button, ButtonVariant } from "modules/common/ui/Button"
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies"
import { classNames } from "modules/common/helpers/classNames"

interface CardDescriptionProps {
    title: string
    description: string
    technologies: string[]
    isActive: boolean
    visit: string
}

function CardDescription(props: CardDescriptionProps) {
    const { title, description, technologies, isActive, visit } = props
    const [isExpanded, setIsExpanded] = useState(false)

    const containerClassName = classNames(styles.container, {
        [styles.notActive]: !isActive,
    })

    const contentClassName = classNames(styles.content, {
        [styles.expanded]: isExpanded,
    })

    const buttonsClassName = classNames(styles.btnContainer, {
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
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDesc}>{description}</p>

                <ProjectTechnologies
                    technologies={technologies}
                    className={styles.technologiesContainer}
                />
            </div>

            <div className={buttonsClassName}>
                <Button
                    variant={ButtonVariant.FILLED}
                    className={styles.btn}
                    onClick={() => setIsExpanded(prev => !prev)}
                >
                    <BiDetail className={styles.btnIcon} />
                    Details
                </Button>
                <Button
                    variant={ButtonVariant.OUTLINED}
                    className={styles.btn}
                    onClick={e => {
                        e.preventDefault()
                        window.open(visit, "_blank")
                    }}
                >
                    <GoLinkExternal className={styles.btnIcon} />
                    Visit
                </Button>
            </div>
        </div>
    )
}

export default CardDescription
