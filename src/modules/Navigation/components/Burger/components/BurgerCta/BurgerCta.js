import React from "react"

import { SocialIcons } from "modules/common/components/SocialIcons"

export function BurgerCta({ closeClickHandler }) {
    return <SocialIcons onClick={closeClickHandler} />
}
