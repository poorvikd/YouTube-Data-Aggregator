import React from 'react';
import { AppBar, CssBaseline, Toolbar } from '@mui/material'
import logo from './static/images/logo/logo2.png';
import Body from './components/Body';





const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" sx={{ bgcolor: "#1C2120" }}>
                <Toolbar>
                    <img src={logo} alt="Tube Insights" height="50" width="50" />
                </Toolbar>
            </AppBar>
            <Body sx={{width: "100%"}}/>
            
        </>
    );
}

export default App;
