import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base.tsx";
import Home from "./pages/Home/index.tsx";
import PageLei from "./pages/Lei/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
          path: "/leis/:leiID",
          element: <PageLei />
      }
    ]
  }
])

export default router