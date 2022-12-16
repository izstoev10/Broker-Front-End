

import { useState } from "react";
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import Topbar from "./scenes/global/Topbar";
import TheSidebar from "./scenes/global/TheSidebar"
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

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

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
                <Route path="/" element={<Dashboard/>} />
                <Route path="/tenants" element={<Tenants/>} />
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
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;