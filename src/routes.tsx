import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import InfoPage from "./InfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:name",
    element: <InfoPage />,
  },
]);
export default router;
