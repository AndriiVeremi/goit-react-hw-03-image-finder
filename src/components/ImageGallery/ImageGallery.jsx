import { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultGallery from 'components/DefaultGallery/DefaultGallery';
import ApiService from '../../ApiService/ApiService';
import Loader from 'components/Loader/Loader';
import ImageErrorView from '../ErrorGallery/ErrorGallery';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Button from 'components/Button/Button';
import DefaultImg from '../../images/search.jpg';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    value: '',
    gallery: [],

    showModal: false,
    modalData: { img: DefaultImg, tags: '' },

    page: 1,
    totalPages: 0,

    status: 'idle',
    error: null,
  };

  static getStateProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevProps.value;
    const nextName = this.props.value;

    if (prevName !== nextName || prevState.page !== page) {
      this.setState({ status: 'pending' });

      if (this.state.error) {
        this.setState({ error: null });
      }

      ApiService(nextName, page)
        .then(gallery => {
          this.setState(prevState => ({
            gallery:
              page === 1
                ? gallery.hits
                : [...prevState.gallery, ...gallery.hits],
            totalPages: Math.floor(gallery.totalHits / 12),
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
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
    const { gallery, error, status, page, totalPages, showModal, modalData } =
      this.state;

    if (status === 'idle') {
      return <DefaultGallery text="Let`s find images!" />;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ImageErrorView message={error.message} />;
    }

    if (gallery.length === 0) {
      return (
        <ImageErrorView
          message={`Oops... there are no images matching your search... `}
        />
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {gallery.map(image => (
              <ImageGalleryItem
                key={image.id}
                item={image}
                onImgClick={this.setModalData}
              />
            ))}
          </Gallery>

          {gallery.length > 0 && status !== 'pending' && page <= totalPages && (
            <Button onClick={this.loadMore}>Load More</Button>
          )}

          {showModal && <Modal modalData={modalData} onClose={this.onClose} />}
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propType = {
  value: PropTypes.string.isRequired,
};
