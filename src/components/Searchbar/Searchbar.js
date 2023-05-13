import React, { Component } from "react";
import { toast } from 'react-toastify';
import { ReactComponent as Search } from '../../icons/search.svg';
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        value: '',
    }

    handelSearch = event => {
        this.setState({ value: event.currentTarget.value.toLowerCase() })
    }

    handelSubmit = event => {
        event.preventDefault();
        if (this.state.value.trim() === '') {
            return toast.error('Ведіть щось.')
        }
        this.props.prop(this.state.value);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            value: '',
        })
    }

    render() {
        const { value } = this.state;
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handelSubmit}>
                    <button type="submit" className={css.button}>
                        <Search />
                        <span className={css.button__label}>Search</span>
                    </button>

                    <input
                        type="text"
                        name="searchFoto"
                        className={css.input}
                        value={value}
                        onChange={this.handelSearch}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;