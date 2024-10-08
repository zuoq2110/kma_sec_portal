import DefaultLayout from "../layout/DefaultLayout";
import AnalyzePage from "../pages/AnalyzePage";
import AndroidAnalyzeDetail from "../pages/AndroidAnalyzeDetail";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import WindowAnalyzeDetail from "../pages/WindowAnalyzeDetail";

export const defaultRoutes = [
  {
    path: "/",
    element: (
      <DefaultLayout>
        <AnalyzePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/analyze/",
    element: (
      <DefaultLayout>
        <AnalyzePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/analyze/android/:id",
    element: (
      <DefaultLayout>
        <AndroidAnalyzeDetail />
      </DefaultLayout>
    ),
  },
  {
    path: "/analyze/windows/:id",
    element: (
      <DefaultLayout>
        <WindowAnalyzeDetail />
      </DefaultLayout>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
