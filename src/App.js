import React, {Component} from 'react';
import Routes from 'components/Routes';

import Database from 'scripts/Database';

class App extends Component {
    componentDidMount() {
        Database.setup();
    }

    render() {
        return <Routes />;
    }
}

export default App;
