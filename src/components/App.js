import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="main-app">
                <header className="main-header">
                    <h1><Link to="/">Github API Testing</Link></h1>
                </header>
                <main className="main-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default App;

