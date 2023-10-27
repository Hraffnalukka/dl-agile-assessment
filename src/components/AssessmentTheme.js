import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: '#f1ceff',
        },
        text: {
            primary: '#003971',
            disabled: '#93b1c8',
            secondary: '#ffffff',
        },
    },
    typography: {
        h6: {
            fontFamily: 'DINNextLTPro-Bold, Roboto, sans-serif',
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
        },
        h4: {
            fontFamily: 'Caveat, Roboto, sans-serif',
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: 'Caveat, Roboto, sans-serif',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: 'Caveat, Roboto, sans-serif',
        },
        body1: {
            fontSize: 14,
        },
        fontFamily: 'DINNextLTPro-Regular, Roboto, sans-serif',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: '10px',
        color: '#6BF3BF',
        backgroundColor: '#003971',
        height: '64px',
    },
    components: {
        MuiStack: {
            styleOverrides: {
                root: {
                    marginTop: 4,
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    backgroundColor: '#dee5ec',
                    borderColor: 'divider',
                    padding: '16px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    margin: 'auto',
                    fontFamily: 'DIN, Roboto, sans-serif',
                    fontWeight: 'bold',
                    fontSize: 32,
                    textAlign: 'center',
                    padding: '10px',
                    color: '#6BF3BF',
                    backgroundColor: '#003971',
                    height: '64px',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {

            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    textAlign: 'center',
                    mt: 2,
                },
                box: {
                    mt: 2,
                    border: 1,
                    borderColor: 'divider',
                    borderRadius: 2,
                    backgroundColor: '#dee5ec',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

                },
                list: {
                    width: '100%',
                    maxWidth: 1024,
                    bgcolor: 'background.paper',

                },

            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    color: '#003971',
                },
                label: {
                    fontSize: '16px', // set font size of checkbox labels
                },

            },
        },
/*         MuiCheckbox: {
            styleOverrides: {
                root: {
                },
            },
        },
 */        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#003971',
                    color: '#6bf3bf',
                    fontWeight: 'bold',
                    margin: 1,
                    fontSize: '14px',
                    '&:hover': {
                        backgroundColor: '#004284', // set hover color of buttons
                        color: '#fff', // set text color of buttons on hover
                    },


                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    marginTop: 10,
                    borderColor: 'divider',
                    padding: '16px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                },
            },
        },

    },
});

export default theme;