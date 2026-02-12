// MessagesArea.jsx
import React, { useContext} from "react";
import { Box } from "@mui/material";
import Message from "../Message";
import { MessagesContext } from "../../store/MessagesStore";

const drawerWidth = 240;
const topBarHeight = 64; // MUI default AppBar height

const MessagesArea = () => {

  const {getMessagesByChannel,currentChannel} = useContext(MessagesContext);

  const data = getMessagesByChannel(currentChannel);

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: `calc(100vh - ${topBarHeight + 56}px)`, // TopBar + TypingBar
        ml: `${drawerWidth}px`, // offset for sidebar
        mt: `${topBarHeight}px`, // offset for TopBar
      }}
    >

      
        {data.map(msg=><Message msg={msg} key={msg.id}/>)}
      
    </Box>
  );
};

export default MessagesArea;
