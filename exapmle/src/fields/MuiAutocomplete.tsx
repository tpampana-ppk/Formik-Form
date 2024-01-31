import React from "react";
import { Autocomplete, Checkbox, TextField } from "@mui/material";

interface arrayType {
  id:string;
  name:string;
}
interface MuiAutocompleteProps {
  formik: any;
  array: arrayType[];
}

const MuiAutocomplete: React.FC<MuiAutocompleteProps> = ({ formik, array }) => {

  const handleAutocompleteChange = (_: any, newValue: any) => {
    formik.setFieldValue("countries", newValue);
  };

  const isOptionEqualToValue = (option: any, value: any) => option.id === value.id;

  return (
    <div>
      <Autocomplete
        options={array}
        disableCloseOnSelect
        multiple
        getOptionLabel={(option: arrayType) => option.name}
        onChange={handleAutocompleteChange}
        isOptionEqualToValue={isOptionEqualToValue}
        value={formik.values.countries}
        renderOption={(props, option: any, { selected }) => (
          <li {...props}>
            <Checkbox style={{ marginRight: 8 }} checked={selected} />
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select"
            size="small"
            placeholder="Select"
          />
        )}
      />
    </div>
  );
};

export default MuiAutocomplete;
