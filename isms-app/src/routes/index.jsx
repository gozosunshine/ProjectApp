/* eslint-disable no-unused-vars */
import * as Layout from "../components/Layout/";
import * as Page from "../pages";

const ROUTES_PATHS = {
  DASHBOARD: "/dashboard",
  ADMIN: "/admin",
  ADMIN_TICKET: "/admin/dashboard",
  ADMIN_USER: "/admin/user",
  ADMIN_REPORT: "/admin/report",
  ADMIN_SETTING: "/admin/setting",
  ADMIN_CONTACT: "/admin/contact",
};

/* layout: null ko import layout nào cả
   layout: custom custom layout theo cách của ban!
   nếu ko sẽ mặc định dùng layout default */
//public route
const publicRoutes = [
  { path: "/", component: Page.Home },
  { path: "/following", component: Page.Following, layout: null },
  { path: "/profile", component: Page.Profile, layout: Layout.CustomLayout },
  { path: "/login", component: Page.Login, layout: Layout.FooterOnly },
];

//private route: dành cho những route cần đăng nhập
const privateRoutes = [
  {
    path: ROUTES_PATHS.DASHBOARD,
    component: Page.Dashboard,
    layout: Layout.AdminLayout,
  },
];

export { publicRoutes, privateRoutes, ROUTES_PATHS };
