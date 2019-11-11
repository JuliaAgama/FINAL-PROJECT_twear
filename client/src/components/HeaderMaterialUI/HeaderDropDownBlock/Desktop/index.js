import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";


export default function HeaderDropDownBlock() {

    const {menCategories, womenCategories}  = useSelector(state => state.categories);

    const items = menCategories.map(item => <Item key={item.id} url={item.url} title={item.title} />
    );

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container item xs={12} spacing={0} className={classes.border}>
                <Container maxWidth={false} className={classes.container}>
                    {items}
                </Container>
            </Grid>
        </React.Fragment>
    );
}