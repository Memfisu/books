import React from 'react';
import LoadMore from '../components/LoadMore';
import ResultsAmount from '../components/ResultsAmount';
import ResultsList from '../components/ResultsList';

const temporaryResults = [
    {
        cover: '1.png',
        category: 'computers',
        name: 'JS for everyone',
        author: 'John Doe'
    },
    {
        cover: '2.png',
        category: 'computers',
        name: 'JS not for everyone',
        author: 'Jane Doe'
    }
];

const SearchResults = () => {
    return (
        <div>
            <ResultsAmount results="30" />
            <ResultsList results={temporaryResults} />
            <LoadMore />
        </div>
    );
};

export default SearchResults;
