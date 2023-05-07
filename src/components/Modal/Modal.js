import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';

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
        // console.log(e.currentTarget)
        // console.log(e.target)
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className={css.overlay} onClick={this.handleBackdropClick}>
                <div className={css.modal}>
                    {this.props.children}
                </div>
            </div>, modal   
        );
    }
}

export default Modal;