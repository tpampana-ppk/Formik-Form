import * as yup from "yup";
import { AdminFormData } from "../types";
import CompanyAdminForm from "./BasicForm";
import * as validation from "../Validation/validation";

const validationSchema = yup.object({
  firstname: validation.firstname,
  lastname: validation.lastname,
  email: validation.email,
  password: validation.password,
});

const CompanyAdminAdd = () => {
  const initialData: AdminFormData = {
    firstname: "",
    lastname: "",
    email: "",
    selectedOption: { id: "", name: "" },
    acceptTerms:false,
    password: "",
  };

  const handleSubmit = async (values: AdminFormData) => {
    console.log(values);
    
  };

  return (
    <div>
      <CompanyAdminForm
        formData={initialData}
        label={"Add"}
        validationSchema={validationSchema}
        onDataSubmit={handleSubmit}
      />
    </div>
  );
};

export default CompanyAdminAdd;
