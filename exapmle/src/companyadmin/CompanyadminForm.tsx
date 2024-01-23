import { Formik, Form } from "formik";
import * as Yup from "yup";
import MuiFields from "../fields/MuiFeilds";
import { Button, Grid } from "@mui/material";

interface FormValues {
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  firstname: Yup.string().trim().required("First Name is required"),
  lastname: Yup.string().trim().required("Last Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

const MyForm: React.FC<{ formData: FormValues;onInputSubmit:(values:FormValues) =>void}> = ({ formData,onInputSubmit }) => {
  const onSubmit = (values: FormValues, { setSubmitting }: any) => {
    onInputSubmit(values)
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={formData}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <MuiFields
                fieldtype="text"
                fieldname="firstname"
                label="First Name"
              />

              <MuiFields
                fieldtype="text"
                fieldname="middlename"
                label="Middle Name"
              />

              <MuiFields
                fieldtype="text"
                fieldname="lastname"
                label="Last Name"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MuiFields fieldtype="text" fieldname="email" label="Email" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <MuiFields
                fieldtype="password"
                fieldname="password"
                label="Password"
              />

              <MuiFields
                fieldtype="password"
                fieldname="confirmPassword"
                label="Confirm Password"
              />
            </Grid>
          </Grid>

          <Button variant="outlined" type="submit" disabled={!isValid || !dirty}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
