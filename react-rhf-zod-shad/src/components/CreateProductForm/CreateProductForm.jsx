import { Card, CardContent, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { FormProvider, useForm } from "react-hook-form";
import { InputField } from "@/components/InputField/InputField.jsx";
import { CharacteristicsForm } from "@/components/CreateProductForm/components/CharacteristicsForm/CharacteristicsForm.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CREATE_PRODUCT_FORM_DEFAULT,
  createProductFormSchema,
} from "@/components/CreateProductForm/schema.js";
import { InputCodeField } from "@/components/CreateProductForm/components/InputCodeField/InputCodeField.jsx";
import { useState } from "react";
import { Loader } from "lucide-react";

export const CreateProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const form = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(createProductFormSchema),
    defaultValues: CREATE_PRODUCT_FORM_DEFAULT,
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    form.control._disableForm(true);

    console.log("onSubmit", data);

    setTimeout(() => {
      setIsSubmitting(false);
      form.control._disableForm(false);
      form.control._reset();
      setIsSubmitSuccess(true);
    }, 2000);
  };

  return (
    <>
      <Card className="mx-auto my-auto min-w-[40rem] max-w-[40rem]">
        <CardTitle className="text-lg text-center py-4">
          Создание товара
        </CardTitle>
        <CardContent>
          <FormProvider {...form}>
            <form
              className="w-full space-y-3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <InputField form={form} name="name" label="Название товара" />
              <InputCodeField form={form} name="code" label="Код товара" />
              <CharacteristicsForm
                className="space-y-3"
                name="characteristics"
                form={form}
              />
              <hr />
              <Button type="submit">
                {isSubmitting ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Отправить"
                )}
              </Button>
            </form>
          </FormProvider>
          {isSubmitSuccess && (
            <p className="mt-4 text-green-700">Товар успешно добавлен</p>
          )}
        </CardContent>
      </Card>
    </>
  );
};
