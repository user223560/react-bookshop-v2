import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { type ISlide } from "../../types"
import DotIcon from "@assets/icons/carousel-dot.svg?react"
import DotActiveIcon from "@assets/icons/carousel-dot-active.svg?react"
import styles from "./Carousel.module.scss"

export interface ICarouselProps {
  slides: ISlide[]
  autoplayInterval?: number
}

const Carousel = ({ slides, autoplayInterval = 3000 }: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length)
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [slides.length, autoplayInterval])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className={styles["carousel"]}>
      <div className={styles["carousel__container"]}>
        <Link to={"*"} className={styles["carousel__link"]}>
          <img
            src={currentSlide.image}
            alt={currentSlide.altText}
            className={styles["carousel__slide"]}
          />
        </Link>
        <div className={styles["carousel__dots"]}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={styles["carousel__btn"]}
              aria-label={`Go to slide ${index + 1}: ${slides[index].altText}`}
            >
              {index === currentIndex ? (
                <DotActiveIcon
                  width={12}
                  height={12}
                  className={styles["carousel__dot--active"]}
                />
              ) : (
                <DotIcon
                  width={12}
                  height={12}
                  className={styles["carousel__dot"]}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
