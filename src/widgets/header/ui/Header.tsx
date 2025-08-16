import { Link, NavLink } from "react-router-dom"
import UserIcon from "@assets/icons/user-icon.svg?react"
import SearchIcon from "@assets/icons/search-icon.svg?react"
import BagIcon from "@assets/icons/bag-icon.svg?react"
import styles from "./Header.module.scss"


const Header = () => {
  const navLinks = [
    {
      path: "/books", text: "books"
    },
    {
      path: "/audiobooks", text: "audiobooks"
    },
    {
      path: "/stationery-and-gifts", text: "Stationery & gifts"
    },
    {
      path: "/blog", text: "blog"
    }
  ]

  return (
    <header className={styles["header"]}>
      <nav className={styles["header__navbar"]}>
        <div className={styles["header__logo"]}>
          <Link to={"/"}>
            <h1>Bookshop</h1>
          </Link>
        </div>
        <ul className={styles["header__links-list"]}>
          {navLinks.map(({ path, text }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles["header__link-item"]} ${styles["header__link-item--active"]}`
                    : styles["header__link-item"]}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles["header__user-space"]}>
          <NavLink to={"/account"}>
            <UserIcon width={15} height={15} />
          </NavLink>
          <button>
            <SearchIcon width={15} height={15} />
          </button>
          <NavLink to={"/cart"}>
            <BagIcon width={15} height={15} />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
export default Header
