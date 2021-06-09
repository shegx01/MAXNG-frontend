import useFetch from "use-http";

const baseUrl = "https://swapi.dev/api";

export default function api() {
  const { get, loading, error, data = [], response } = useFetch(baseUrl);

  return { get, loading, error, data, response};
}
