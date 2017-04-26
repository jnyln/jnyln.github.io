import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Hammer from 'react-hammerjs';

import { SWIPE_LEFT } from '../constants';

const DetailPhoto = ({ photo, photoSwipeDirection, onSwipeDetail, onClickDetailPhoto }) => {
    return (
        <CSSTransitionGroup
            transitionName={photoSwipeDirection === SWIPE_LEFT ? 'detail_next' : 'detail_previous'}
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
        >
            <Hammer
                key={photo.id}
                onSwipe={onSwipeDetail}
                onTap={onClickDetailPhoto}
            >
                <div className="detail_photo">
                    <img className="detail_photo__image" src={photo.src} />
                </div>
            </Hammer>
        </CSSTransitionGroup>
    );
};

DetailPhoto.propTypes = {
    photo: PropTypes.object.isRequired,
    photoSwipeDirection: PropTypes.string,
    onSwipeDetail: PropTypes.func,
    onClickDetailPhoto: PropTypes.func,
};

DetailPhoto.defaultProps = {
    isShowing: false,
    photoSwipeDirection: null,
    onSwipeDetail: () => {},
    onClickDetailPhoto: () => {},
};

export default DetailPhoto;
