import React, { Component } from "react";
import { toast } from 'react-toastify';
import { ReactComponent as Search } from '../../icons/search.svg';
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        searchFoto: '',
    }

    handelSearch = event => {
        // console.log(event.currentTarget.value)
        this.setState({ searchFoto: event.currentTarget.value.toLowerCase() })
    }

    handelSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.searchFoto.trim() === '') {  
            toast.error('Ведіть щось.')
            return;
        }

        this.props.prop(this.state.searchFoto);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            searchFoto: '',
        })
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handelSubmit}>
                    <button type="submit" className={css.button}>
                        <Search />
                        <span className={css.button__label}>Search</span>
                    </button>

                    <input
                        value={this.state.searchFoto}
                        onChange={this.handelSearch}
                        name="searchFoto"

                        className={css.input}
                        type="text"
                        // autocomplete="off"
                        // autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar;