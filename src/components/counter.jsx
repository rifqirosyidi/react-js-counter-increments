import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There is no tags!</p>;

    //     return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li> )}</ul>;
    // }

    handleIncrement = () => {
        // it wont work
        // this.state.value++;
        this.setState({ value: this.state.value+1 })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                <span className={this.getBadgeClasses()}> { this.formatValue() }</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increments</button>
                {/* {this.renderTags()} */}
                </div>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatValue() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;