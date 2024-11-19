export const formatImageUrl = (path) => {
  const BASE_URL = "https://w3era.vefogix.com";
  if (!path) return ""; // Handle empty paths gracefully
  return path.startsWith("http") ? path : `${BASE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
};
