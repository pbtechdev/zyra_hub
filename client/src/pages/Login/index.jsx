import React, { useState } from "react";
import { Box, Button, IconButton, Sheet } from "@mui/joy";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import TextInput from "../../componets/TextInput";
import { loginSchema } from "../../utils/schemas";

import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

const Login = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    if (data.userName === "admin" && data.password === "12345") {
      const user = {
        name: "phani",
        email: "phanindrababu888@gamil.com",
        profieImg:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.linkedin.com%2Fin%2Fphanindra-babu-angadala-290274261&psig=AOvVaw2eTyK4CFtuJ3uQ5q6024Ad&ust=1715238479253000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKD3y7O__YUDFQAAAAAdAAAAABAE",
      };
      dispatch(setUser(user));
      navigate("/", { replace: true });
    }
  };
  return (
    <Box
      sx={{
        height: "100dvh",
        width: "100dvw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        color="neutral"
        variant="soft"
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          p: 4,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ width: 200, pb: 2 }}>
          <img src={logo} alt="Logo" />
        </Box>
        <Box sx={{ py: 1 }}>
          <TextInput
            name="userName"
            control={control}
            inputProps={{
              placeholder: "Username",
              startDecorator: <PersonIcon />,
              endDecorator: <IconButton disabled></IconButton>,
            }}
          />
        </Box>
        <Box sx={{ py: 1 }}>
          <TextInput
            name="password"
            control={control}
            inputProps={{
              placeholder: "Password",
              startDecorator: <LockIcon />,
              endDecorator: (
                <IconButton onClick={() => setShowPwd((prev) => !prev)}>
                  {showPwd ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              ),
              type: showPwd ? "text" : "password",
            }}
          />
        </Box>
        <Button type="submit" sx={{ mx: 1, mt: 1 }} fullWidth>
          Log in
        </Button>
        <Box
          sx={{
            alignSelf: "end",
            fontSize: "12px",
            fontWeight: 700,
            color: (theme) => theme.vars.palette.primary[500],
            pt: 1,
          }}
        >
          <Link to="/forget-password">Forgot password?</Link>
        </Box>
      </Sheet>
    </Box>
  );
};

export default Login;
