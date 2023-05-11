import React, { Component } from 'react';
// import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchFoto: null,
    showModal: false,
  };

  onFormSubmit = searchFoto => {
    // console.log(searchFoto)
    this.setState({ searchFoto });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar prop={this.onFormSubmit} />
        <ImageGallery searchFoto={this.state.searchFoto} />

        {/* <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )} */}
        <Loader />
      </div>
    );
  }
}

export default App;
