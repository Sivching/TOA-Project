import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home/Home";
import Knowledge from "./pages/Home/Knowledge";
import OurInformation from "./pages/Home/OurInformation";
import ErrorPage from "./pages/ErrorPage";
import Videos from "./pages/Home/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "distributor",
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "knowledge",
        element: <Knowledge />,
      },

      {
        path: "contact",
        element: <OurInformation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
