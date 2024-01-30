import { useState, useEffect, useCallback } from "react";
//test

export const useFetch = <T,>(folder: string): { data: T | undefined } => {
  const [data, setData] = useState<T | undefined>(undefined);

  const fetchDatas = useCallback(async () => {
    try {
      const res = await (
        await fetch(`api/listLessons?folder=${folder}`)
      ).json();

      setData(res);
    } catch (e: any) {
      throw {e}
    }
  }, [folder]);

  useEffect(() => {
    fetchDatas();
  }, [fetchDatas]);

  return { data };
};