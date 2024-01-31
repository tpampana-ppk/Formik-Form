// import { useFormik } from "formik";
// import { AdminFormData, AdminEditData } from "../types";

// import CustomInputTextField from "../fields/MuiFeilds";
// import {
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   Typography,
// } from "@mui/material";
// import CustomPasswordField from "../fields/MuiPassword";
// import { useEffect, useState } from "react";

// const CompanyAdminForm = ({
//   formData,
//   label,
//   validationSchema,
//   onDataSubmit,
// }: {
//   formData: AdminFormData;
//   label: string;
//   validationSchema: any;
//   onDataSubmit: (values: AdminFormData | AdminEditData) => void;
// }) => {
//   const [loginSSO, setLoginSSO] = useState(false);

//   const getValidationSchema = () => {
//     if (loginSSO) {
//       return validationSchema.pick(["firstname", "lastname", "email"]);
//     } else {
//       return validationSchema;
//     }
//   };

//   const formik = useFormik<AdminFormData>({
//     initialValues: {
//       ...formData,
//       selectedOption: { id: "", name: "" },
//       acceptTerms: false,
//     },
//     validationSchema: getValidationSchema,
//     onSubmit: (values) => {
//       onDataSubmit(values);
//     },
//   });

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const checked = e.target.checked;
//     setLoginSSO(checked);

//     if (checked) {
//       formik.setFieldValue("password", "");
//     }
//   };

//   const isSubmitDisabled =
//     !formik.values.firstname ||
//     !formik.values.lastname ||
//     !formik.dirty ||
//     !formik.values.email ||
//     (!loginSSO && !formik.values.password);

//   const options = [
//     { id: "1", name: "option1" },
//     { id: "2", name: "option2" },
//     { id: "3", name: "option3" },
//     { id: "4", name: "option4" },
//   ];

//   return (
//     <>
//       <Typography variant="h5" style={{ paddingBottom: "25px" }}>
//         {label} Admin
//       </Typography>
//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <CustomInputTextField
//               formik={formik}
//               fieldname="firstname"
//               label="First Name"
//               fieldtype={"text"}
//             />
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <CustomInputTextField
//               formik={formik}
//               fieldname="lastname"
//               label="Last Name"
//               fieldtype={"text"}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={8}>
//             <CustomInputTextField
//               formik={formik}
//               fieldname="email"
//               label="Email"
//               fieldtype={"email"}
//             />
//           </Grid>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControlLabel
//             control={
//               <Checkbox checked={loginSSO} onChange={handleCheckboxChange} />
//             }
//             label="Login SSO"
//           />
//         </Grid>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             {!loginSSO && (
//               <CustomPasswordField
//                 formik={formik}
//                 fieldname="password"
//                 label="Password"
//                 fieldtype={"password"}
//               />
//             )}
//           </Grid>
//         </Grid>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth>
//               <InputLabel id="select-label">Select Option</InputLabel>
//               <Select
//                 labelId="select-label"
//                 id="select"
//                 value={formik.values.selectedOption.id}
//                 onChange={(e) => {
//                   const selectedOption = options.find(
//                     (option) => option.id === e.target.value
//                   );
//                   formik.setFieldValue(
//                     "selectedOption",
//                     selectedOption || { id: "", name: "" }
//                   );
//                 }}
//                 label="Select Option"
//               >
//                 {options.map((option) => (
//                   <MenuItem key={option.id} value={option.id}>
//                     {option.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             disabled={isSubmitDisabled}
//             style={{ display: "flex" }}
//           >
//             Submit
//           </Button>
//         </Grid>
//       </form>
//     </>
//   );
// };

// export default CompanyAdminForm;





































import { useFormik } from "formik";
import { AdminFormData, AdminEditData } from "../types";

import CustomInputTextField from "../fields/MuiFeilds";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import CustomPasswordField from "../fields/MuiPassword";
import { useState } from "react";
import MuiAutocomplete from "../fields/MuiAutocomplete";
import MuiSelect from "../fields/MuiSelect";
import CustomCheckbox from "../fields/MuiCheckBox";

const CompanyAdminForm = ({
  formData,
  label,
  validationSchema,
  onDataSubmit,
}: {
  formData: AdminFormData;
  label: string;
  validationSchema: any;
  onDataSubmit: (values: AdminFormData | AdminEditData) => void;
}) => {
  const [loginSSO, setLoginSSO] = useState(false);

  const getValidationSchema = () => {
    if (loginSSO) {
      return validationSchema.pick(["firstname", "lastname", "email"]);
    } else {
      return validationSchema;
    }
  };

  const formik = useFormik<AdminFormData>({
    initialValues: {
      ...formData,
      selectedOption: { id: "", name: "" },
      acceptTerms: false,
    },
    validationSchema: getValidationSchema,
    onSubmit: (values) => {
      onDataSubmit(values);
    },
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setLoginSSO(checked);
    formik.setFieldValue("acceptTerms", checked);
    if (checked) {
      formik.setFieldValue("password", "");
    }
  };

  const isSubmitDisabled =
    !formik.values.firstname ||
    !formik.values.lastname ||
    !formik.dirty ||
    !formik.values.email ||
    (!loginSSO && !formik.values.password);

  const options = [
    { id: "1", name: "option1" },
    { id: "2", name: "option2" },
    { id: "3", name: "option3" },
    { id: "4", name: "option4" },
  ];

  return (
    <>
      <Typography variant="h5" style={{ paddingBottom: "25px" }}>
        {label} Admin
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <CustomInputTextField
              formik={formik}
              fieldname="firstname"
              label="First Name"
              fieldtype={"text"}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomInputTextField
              formik={formik}
              fieldname="lastname"
              label="Last Name"
              fieldtype={"text"}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <CustomInputTextField
              formik={formik}
              fieldname="email"
              label="Email"
              fieldtype={"email"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomCheckbox
            checked={loginSSO}
            onChange={handleCheckboxChange}
            label="Login SSO"
          />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {!loginSSO && (
              <CustomPasswordField
                formik={formik}
                fieldname="password"
                label="Password"
                fieldtype={"password"}
              />
            )}
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MuiSelect options={options} formik={formik} />
          </Grid>
        </Grid>
        <Grid>
          <MuiAutocomplete formik={formik} array={options} />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitDisabled}
            style={{ display: "flex" }}
          >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default CompanyAdminForm;
