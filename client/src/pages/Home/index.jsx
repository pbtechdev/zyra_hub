import React from "react";
import { Box, Stack, Typography, styled } from "@mui/joy";
import dayjs from "dayjs";
import ContentCard from "./ContentCard";

const birthdaysList = [
  {
    name: "Angadala phanindra babu",
    dob: "2008-11-11T13:23:444",
  },
  {
    name: "Aneena",
    dob: "2008-11-12T13:23:444",
  },
  {
    name: "Eshma",
    dob: "2008-11-13T13:23:444",
  },
  {
    name: "Gandhara",
    dob: "2008-11-14T13:23:444",
  },
];

const leaves = {
  team: ["phanindra babu", "Aneena", "Eshma", "Gandhara"],
  company: ["phanindra babu", "Aneena", "Eshma", "Gandhara"],
};

const holidaysList = [
  {
    date: "2008-08-15T13:23:444",
    occasion: "Independence Day",
  },
  {
    date: "2008-09-31T13:23:444",
    occasion: "Naraka Chaturdashi",
  },
  {
    date: "2008-12-15T13:23:444",
    occasion: "Christmas",
  },
];

const CenteredDiv = styled(Box)(() => ({
  padding: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Home = () => {
  return (
    <Stack sx={{ width: "100%" }} gap={3}>
      <Stack gap={3} direction="row">
        <ContentCard title="Birthdays">
          {birthdaysList?.length > 0 ? (
            birthdaysList.map((item) => {
              return (
                <Box p={1} mb={1}>
                  <Typography level="title-sm" fontWeight={600}>
                    {dayjs(item?.dob).format("DD-MMM")}
                  </Typography>
                  <Typography level="body-sm">{item?.name}</Typography>
                </Box>
              );
            })
          ) : (
            <CenteredDiv>No Birthdays Today</CenteredDiv>
          )}
        </ContentCard>
        <ContentCard title="On Leave">
          <Typography level="title-sm" fontWeight={600}>
            Your team
          </Typography>
          {leaves.team?.length > 0 ? (
            leaves.team.map((item) => {
              return <Typography level="body-sm">{item}</Typography>;
            })
          ) : (
            <CenteredDiv>No Leaves from your team</CenteredDiv>
          )}
          <Typography pt={4} level="title-sm" fontWeight={600}>
            Your Company
          </Typography>
          {leaves.company?.length > 0 ? (
            leaves.company.map((item) => {
              return <Typography level="body-sm">{item}</Typography>;
            })
          ) : (
            <CenteredDiv>No Leaves</CenteredDiv>
          )}
        </ContentCard>
      </Stack>
      <Stack gap={3} direction="row">
        <ContentCard title="Upcoming Holidays">
          {holidaysList?.length > 0 ? (
            holidaysList.map((item) => {
              return (
                <Box p={1} mb={1}>
                  <Typography level="title-sm" fontWeight={600}>
                    {dayjs(item?.date).format(" ddd, DD-MMM-YYYY")}
                  </Typography>
                  <Typography level="body-sm">{item?.occasion}</Typography>
                </Box>
              );
            })
          ) : (
            <CenteredDiv>No Holidays</CenteredDiv>
          )}
        </ContentCard>
      </Stack>
    </Stack>
  );
};

export default Home;
