import React from "react";
import { Box, Stack } from "@mui/joy";

import PageHeader from "../../componets/PageHeader";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EmployementDetailsForm from "./EmployementDetailsForm";
import PaymentInfoForm from "./PaymentInfoForm";

const Profile = () => {
  return (
    <Box>
      <PageHeader>My Profile</PageHeader>

      <Stack gap={4} sx={{ px: { xs: 2, sm: 4, md: 4, lg: 22 } }}>
        <PersonalDetailsForm />
        <EmployementDetailsForm />
        <PaymentInfoForm />
      </Stack>
    </Box>
  );
};

export default Profile;
