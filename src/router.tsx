import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base.tsx";
import Home from "./pages/Home/Home.tsx";
import Lei from "./pages/Lei/PageLei.tsx";

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
          element: <Lei />
      }
    ]
  }
])

export default router