import ItemTitle from "../ItemTitle/ItemTitle"
import { MobileScrollNode } from "../MobileScrollNode/MobileScrollNode"
import styles from "./CarouselItem.module.css"

export function CarouselItem({ data }) {
    const { year, text } = data
    return (
        <MobileScrollNode>
            <div className={styles.container}>
                <ItemTitle year={year} />
                <p className={styles.text}>{text}</p>
            </div>
        </MobileScrollNode>
    )
}
