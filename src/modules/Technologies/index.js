import { lazy } from "react"

export const Technologies = lazy(() => import("./Technologies"))

export { technologiesData, timelineData } from "constants"
