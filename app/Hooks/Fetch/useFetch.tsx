import { useState, useEffect, useCallback, useMemo } from "react";
import { z } from "zod";

const MetaSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const LessonSchema = z.object({
  meta: MetaSchema,
  slug: z.string(),
});

const LessonsSchema = z.array(LessonSchema);

type LessonsResponse = z.infer<typeof LessonsSchema>;

export const useFetch = (folder: string) => {
  const [data, setData] = useState<LessonsResponse>([]);

  // Création du abortController
  const abortController = useMemo(() => new AbortController(), []);
  const signal = abortController.signal;
  
  // UseCallback: Appelle une fonction qui dépend de de dépendances
  const fetchDatas = useCallback(async () => {
    try {
      // passage du signal à l'API
      const res = await(await fetch(
        `api/listLessons?folder=${encodeURIComponent(folder)}`,{signal}
      )).json();

      if (!signal.aborted) {
        const lessonsResponse = LessonsSchema.safeParse(res);
      
        if (lessonsResponse.success) {
          setData(lessonsResponse.data);
        }
      }

    } catch (e: any) {
      console.log('error');
      
      if(e.name === "AbortError") return;
      setData([]);
      throw { e };
    }

  }, [folder, signal]);

  useEffect(() => {
    fetchDatas();
    
    // Création de la fonction pour annuler la requête
    const handleBeforeUnload = () => {          
        abortController.abort();
    };
    // Gestionnaire d'évenement permettant d'annuler la requête si l'utilisateur quitte la page
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Nettoyage du gestionnaire
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);      
    };
  }, [abortController, fetchDatas]);

  return { data };
};

// Différences useCallback et useMemo
// le useMemo c'est pour une valeur retournée (souvent un calcul)
// le useCallback une fonction appelée
// L'une comme l'autre en fonction changeantes en fonction de certaines dépendances