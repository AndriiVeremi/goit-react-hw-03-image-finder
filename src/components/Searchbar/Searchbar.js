import React, { Component } from "react";
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {

    }

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.searchForm}>
                    <button type="submit" className={css.button}>
                        <span className={css.button__label}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header> 
        )
    }
}

export default Searchbar;