import React from 'react';

export default class Options extends React.Component {
    render() {
        const { answers, onSubmit } = this.props;
        const answersElements = answers.map((item, index) => 
            <label className="option" key={index}>
                <input type="radio" name="country" value={item.name} />
                {item.name}
            </label>)
        return (
            <form id="options" onSubmit={onSubmit}>
                {answersElements}
                <input type="submit" value="Guess" />
            </form>
        )
    }
}