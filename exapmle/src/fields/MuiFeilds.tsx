import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface CustomInputTextFieldprops {
  formik: any;
  fieldname: string;
  label: string;
  fieldtype: string;
}

const CustomInputTextField: React.FC<
  CustomInputTextFieldprops & TextFieldProps
> = ({ formik, fieldname, label, fieldtype }) => {
  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        type={fieldtype}
        id={fieldname}
        name={fieldname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[fieldname].trim()}
        fullWidth
        margin="normal"
        helperText={
          formik.touched[fieldname] && formik.errors[fieldname]
            ? formik.errors[fieldname]
            : ""
        }
        error={formik.touched[fieldname] && Boolean(formik.errors[fieldname])}
      />
    </>
  );
};

export default CustomInputTextField;
