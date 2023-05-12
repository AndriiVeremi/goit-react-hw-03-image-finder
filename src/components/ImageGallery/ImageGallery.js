import { Component } from 'react';
import ApiService from '../ApiService/ApiService';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import css from './ImageGallery.module.css';


class ImageGallery extends Component {

    state = {
        searchFoto: [],
        status: 'idle',
        error: null,
    }


componentDidUpdate(prevProps, prevState) {

    if (prevProps.searchFoto !== this.props.searchFoto) {
        this.setState({ status: 'pending' });

        ApiService(this.props.searchFoto)
            .then(gallery => {
                this.setState({ searchFoto: gallery.hits, status: 'resolved' })
                // console.log(gallery.hits)
            })
            .catch(error => this.setState({ error, status: 'rejected' }))
        
    }
}

render() {

    return (
        <ul className='gallery'>
            <ImageGalleryItem searchFoto={this.state.searchFoto} />
        </ul>
    )
}
}

export default ImageGallery;