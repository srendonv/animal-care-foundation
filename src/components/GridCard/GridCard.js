import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import jelambrar_image from '../../assets/images/team/jelambrar.jpeg'
import mccastano_image from '../../assets/images/team/mccastano.png'
import user_image from '../../assets/images/team/user.jpg'

import MediaCard from '../MediaCard/MediaCard'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const team_list = [
    {
        "name": "Michaell Castaño",
        "role": "Fullstack developer",
        "urlgithub": "https://www.github.com/mcastan0",
        "urllinkedin": "https://www.linkedin.com/in/andres-castaño-ab35b46b",
        "image": mccastano_image
    },
    {
        "name": "Jorge Lambraño",
        "role": "Backend developer",
        "urlgithub": "https://github.com/jelambrar96",
        "urllinkedin": "https://www.linkedin.com/in/jorge-lambra%C3%B1o-a64662157/",
        "image": jelambrar_image
    }, 
    {
        "name": "Luis Posada",
        "role": "Fullstack developer",
        "urlgithub": "https://www.github.com/Henryposa",
        "urllinkedin": "",
        "image": user_image
    },
    {
        "name": "Santiago Rendón",
        "role": "Fullstack developer",
        "urlgithub": "https://www.github.com/srendonv",
        "urllinkedin": "",
        "image": user_image
    },
    
]


export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
            <MediaCard
                name={team_list[0].name}
                image={team_list[0].image}
                urlgithub={team_list[0].urlgithub}
                urllinkedin={team_list[0].urllinkedin}
                role={team_list[0].role}
            />
        </Grid>
        <Grid item xs>
            <MediaCard
                name={team_list[1].name}
                image={team_list[1].image}
                urlgithub={team_list[1].urlgithub}
                urllinkedin={team_list[1].urllinkedin}
                role={team_list[1].role}
            />
        </Grid>
        <Grid item xs>
            <MediaCard
                name={team_list[2].name}
                image={team_list[2].image}
                urlgithub={team_list[2].urlgithub}
                urllinkedin={team_list[2].urllinkedin}
                role={team_list[2].role}
            />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
            <MediaCard
                name={team_list[3].name}
                image={team_list[3].image}
                urlgithub={team_list[3].urlgithub}
                urllinkedin={team_list[3].urllinkedin}
                role={team_list[3].role}
            />
        </Grid>
      </Grid>
    </div>
  );
}
