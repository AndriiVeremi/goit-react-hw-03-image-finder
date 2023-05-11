import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <Loader />
        <ToastContainer />
        <Searchbar prop={this.onFormSubmit} />
        <ImageGallery searchFoto={this.state.searchFoto} />
      </div>
    );
  }
}

export default App;
