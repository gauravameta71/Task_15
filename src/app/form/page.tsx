
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/Form";

export const metadata: Metadata = {
  title: "Form",
  
};

const FormPage = () => {
  return (
    <DefaultLayout>
      <Form/>
    </DefaultLayout>
  );
};

export default FormPage;
