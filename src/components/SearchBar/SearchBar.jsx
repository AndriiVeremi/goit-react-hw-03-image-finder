import React, { Component } from "react";
import { toast } from 'react-toastify';
import { ReactComponent as Search } from '../../icons/search.svg';
import { Header, Form, Button, Span, Input } from './SearchBar.styled';

class SearchBar extends Component {
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
            <Header>
                <Form onSubmit={this.handelSubmit}>
                    <Button type="submit">
                        <Search />
                        <Span >Search</Span>
                    </Button>

                    <Input
                        type="text"
                        name="searchFoto"
                        value={value}
                        onChange={this.handelSearch}
                        placeholder="Search images and photos"
                    />
                </Form>
            </Header>
        )
    }
}

export default SearchBar;