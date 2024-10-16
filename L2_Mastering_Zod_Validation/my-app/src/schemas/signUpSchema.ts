import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast of 2 char.")
    .max(15, "Username must be no more than 20 char.")
    .regex(
        /[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi,
        "Username must not contains any special characters."
    );

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be atleast of 6 char." })
        .max(15, { message: "Password must be max of 15 char." }),
});
