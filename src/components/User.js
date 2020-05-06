import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
	const { match: { params } } = this.props;
        fetch(`https://api.github.com/users/${params.username}/repos`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    render() {
        if (!this.state.user) {

            return (
                     <div className="main-app">
                        <header className="main-header">
                         <h1><Link to="/">Github API Testing</Link></h1>
                        </header>
                        <main className="main-content">
                              <div className="user-page">LOADING...</div>
                         </main>
                    </div>

		   );

        }

        const user = this.state.user;


	var list = user.map((item, index) => {
            return (

                  <li key={index}>
                   <a rel="noopener noreferrer" href={user[index].html_url} target="_blank">
                    Nama Repository : {user[index].name}<br />
                    URL : {user[index].html_url}
                   </a>
                  </li>

                  )
        });


        return (

                    <div className="main-app">
                        <header className="main-header">
                         <h1><Link to="/">Github API Testing</Link></h1>
                        </header>
                        <main className="main-content">
				<div>
                                <br/>
                                  <center><button className="search-page__button"><Link to="/">Back To Search</Link></button></center>
                                  <ul className="goal-list">
                                        {list}
                                   </ul>
                                </div>
                         </main>
                    </div>

        );

    }
};

export default withRouter(User);

