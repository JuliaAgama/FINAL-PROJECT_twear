import React from 'react'
import Ticker from 'react-ticker'
import Typography from "@material-ui/core/Typography";
import useStyles from './useStyles';
 
const SectionTicker = () => {

	const classes = useStyles();

	return(
			<Ticker speed={15} mode='smooth'>
		    	{({ index }) => (
		    	    <div style={{ whiteSpace: "nowrap" }}>
		    	        <Typography variant='h2'>Free shipping above 500$  </Typography>
		    	    </div>
		    	)}
	    	</Ticker>
    )
}

export default SectionTicker