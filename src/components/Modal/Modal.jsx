import React, { Component } from "react";
import { createPortal } from "react-dom";
import { Overlay, Modals, Img, Text } from "./Modal.styled";

const modal = document.querySelector('#modal');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKey)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKey)
    }

    handleKey = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        const { largeImageURL, tags } = this.props.modalData;
        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <Modals>
                    <Img src={largeImageURL} alt={tags} />
                    <Text>{tags}</Text>
                </Modals>
            </Overlay>, modal   
        );
    }
}

export default Modal;