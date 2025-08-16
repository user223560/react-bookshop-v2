import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../../pages/HomePage"
import BooksPage from "../../pages/BooksPage"
import AudiobooksPage from "../../pages/AudiobooksPage"
import StationeryAndGiftsPage from "../../pages/StationeryAndGiftsPage"
import BlogPage from "../../pages/BlogPage"
import AccountPage from "../../pages/AccountPage"
import CartPage from "../../pages/CartPage"
import NotFoundPage from "../../pages/NotFoundPage"


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "books",
        element: <BooksPage />
      },
      {
        path: "audiobooks",
        element: <AudiobooksPage />
      },
      {
        path: "stationery-and-gifts",
        element: <StationeryAndGiftsPage />
      },
      {
        path: "blog",
        element: <BlogPage />
      },
      {
        path: "account",
        element: <AccountPage />
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
])
