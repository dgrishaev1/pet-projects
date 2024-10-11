import { MainLayout } from "@/components/MainLayout/MainLayout.jsx";
import { CreateProductForm } from "@/components/CreateProductForm/CreateProductForm.jsx";

export const App = () => {
  return (
    <MainLayout>
      <CreateProductForm />
    </MainLayout>
  );
};
