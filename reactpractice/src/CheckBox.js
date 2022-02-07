import React, { Component } from 'react';
import './CheckBox.css';

export class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }));
    }

    render() {
        return (<div>
            <button className="checkBox" onClick={this.handleClick}>
                {this.state.checked ? 'X' : '  '}
            </button>
            {this.props.value}
        </div>
        );
    }
}

export default CheckBox;
