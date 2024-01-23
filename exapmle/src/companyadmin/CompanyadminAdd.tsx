import MyForm from "./CompanyadminForm";
interface FormValues {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const CompanyadminAdd = () => {
  const initialValues: FormValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <div>
      <MyForm formData={initialValues} onInputSubmit={handleSubmit} />
    </div>
  );
};

export default CompanyadminAdd;
