import React from "react"

import { SocialsIcon } from "modules/Navigation/components/common"

function BurgerCta({ closeClickHandler }) {
    return <SocialsIcon onClick={closeClickHandler} />
}

export default BurgerCta
