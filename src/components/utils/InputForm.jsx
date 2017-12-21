import React, {Component} from 'react';

import {Button, FormControl} from 'react-bootstrap';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    }

    handleSubmit = () => {
        this.props.submitForm(this.state.value);
    }

    render() {
        return (
            <div className="flex">
                <FormControl
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder={this.props.inputText}
                />
                <Button bsStyle="primary" onClick={this.handleSubmit}>
                    {this.props.buttonText}
                </Button>
            </div>
        );
    }
}

export default InputForm;
