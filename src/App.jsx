import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withRoot from './withRoot';
import Spinner from './Spinner';
import './App.css';

const DropDown = React.lazy(() => import('./DropDown'));

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  componentWillMount() {
    const that = this;
    axios
      .get('http://localhost:5000/teams')
      .then(function(res) {
        that.setState({ teams: res.data.teams.items });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                NEXT Games!
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <section>
          <React.Suspense fallback={<Spinner />}>
            <DropDown teams={this.state.teams} />
          </React.Suspense>
        </section>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
