import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import queryString from 'query-string';

import rootReducer from './reducers';
import initialState from './reducers/initialState';
import PhotoGallery from './views/PhotoGallery';

const store = createStore(rootReducer, initialState);

// Only render with correct param in URL
const params = queryString.parse(location.search);
if (params.pw === 'google') {
    ReactDOM.render(
        <Provider store={store}>
            <PhotoGallery />
        </Provider>,
        document.querySelector('.photo_gallery_app')
    );
}
