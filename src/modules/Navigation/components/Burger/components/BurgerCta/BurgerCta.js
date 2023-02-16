import React from "react"

import { SocialIcons } from "modules/Navigation/components/common"

export function BurgerCta({ closeClickHandler }) {
    return <SocialIcons onClick={closeClickHandler} />
}
