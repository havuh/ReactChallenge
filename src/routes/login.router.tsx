import { loginRoutes } from "./paths";
import { authenticationRouter } from "@/util";
import { LoginPage } from "@/pages/login";
import { RouteObject } from "react-router-dom";

export const loginRoute: RouteObject[] = [
  {
    path: loginRoutes.signIn,
    loader: () => authenticationRouter(false),
    element: <LoginPage />,
  }
];
