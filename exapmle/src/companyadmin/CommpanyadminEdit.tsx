import { ChangeEvent, useState } from "react";
import MyForm from "./CompanyadminForm";

const CompanyadminEdit = () => {
  const initialValues = {
    username: "bbb",
    password: "bbb",
    roles: [
      { id: "1", name: "Admin" },
      { id: "2", name: "User" },
    ],
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) =>{
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div>
      <MyForm formData={formData} onInputSubmit={handleSubmit} onInputChange={handleChange}/>
    </div>
  );
};

export default CompanyadminEdit;
