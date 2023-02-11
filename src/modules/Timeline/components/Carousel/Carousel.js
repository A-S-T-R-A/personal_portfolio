import { timelineData } from "../../index"
import { CarouselItem } from "../CarouselItem/CarouselItem"
import styles from "./Carousel.module.css"

export function Carousel() {
    return (
        <ul className={styles.container}>
            {timelineData.map(item => (
                <CarouselItem key={item.id} data={item} />
            ))}
        </ul>
    )
}
