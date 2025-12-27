// Your version (correct):
export function getHeadersForApi(url, apiKey = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  // Priority 1: Use API key if provided and not empty
  if (apiKey && apiKey.trim() !== "") {
    headers["X-Api-Key"] = apiKey.trim();
  }
  // Priority 2: Fallback to env for known APIs only if no key provided
  else if (url.includes("indianapi.in") && process.env.NEXT_PUBLIC_INDIAN_API_KEY) {
    headers["X-Api-Key"] = process.env.NEXT_PUBLIC_INDIAN_API_KEY;
  }

  return headers;
}