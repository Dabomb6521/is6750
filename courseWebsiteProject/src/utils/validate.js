export function isValidUrl(url) {
  return url.includes('http') && url.includes("embed");
}