import React, { Fragment, useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useLocation, useNavigate } from "react-router-dom";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { closeSidebar } from "../utils/layoutUtils";
import getNavList from "../utils/getNavList";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/joy/styles";
import { resetUser } from "../redux/userSlice";

const StyledTypograpy = styled(Typography)(() => ({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
}));

function Toggler({ defaultExpanded = false, renderToggle, children }) {
  const [open, setOpen] = useState(defaultExpanded);

  return (
    <Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "0.2s ease",
          "& > *": {
            overflow: "hidden",
          },
        }}
      >
        {children}
      </Box>
    </Fragment>
  );
}

export default function Sidebar() {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);
  const navList = getNavList();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(resetUser());
    navigate("/login");
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          px: 3,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Logo" />
      </Box>
      <Divider />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {navList.map((item) => {
            if (item?.subNavs?.length > 0) {
              return (
                <ListItem key={item.id} nested>
                  <Toggler
                    renderToggle={({ open, setOpen }) => (
                      <ListItemButton onClick={() => setOpen(!open)}>
                        <item.Icon />
                        <ListItemContent>
                          <Typography level="title-sm">{item.title}</Typography>
                        </ListItemContent>
                        <KeyboardArrowDownIcon
                          sx={{ transform: open ? "rotate(180deg)" : "none" }}
                        />
                      </ListItemButton>
                    )}
                  >
                    <List sx={{ gap: 0.5 }}>
                      {item.subNavs.map((subItem) => {
                        return (
                          <ListItem
                            key={subItem.id}
                            sx={{ mt: subItem.id == 1 ? 0.5 : 0 }}
                          >
                            <ListItemButton
                              onClick={() => navigate(subItem.navTo)}
                              selected={pathname === subItem.navTo}
                            >
                              {subItem.title}
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Toggler>
                </ListItem>
              );
            }

            return (
              <ListItem key={item.id}>
                <ListItemButton
                  selected={pathname === item.navTo}
                  onClick={() => navigate(item.navTo)}
                >
                  <item.Icon />
                  <ListItemContent>
                    <Typography level="title-sm">{item.title}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Avatar variant="outlined" size="sm" src={user.profileImg} />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <StyledTypograpy level="title-sm">{user.name}</StyledTypograpy>
          <StyledTypograpy level="body-xs">{user.email}</StyledTypograpy>
        </Box>
        <IconButton
          onClick={handleLogout}
          size="sm"
          variant="plain"
          color="neutral"
          title="Logout"
        >
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
