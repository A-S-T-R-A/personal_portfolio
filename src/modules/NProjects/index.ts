import { lazy } from "react"

export const Projects = lazy(() => import("./ui/Projects"))

export { projectsData } from "constants/projectsData"
