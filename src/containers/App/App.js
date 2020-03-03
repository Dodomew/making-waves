import React from 'react';
import './App.scss';
import List from '../../components/List/List';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            errorMessage: null
        };

        // This binding is necessary to make `this` work in the callback
        this.requestPage = this.requestPage.bind(this);
    }

    async componentDidMount() {
        this.requestPage('https://reqres.in/api/example?per_page=8')
    }

    async requestPage(url, pageNumber) {
        console.log('requestPage')

        if(pageNumber) {
            url += '&page=' + pageNumber
        }

        this.setState({
            isLoading: true
        });

        try {
            const response = await fetch(url);
            const data = await response.json();

            this.setState({
                data: data,
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

        return(
            <List data={data} requestPage={this.requestPage}/>
        )
    };

    render() {
        return(
            <div className="main">
                <h2 className="header">
                    Colors
                </h2>
                {this.renderData()}
            </div>
        );
    }
}

export default App;
