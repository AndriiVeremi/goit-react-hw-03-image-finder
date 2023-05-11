import { Component } from 'react';
import ApiService from '../ApiService/ApiService';
// import css from './ImageGallery.module.css';


class ImageGallery extends Component {

    state = {
        searchFoto: null,
        status: 'idle',
        error: null,
    }
    
    componentDidUpdate(prevProps, prevState) {
        
        if (prevProps.searchFoto !== this.props.searchFoto) {
            this.setState({ status: 'pending' });
        
            ApiService(this.props.searchFoto)
                    .then(searchFoto => this.setState({ searchFoto, status: 'resolved' }))
                    .catch(error => this.setState({ error, status: 'rejected' }))
                     
        }
    }

    render() {
        return
    }
}


export default ImageGallery;