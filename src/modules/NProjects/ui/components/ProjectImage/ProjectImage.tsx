import React from "react"
import styles from "ProjectImage.module.css"

interface ProjectImageProps {
    img: any
}

function ProjectImage({ img }: ProjectImageProps) {
    return <img src={img} alt="project" className={styles.img} />
}

export default ProjectImage
