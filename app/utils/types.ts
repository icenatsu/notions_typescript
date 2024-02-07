import { z } from "zod";
import { LessonsSchema } from "./schemas";

export type LessonsResponse = z.infer<typeof LessonsSchema>;