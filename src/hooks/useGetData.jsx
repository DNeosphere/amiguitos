import { useEffect, useState } from "react";

import { getDogs, getCats } from "../utils/getDogsCats";
import amiguitos from "../assets/mockdata/amiguitos.json";
import steps from "../assets/mockdata/steps.json";

export function useGetData(dataToGet) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const availableData = { amiguitos, steps };
    (async function () {
      try {
        setLoading(true);
        if (dataToGet === "amiguitos") {
          // Traer URL de foto para cada amiguito
          availableData[dataToGet].forEach(async (amiguito) => {
            if (amiguito.especie === "Perro") {
              const url = await getDogs();
              amiguito.foto = url;
            }

            if (amiguito.especie === "Gato") {
              const url = await getCats();
              amiguito.foto = url;
            }
          });
        }
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
