import { useState } from "react"
import { ListItemWork } from "../ListItemWork/ListItemWork"
import { Tooltip } from "modules/common/ui"
import styles from "./ListItemYear.module.css"

export function ListItemYear({ experience }) {
    const [showTooltip, setShowTooltip] = useState(-1)
    return (
        <div className={styles.container}>
            <div className={styles.yearContainer}>
                <p className={styles.year}>{experience.years.from}</p>
                <p className={styles.year}>{experience.years.to}</p>
            </div>
            <div className={styles.works}>
                {experience.works.map((work, index) => (
                    <div key={index}>
                        <ListItemWork
                            work={work}
                            onMouseEnter={() => setShowTooltip(index)}
                            onMouseLeave={() => setShowTooltip(-1)}
                        />
                        {work.tooltip && (
                            <Tooltip
                                className={styles.tooltip}
                                isActive={showTooltip === index}
                                tooltip={work.tooltip}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
