import React, { PropTypes } from 'react';

import DetailHeader from './DetailHeader';
import DetailPhoto from './DetailPhoto';
import DetailFooter from './DetailFooter';
import PhotoComments from './PhotoComments';

const DetailView = (props) => {
    const {
        photo,
        isAdded,
        isDetailOverlayShowing,
        isPhotoCommentsShowing,
        photoSwipeDirection,
        onClickCloseDetail,
        onClickDetailPhoto,
        onClickPlusOne,
        onClickComment,
        onClickAdd,
        onClickCloseComments,
        onSwipeDetail,
        onSubmitCommentForm,
    } = props;

    return (
        <div className="detail_view">
            <DetailHeader
                title={photo.title}
                isShowing={isDetailOverlayShowing}
                onClickCloseDetail={onClickCloseDetail}
            />
            <DetailPhoto
                photo={photo}
                photoSwipeDirection={photoSwipeDirection}
                onSwipeDetail={onSwipeDetail}
                onClickDetailPhoto={onClickDetailPhoto}
            />
            <DetailFooter
                photo={photo}
                isShowing={isDetailOverlayShowing}
                isAdded={isAdded}
                onClickPlusOne={onClickPlusOne}
                onClickComment={onClickComment}
                onClickAdd={onClickAdd}
            />
            <PhotoComments
                comments={photo.comments}
                isShowing={isPhotoCommentsShowing}
                onClickCloseComments={onClickCloseComments}
                onSubmitCommentForm={onSubmitCommentForm.bind(null, photo.id)}
            />
        </div>
    );
};

DetailView.propTypes = {
    photo: PropTypes.object.isRequired,
    isAdded: PropTypes.bool,
    isDetailOverlayShowing: PropTypes.bool,
    isPhotoCommentsShowing: PropTypes.bool,
    photoSwipeDirection: PropTypes.string,
    onClickCloseDetail: PropTypes.func,
    onClickDetailPhoto: PropTypes.func,
    onClickPlusOne: PropTypes.func,
    onClickComment: PropTypes.func,
    onClickAdd: PropTypes.func,
    onClickCloseComments: PropTypes.func,
    onSwipeDetail: PropTypes.func,
    onSubmitCommentForm: PropTypes.func,
};

DetailView.defaultProps = {
    isAdded: false,
    isDetailOverlayShowing: true,
    isPhotoCommentsShowing: false,
    photoSwipeDirection: null,
    onClickCloseDetail: () => {},
    onClickDetailPhoto: () => {},
    onClickPlusOne: () => {},
    onClickComment: () => {},
    onClickAdd: () => {},
    onClickCloseComments: () => {},
    onSwipeDetail: () => {},
    onSubmitCommentForm: () => {},
};

export default DetailView;
