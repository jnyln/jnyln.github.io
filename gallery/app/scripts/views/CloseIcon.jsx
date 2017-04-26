import React, { PropTypes } from 'react';

const CloseIcon = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 28 28" onClick={onClick}>
            <path fillRule="evenodd" d="M28.000,2.828 L25.172,-0.000 L14.000,11.172 L2.828,-0.000 L-0.000,2.828 L11.172,14.000 L-0.000,25.172 L2.828,28.000 L14.000,16.828 L25.172,28.000 L28.000,25.172 L16.828,14.000 L28.000,2.828 Z"/>
        </svg>
    );
};

CloseIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

CloseIcon.defaultProps = {
    className: '',
    onClick: () => {},
};

export default CloseIcon;
