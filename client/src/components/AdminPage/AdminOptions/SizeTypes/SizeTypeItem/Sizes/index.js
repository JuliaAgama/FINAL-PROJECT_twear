import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import SizeItem from './SizeItem';

export default props => {
    const classes = useStyles();


    // let [formData, setFormData] = useState({});

    return (
        <>
            <SizeItem/>
        </>
    )
};
