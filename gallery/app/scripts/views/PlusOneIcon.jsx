import React, { PropTypes } from 'react';

const PlusOneIcon = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 34 30" onClick={onClick}>
            <path fillRule="evenodd" d="M14.000,8.000 L8.000,8.000 L8.000,16.000 L0.000,16.000 L0.000,22.000 L8.000,22.000 L8.000,30.000 L14.000,30.000 L14.000,22.000 L22.000,22.000 L22.000,16.000 L14.000,16.000 L14.000,8.000 ZM29.482,0.000 C28.707,3.838 24.348,6.457 20.000,6.600 L20.000,10.000 L28.000,10.000 L28.000,30.000 L34.000,30.000 L34.000,0.000 L29.482,0.000 Z"/>
        </svg>
    );
};

PlusOneIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

PlusOneIcon.defaultProps = {
    className: '',
    onClick: () => {},
};

export default PlusOneIcon;
