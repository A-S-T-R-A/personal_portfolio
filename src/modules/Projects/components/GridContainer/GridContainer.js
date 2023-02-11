import { projectsData } from "../../index"
import { GridItem } from "../GridItem"
import styles from "./GridContainer.module.css"

function GridContainer() {
    return (
        <section className={styles.grid}>
            {projectsData.map((item, i) => (
                <GridItem key={i} item={item} />
            ))}
        </section>
    )
}

export default GridContainer
