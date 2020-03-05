import React from 'react';
import './App.scss';
import List from '../../components/List/List';
import Pagination from "../../components/List/Pagination";

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

    componentDidMount() {
        this.requestPage();
    }

    requestPage = async (pageNumber) => {
        let url = 'https://reqres.in/api/example?per_page=8';

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
    };



    renderData = () => {
        const { isLoading, data, errorMessage } = this.state;

        if(isLoading) {
            return <div className="loader"/>
        }

        if(errorMessage) {
            return <h1>An error occured: {errorMessage}</h1>
        }

        return(
            <div className="component">
                <List data={data}/>
                <Pagination data={data} requestPage={this.requestPage}/>
            </div>
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
