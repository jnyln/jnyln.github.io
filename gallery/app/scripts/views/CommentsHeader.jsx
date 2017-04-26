import React, { PropTypes } from 'react';

import CloseIcon from './CloseIcon';

const CommentsHeader = ({ onClickCloseComments }) => {
    return (
        <div className="comments_header">
            <h1 className="comments_header__text">Comments</h1>
            <CloseIcon
                className="comments_header__close"
                onClick={onClickCloseComments}
            />
        </div>
    );
};

CommentsHeader.propTypes = {
    onClickCloseComments: PropTypes.func,
};

CommentsHeader.defaultProps = {
    onClickCloseComments: () => {},
};

export default CommentsHeader;
