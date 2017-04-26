import * as photo from './photo';

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_PHOTO_DETAIL':
            return photo.showPhotoDetail(state, action);

        case 'HIDE_PHOTO_DETAIL':
            return photo.hidePhotoDetail(state, action);

        case 'TOGGLE_PHOTO_DETAIL_OVERLAY':
            return photo.togglePhotoDetailOverlay(state, action);

        case 'TOGGLE_PLUS_ONE_PHOTO':
            return photo.togglePlusOnePhoto(state, action);

        case 'TOGGLE_ADD_PHOTO':
            return photo.toggleAddPhoto(state, action);

        case 'SHOW_PHOTO_COMMENTS':
            return photo.showPhotoComments(state, action);

        case 'HIDE_PHOTO_COMMENTS':
            return photo.hidePhotoComments(state, action);

        case 'ADD_PHOTO_COMMENT':
            return photo.addPhotoComment(state, action);

        case 'NAVIGATE_PHOTO_DETAIL':
            return photo.navigatePhotoDetail(state, action);

        default:
            return state;
    }
}

export default rootReducer;
