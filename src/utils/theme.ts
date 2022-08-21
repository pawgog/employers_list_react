import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        info: {
            main: grey[800],
            contrastText: '#fff',
        },
    },
});

export const fontLarge = {
    fontSize: '1.2rem',
};

export const fontRegular = {
    fontSize: '0.7rem',
};
