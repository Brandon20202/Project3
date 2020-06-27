import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Typography, Paper, Box} from '@material-ui/core';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Email from './Email';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
	media: {
		height: 0,

		paddingTop: '56.25%', // 16:9
	},
	title: {
		color: '#205723',
		fontFamily: 'Segoe UI Symbol',
		fontStyle: 'oblique',
	},
	description: {
		color: '#8bc34a',
		opacity: '0.8',
	},
	paragraph: {
		color: 'black',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},

	avatarP: {
		backgroundColor: red[500],
		borderWidth: '20',
	},
}));

const LandSCard = (props) => {
	const {avatarP, avatarSrc, title, subtitle, description, imgsrc} = props;
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatarP}>
						{avatarP}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings" aria-label="add to favorites">
						<ShareIcon />
						<FavoriteIcon />
					</IconButton>
				}
				action={
					<IconButton color="primary" aria-label="settings">
						{<MoreVertIcon />}
					</IconButton>
				}
				className={classes.title}
				title={title}
				subheader={subtitle}
			/>
			<CardMedia style={{height: '160px'}} image={imgsrc} />

			<CardContent>
				<Typography className={classes.description} variant="body2" color="textSecondary" component="p">
					<Box fontWeight="fontWeightBold" fontStyle="oblique">
						{description}
					</Box>
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites" color="secondary">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share" color="primary">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<Paper elevation="2">
					<CardContent>
						<Paper elevation="1">
							<Typography variant="h6" color="initial" className={classes.TypographyStyles}>
								<Box fontFamily="Monospace">
									<Typed strings={['Focus:']} typeSpeed={40} backSpeed={60} />
								</Box>
							</Typography>
							<Typography className={classes.paragraph} variant="button" paragraph>
								<Box fontFamily="Monospace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id?</Box>
							</Typography>
							<Typography className={classes.paragraph} variant="button" paragraph>
								<Box fontFamily="Monospace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id?</Box>
							</Typography>
							<Typography className={classes.paragraph} variant="button" paragraph>
								<Box fontFamily="Monospace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id?</Box>
							</Typography>
							<Typography className={classes.paragraph} variant="button" paragraph>
								<Box fontFamily="Monospace">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, id?</Box>
							</Typography>
						</Paper>
						<br />
						<Email />
					</CardContent>
				</Paper>
			</Collapse>
		</Card>
	);
};

export default LandSCard;
