import { ChangeEvent, useState } from "react";
import MyForm from "./CompanyadminForm"


const CompanyadminAdd = () => {
  const initialValues = {
    username: "",
    password: "",
    roles: [],
  };
  const [formData,setFormData]=useState(initialValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (values:any) =>{
    console.log(values);
    
  }
  return (
    <div>
      <MyForm
        formData={formData}
        onInputSubmit={handleSubmit}
        onInputChange={handleChange}
      />
    </div>
  );
}

export default CompanyadminAdd
