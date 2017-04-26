import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import CloseIcon from './CloseIcon';

const DetailHeader = ({ title, isShowing, onClickCloseDetail }) => {
    return (
        <CSSTransitionGroup
            transitionName="detail_header"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
        >
            {isShowing ?
                <div className="detail_header">
                    <h1 className="detail_header__text">{title}</h1>
                    <CloseIcon
                        className="detail_header__close"
                        onClick={onClickCloseDetail}
                    />
                </div>
            : null}
        </CSSTransitionGroup>
    );
};

DetailHeader.propTypes = {
    title: PropTypes.title,
    isShowing: PropTypes.bool,
    onClickCloseDetail: PropTypes.func,
};

DetailHeader.defaultProps = {
    title: '',
    isShowing: false,
    onClickCloseDetail: () => {},
};

export default DetailHeader;
