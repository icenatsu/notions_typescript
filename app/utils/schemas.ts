import { z } from "zod";

const LessonSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
  }),
  slug: z.string(),
});

export const LessonsSchema = z.array(LessonSchema);