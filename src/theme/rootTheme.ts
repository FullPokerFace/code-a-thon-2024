import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const font = "'Roboto', sans-serif";

const theme = createTheme({
    components: {
        MuiTypography: {
            defaultProps: {
                fontFamily: font,
                color: 'red'
            },
        },
    },
});

export default theme;