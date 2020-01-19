import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import {useSelector} from "react-redux";
import PersonaDetails from "./PersonalDetails";
// import AddressBook from "./AddressBook";


export default function PersonalCabinet() {

    const classes = useStyles();
    const {customer}  = useSelector(state => state.customers);

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <SectionTitle title={`Welcome ${customer.firstName + ' ' + customer.lastName}`.toUpperCase()} mainTitle={true} />
                <SectionTitle title='ORDER'/>
                <SectionContainer title='ORDER'
                                  description='Follow your purchases, check the delivery status of your orders, access the Return Form, and view refund information.'
                                  body='YOU HAVE NOT PREVIOUSLY ORDERED AS A REGISTERED USER.'/>
                <SectionTitle title='ADDRESS BOOK'/>
                <SectionContainer title='ADDRESS BOOK'
                                  description='Save all your delivery details to complete the order process quickly.'
                                  body='YOU HAVE NOT YET SAVED ANY ADDRESSES'>
                    {/*<AddressBook />*/}
                </SectionContainer>
                <SectionTitle title='PERSONAL DETAILS'/>
                <SectionContainer title={false}>
                    <PersonaDetails/>
                </SectionContainer>
            </Container>
        </React.Fragment>
    );
}