import React, { PropTypes } from 'react';

const AddIcon = ({ className, onClick }) => {
    return (
        <svg className={className} viewBox="0 0 30 30" onClick={onClick}>
            <path fillRule="evenodd" d="M18.000,12.000 L18.000,0.000 L12.000,0.000 L12.000,12.000 L-0.000,12.000 L-0.000,18.000 L12.000,18.000 L12.000,30.000 L18.000,30.000 L18.000,18.000 L30.000,18.000 L30.000,12.000 L18.000,12.000 Z"/>
        </svg>
    );
};

AddIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

AddIcon.defaultProps = {
    className: '',
    onClick: () => {},
};

export default AddIcon;
