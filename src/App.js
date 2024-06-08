import { ColorModeContext, useMode } from "./scenes/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/dashboard/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/dashboard/global/Sidebar";
// import User from "./scenes/dashboard";
// import  FAQ from "./scenes/dashboard";
// import UserManager from ".scenes/dashboard";


function App() {
  const [theme,colorMode] = useMode();

  return ( <ColorModeContext.Provider value ={colorMode}>
    <ThemeProvider theme ={theme}>
      <CssBaseline/>
     <div className="app">
      <Sidebar/>
      <main claseName="content">
        <Topbar/>
        <Routes>
        <Route path ="/" element = {<Dashboard/>}/>
        {/* <Route path ="/" element = {<User/>}/>
        <Route path ="/" element = {<FAQ/>}/>
        <Route path ="/" element = {<UserManager/>}/> */}
       </Routes>

      </main>
      </div>
      </ThemeProvider>

  </ColorModeContext.Provider>
   
  );
}



export default App;
