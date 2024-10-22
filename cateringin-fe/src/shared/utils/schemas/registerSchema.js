import { z } from "zod";

export const registerSchema = z.object({
  company: z.string().min(1, {
    message: "Company name has not been entered.",
  }),

  province: z.string().min(1, {
    message: "Province has not been entered.",
  }),

  city: z.string().min(1, {
    message: "City has not been entered.",
  }),

  district: z.string().min(1, {
    message: "District has not been entered.",
  }),

  village: z.string().min(1, {
    message: "Village has not been entered.",
  }),

  username: z
    .string()
    .min(1, {
      message: "Username has not been entered.",
    })
    .min(3, {
      message: "Username must be at least 3 characters long.",
    }),

  email: z.string().email({
    message: "Invalid email address.",
  }),

  phone: z
    .string()
    .regex(/^[0-9]+$/, {
      message: "Phone number can only contain digits.",
    })
    .min(10, {
      message: "Phone number must be at least 10 digits long.",
    }),

  password: z
    .string()
    .min(1, {
      message: "Password has not been entered.",
    })
    .min(6, {
      message: "Password must be at least 6 characters long.",
    }),
});
