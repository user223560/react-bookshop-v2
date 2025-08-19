import Carousel from "../../../shared/ui/carousel"
import type { ISlide } from "../../../shared/types"
import styles from "./BooksPage.module.scss"

import CarouselSlide1 from "@assets/images/carousel-slide1.png"
import CarouselSlide2 from "@assets/images/carousel-slide2.png"
import CarouselSlide3 from "@assets/images/carousel-slide3.png"


const booksPageSlides: ISlide[] = [
  {
    image: CarouselSlide1,
    altText: "Black Friday sale - up to 50%"
  },
  {
    image: CarouselSlide2,
    altText: "Top 10 books for entrepreneurs"
  },
  {
    image: CarouselSlide3,
    altText: "Check out our cozy books selection"
  }
]

const BooksPage = () => {
  return (
    <div className={styles[""]}>
      <Carousel slides={booksPageSlides} autoplayInterval={3000} />
    </div>
  )
}
export default BooksPage