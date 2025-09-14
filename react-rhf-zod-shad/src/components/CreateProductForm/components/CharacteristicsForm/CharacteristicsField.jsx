import { FormControl, FormField, FormItem } from "@/components/ui/form.jsx";

import { XIcon as RemoveIcon } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";
import { InputField } from "@/components/InputField/InputField.jsx";

export const CharacteristicsField = ({
  className,
  form,
  name,
  onClickRemove,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className={className}>
            <FormControl>
              <div className="grid gap-3 grid-cols-[10rem_1fr_36px] items-start">
                <InputField
                  className="space-y-0"
                  name={`${field.name}.type`}
                  form={form}
                  placeholder="Введите вид"
                />
                <InputField
                  className="space-y-0"
                  name={`${field.name}.value`}
                  form={form}
                  placeholder="Введите значение"
                />
                <Button variant="outline" size="icon" onClick={onClickRemove}>
                  <RemoveIcon size="20" />
                </Button>
              </div>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
