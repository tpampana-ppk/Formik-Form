import MyForm from "./CompanyadminForm";
interface FormValues {
    _id:string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const CompanyadminEdit = () => {
  const initialValues: FormValues = {
    _id:"1",
    firstname: "fname",
    middlename: "mname",
    lastname: "lname",
    email: "a@gmail.com",
    password: "123",
    confirmPassword: "123",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <MyForm formData={initialValues} onInputSubmit={handleSubmit} />
    </div>
  );
};

export default CompanyadminEdit;
