const API_KEY = "YOUR_TMDB_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}
