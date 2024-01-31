import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"


const MuiSelect = ({options,formik}:{options:{id:string;name:string}[];formik:any}) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="select-label">Select Option</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={formik.values.selectedOption.id}
          onChange={(e) => {
            const selectedOption = options.find(
              (option) => option.id === e.target.value
            );
            formik.setFieldValue(
              "selectedOption",
              selectedOption || { id: "", name: "" }
            );
          }}
          label="Select Option"
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MuiSelect
