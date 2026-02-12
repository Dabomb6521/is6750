// TopBar.jsx
import React, { useContext } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { MessagesContext } from "../../store/MessagesStore";
import { titleCase } from "../../utils/miscUtils";

const drawerWidth = 240;

const TopBar = () => {

    // Get all the channels, get the current channelId
  const { currentChannel, channels } = useContext(MessagesContext);

// Filter to the correct channelId
  const channelName = channels.filter(
    (channel) => channel.id === currentChannel,
  )[0];

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`, // margin left so it doesn’t cover sidebar
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
            {/* Title Case the channel name */}
          {channelName ? titleCase(channelName.name) : "Loading..."}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
