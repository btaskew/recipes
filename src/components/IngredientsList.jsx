import React, {PureComponent} from 'react';

import Ingredient from 'components/Ingredient';

class IngredientsList extends PureComponent {
    render() {
        return (
            <div className="flex">
                {this.props.ingredients.map(ingredient => (
                    <Ingredient key={ingredient.id} name={ingredient.name} />
                ))}
            </div>
        );
    }
}

export default IngredientsList;