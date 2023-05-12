import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchFoto: null,
  };

  onFormSubmit = searchFoto => {
    this.setState({ searchFoto });
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
