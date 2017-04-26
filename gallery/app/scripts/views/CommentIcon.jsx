import React, { PropTypes } from 'react';

const CommentIcon = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 40 40" onClick={onClick}>
            <path fillRule="evenodd" d="M36.000,0.000 L4.000,0.000 C1.791,0.000 0.000,1.791 0.000,4.000 L0.000,40.000 L10.000,32.000 L36.000,32.000 C38.209,32.000 40.000,30.209 40.000,28.000 L40.000,4.000 C40.000,1.791 38.209,0.000 36.000,0.000 ZM32.000,24.000 L8.000,24.000 L8.000,20.000 L32.000,20.000 L32.000,24.000 ZM32.000,18.000 L8.000,18.000 L8.000,14.000 L32.000,14.000 L32.000,18.000 ZM32.000,12.000 L8.000,12.000 L8.000,8.000 L32.000,8.000 L32.000,12.000 Z"/>
        </svg>
    );
};

CommentIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

CommentIcon.defaultProps = {
    className: '',
    onClick: () => {},
};

export default CommentIcon;