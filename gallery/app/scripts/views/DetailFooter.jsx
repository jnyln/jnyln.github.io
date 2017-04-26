import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import PlusOneIcon from './PlusOneIcon';
import CommentIcon from './CommentIcon';
import AddIcon from './AddIcon';
import ShareIcon from './ShareIcon';

const DetailFooter = ({ photo, isShowing, isAdded, onClickPlusOne, onClickComment, onClickAdd }) => {
    return (
        <CSSTransitionGroup
            transitionName="detail_footer"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
        >
            {isShowing ?
                <div className="detail_footer">
                    <PlusOneIcon
                        className={`detail_footer__icon ${photo.plusOne ? 'detail_footer__icon--active': ''}`}
                        onClick={onClickPlusOne.bind(null, photo.id)}
                    />
                    <CommentIcon
                        className="detail_footer__icon"
                        onClick={onClickComment}
                    />
                    <AddIcon
                        className={`detail_footer__icon ${isAdded ? 'detail_footer__icon--active': ''}`}
                        onClick={onClickAdd.bind(null, photo.id)}
                    />
                    <a href={`https://plus.google.com/share?url=${photo.src}`}>
                        <ShareIcon
                            className="detail_footer__icon"
                        />
                    </a>
                </div>
            : null}
        </CSSTransitionGroup>
    );
};

DetailFooter.propTypes = {
    photo: PropTypes.object.isRequired,
    isShowing: PropTypes.bool,
    isAdded: PropTypes.bool,
    onClickPlusOne: PropTypes.func,
    onClickComment: PropTypes.func,
    onClickAdd: PropTypes.func,
};

DetailFooter.defaultProps = {
    isShowing: false,
    isAdded: false,
    onClickPlusOne: () => {},
    onClickComment: () => {},
    onClickAdd: () => {},
};

export default DetailFooter;
