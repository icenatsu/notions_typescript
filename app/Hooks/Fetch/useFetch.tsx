import { useState, useEffect, useCallback } from "react";
import { z } from "zod"

const MetaSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const LessonSchema = z.object({
  meta: MetaSchema,
  slug: z.string(),
});

const LessonsArraySchema = z.array(LessonSchema);

export type LessonsResponse = z.infer<typeof LessonsArraySchema>

export const useFetch = <T,>(folder: string): { data: T | undefined } => {
  const [data, setData] = useState<T | undefined>(undefined);
  

  const fetchDatas = useCallback(async () => {
    try {
      const res = await (
        await fetch(`api/listLessons?folder=${encodeURIComponent(folder)}`)
      ).json();

      const lessonsResonse = LessonsArraySchema.safeParse(res)

      if(!lessonsResonse.success){
        throw Error
      }
      
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