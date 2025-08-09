import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout
  }
])
