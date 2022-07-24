import { createTheme, CssBaseline, ThemeProvider, Typography, useTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyle = makeStyles(()=>({
    text: {
        color: "blue"
    }
}))

const App = () => {
    const classes = useStyle()
    const [state, setState] = useState(false)
    const theme = useTheme()
    console.log(theme);
    
    return ( 
        <div onClick={()=>setState(true)}>
            {state ? "true" : "false"}
            <Typography className={classes.text} >Hello</Typography>
        </div>
    )
}


export default App;