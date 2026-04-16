import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base.tsx";
import Home from "./pages/Home/index.tsx";
import LawPage from "./pages/LawPage/index.tsx";

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
          element: <LawPage />
      }
    ]
  }
])

export default router