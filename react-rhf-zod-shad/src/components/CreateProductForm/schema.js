import z from "zod";
import {
  maxFieldLength,
  minFieldLength,
  onlyCyrillic,
  requiredField,
} from "@/constants/error-messages.js";

export const CREATE_PRODUCT_FORM_DEFAULT = {
  name: "",
  code: "",
};

const characteristicsSchema = z.object({
  type: z.string().min(1, requiredField),
  value: z.string().min(1, requiredField),
});

export const createProductFormSchema = z.object({
  name: z
    .string()
    .min(1, requiredField)
    .max(20, maxFieldLength(20))
    .refine((value) => /^[А-яЁё\s-]+$/i.test(value ?? ""), onlyCyrillic),
  code: z.coerce
    .number()
    .min(1, requiredField)
    .refine((value) => String(value)?.length >= 3, minFieldLength(3))
    .refine((value) => String(value)?.length <= 10, maxFieldLength(10)),
  characteristics: z.array(characteristicsSchema).refine(
    (items) => {
      const keysSet = new Set(items.map(({ type }) => type));

      return keysSet.size === items.length;
    },
    { message: "Виды характеристик должны быть уникальны" },
  ),
});
