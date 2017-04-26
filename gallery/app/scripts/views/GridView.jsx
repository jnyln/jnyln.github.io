import React, { PropTypes } from 'react';

import GridHeader from './GridHeader';
import GridPhotos from './GridPhotos';

const GridView = ({ photos, onClickPhoto }) => {
    return (
        <div className="grid_view">
            <GridHeader />
            <GridPhotos
                photos={photos}
                onClickPhoto={onClickPhoto}
            />
        </div>
    );
};

GridView.propTypes = {
    photos: PropTypes.array,
    onClickPhoto: PropTypes.func,
};

GridView.defaultProps = {
    photos: [],
    onClickPhoto: () => {},
};

export default GridView;
