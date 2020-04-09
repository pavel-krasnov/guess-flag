import React from 'react';

export default class Result extends React.Component {
    render() {
        const { message, onClick } = this.props;
        return (
            <div id="result">
                <div id="message">{message}</div>
                <button onClick={onClick}>Next</button>
            </div>
        );
    }
};