import { useLocation } from "react-router-dom";

export const useValidRoute = () => {
  const location = useLocation();
  const validRoutes = ["/", "/product/:id"];

  return validRoutes.some((pattern) => {
    const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "[^/]+") + "$");
    return regex.test(location.pathname);
  });
};