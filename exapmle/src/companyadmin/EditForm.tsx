import SimpleForm from "./BasicForm";


const EditForm = () => {
  const formData = {
    firstName: "a",
    lastName: "b",
    email: "a@gmail.com",
    password: "",
    confirmPassword: "",
    countries: [{ id: "1", name: "name1" }],
  };
  return (
    <div>
      <SimpleForm formData={formData} />
    </div>
  );
}

export default EditForm
