import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCount } from './store/actions';
import { AppState } from './store';
import './App.css';

interface IAppProps {
    count: number;
    addCount: typeof addCount;
}

class App extends Component<IAppProps, {}> {
    render() {
        const { count } = this.props;
        return (
            <div className="App">
                <span>{count}</span>
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }

    private handleClick = () => {
        this.props.addCount();
    };
}

const mapStateToProps = (state: AppState) => ({
    count: state.count,
});

// export default App;
export default connect(
    mapStateToProps,
    { addCount },
)(App);
