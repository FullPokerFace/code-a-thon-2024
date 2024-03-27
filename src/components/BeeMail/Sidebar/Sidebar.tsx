import { Avatar, Box, Typography } from "@mui/material";
import Logo from "../../Logo/Logo";
import { HPanel } from "../../shared/Panel/Panel";
import avatar from "../../../../public/avatar.png";
import { grey } from "@mui/material/colors";
import "./Sidebar.scss";
import { VFlex } from "../../shared/Layout/Flex/Flex";
import Navigation from "../Navigation/Navigation";
import GoBackButton from "../GoBack/GoBack";

const Sidebar = () => {
  return (
    <VFlex className="sidebar">
      <GoBackButton />
      <Logo />
      <HPanel>
        <Avatar alt="avatar" src={avatar} />
        <Box display={"flex"} flexDirection={"column"} gap={0}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Vardan Melkumyan
          </Typography>
          <Typography variant="caption" color={grey[600]}>
            dan@beemail.com
          </Typography>
        </Box>
      </HPanel>
      <Navigation />
    </VFlex>
  );
};

export default Sidebar;
