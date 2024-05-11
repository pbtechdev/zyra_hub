import React from "react";
import { AspectRatio, IconButton, Stack } from "@mui/joy";

import EditRoundedIcon from "@mui/icons-material/EditRounded";

const ProfilePicUploader = () => {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{ maxHeight: 120, maxWidth: 120, position: "relative" }}
    >
      <AspectRatio
        ratio="1"
        maxHeight={200}
        sx={{
          flex: 1,
          minWidth: 120,
          borderRadius: "100%",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <IconButton
        aria-label="upload new picture"
        size="sm"
        variant="outlined"
        color="neutral"
        sx={{
          bgcolor: "background.body",
          position: "absolute",
          zIndex: 2,
          borderRadius: "50%",
          left: 90,
          top: 80,
          boxShadow: "sm",
        }}
      >
        <EditRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default ProfilePicUploader;
