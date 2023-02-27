import React from "react"
import styles from "./ExploreCard.module.css"
import { motion } from "framer-motion"

import { fadeIn } from "../../../lib/motion"
import { classNames } from "modules/common/helpers/classNames"

//@ts-ignore
import headsetSvg from "assets/nProjects/headset.svg"
//@ts-ignore
import img from "assets/nProjects/planet-02.png"

interface ExploreCardProps {
    id: any /* 
    imgUrl: any */
    title: any
    index: any
    active: any
    handleClick: any
}

export const ExploreCard = ({
    id /* 
    imgUrl, */,
    title,
    index,
    active,
    handleClick,
}: ExploreCardProps) => {
    const containerClassName = classNames(styles.container, {
        [styles.active]: active === id,
    })

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
                <div className={styles.cardContainer}>
                    <div className={styles.cardImgContainer}>
                        <img
                            src={headsetSvg}
                            alt="headset"
                            className={styles.cardImg}
                        />
                    </div>
                    <p className={styles.cardDesc}>Enter Metaverse</p>
                    <h2 className={styles.cardTitle}>{title}</h2>
                </div>
            )}
        </motion.div>
    )
}
