import {z} from "zod";
import {client} from "./client"
import { LessonsResponse } from "./types";

export const getLessons = async(folder: string, zodSchema: z.ZodSchema<LessonsResponse>, signal?: AbortSignal) => {
  return client(`/api/listLessons?folder=${encodeURIComponent(folder)}`, {signal : signal, zodSchema: zodSchema});
}