import styles from "./BoxesList.module.css"
import { acomplishmentsData as data } from "../../"
import BoxItem from "../BoxItem/BoxItem"

function BoxesList() {
    return (
        <div className={styles.container}>
            {data.map(item => (
                <BoxItem key={item.id} data={item} />
            ))}
        </div>
    )
}

export default BoxesList
