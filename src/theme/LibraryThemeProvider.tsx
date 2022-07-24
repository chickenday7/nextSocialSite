import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import React , { FC } from "react";


interface ILibraryThemeProvider {
    children?: React.ReactNode;
    theme: Theme
}




const LibraryThemeProvider:FC<ILibraryThemeProvider> = ({children, theme}) => {   
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}

export default LibraryThemeProvider