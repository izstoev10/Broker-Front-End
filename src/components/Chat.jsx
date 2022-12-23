import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Fab,
  Zoom
} from '@mui/material';
import ChatIcon from '@mui/icons-material/ChatOutlined';

function Chat() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Zoom in={!open}>
        <Fab
          onClick={handleClick}
          color="secondary"
          aria-label="add"
          className={{
            position: "absolute",
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto'
          }}
        >
          <ChatIcon />
        </Fab>
      </Zoom>
      <AppBar position="fixed" className={{
        top: 'auto',
        bottom: 0,
        right: 0,
        left: 'auto',
        position: 'fixed'
      }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={handleClick}
          >
            <ChatIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Chat
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Chat;