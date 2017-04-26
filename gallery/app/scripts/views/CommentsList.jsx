import React, { PropTypes } from 'react';
import moment from 'moment';

const CommentsList = ({ comments }) => {
    return (
        <div className="comments_list">
            {comments.map((comment, index) => {
                return (
                    <div className="comment" key={index}>
                        <div className="comment__text">{comment.text}</div>
                        <div className="comment__date">{moment(comment.date).format('MM/DD/YY h:mma')}</div>
                    </div>
                );
            })}
        </div>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array,
};

CommentsList.defaultProps = {
    comments: [],
};

export default CommentsList;
