import React from 'react';
import Header from './Header';
import SearchResults from './SearchResults';
import DetailedInfo from './DetailedInfo';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <SearchResults />
            <DetailedInfo />
        </div>
    );
};

export default MainLayout;
