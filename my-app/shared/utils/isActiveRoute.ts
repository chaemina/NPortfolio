export const isActiveRoute = (
  pathname: string,
  href: string
) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};