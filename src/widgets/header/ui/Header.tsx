import UserIcon from "@assets/icons/user-icon.svg?react"
import SearchIcon from "@assets/icons/search-icon.svg?react"
import BagIcon from "@assets/icons/bag-icon.svg?react"
import styles from "./Header.module.scss"


const Header = () => {
  return (
    <header className={styles["header"]}>
      <nav className={styles["header__navbar"]}>
        <div className={styles["header__logo"]}>
          <h1>React Bookshop</h1>
        </div>
        <ul className={styles["header__links"]}>
          <li className={styles["header__link-item--active"]}>
            <p>books</p>
          </li>
          <li className={styles["header__link-item"]}>
            <p>audiobooks</p>
          </li>
          <li className={styles["header__link-item"]}>
            <p>Stationery & gifts</p>
          </li>
          <li className={styles["header__link-item"]}>
            <p>blog</p>
          </li>
        </ul>
        <div className={styles["header__user-space"]}>
          <UserIcon width={15} height={15} />
          <SearchIcon width={15} height={15} />
          <BagIcon width={15} height={15} />
        </div>
      </nav>
    </header>
  )
}
export default Header
