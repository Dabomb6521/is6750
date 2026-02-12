// TypingBar.jsx
import { Paper, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const drawerWidth = 240;

const TypingBar = () => {
//   TO DO: Everything

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: `${drawerWidth}px`, // offset from sidebar
        right: 0,
        p: 1,
        display: "flex",
        gap: 1,
        alignItems: "center",
      }}
      elevation={3}
    >
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        placeholder="Type a message..."
      />
      <IconButton color="primary">
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default TypingBar;
