import {z} from "zod";
import {client} from "./client"

export const getData = async(folder: string, signal: AbortSignal, zodSchema: z.ZodSchema) => 
  client(`/api/listLessons?folder=${encodeURIComponent(folder)}`, {signal : signal, zodSchema: zodSchema});