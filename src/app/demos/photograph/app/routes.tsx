import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Portfolio } from "./pages/portfolio";
import { PortfolioCategory } from "./pages/portfolio-category";
import { Services } from "./pages/services";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { NotFound } from "./pages/not-found";
import { Layout } from "./components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:category", Component: PortfolioCategory },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
