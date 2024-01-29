import { useState, useEffect, useCallback } from "react";

export const useFetch = <T,>(folder: string): { data: T | undefined } => {
  const [data, setData] = useState<T | undefined>(undefined);

  const fetchDatas = useCallback(async () => {
    try {
      const res = await (
        await fetch(`http://localhost:3000/api/listLessons?folder=${folder}`)
      ).json();

      setData(res);
    } catch (e: any) {
      console.error(e);
    }
  }, [folder]);

  useEffect(() => {
    fetchDatas();
  }, [fetchDatas]);

  return { data };
};