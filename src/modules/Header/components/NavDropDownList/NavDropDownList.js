import { classNames } from "modules/common/helpers/classNames"
import styles from "./NavDropDown.module.css"
import { dropdownData as data } from "../../"
import { DropDownItem } from "../DropDownItem/DropDownItem"

export function NavDropDownList(isOpen) {
    const containerClassName = classNames(styles.container, {
        [styles.containerOpen]: isOpen,
    })

    return (
        <div className={containerClassName}>
            {data.map(item => (
                <DropDownItem key={item.id} data={item} />
            ))}
        </div>
    )
}
