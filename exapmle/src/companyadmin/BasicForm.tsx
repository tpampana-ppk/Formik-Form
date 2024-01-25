
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Container, Typography } from "@mui/material";
import MuiFields from "../fields/MuiFeilds";
import MuiAutocomplete from "../fields/MuiAutocomplete";

interface Country {
  id: string;
  name: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword:string;
  countries: Country[];
}

const validationSchema = yup.object({
  firstName: yup.string().trim().required("First Name is required"),
  lastName: yup.string().trim().required("Last Name is required"),
  email: yup
    .string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().trim().required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat password is required."),
  countries: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string(),
        value: yup.string(),
      })
    )
    .required("Countries are required"),
});

const countries: Country[] = [
  { id: "1", name: "name1" },
  { id: "2", name: "name2" },
  { id: "3", name: "name3" },
];

const SimpleForm = ({formData}:{formData:FormValues}) => {
 

  const formik = useFormik<FormValues>({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  const isSubmitDisabled = !formik.dirty || !formik.isValid;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Simple Form
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <MuiFields
          formik={formik}
          fieldname="firstName"
          label="First Name"
          fieldtype={"text"}
        />
        <MuiFields
          formik={formik}
          fieldname="lastName"
          label="Last Name"
          fieldtype={"text"}
        />

        <MuiFields
          formik={formik}
          fieldname="email"
          label="Email"
          fieldtype={"email"}
        />

        <MuiFields
          formik={formik}
          fieldname="password"
          label="Password"
          fieldtype={"password"}
        />

        <MuiFields
          formik={formik}
          fieldname="confirmPassword"
          label="Confirm Password"
          fieldtype={"password"}
        />

        <MuiAutocomplete formik={formik} array={countries} />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitDisabled}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SimpleForm;
