import React from 'react';
import axios from 'axios';
import withRoot from './withRoot';
import Header from './components/Header';
import Spinner from './components/Spinner';

import GamesContext from './components/GamesContext';

const Teams = React.lazy(() => import('./components/Teams'));
const Games = React.lazy(() => import('./components/Games'));

class App extends React.Component {
  state = { teams: [], games: [] };

  componentWillMount() {
    axios
      .get('https://next-games.herokuapp.com/teams')
      .then(res => {
        this.setState({ teams: res.data.teams.items });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = event => {
    this.setState({ games: [] });
    if (event.target.value) {
      axios
        .get(`https://next-games.herokuapp.com/teams/${event.target.value}`)
        .then(res => {
          this.setState({ games: res.data.calendar.items });
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          {this.state.teams.length > 0 && (
            <React.Suspense fallback={<Spinner />}>
              <Teams
                handleChange={this.handleChange}
                teams={this.state.teams}
              />
            </React.Suspense>
          )}
          {this.state.games.length > 0 && (
            <React.Suspense fallback={<Spinner />}>
              <GamesContext.Provider value={{ games: this.state.games }}>
                <Games />
              </GamesContext.Provider>
            </React.Suspense>
          )}
        </section>
      </React.Fragment>
    );
  }
}

export default withRoot(App);
