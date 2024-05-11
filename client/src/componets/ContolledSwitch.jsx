import { FormControl, FormLabel, Switch } from "@mui/joy";
import React from "react";
import { Controller, useWatch } from "react-hook-form";

const ContolledSwitch = ({ name, control, label, gap = 200, inputProps }) => {
  const checked = useWatch({ control, name });
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl
          orientation="horizontal"
          sx={{ maxWidth: gap, justifyContent: "space-between" }}
        >
          <FormLabel sx={{ fontWeight: 600 }}>{label}</FormLabel>
          <Switch
            {...field}
            {...inputProps}
            variant={checked ? "solid" : "outlined"}
            color={checked ? "success" : "neutral"}
            endDecorator={checked ? "Enabled" : "Disabled"}
          />
        </FormControl>
      )}
    />
  );
};

export default ContolledSwitch;
