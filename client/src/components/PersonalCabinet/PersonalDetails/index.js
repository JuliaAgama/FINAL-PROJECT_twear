import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import {useSelector} from "react-redux";
import Item from './Item'

const checkField = field =>  field === 'login' || field === 'email' || field === 'telephone' || field === 'password';

export default function PersonaDetails() {

    const classes = useStyles();
    const {customer}  = useSelector(state => state.customers);
    let items = [];
    items.push(<Item title='Name' titleValue={customer.firstName + ' ' + customer.lastName} key='fullName'/>)
    for (const field in customer) {
        if (checkField(field)) items.push(<Item title={field} titleValue={customer[field]} key={field}/>)
    }

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                {items}
            </Container>
        </React.Fragment>
    );
}