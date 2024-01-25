import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface MuiFieldsProps {
  formik: any;
  fieldname: string;
  label: string;
  fieldtype:string;
}

const MuiFields: React.FC<MuiFieldsProps & TextFieldProps> = ({
  formik,
  fieldname,
  label,
  fieldtype,
  ...props
}) => {
  return (
    <div>
      <TextField
        label={label}
        variant="outlined"
        type={fieldtype}
        id={fieldname}
        name={fieldname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[fieldname]}
        fullWidth
        margin="normal"
        helperText={
          formik.touched[fieldname] && formik.errors[fieldname]
            ? formik.errors[fieldname]
            : ""
        }
        error={formik.touched[fieldname] && Boolean(formik.errors[fieldname])}
        {...props}
      />
    </div> 
  );
};

export default MuiFields;
