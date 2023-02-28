import React from "react"
import styles from "./ProjectCard.module.css"
import { motion } from "framer-motion"

import { fadeIn } from "../../../lib/motion"
import { classNames } from "modules/common/helpers/classNames"

//@ts-ignore
import CardDescription from "../CardDescription/CardDescription"

interface ExploreCardProps {
    id: number
    title: any
    index: any
    active: any
    handleClick: any
    [key: string]: any
}

export function ProjectCard({
    id,
    title,
    index,
    active,
    handleClick,
    ...rest
}: ExploreCardProps) {
    const containerClassName = classNames(styles.container, {
        [styles.active]: active === id,
    })

    const { img, description, technologies } = rest

    return (
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={containerClassName}
            onClick={() => handleClick(id)}
        >
            <img src={img} alt="project" className={styles.img} />
            {active !== id ? (
                <h3 className={styles.h3}>{title}</h3>
            ) : (
                <CardDescription
                    title={title}
                    description={description}
                    technologies={technologies}
                />
            )}
        </motion.div>
    )
}
