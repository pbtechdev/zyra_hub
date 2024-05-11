import React from "react";
import DetailsFormTemplate from "../../componets/DetailsFormTemplate";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Button, Stack } from "@mui/joy";
import TextInput from "../../componets/TextInput";
import { useForm } from "react-hook-form";
import ContolledSwitch from "../../componets/ContolledSwitch";

const PaymentInfoForm = () => {
  const { control } = useForm();
  return (
    <DetailsFormTemplate
      title="PF & Bank details"
      description="PF & Bank details of the employee"
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
          name="panNumber"
          label="PAN"
          control={control}
          inputProps={{ placeholder: "abcd1234n" }}
        />
        <TextInput
          name="ifscCode"
          label="IFSC Code"
          control={control}
          inputProps={{ placeholder: "123456789" }}
        />
        <TextInput
          name="accountNumber"
          label="Account number"
          control={control}
          inputProps={{ placeholder: "123456789" }}
        />
        <TextInput
          name="beneficaryName"
          label="Beneficary name"
          control={control}
          inputProps={{ placeholder: "mother/father/spouse name" }}
        />
        <ContolledSwitch name="pfStatus" control={control} label="PF Status" />
      </Stack>
    </DetailsFormTemplate>
  );
};

export default PaymentInfoForm;
