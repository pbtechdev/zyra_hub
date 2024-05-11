import React from "react";
import { Card, CardContent, Divider, Typography } from "@mui/joy";

const ContentCard = ({ title, children }) => {
  return (
    <Card sx={{ minWidth: "49%" }}>
      <Typography level="title-lg">{title}</Typography>
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ContentCard;
