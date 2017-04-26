export const showPhotoDetail = (id) => {
    return {
        type: 'SHOW_PHOTO_DETAIL',
        payload: id,
    };
};

export const hidePhotoDetail = () => {
    return {
        type: 'HIDE_PHOTO_DETAIL',
    };
};

export const togglePhotoDetailOverlay = () => {
    return {
        type: 'TOGGLE_PHOTO_DETAIL_OVERLAY',
    };
};

export const togglePlusOnePhoto = (id) => {
    return {
        type: 'TOGGLE_PLUS_ONE_PHOTO',
        payload: id,
    };
};

export const toggleAddPhoto = (id) => {
    return {
        type: 'TOGGLE_ADD_PHOTO',
        payload: id,
    };
};

export const showPhotoComments = () => {
    return {
        type: 'SHOW_PHOTO_COMMENTS',
    };
};

export const hidePhotoComments = () => {
    return {
        type: 'HIDE_PHOTO_COMMENTS',
    };
};

export const addPhotoComment = (id, text) => {
    return {
        type: 'ADD_PHOTO_COMMENT',
        payload: {
            id,
            text,
        },
    };
};

export const navigatePhotoDetail = (direction) => {
    return {
        type: 'NAVIGATE_PHOTO_DETAIL',
        payload: direction,
    };
}
