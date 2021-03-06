import React, { Component } from 'react';

export class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.value);
        this.setState({value: ''});
        event.preventDefault();

    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <label>
                Add a todo list item:&nbsp; 
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Add" />
        </form>);
    }
}

export default TextBox;
