import { Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { MessagesContext } from "../store/MessagesStore";

const Message = ({ msg }) => {
  // TO DO: Set this up to use the current profile. Right now it is hard coded to User 1
  const { users, currentUser } = useContext(MessagesContext);

  const sender = users.find((user) => user.id === msg.senderId);
  const isCurrentUser = msg.senderId === currentUser.id;

  return (
    <Paper
      sx={{
        p: 1,
        maxWidth: "60%",
        alignSelf: isCurrentUser ? "flex-end" : "flex-start",
        bgcolor: isCurrentUser ? "primary.main" : "grey.300",
        color: isCurrentUser ? "white" : "black",
      }}
    >
      <Typography variant="body1">{msg.content}</Typography>
      <Typography variant="subtitle1">- {sender?.name ?? "Unkown"}</Typography>
    </Paper>
  );
};

export default Message;
