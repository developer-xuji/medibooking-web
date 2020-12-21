import { ROUTES } from "../routes";

export const getRoutePath = (route_key) => {
  let path = "/";
  console.log("");
  ROUTES.forEach((route) => {
    if (route.key === route_key) path = route.path;
  });
  return path;
};
