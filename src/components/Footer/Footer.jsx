import { IconsList, NewPostIcon, StyledFooter } from "./StyledFooter";
import styled from "styled-components";
import {
  LibraryBooksOutlined,
  SearchOutlined,
  NotificationsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { LibraryBooks, Search, Notifications, AccountCircle } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";

export default function Footer() {
  const icons = [
    {
      id: 1,
      label: "Feed",
      fill: <LibraryBooks style={{ color: "white" }} />,
      outline: <LibraryBooksOutlined />,
      path: "/home/feed",
    },
    {
      id: 2,
      label: "Search",
      fill: <Search style={{ color: "white" }} />,
      outline: <SearchOutlined />,
      path: "/home/search",
    },
    {
      id: 3,
      label: "Notifications",
      fill: <Notifications style={{ color: "white" }} />,
      outline: <NotificationsOutlined />,
      path: "/home/notifications",
    },
    {
      id: 4,
      label: "Account",
      fill: <AccountCircle style={{ color: "white" }} />,
      outline: <AccountCircleOutlined />,
      path: "/home/account",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();

  function clicked() {
    navigate("/posts/new");
  }

  return (
    <StyledFooter>
      <IconsList>
        {icons.map((icon) => {
          return (
            <Link key={icon.id} to={icon.path}>
              {location.pathname.startsWith(icon.path) ? icon.fill : icon.outline}
            </Link>
          );
        })}
        <NewPostIcon>
          <AddCircle onClick={clicked} />
        </NewPostIcon>
      </IconsList>
    </StyledFooter>
  );
}
