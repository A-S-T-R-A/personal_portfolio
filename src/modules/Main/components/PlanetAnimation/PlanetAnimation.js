import React from "react"
import styles from "./PlanetAnimation.module.css"
import { planet, satellite, BigSatellite } from "assets/images/MainSection"

export function PlanetAnimation() {
    return (
        <div className={styles.imgContainer}>
            <img src={planet} alt="planet Img" className={styles.planet} />
            <img src={satellite} alt="satellite" className={styles.satellite} />
            <img
                src={BigSatellite}
                alt="Big satellite"
                className={styles.BigSatellite}
            />
        </div>
    )
}
