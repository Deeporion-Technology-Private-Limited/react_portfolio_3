import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Pets from "../pages/Pets";
import Dashboard from "../pages/privatePages/Dashboard";
import StyleGuide from "../StyleGuide";
import Accessories from "../pages/Accessories";
import Brands from "../pages/Brands";
import Components from "../pages/Components";
import Collection from "../pages/Collection";
import Authguard from "../authentication/Authguard";
import Layout from "../component/Layout";
import Page404 from "../component/Page404";

export const RouteLayout = () => {
  const unprotectedRoutes = [
    {
      path: "/",
      component: Pets,
      name: "pets",
    },

    {
      path: "/accessories",
      component: Accessories,
      name: "accessories",
    },

    {
      path: "/brands",
      component: Brands,
      name: "brands",
    },

    {
      path: "/components",
      component: Components,
      name: "components",
    },

    {
      path: "/collection",
      component: Collection,
      name: "collection",
    },

    {
      path: "/style-guide",
      component: StyleGuide,
      name: "styleGuide",
    },

    {
      path: "*",
      component: Page404, // Add 404 component
      name: "404Page",
    },
  ];

  const protectedRoutes = [
    {
      path: "/dashboard",
      name: "dashboard",
      component: {
        admin: Page404,
        employee: Dashboard,
        client: Page404,
      },
      role: ["employee", "admin", "client"],
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {unprotectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              Component={obj.component}
            />
          ))}
          {protectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              element={
                <Authguard Component={obj.component} roleList={obj.role} />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
