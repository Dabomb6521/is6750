// Sidebar.jsx
import { useContext } from "react";
import {
  Drawer,
  List,
  ListItemText,
  Toolbar,
  Divider,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

import { Mail, MailLock } from "@mui/icons-material";
import { MessagesContext } from "../../store/MessagesStore";

const drawerWidth = 240;

const Sidebar = () => {
  const { channels, currentChannel, setCurrentChannel } =
    useContext(MessagesContext);

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar>User Toggle Here</Toolbar>
        <Divider />
        <List>
          {/* Display all channels and allow updating */}
          {channels.map((item) => (
            <ListItemButton
              key={item.id}
              selected={currentChannel === item.id}
              onClick={() => setCurrentChannel(item.id)}
            >
              {/* Choose Icon based on channel type */}
              <ListItemIcon>
                {item.type === "public" ? <Mail /> : <MailLock />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
