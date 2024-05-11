import z from 'zod';

export const loginSchema = z.object({
    userName: z.string().trim().min(1, { message: "Username is required" }),
    password: z.string().min(4, { message: "Must be 4 or more characters long" })
})