import React, {PureComponent} from 'react';

import {Alert} from 'react-bootstrap';
import {Button, FormControl} from 'react-bootstrap';

class InputForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            noValue: false
        };
    }

    handleChange = e => {
        this.setState({value: e.target.value});
    };

    handleSubmit = () => {
        if (!this.state.value || this.state.value === '') {
            this.setState({noValue: true});
            return;
        }
        this.props.submitForm(this.state.value);
    };

    render() {
        return (
            <React.Fragment>
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

                {this.state.noValue && (
                    <Alert bsStyle="danger">Please enter a value</Alert>
                )}
            </React.Fragment>
        );
    }
}

export default InputForm;
