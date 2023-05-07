import React, { Component } from "react";
import Modal from "./Modal/Modal";
import Searchbar from "./Searchbar/Searchbar";


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
        React homework template D@shuk

        
        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Привіт світ</h1>
            <p>lorem ipsun dsfsadfsd sdf fgnfnf fsdfsd asdfsdfsfsaf lorem ipsun
              dsfsadfsd sdf fgnfnf fsdfsd asdfsdfsfsaf lorem ipsun dsfsadfsd sdf
              fgnfnf fsdfsd asdfsdfsfsaf </p>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )}

      </div>
    );
  }
}

export default App;


