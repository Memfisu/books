import React from 'react';

const ResultItem = ({ results }) => {
    return <div>
        <div>{results.cover}</div>
        <div>{results.category}</div>
        <div>{results.name}</div>
        <div>{results.author}</div>
    </div>;
};

export default ResultItem;
