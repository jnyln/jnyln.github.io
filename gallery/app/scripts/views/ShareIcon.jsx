import React, { PropTypes } from 'react';

const ShareIcon = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 36 30" onClick={onClick}>
            <path fillRule="evenodd" d="M22.000,8.000 L22.000,0.000 L36.000,14.000 L22.000,28.000 L22.000,19.801 C12.000,19.801 5.000,23.000 0.000,30.000 C2.000,20.000 8.000,10.000 22.000,8.000 Z"/>
        </svg>
    );
};

ShareIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

ShareIcon.defaultProps = {
    className: '',
    onClick: () => {},
};

export default ShareIcon;
