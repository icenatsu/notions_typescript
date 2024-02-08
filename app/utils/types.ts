import { z } from "zod";
import { LessonsSchema } from "./schemas";

export type lessonName = "typescript" | "next" | "fetch" | "javascript" | "";

export type LessonsResponse = z.infer<typeof LessonsSchema>;