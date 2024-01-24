// import React from "react";
// import { useFormik } from "formik";

// import * as Yup from "yup";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// const roleOptions = [
//   { id: "1", name: "Admin" },
//   { id: "2", name: "User" },
//   { id: "3", name: "Guest" },
// ];

// interface MyFormProps {
//   formData: {
//     username: string;
//     password: string;
//     roles: Array<{ id: string; name: string }>;
//   };
//   onInputSubmit: (values: any) => void;
// }

// const MyForm: React.FC<MyFormProps> = ({ formData, onInputSubmit }) => {
//   const formik = useFormik({
//     initialValues: formData,
//     validationSchema: Yup.object({
//       username: Yup.string().required("Username is required"),
//       password: Yup.string().required("Password is required"),
//       roles: Yup.array().min(1, "Select at least one role"),
//     }),
//     onSubmit: (values) => {
//       onInputSubmit(values);
//     },
//   });

//   const selectedRoles = roleOptions.filter(
//     (option) =>
//       !formData.roles.some((selectedRole) => selectedRole.id === option.id)
//   );

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h5">Sign up</Typography>
//         <form onSubmit={formik.handleSubmit} noValidate>
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Username"
//             variant="outlined"
            
//             required
//             {...formik.getFieldProps("username")}
//             error={formik.touched.username && Boolean(formik.errors.username)}
//             helperText={formik.touched.username && formik.errors.username}
//           />
//           <TextField
//             margin="normal"
//             fullWidth
//             label="Password"
//             type="password"
//             variant="outlined"
//             required
//             {...formik.getFieldProps("password")}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
//           />
//           <Autocomplete
//             multiple
//             options={selectedRoles}
//             getOptionLabel={(option) => option.name}
//             value={formik.values.roles}
//             onChange={(_, newValues) =>
//               formik.setFieldValue("roles", newValues)
//             }
//             renderInput={(params) => (
//               <TextField
//                 {...params}
//                 label="Roles"
//                 variant="outlined"
//                 required
//                 error={formik.touched.roles && Boolean(formik.errors.roles)}
//               />
//             )}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign Up
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default MyForm;
























import React from "react";
import { useFormik } from "formik";

import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const roleOptions = [
  { id: "1", name: "Admin" },
  { id: "2", name: "User" },
  { id: "3", name: "Guest" },
];

interface MyFormProps {
  formData: {
    username: string;
    password: string;
    roles: Array<{ id: string; name: string }>;
  };
  onInputSubmit: (values: any) => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  formData,
  onInputSubmit,
  onInputChange,
}) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
      roles: Yup.array().min(1, "Select at least one role"),
    }),
    onSubmit: (values) => {
      onInputSubmit(values);
    },
  });

  const selectedRoles = roleOptions.filter(
    (option) =>
      !formData.roles.some((selectedRole) => selectedRole.id === option.id)
  );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Sign up</Typography>
        <form onSubmit={formik.handleSubmit} noValidate>
          <TextField
            margin="normal"
            fullWidth
            label="Username"
            variant="outlined"
            required
            {...formik.getFieldProps("username")}
            onChange={onInputChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            required
            {...formik.getFieldProps("password")}
            onChange={onInputChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Autocomplete
            multiple
            options={selectedRoles}
            getOptionLabel={(option) => option.name}
            value={formik.values.roles}
            onChange={(_, newValues) =>
              formik.setFieldValue("roles", newValues)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Roles"
                variant="outlined"
                required
                onChange={onInputChange}
                error={formik.touched.roles && Boolean(formik.errors.roles)}
              />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default MyForm;
