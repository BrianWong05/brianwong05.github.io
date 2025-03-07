import { createHashRouter } from "react-router-dom";
import Error from "@/pages/error";
import Home from "@/pages/home";
import Projects from "@/pages/projects";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
]);

export default router;
