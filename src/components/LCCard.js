import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import Avatar from '@material-ui/core/Avatar';

const LCCard = (props) => {
	const {avatarSrc, title, subtitle, description, imgsrc} = props;

	const useStyles = makeStyles({
		buttonstyle: {
			color: 'green',
		},
	});

	const classes = useStyles();

	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={avatarSrc} />}
				action={
					<IconButton aria-label="settings" color="primary" aria-label="add to favorites" color="secondary">
						<ShareIcon />
						<FavoriteIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}
			/>
			<CardMedia style={{height: '150px'}} image={imgsrc} />
			<CardContent>
				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className={classes.buttonstyle} size="small">
					Subscribe Now
				</Button>
				<Button size="small">Special Offers</Button>
			</CardActions>
		</Card>
	);
};

export default LCCard;
