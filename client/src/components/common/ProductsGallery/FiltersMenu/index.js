import React from 'react';
import { ThemeProvider} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Container} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./useStyles";
import {clearQueryString} from "../Helpers"

export default function FiltersMenu(props) {
    const {colors, queryString} = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#000',
            },
        },
    });

    const colorTabs = Array.from(colors).map((item, index) => <Tab key={index} className={classes.tab} label={item} /> );
    const handleChange = (event, newValue) => {
        let sortQuery = clearQueryString(queryString, 'color')+ '&color=' + Array.from(colors)[newValue-1];
        setValue(0);
        return history.push(`/categories/${sortQuery}`);
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