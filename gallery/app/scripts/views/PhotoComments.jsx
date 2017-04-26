import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import CommentsHeader from './CommentsHeader';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

const PhotoComments = ({ comments, isShowing, onClickCloseComments, onSubmitCommentForm }) => {
    return (
        <CSSTransitionGroup
            transitionName="photo_comments"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
        >
            {isShowing ?
                <div className="photo_comments">
                    <CommentsHeader
                        onClickCloseComments={onClickCloseComments}
                    />
                    <div className="comments_content">
                        <CommentForm
                            onSubmit={onSubmitCommentForm}
                        />
                        <CommentsList
                            comments={comments}
                        />
                    </div>
                </div>
            : null}
        </CSSTransitionGroup>
    );
};

PhotoComments.propTypes = {
    comments: PropTypes.array,
    isShowing: PropTypes.bool,
    onClickCloseComments: PropTypes.func,
    onSubmitCommentForm: PropTypes.func,
};

PhotoComments.defaultProps = {
    comments: [],
    isShowing: false,
    onClickCloseComments: () => {},
    onSubmitCommentForm: () => {},
};

export default PhotoComments;
