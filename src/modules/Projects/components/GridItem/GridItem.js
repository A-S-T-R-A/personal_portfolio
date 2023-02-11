import { HeaderThree } from "modules/common/ui/HeaderThree"
import { TagList } from "../TagList"
import { UtilityList } from "../UtilityList"
import styles from "./GridItem.module.css"

function GridItem({ item }) {
    const { image, title, description, tags, visit, source } = item
    return (
        <div className={styles.container}>
            <img className={styles.img} src={image} alt="" />
            <div className={styles.titleContent}>
                <HeaderThree isTitle>{title}</HeaderThree>
                <hr className={styles.hr} />
            </div>
            <p className={styles.info}>{description}</p>
            <TagList tags={tags} />
            <UtilityList visit={visit} source={source} />
        </div>
    )
}

export default GridItem
