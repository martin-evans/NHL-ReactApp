import React from 'react';

class TeamsTable extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            teams: [
                
            ]
        };
    }

    componentDidMount() {

        fetch('https://statsapi.web.nhl.com/api/v1/teams')           
        .then((response)=> { return response.json();})    
        .then((data) => {
                this.setState({teams: data.teams});
            });
    }


    showTeam(team) {
        return <tr><td>{team.abbreviation}</td><td>{team.name}</td></tr>;
    }


    render() {
      var teamRows = this.state.teams.map(this.showTeam);

        return (
            <table>
                <tr>
                    <th>&nbsp;</th>
                    <th>Team Name</th>
                </tr>
                {teamRows}
            </table>

        );

    };

}

export default TeamsTable