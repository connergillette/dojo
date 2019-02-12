import React, { Component } from 'react';
import '../styles/Match.css'

class Match extends Component {
    constructor(props) {
        super(props);

        this.state = {
            match_id: props.match_id
        }
    }

    render() {
        return (
            <div className="Match-container">
                <p>Match id {this.state.match_id}</p>
            </div>
        );
    }
}

export default Match;