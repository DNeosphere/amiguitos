import { useEffect, useState } from "react";

import amiguitos from "../assets/mockdata/amiguitos.json";
import steps from "../assets/mockdata/steps.json";
import locaciones from "../assets/mockdata/locaciones.json";

export function useGetData(dataToGet) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const availableData = { amiguitos, steps, locaciones };
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
