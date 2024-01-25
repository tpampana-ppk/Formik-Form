import SimpleForm from "./BasicForm"


const AddForm = () => {
   const formData = {
     firstName: "",
     lastName: "",
     email: "",
     password: "",
     confirmPassword: "",
     countries: [],
   };
  return (
    <div>
      <SimpleForm formData={formData}/>
    </div>
  )
}

export default AddForm
