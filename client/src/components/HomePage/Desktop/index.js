import React from 'react';
import ProductsSection from "./ProductsSection";
import PhotosSection from "./PhotosSection";
import SectionTicker from "../../common/SectionTicker";
import Container from "@material-ui/core/Container";
import useStyles from '../useStyles';

const Desktop = () => {

	const classes = useStyles();

	return(
		<Container maxWidth={false}>
			<PhotosSection />
			<ProductsSection />
			<SectionTicker />
		</Container>
	)
}

export default Desktop