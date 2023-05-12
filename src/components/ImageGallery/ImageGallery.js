import { Component } from 'react';
import ApiService from '../ApiService/ApiService';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import DefaultImg from '../../images/search.jpeg'
import css from './ImageGallery.module.css';



class ImageGallery extends Component {

    state = {
        searchFoto: [],

        showModal: false,
        modalData: { img: DefaultImg, tags: '' },

        page: 1,
        totalPages: 0,

        status: 'idle',
        error: null,
    }


    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        const prevName = prevProps.searchFoto;
        const nextName = this.props.searchFoto;

        if (prevName !== nextName) {
            this.setState({ status: 'pending' });

            if (this.state.error) {
                this.setState({ error: null });
            }

            ApiService(nextName, page)
                .then(gallery => {
                    this.setState({
                        searchFoto: page === 1
                            ? gallery.hits
                            : [...prevState.searchFoto, ...gallery.hits],
                        totalPages: Math.floor(gallery.totalHits / 12),
                        status: 'resolved'
                    })
                })
                .catch(error => this.setState({ error, status: 'rejected' }))

        }
    }

    onClose = () => {
        this.setState({ showModal: false });
    };

    setModalData = modalData => {
        this.setState({ modalData, showModal: true });
    };

    render() {
        const { searchFoto, showModal, modalData } =  this.state;
        return (
            <>
                <ul className={css.gallery}>
                    {searchFoto.map(image => (
                        <ImageGalleryItem
                            key={image.id}
                            item={image}
                            imageClick={this.setModalData}
                        />
                    ))}
                </ul>
                
                {showModal && (<Modal modalData={modalData} onClose={this.onClose} />)}
            </>
        )
    }
}

export default ImageGallery;