// icons
import Icon from "@mui/material/Icon";

// pages
import Home from "pages/Home";

const routes = [
  {
    name: "pages",
    icon: <Icon>home</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/about-us",
            component: <Home />,
          },
        ],
      },
    ],
  },
  {
    name: "pages",
    icon: <Icon>home</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/about-us",
            component: <Home />,
          },
        ],
      },
    ],
  },
];
export default routes;
