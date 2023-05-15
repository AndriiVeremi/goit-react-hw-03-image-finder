import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    textSearch: null,
  };

  onFormSubmit = textSearch => {
    this.setState({ textSearch });
  };

  render() {
    const { textSearch } = this.state;
    return (
      <div>
        <ToastContainer />
        <Searchbar prop={this.onFormSubmit} />
        <ImageGallery value={textSearch} />
      </div>
    );
  }
}

export default App;
