import { z } from "zod"

const LiteralSchema = z.object({
    name: z.literal("Natsu"),
    age: z.union([z.literal(13), z.literal(14)]),
  });