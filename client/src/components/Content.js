import React from 'react';
import {Grid} from '@material-ui/core';
import landSCList from './Cards.json';
import LandSCard from './LandSCard';
import NavBarLogOut from "./NavBarLogout"

const Content = () => {
	const landSCCard = (lansCardObj) => {
		return (
			<Grid item xs={3} sm={3}>
				<LandSCard {...lansCardObj} />
			</Grid>
		);
	};
	return (
		<div>
		<NavBarLogOut />
		<Grid container spacing={2}>
			
			{landSCList.map((lansCardObj) => landSCCard(lansCardObj))}
		</Grid>
		</div>
	);
};

export default Content;
