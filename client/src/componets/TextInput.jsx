import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import React from "react";
import { Controller } from "react-hook-form";

const TextInput = ({ name, label, control, inputProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          {label && <FormLabel sx={{ fontWeight: 600 }}>{label}</FormLabel>}
          <Input fullWidth {...field} error={!!error} {...inputProps} />
          <FormHelperText
            sx={{ color: "red", fontSize: "10px" }}
            color="warning"
          >
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default TextInput;
