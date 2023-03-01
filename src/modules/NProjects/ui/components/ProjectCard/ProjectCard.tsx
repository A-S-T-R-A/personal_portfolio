import React from "react"
import styles from "./ProjectCard.module.css"
import { motion } from "framer-motion"

import { fadeIn } from "../../../lib/motion"
import { classNames } from "modules/common/helpers/classNames"

import CardDescription from "../CardDescription/CardDescription"

interface ExploreCardProps {
    id: number
    title: any
    index: number
    isActive: boolean
    setActive: (arg0: number) => void
    [key: string]: any
}

export function ProjectCard({
    id,
    title,
    index,
    isActive,
    setActive,
    ...rest
}: ExploreCardProps) {
    const containerClassName = classNames(styles.container, {
        [styles.active]: isActive,
    })

    const { img, description, technologies } = rest

    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={containerClassName}
            onClick={() => setActive(index)}
        >
            <img src={img} alt="project" className={styles.img} />

            <h3
                className={classNames(styles.h3, { [styles.active]: isActive })}
            >
                {title}
            </h3>

            <CardDescription
                title={title}
                description={description}
                technologies={technologies}
                isActive={isActive}
            />
        </motion.div>
    )
}
