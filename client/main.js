//Any JS in here will be run automatically

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/ImageList';
import AppID from './components/axiosIdNeeds';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
    }
    componentDidMount() {
        axios.get(`https://api.unsplash.com/photos/?client_id=${AppID}`)
            .then(response => this.setState({ images: response.data }))
            .catch(error => console.error(error))
    }
    render() {
        return (<div>
            <ImageList images={this.state.images}/>
        </div>);
    }
}


Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});