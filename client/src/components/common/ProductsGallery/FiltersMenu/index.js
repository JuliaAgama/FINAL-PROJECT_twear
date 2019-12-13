import React from 'react';
import { ThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";

export default function FiltersMenu(props) {
    const {colors} = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#000',
            },
        },
    });

    const colorTabs = Array.from(colors).map((item, index) => <Tab key={index} className={classes.tab} label={item} /> );
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab className={classes.tab} label="All color" />
                    {colorTabs}
                </Tabs>
            </Container>
        </ThemeProvider>
    );
}