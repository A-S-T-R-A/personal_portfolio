import React, { useState, useEffect } from "react"
import styles from "./ProjectImage.module.css"
import { classNames } from "modules/common/helpers/classNames"

interface ProjectImageProps {
    img: string
    imgDesktop: string
    isActive: boolean
}

function ProjectImage({ img, imgDesktop, isActive }: ProjectImageProps) {
    const className = classNames(styles.img, { [styles.active]: isActive })

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function onResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", onResize)

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [width])

    return (
        <>
            {width >= 1024 && imgDesktop ? (
                <img src={imgDesktop} alt="project" className={className} />
            ) : (
                <img src={img} alt="project" className={className} />
            )}
        </>
    )
}

export default ProjectImage
