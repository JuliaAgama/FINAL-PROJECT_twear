import React from 'react'
import Ticker from 'react-ticker'
import Typography from "@material-ui/core/Typography";
<<<<<<< HEAD
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
=======
 
const SectionTicker = () => (

    	<Ticker speed={15} mode='smooth'>
    	    {({ index }) => (
    	        <div style={{ whiteSpace: "nowrap" }}>
    	            <Typography variant='h2'>Free shipping above 500$  </Typography>
    	        </div>
    	    )}
    	</Ticker>
)
>>>>>>> 922ef201fd69c70a56320490677ac6367624d495

export default SectionTicker