import { useState } from "react"
import styles from "./ProjectImagesSwiper.module.css"
import "./SwiperPagination.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { classNames } from "modules/common/helpers/classNames"

function ProjectImagesSwiper({ images, title }) {
    const [imageHovered, setImageHovered] = useState(false)
    const [prevVisible, setPrevVisible] = useState(false)
    const [nextVisible, setNextVisible] = useState(true)

    function hoverHandler(isHover) {
        const paginationEl = document.querySelector(
            ".modalProjectSwiperWrapper .swiper-pagination"
        )
        if (isHover) {
            paginationEl.classList.add("paginationHovered")
        } else {
            paginationEl.classList.remove("paginationHovered")
        }
        setImageHovered(isHover)
    }

    function slideChangeHandler(swiper) {
        const { isBeginning, isEnd } = swiper
        if (isBeginning) {
            setPrevVisible(false)
        } else if (isEnd) {
            setNextVisible(false)
        } else {
            setPrevVisible(true)
            setNextVisible(true)
        }
    }

    return (
        <div
            className={`${styles.container} modalProjectSwiperWrapper`}
            onMouseEnter={() => hoverHandler(true)}
            onMouseLeave={() => hoverHandler(false)}
        >
            <div
                className={classNames(styles.prev, {
                    [styles.navHovered]: imageHovered && prevVisible,
                })}
                id="prevProj"
            >
                <BsChevronLeft className={styles.navIcon} />
            </div>

            <Swiper
                slidesPerView={1}
                className={styles.swiper}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: "#nextProj",
                    prevEl: "#prevProj",
                }}
                spaceBetween={50}
                onSlideChange={slideChangeHandler}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={styles.imgContainer}>
                            <img
                                key={index}
                                src={image}
                                alt={title}
                                className={styles.img}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                className={classNames(styles.next, {
                    [styles.navHovered]: imageHovered && nextVisible,
                })}
                id="nextProj"
            >
                <BsChevronRight className={styles.navIcon} />
            </div>
        </div>
    )
}

export default ProjectImagesSwiper
