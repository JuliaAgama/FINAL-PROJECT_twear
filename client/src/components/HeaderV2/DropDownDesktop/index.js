import useStyles from "./useStyles";
import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Item from "../Item";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

export default function HeaderDropDownBlock() {

    const [men, setMen] = useState(false);
    const [women, setWomen] = useState(false);

    const {menCategories, womenCategories}  = useSelector(state => state.categories);
    const {isMen, show}  = useSelector(state => state.header);

    let items = [];

    if (isMen) {
        items = menCategories.map(item => <Item key={item.id} url={item.url} title={item.title} />)
    } else {
        items = womenCategories.map(item => <Item key={item.id} url={item.url} title={item.title} />)
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container
                  item xs={12}
                  spacing={0}
                  className={show ? classes.border : classes.hide}>
                    <Container maxWidth={false} className={classes.container}>
                        {items}
                    </Container>
            </Grid>
        </React.Fragment>
    );
}