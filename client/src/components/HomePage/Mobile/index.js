import React from 'react';
import ProductsSection from "./ProductsSection";
import PhotosSection from "./PhotosSection";
import SectionTicker from "../../common/SectionTicker";
import Box from "@material-ui/core/Box";
import useStyles from '../useStyles';

const Mobile = () => {

	const classes = useStyles();

	return(
		<Box>
			<PhotosSection />
			<ProductsSection />
			<SectionTicker />
		</Box>
	)
}

export default Mobile