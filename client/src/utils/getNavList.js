import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AttendanceIcon from '@mui/icons-material/Article';
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import BadgeIcon from '@mui/icons-material/Badge';

const getNavList = () => {
    return [
        {
            id: 1,
            title: "Home",
            Icon: HomeRoundedIcon,
            navTo: "/"
        },
        {
            id: 2,
            title: "Attendance",
            Icon: AttendanceIcon,
            navTo: "/attendance"
        },
        {
            id: 3,
            title: "Users",
            Icon: GroupRoundedIcon,
            subNavs: [
                {
                    id: 1,
                    title: "My profile",
                    navTo: "/users/profile"
                },
                {
                    id: 2,
                    title: "Add an user",
                    navTo: "/users/create-new-user"
                },
                {
                    id: 3,
                    title: "Roles & permissions",
                    navTo: "/users/roles"
                }
            ]
        },
        {
            id: 4,
            title: "Onboarding",
            Icon: BadgeIcon,
            navTo: "/onboarding"
        },
    ]
}

export default getNavList;