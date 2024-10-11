import { Button } from "@/components/ui/button.jsx";
import { useFieldArray } from "react-hook-form";
import { CharacteristicsField } from "@/components/CreateProductForm/components/CharacteristicsForm/CharacteristicsField.jsx";
import { FormMessage } from "@/components/ui/form.jsx";

export const CharacteristicsForm = ({ className, form, name }) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name,
  });

  return (
    <div className={className}>
      {<h3>Характеристики</h3>}
      {!!fields?.length && (
        <ul className="space-y-3">
          {fields.map(({ id }, index) => {
            return (
              <li key={id}>
                <CharacteristicsField
                  form={form}
                  name={`${name}[${index}]`}
                  onClickRemove={() => remove(index)}
                />
              </li>
            );
          })}
        </ul>
      )}
      {form?.formState?.errors[name] && (
        <FormMessage>{form?.formState?.errors[name]?.message}</FormMessage>
      )}
      <Button
        type="button"
        onClick={() => {
          append({ type: "", value: "" });
        }}
      >
        Добавить характеристику
      </Button>
    </div>
  );
};
