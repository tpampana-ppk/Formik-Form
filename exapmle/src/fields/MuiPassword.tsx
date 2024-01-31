import React, { useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export interface PasswordVisibleState {
  password: boolean;
  confirmPassword: boolean;
}

interface CustomPasswordFieldprops {
  formik: any;
  fieldname: string;
  label: string;
  fieldtype: string;
}

const CustomPasswordField: React.FC<
  CustomPasswordFieldprops & TextFieldProps
> = ({ formik, fieldname, label, fieldtype }) => {
  const [passwordVisible, setPasswordVisible] = useState<PasswordVisibleState>({
    password: false,
    confirmPassword: false,
  });

  const handlePasswordVisibility = (name: string) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [name as keyof PasswordVisibleState]:
        !prev[name as keyof PasswordVisibleState],
    }));
  };

  return (
    <>
      <TextField
        label={label}
        variant="outlined"
        type={passwordVisible.password ? "text" : fieldtype}
        id={fieldname}
        name={fieldname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[fieldname]}
        fullWidth
        margin="normal"
        helperText={
          (formik.touched[fieldname] && formik.errors[fieldname])
        }
        error={
          (formik.touched[fieldname] && Boolean(formik.errors[fieldname]))
        }
        InputProps={
          fieldtype === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={() => handlePasswordVisibility("password")}
                      size="large"
                    >
                      {passwordVisible.password ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </>
  );
};

export default CustomPasswordField;
