import React from 'react';
import './App.scss';

// https://stackoverflow.com/questions/48892435/making-an-api-call-in-react

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
            errorMessage: null
        };
    }

    async componentDidMount() {
        console.log('componentDidMount')
        try {
            const response = await fetch('https://reqres.in/api/example?per_page=8');
            const data = await response.json();
            this.setState({
                data: data.data,
                isLoading: false
            });

        } catch (error) {
            this.setState({
                errorMessage: error.message,
                isLoading: false
            });
        }
    }

    renderData = () => {
        const { isLoading, data, errorMessage } = this.state;

        if(isLoading) {
            return <h1>App is loading...</h1>
        }

        if(errorMessage) {
            return <h1>An error occured: {errorMessage}</h1>
        }

        const items = data.map((item, key) =>
            <li key={key} className="listitem">
                {key}
            </li>
        );

        return(
            <ul className="list">
                {items}
            </ul>
        )
    };

    render() {
        return(
            <div className="main">
                {this.renderData()}
            </div>
        );
    }
}

export default App;
