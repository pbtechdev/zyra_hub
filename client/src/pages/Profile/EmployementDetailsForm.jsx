import React from "react";

import DetailsFormTemplate from "../../componets/DetailsFormTemplate";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Button, Stack } from "@mui/joy";
import TextInput from "../../componets/TextInput";
import { useForm } from "react-hook-form";

const EmployementDetailsForm = () => {
  const { control } = useForm();
  return (
    <DetailsFormTemplate
      title="Employement details"
      description="Employement details of the employee"
      startActions={
        <Button variant="soft" startDecorator={<EditRoundedIcon />}>
          Edit
        </Button>
      }
      endActions={
        <Stack
          direction="row"
          gap={2}
          p={2}
          sx={{ justifyContent: "flex-end" }}
        >
          <Button>Save</Button>
        </Stack>
      }
    >
      <Stack gap={1} p={2}>
        <TextInput
          name="employeeId"
          label="Employee id"
          control={control}
          inputProps={{ placeholder: "00" }}
        />
        <TextInput
          name="Companyemail"
          label="Personal email"
          control={control}
          inputProps={{ placeholder: "example@gmail.com" }}
        />
        <TextInput
          name="dateOfJoining"
          label="Date of joining"
          control={control}
          inputProps={{ type: "date" }}
        />
        <TextInput
          name="role"
          label="Role"
          control={control}
          inputProps={{ placeholder: "Ex:- React developer" }}
        />
        <TextInput
          name="department"
          label="Department"
          control={control}
          inputProps={{ placeholder: "IT" }}
        />
        <TextInput
          name="department"
          label="Team"
          control={control}
          inputProps={{ placeholder: "Team name" }}
        />
        <TextInput
          name="manager"
          label="TL/Manager"
          control={control}
          inputProps={{ placeholder: "HR" }}
        />
      </Stack>
    </DetailsFormTemplate>
  );
};

export default EmployementDetailsForm;
