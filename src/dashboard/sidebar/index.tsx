import { Box, Button, Divider, SidebarMenuButton } from "components";
import { loginAction } from "store/user";
import { useDispatch, useSelector } from "react-redux";
import { changeOpenState } from "store/sidebar";
import { styled, useTheme } from "@mui/material";
import { dispatchEvent } from "utils";

export const Sidebar = () => {
  const theme = useTheme();
  const sidebar = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();

  return (
    <StyledSidebarMainContainer
      flex
      column
      sx={{ width: sidebar.open ? "180px" : "48px" }}
    >
      <StyledSidebarButtonContainer flex grow gap column>
        <SidebarMenuButton route="/home" caption="home" icon="home" />
        <SidebarMenuButton
          route="/dictionaries"
          caption="dictionaries"
          icon="dictionary"
        />
      </StyledSidebarButtonContainer>
      <StyledSidebarButtonContainer flex column gap>
        <Button
          onClick={() => dispatchEvent("changeTheme")}
          sx={{ gap: "5px" }}
          variant="text"
          caption={sidebar.open && "Switch"}
          icon={theme.palette.mode === "light" ? "dark_mode" : "light_mode"}
        />
        <SidebarMenuButton
          route="/login"
          icon="logout"
          caption="logout"
          onClick={() => {
            dispatch(loginAction({ accessToken: "" }));
            return true;
          }}
        />
      </StyledSidebarButtonContainer>
      <StyledSidebarButtonContainer flex gap="5px" column>
        <Divider />
        <Button
          variant="text"
          color="inherit"
          sx={{ gap: "5px" }}
          sxIcon={{
            transform: sidebar.open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 200ms ease-in-out",
          }}
          icon="expand"
          onClick={() => {
            dispatch(changeOpenState({open: !sidebar.open}));
          }}
          caption={sidebar.open && "close"}
        />
      </StyledSidebarButtonContainer>
    </StyledSidebarMainContainer>
  );
};

const StyledSidebarButtonContainer = styled(Box)(({ theme }) => ({
  padding: "8px",
  color: theme.palette.text.primary,
}));
const StyledSidebarMainContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: "8px",
  transition: "width 100ms ease-in-out",
}));
