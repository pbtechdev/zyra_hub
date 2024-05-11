import React from "react";
import { Box, Button, Stack, Typography } from "@mui/joy";
import { useForm } from "react-hook-form";

import ProfilePicUploader from "../../componets/ProfilePicUploader";
import TextInput from "../../componets/TextInput";
import TextAreaInput from "../../componets/TextAreaInput";
import DetailsFormTemplate from "../../componets/DetailsFormTemplate";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Dropdown from "../../componets/Dropdown";

const PersonalDetailsForm = () => {
  const { control } = useForm();
  return (
    <DetailsFormTemplate
      title="Personal details"
      description="Personal details of the employee"
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
      <Stack sx={{ flexDirection: { xs: "column", md: "row" }, p: 2 }}>
        <Box sx={{ pt: 4, display: "flex", justifyContent: "center" }}>
          <ProfilePicUploader />
        </Box>
        <Box sx={{ flex: 1, px: { xs: 2, md: 4 }, py: 2 }} flex={1}>
          <Typography fontWeight={600} pb={0.8} level="title-sm">
            Name
          </Typography>
          <Stack
            sx={{ flexDirection: { xs: "column", md: "row" }, mb: 1 }}
            gap={2}
          >
            <Box sx={{ flex: 1 }}>
              <TextInput
                name="firstName"
                inputProps={{ placeholder: "First name" }}
                control={control}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextInput
                name="lastName"
                inputProps={{ placeholder: "Last name" }}
                control={control}
              />
            </Box>
          </Stack>
          <Stack direction="row" mb={1} gap={2}>
            <Box flex={1}>
              <TextInput
                name="dateOfBirth"
                label="Date of birth"
                control={control}
                inputProps={{ type: "date" }}
              />
            </Box>
            <Typography level="title-md" fontWeight={600} pt={4}>
              20 Yrs
            </Typography>
          </Stack>
          <Box mb={1}>
            <Dropdown
              label="Gender"
              name="gender"
              control={control}
              getOptionLabel={(option) => option.label}
              options={[
                { label: "Male", value: "MALE" },
                { label: "Female", value: "FEMALE" },
                { label: "Others", value: "OTHERS" },
              ]}
            />
          </Box>
          <TextInput
            name="personalEmail"
            label="Personal email"
            control={control}
            inputProps={{ sx: { mb: 1 }, placeholder: "example@gmail.com" }}
          />
          <TextInput
            name="contact.number"
            label="Phone"
            control={control}
            inputProps={{ sx: { mb: 1 }, placeholder: "0000000000" }}
          />
          <TextAreaInput
            name="contact.address"
            label="Address"
            control={control}
            inputProps={{ sx: { mb: 1 } }}
          />
        </Box>
      </Stack>
    </DetailsFormTemplate>
  );
};

export default PersonalDetailsForm;
