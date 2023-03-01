import React from "react"
import styles from "./Projects.module.css"

import { useState } from "react"
import { motion } from "framer-motion"

import { projectsData } from "../index"
import { staggerContainer } from "../lib/motion"
import { ProjectCard } from "./components/ProjectCard/ProjectCard"

export function Projects() {
    const [active, setActive] = useState(0)

    return (
        <section className={styles.wrapper} id="explore">
            <motion.div
                //@ts-ignore
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={styles.container}
            >
                <div className={styles.projectsList}>
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            index={index}
                            isActive={active === index}
                            setActive={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
