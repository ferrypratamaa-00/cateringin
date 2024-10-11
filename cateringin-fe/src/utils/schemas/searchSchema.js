import { z } from "zod";

export const searchSchema = z.object({
  keyword: z.string().min(2, {
    message: "Enter at least 2 characters.",
  }),
});
