import { Component } from 'react';
import DefaultGallery from 'components/DefaulGallery/DefaulGallery';
import ApiService from '../ApiService/ApiService';
import Loader from 'components/Loader/Loader';
import ImageErrorView from '../ImageErrorView/ImageErrorViver'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Button from 'components/Button/Button';
import DefaultImg from '../../images/search.png';
import css from './ImageGallery.module.css';



class ImageGallery extends Component {

    state = {
        value: '',
        searchFoto: [],
        
        showModal: false,
        modalData: { img: DefaultImg, tags: '' },

        page: 1,
        totalPages: 0,

        status: 'idle',
        error: null,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return { page: 1, value: nextProps.value };
        }
        return null;
    }


    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        const prevName = prevProps.searchFoto;
        const nextName = this.props.searchFoto;

        if (prevName !== nextName || prevState.page !== page) {
            this.setState({ status: 'pending' });

            if (this.state.error) {
                this.setState({ error: null });
            }

            ApiService(nextName, page)
                .then(gallery => {
                    this.setState(prevState => ({
                        searchFoto: page === 1
                            ? gallery.hits
                            : [...prevState.searchFoto, ...gallery.hits],
                        totalPages: Math.floor(gallery.totalHits / 12),
                        status: 'resolved'
                    }))
                })
                .catch(error => this.setState({ error, status: 'rejected' }))

        }
    }

    setModalData = modalData => {
        this.setState({ modalData, showModal: true });
    };

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
    };

    onClose = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { searchFoto, error, status, page, totalPages, showModal, modalData } =  this.state;
        
        if (status === 'idle') {
            return <DefaultGallery text="Let`s find images!" />;
            
        }

        if (status === 'pending') {
            return <Loader className={css.spinner} />;
        }

        if (status === 'rejected') {
            return <ImageErrorView message={error.message} />;
        }

        if (searchFoto.length === 0) {
            return (
                <ImageErrorView
                    message={`Oops... there are no images matching your search... `}
                />
            );
        }
       
        if (status === 'resolved') {
            return (
                <>
                    <ul className={css.gallery}>
                        {searchFoto.map(image => (
                            <ImageGalleryItem
                                key={image.id}
                                item={image}
                                onImgClick={this.setModalData}
                            />
                        ))}
                    </ul>

                    {searchFoto.length > 0 && status !== 'pending' && page <= totalPages && (
                        <Button onClick={this.loadMore}>Load More</Button>
                    )}

                    {showModal && (<Modal modalData={modalData} onClose={this.onClose} />)}
                </>
            )
        }
    }
}

export default ImageGallery;