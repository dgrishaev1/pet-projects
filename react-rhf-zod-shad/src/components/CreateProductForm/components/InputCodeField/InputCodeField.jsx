import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.jsx";
import { Input } from "@/components/ui/input.jsx";

export const InputCodeField = ({
  className,
  form,
  name,
  label,
  placeholder = "Введите код",
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center gap-2">
              <span className="">A2-</span>
              <Input type={"number"} placeholder={placeholder} {...field} />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
