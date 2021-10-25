import React from 'react';
import ResultItem from './ResultItem';

const ResultsList = ({ results }) => {
    return <div>
        {results.map(item => <ResultItem results={item} />)}
    </div>;
};

export default ResultsList;
