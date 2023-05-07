import React, { Component } from "react";
import { ReactComponent as Search } from '../../icons/search.svg';
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        searchFoto: '',
    }

    handelSearch = event => {

        console.log(event.currentTarget.value)

        this.setState({ searchFoto: event.currentTarget.value })    
    }

    handelSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // this.props.onSubmit(this.state);

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
                        name="name"

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