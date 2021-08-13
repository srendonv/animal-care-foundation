import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import IconButton from '@material-ui/core/IconButton';
// eslint-disable-next-line
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import  from '@material-ui/core/'

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    maxHeight: 480,
  },
  media: {
    height: 160,
  },
  cardMedia: {
    padding: '5%',
    borderRadius: '50%',
    height: 240,
    width: 240
},
});

export default function MediaCard(props) {
  const classes = useStyles();
  const islinkedin = props.urllinkedin ? true : false;
  const isGithub = props.urlgithub ? true : false;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia}
          component="img"
          alt="Developer Card"
          height="180"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.role}  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          islinkedin ?
          <IconButton aria-label="delete" color="primary" href={props.urllinkedin} target="_blank">
            <LinkedInIcon></LinkedInIcon>          
          </IconButton> 
          : <div></div>
        }
        {
          isGithub ? 
          <IconButton color="secondary" aria-label="add an alarm" href={props.urlgithub} target="_blank">
            <GitHubIcon></GitHubIcon>
          </IconButton>
          :
          <div></div>
        }

      </CardActions>
    </Card>
  );
}