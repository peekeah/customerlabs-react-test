import React, { useState } from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';
function SelectComponent({fields}) {
    console.log(fields)
    const [value, setValue] = useState("");

    const handleChange = (e) => {

    }
  return (
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Add Schema to segment</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    label="Add Schema to segment"
    onChange={handleChange}
  >
    <MenuItem value="" disabled> -- select an option -- </MenuItem>
  { 
    fields.map((s, id) => (
    <MenuItem key={id} value={s.value}>{s.label}</MenuItem>

    ))
  }
  </Select>
</FormControl>
  )
}

export default SelectComponent