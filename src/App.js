import React, { useState } from "react";
import { ColorModeContext, useMode, tokens } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import Topbar from "./scenes/global/Topbar";
import TheSidebar from "./scenes/global/TheSidebar";
import Tenants from "./scenes/tenants";
// import Invoices from "./scenes/global/Invoices";
// import Contacts from "./scenes/global/Contacts";
// import Bar from "./scenes/global/Bar";
// import From from "./scenes/global/From";
// import Line from "./scenes/global/Line";
// import Pie from "./scenes/global/Pie";
// import FAQ from "./scenes/global/FAQ";
// import Geography from "./scenes/global/Geography";
// import Calendar from "./scenes/global/Calendar";
import Dashboard from "./scenes/dashboard";
import Chat from "./components/Chat";
import {
  Paper,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Avatar,
  Card,
  CardContent,
  CardActions,
  ListItemText,
  ListItemAvatar,
  Divider
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { padding } from "@mui/system";

function App() {
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [showList, setShowList] = useState(false);

  function toggleList() {
    setShowList(!showList);
  }

  function handleClick() {}

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <TheSidebar isSidebar={isSidebar} />
          </ProSidebarProvider>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tenants" element={<Tenants />} />
              {/*<Route path="/contacts" element={<Contacts/>} />
                <Route path="/invoices" element={<Invoices/>} />
                <Route path="/form" element={<Form/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="/faq" element={<FAQ/>} />
                <Route path="/geography" element={<Geography/>} />
                <Route path="/calendar" element={<Calendar/>} /> */}
            </Routes>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                right: 0,
                padding: 1,
                width: 300,
              }}
            >
              <Card>
                <Card
                  sx={{ backgroundColor: colors.primary[400] }}
                  variant="outlined"
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: 'center',
                      height: 50
                    }}
                  >
                    <Avatar src="https://pbs.twimg.com/profile_images/1234567890/avatar.jpg" />
                    <Typography
                      padding={1}
                      variant="h6"
                    >
                      Messages
                    </Typography>
                    <Button
                      sx={{  marginLeft: 8 }}
                      size="small"
                      variant="outlined"
                      color="info"
                      onClick={toggleList}
                    >
                      {showList ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                    </Button>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
                <Card>
                  {showList && (
                    <List>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar src="https://pbs.twimg.com/profile_images/1234567890/avatar.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="User 1"
                          secondary="Hello, how are you doing?"
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar src="https://pbs.twimg.com/profile_images/1234567890/avatar.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="John Doe"
                          secondary="Hello, I'm looking for a .Net Developer..."
                        />
                      </ListItem>
                    </List>
                  )}
                </Card>
              </Card>
            </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
