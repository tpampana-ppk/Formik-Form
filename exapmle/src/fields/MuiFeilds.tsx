import React, { FocusEvent, ChangeEvent } from "react";
import { InputLabel, TextField } from "@mui/material";
import { Field, FieldProps } from "formik";

interface MuiFieldsProps {
  fieldtype: string;
  fieldname: string;
  label: string;
}

const MuiFields: React.FC<MuiFieldsProps> = ({ fieldtype, fieldname, label }) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <Field name={fieldname}>
        {({ field, form }: FieldProps) => (
          <TextField
            type={fieldtype}
            name={fieldname}
            size="small"
            variant="outlined"
            fullWidth
            margin="normal"
            onBlur={(e: FocusEvent<any, Element>) => {
              field.onBlur(e);
              form.handleBlur(e);
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              const trimmedValue = e.target.value.trim();
              form.handleChange({
                target: {
                  name: fieldname,
                  value: trimmedValue,
                },
              });
            }}
            value={field.value}
            error={!!(form.touched[fieldname] && form.errors[fieldname])}
            helperText={
              form.touched[fieldname] && form.errors[fieldname]
                ? (form.errors[fieldname] as string)
                : ""
            }
          />
        )}
      </Field>
    </div>
  );
};

export default MuiFields;
