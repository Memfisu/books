import React from 'react';
import SearchInput from '../components/SearchInput';
import FilterCategories from '../components/FilterCategories';
import SortBy from '../components/SortBy';

const Header = () => {
    return (
        <div>
            <h1>Search for Books</h1>
            <SearchInput />
            <FilterCategories />
            <SortBy />
        </div>
    );
};

export default Header;
