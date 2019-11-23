import useStyles from "./useStyles";
import React from "react";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";

export function Item(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Link to={props.url} className={props.mobile ? classes.mobileLink : classes.link}>
                <Box className={classes.box}>{props.title}</Box>
            </Link>
        </React.Fragment>
    );
};

export function CategoryItems(props) {
    const classes = useStyles();
    const {menCategories, womenCategories}  = useSelector(state => state.categories);
    const {show}  = useSelector(state => state.header);
    const {isMen, isWomen}  = useSelector(state => state.header);

    let items = [];

    if (isMen) {
        items = menCategories.map(item => <Item key={item.id} url={item.url} title={item.title} mobile={props.mobile} />)
    } else if (isWomen) {
        items = womenCategories.map(item => <Item key={item.id} url={item.url} title={item.title} mobile={props.mobile} />)
    }

    return (
        <Container maxWidth={false} className={show ? `${classes.border} ${classes.container}` : classes.hide}>
            {items}
        </Container>
    )
}