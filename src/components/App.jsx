import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar />
  
        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )}
        <Loader />
      </div>
    );
  }
}

export default App;
