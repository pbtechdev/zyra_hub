import React from "react";
import { Autocomplete, FormControl, FormHelperText, FormLabel } from "@mui/joy";
import { Controller } from "react-hook-form";

const Dropdown = ({
  name,
  control,
  label,
  options,
  placeholder,
  getOptionLabel,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          <FormLabel sx={{ fontWeight: 600 }}>{label}</FormLabel>
          <Autocomplete
            {...field}
            error={!!error}
            placeholder={placeholder}
            options={options}
            getOptionLabel={getOptionLabel}
          />
          {!!error && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export default Dropdown;
