import { createHashRouter } from "react-router-dom";
import Error from "@/pages/error";
import Home from "@/pages/home";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default router;
