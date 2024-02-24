import { z } from "zod";
import { LessonsSchema } from "./schemas";

export type categoryLessonName = "typescript" | "next" | "fetch" | "javascript" | "";

export type LessonsResponse = z.infer<typeof LessonsSchema>;