import React, {Component} from 'react';
import Routes from 'components/Routes';

import Recipe from 'scripts/Recipe';

class App extends Component {
    componentDidMount() {
        console.log(Recipe.findByIngredient('Bacon'));
    }

    render() {
        return <Routes />;
    }
}

export default App;
