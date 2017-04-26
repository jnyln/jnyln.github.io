import React, { PropTypes } from 'react';

import GridPhoto from './GridPhoto';

const GridPhotos = ({ photos, onClickPhoto }) => {
    return (
        <div className="grid_items">
            {photos.map((photo) => {
                return (
                    <GridPhoto
                        key={photo.id}
                        photo={photo}
                        onClickPhoto={onClickPhoto}
                    />
                );
            })}
        </div>
    );
};

GridPhoto.propTypes = {
    photos: PropTypes.array,
    onClickPhoto: PropTypes.func,
};

GridPhoto.defaultProps = {
    photos: [],
    onClickPhoto: () => {},
};

export default GridPhotos;
