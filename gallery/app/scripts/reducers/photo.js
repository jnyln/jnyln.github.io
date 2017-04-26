import { SWIPE_LEFT, SWIPE_RIGHT } from '../constants';

export const showPhotoDetail = (state, action) => {
    return {
        ...state,
        currentPhotoId: action.payload,
        isDetailOverlayShowing: true,
    };
};

export const hidePhotoDetail = (state, action) => {
    return {
        ...state,
        currentPhotoId: null,
    };
};

export const togglePhotoDetailOverlay = (state, action) => {
    return {
        ...state,
        isDetailOverlayShowing: !state.isDetailOverlayShowing,
    };
};

export const togglePlusOnePhoto = (state, action) => {
    const photos = state.photos.map((photo) => {
        if (photo.id !== action.payload) {
            return photo;
        }

        return {
            ...photo,
            plusOne: !photo.plusOne,
        };
    });

    return {
        ...state,
        photos,
    };
};

export const toggleAddPhoto = (state, action) => {
    let addedPhotos = state.addedPhotos.slice();

    const photoIndex = addedPhotos.indexOf(action.payload);
    if (photoIndex > -1) {
        // Remove photo from user's list
        addedPhotos.splice(photoIndex);
    }
    else {
        // Add photo to user's list
        addedPhotos.push(action.payload);
    }

    return {
        ...state,
        addedPhotos,
    };
};

export const showPhotoComments = (state, action) => {
    return {
        ...state,
        isPhotoCommentsShowing: true,
    };
};

export const hidePhotoComments = (state, action) => {
    return {
        ...state,
        isPhotoCommentsShowing: false,
    };
};

export const addPhotoComment = (state, action) => {
    const photos = state.photos.map((photo) => {
        if (photo.id !== action.payload.id) {
            return photo;
        }

        let comments = photo.comments || [];
        comments.push({
            text: action.payload.text,
            date: new Date(),
        });

        return {
            ...photo,
            comments,
        };
    });

    return {
        ...state,
        photos,
    };
};

export const navigatePhotoDetail = (state, action) => {
    let currentPhotoIndex = null;
    for (let i = 0; i < state.photos.length; i++) {
        if (state.photos[i].id === state.currentPhotoId) {
            currentPhotoIndex = i;
            break;
        }
    }
    if (typeof currentPhotoIndex === 'undefined') {
        return state;
    }

    let newPhotoIndex = currentPhotoIndex;
    if (action.payload === SWIPE_LEFT) {
        if (currentPhotoIndex === state.photos.length - 1) {
            return state;
        }
        newPhotoIndex++;
    }
    else if (action.payload === SWIPE_RIGHT) {
        if (currentPhotoIndex === 0) {
            return state;
        }
        newPhotoIndex--;
    }

    return {
        ...state,
        currentPhotoId: state.photos[newPhotoIndex].id,
        photoSwipeDirection: action.payload,
    };
};
