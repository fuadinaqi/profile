export function getInitialActive(pathname) {
  const name = pathname.substr(1);
  if (!name) return "profile";
  return name;
}
