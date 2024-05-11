import React from "react";
import { FormControl, FormHelperText, FormLabel, Textarea } from "@mui/joy";
import { Controller } from "react-hook-form";

const TextAreaInput = ({ name, label, control, inputProps }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl>
          {label && <FormLabel sx={{ fontWeight: 600 }}>{label}</FormLabel>}
          <Textarea
            minRows={3}
            fullWidth
            {...field}
            error={!!error}
            {...inputProps}
          />
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

export default TextAreaInput;
