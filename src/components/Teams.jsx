import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class Teams extends React.Component {
  state = {
    team: '',
    name: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handleChange(event);
  };

  render() {
    const { classes, teams } = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.root}>
          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="teams">Select your team</InputLabel>
            <Select
              native
              value={this.state.team}
              onChange={this.handleChange}
              input={<FilledInput name="team" id="teams" />}
            >
              <option value="" />
              {teams.map((el, i) => (
                <option key={i} value={el}>
                  {el}
                </option>
              ))}
            </Select>
          </FormControl>
        </div>
      </Grid>
    );
  }
}

Teams.propTypes = {
  classes: PropTypes.object.isRequired,
  teams: PropTypes.array.isRequired
};

Teams.defaultProps = {
  teams: []
}

export default React.memo(withStyles(styles)(Teams));
