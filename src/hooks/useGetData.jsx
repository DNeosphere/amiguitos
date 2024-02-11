import { useEffect, useState } from "react";

import books from "../assets/mockdata/books.json";
import steps from "../assets/mockdata/steps.json";
import locations from "../assets/mockdata/locations.json";

export function useGetData(dataToGet) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const availableData = { books, steps, locations };
    (function () {
      try {
        setLoading(true);
        setData(availableData[dataToGet]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [dataToGet]);

  return { data, error, loading, setData };
}
