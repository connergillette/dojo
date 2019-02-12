import React, { Component } from 'react';
import logo from './assets/kcdd_logo.jpg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Match from './components/Match';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: []
    }
  }

  componentDidMount() {
    this.getTeamData();
  }

  getTeamData = () => {
    const api_url = "https://api.opendota.com/api/";
    const my_player_id = '345237110';
    const other_player_ids = ['192389582', '218135898', '106935421', '893220961']
    var get_url = api_url + `players/${my_player_id}/matches?limit=50`
    for (var player_id of other_player_ids) {
      get_url += `&included_account_id=${player_id}`;
    }

    axios.get(get_url).then(matches => {
      console.log(matches);
      this.setState({ matches: matches.data });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    let match_items = this.state.matches.map((match) => {
      return <Match key={match.match_id} match_id={match.match_id}></Match>
    });

    return (
      <div className="App">
        <Container>
          <Row className="Section">
            <Col xs={3}><img alt="King County Dota Dojo" className="Brand-logo" src={logo} /></Col>
            <Col><h1>King County Dota Dojo</h1></Col>
          </Row>

        </Container>
        <Container>
          <Row className="Section">
            {match_items}
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
