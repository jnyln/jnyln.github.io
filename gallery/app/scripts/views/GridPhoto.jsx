import React, { PropTypes } from 'react';

const GridPhoto = ({ photo, onClickPhoto }) => {
    return (
        <div className="grid_item">
            <div
                className="grid_item__photo"
                style={{backgroundImage: `url(${photo.src})`}}
                onClick={onClickPhoto.bind(null, photo.id)}
            >
            </div>
        </div>
    );
};

GridPhoto.propTypes = {
    photo: PropTypes.object.isRequired,
    onClickPhoto: PropTypes.func,
};

GridPhoto.defaultProps = {
    onClickPhoto: () => {},
};

export default GridPhoto;
