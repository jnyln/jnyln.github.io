import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import * as actions from '../actions'
import GridView from './GridView';
import DetailView from './DetailView';

const PhotoGallery = (props) => {
    const {
        photos,
        addedPhotos,
        currentPhotoId,
        photoSwipeDirection,
        isDetailOverlayShowing,
        isPhotoCommentsShowing,
        onClickPhoto,
        onClickCloseDetail,
        onClickDetailPhoto,
        onClickPlusOne,
        onClickComment,
        onClickAdd,
        onClickCloseComments,
        onSubmitCommentForm,
        onSwipeDetail,
    } = props;

    let currentPhoto = null;
    for (let i = 0; i < photos.length; i++) {
        if (photos[i].id === currentPhotoId) {
            currentPhoto = photos[i];
            break;
        }
    }

    const isCurrentPhotoAdded = addedPhotos.indexOf(currentPhotoId) > -1;

    return (
        <div className="photo_gallery">
            <CSSTransitionGroup
                transitionName="switch_view"
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}
            >
                {currentPhoto ?
                    <DetailView
                        key="detailView"
                        photo={currentPhoto}
                        isAdded={isCurrentPhotoAdded}
                        photoSwipeDirection={photoSwipeDirection}
                        isDetailOverlayShowing={isDetailOverlayShowing}
                        isPhotoCommentsShowing={isPhotoCommentsShowing}
                        onClickCloseDetail={onClickCloseDetail}
                        onClickDetailPhoto={onClickDetailPhoto}
                        onClickPlusOne={onClickPlusOne}
                        onClickComment={onClickComment}
                        onClickAdd={onClickAdd}
                        onClickCloseComments={onClickCloseComments}
                        onSubmitCommentForm={onSubmitCommentForm}
                        onSwipeDetail={onSwipeDetail}
                    /> :
                    <GridView
                        key="gridView"
                        photos={photos}
                        onClickPhoto={onClickPhoto}
                    />
                }
            </CSSTransitionGroup>
        </div>
    );
};

PhotoGallery.propTypes = {
    photos: PropTypes.array,
    addedPhotos: PropTypes.array,
    currentPhotoId: PropTypes.number,
    photoSwipeDirection: PropTypes.string,
    isDetailOverlayShowing: PropTypes.bool,
    isPhotoCommentsShowing: PropTypes.bool,
    onClickPhoto: PropTypes.func,
    onClickCloseDetail: PropTypes.func,
    onClickDetailPhoto: PropTypes.func,
    onClickPlusOne: PropTypes.func,
    onClickComment: PropTypes.func,
    onClickAdd: PropTypes.func,
    onClickCloseComments: PropTypes.func,
    onSubmitCommentForm: PropTypes.func,
    onSwipeDetail: PropTypes.func,
};

PhotoGallery.defaultProps = {
    photos: [],
    addedPhotos: [],
    currentPhotoId: null,
    photoSwipeDirection: null,
    isDetailOverlayShowing: true,
    isPhotoCommentsShowing: false,
    onClickPhoto: () => {},
    onClickCloseDetail: () => {},
    onClickDetailPhoto: () => {},
    onClickPlusOne: () => {},
    onClickComment: () => {},
    onClickAdd: () => {},
    onClickCloseComments: () => {},
    onSubmitCommentForm: () => {},
    onSwipeDetail: () => {},
};

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
        addedPhotos: state.addedPhotos,
        currentPhotoId: state.currentPhotoId,
        photoSwipeDirection: state.photoSwipeDirection,
        isDetailOverlayShowing: state.isDetailOverlayShowing,
        isPhotoCommentsShowing: state.isPhotoCommentsShowing,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickPhoto: (id) => {
            dispatch(actions.showPhotoDetail(id));
        },
        onClickCloseDetail: () => {
            dispatch(actions.hidePhotoDetail());
        },
        onClickDetailPhoto: () => {
            dispatch(actions.togglePhotoDetailOverlay());
        },
        onClickPlusOne: (id) => {
            dispatch(actions.togglePlusOnePhoto(id));
        },
        onClickComment: () => {
            dispatch(actions.showPhotoComments());
        },
        onClickAdd: (id) => {
            dispatch(actions.toggleAddPhoto(id));
        },
        onClickCloseComments: () => {
            dispatch(actions.hidePhotoComments());
        },
        onSubmitCommentForm: (id, text) => {
            dispatch(actions.addPhotoComment(id, text));
        },
        onSwipeDetail: (e) => {
            dispatch(actions.navigatePhotoDetail(e.direction));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
