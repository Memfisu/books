import React from 'react';
import Button from '../ui-kit/Button';

const LoadMore = () => {
    return <Button
                onClick={() => console.log('Load more')}
                disabled={false}
                label="Load more"
            />;
};

export default LoadMore;
