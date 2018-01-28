import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

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
        const inputValue = this.state.value;
        if (!inputValue || inputValue === '') {
            this.setState({noValue: true});
            return;
        }
        this.setState({noValue: false, value: ''});
        this.props.submitForm(inputValue);
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

                {this.state.noValue && <Alert bsStyle="danger" className="marginTop">Please enter a value</Alert>}
            </React.Fragment>
        );
    }
}

InputForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
    inputText: PropTypes.string,
    buttonText: PropTypes.string,
};
InputForm.defaultProps = {
    inputText: '',
    buttonText: 'Submit'
};

export default InputForm;
