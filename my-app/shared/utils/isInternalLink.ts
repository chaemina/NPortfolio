export const isInternalLink = (href: string) => {
  if (!href.startsWith("/")) return false;

  return !href.startsWith("//");
};
