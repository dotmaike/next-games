import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import GamesContext from './GamesContext';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    maxWidth: 500
  }
});

class Games extends React.Component {
  static contextType = GamesContext;
  getGames = games =>
    games.map((game, i) => (
      <Paper key={i} className={this.props.classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" component="h3">
                  {game.description}
                </Typography>
                <Typography gutterBottom>{game.dateTime}</Typography>
                <Typography gutterBottom>{game.location}</Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  className={this.props.classes.button}
                  disabled
                >
                  Confirm
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    ));

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.getGames(this.context.games)}
      </div>
    );
  }
}

Games.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Games);
