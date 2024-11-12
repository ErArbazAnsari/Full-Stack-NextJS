import { z } from "zod";

export const MessageSchema = z.object({
    content: z
        .string()
        .min(10, { message: "Content must be of 10 char." })
        .max(300, "Content must be no longer than 300 char."),
});
