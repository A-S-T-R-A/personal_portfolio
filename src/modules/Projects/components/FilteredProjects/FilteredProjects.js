import { useContext } from "react"
import { ProjectsContext } from "../../providers/ProjectsProvider"
import styles from "./FilteredProjects.module.css"
import "./FilteredProjects.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { ProjectItem } from "./components/ProjectItem/ProjectItem"
import { classNames } from "modules/common/helpers/classNames"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

export function FilteredProjects() {
    const { filteredProjectsData } = useContext(ProjectsContext)

    return (
        <div
            className={classNames(styles.container, {}, ["projectsPagination"])}
        >
            <Swiper
                slidesPerView={3}
                className={styles.swiper}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: "#nextProject",
                    prevEl: "#prevProject",
                }}
            >
                {filteredProjectsData.map((proj, index) => (
                    <SwiperSlide key={index}>
                        <ProjectItem data={proj} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <BsChevronLeft className={styles.navPrev} id="prevProject" />
            <BsChevronRight className={styles.navNext} id="nextProject" />
        </div>
    )
}
