type Route = {
  title: string,
  path: string
}

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
];

import BottlePage from "pages/bottle";
import FirstPlatePage from "pages/firstplate";
import CestaPage from "pages/cesta";

export const projRoutes = [
  {
    path: "/bottle",
    component: BottlePage,
  },
  {
    path: "/firstplate",
    component: FirstPlatePage,
  },
  {
    path: "/cesta",
    component: CestaPage,
  },
];