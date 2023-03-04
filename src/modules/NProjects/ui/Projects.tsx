import React, { useState } from "react"
import styles from "./Projects.module.css"
import { motion } from "framer-motion"
import { projectsData } from "../index"
import { staggerContainer } from "../lib/motion"
import { ProjectCard } from "./components/ProjectCard/ProjectCard"
import { Section, SectionText, SectionTitle } from "modules/common/ui"

export function Projects() {
    const [active, setActive] = useState(0)

    return (
        //@ts-ignore
        <Section id="projects" className={styles.wrapper}>
            <SectionTitle withDescription>Projects</SectionTitle>
            <SectionText>Some examples of my work</SectionText>
            <motion.div
                //@ts-ignore
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
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
        </Section>
    )
}
