import React from "react";
import { Box, Divider, Sheet, Stack, Typography } from "@mui/joy";

const DetailsFormTemplate = ({
  title,
  description,
  children,
  startActions,
  endActions,
}) => {
  return (
    <div>
      <Sheet variant="outlined" sx={{ borderRadius: 6 }}>
        <Stack
          sx={{
            mb: 1,
            p: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography level="title-md" fontWeight={700}>
              {title}
            </Typography>
            <Typography level="body-sm">{description}</Typography>
          </Box>
          <Box>{startActions}</Box>
        </Stack>
        <Divider />
        {children}
        {endActions && <Divider />}
        {endActions}
      </Sheet>
    </div>
  );
};

export default DetailsFormTemplate;
