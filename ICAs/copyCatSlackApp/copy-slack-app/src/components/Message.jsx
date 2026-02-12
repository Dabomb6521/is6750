import { Paper, Typography } from "@mui/material";

const Message = ({ msg }) => {
  // TO DO: Set this up to use the current profile. Right now it is hard coded to User 1

  return (
    <Paper
      sx={{
        p: 1,
        maxWidth: "60%",
        alignSelf: msg.senderId === "1" ? "flex-end" : "flex-start",
        bgcolor: msg.senderId === "1" ? "primary.main" : "grey.300",
        color: msg.senderId === "1" ? "white" : "black",
      }}
    >
      <Typography variant="body1">{msg.content}</Typography>
      {/* TO DO: Replace with User's name */}
      <Typography variant="subtitle1">{msg.senderId}</Typography>
    </Paper>
  );
};

export default Message;
