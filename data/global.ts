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

export const projRoutes = [
  {
    path: "/pages/bottle",
    component: BottlePage,
  },
  // Other routes...
];