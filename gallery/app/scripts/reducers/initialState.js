import { IMAGE_DIR } from '../constants';

const initialState = {
    photos: [
        {
            id: 1,
            src: `${IMAGE_DIR}lounge2.jpg`,
            src_2x: `${IMAGE_DIR}lounge2@2x.jpg`,
            title: 'Lounge 2',
        },
        {
            id: 2,
            src: `${IMAGE_DIR}mountainview.jpg`,
            src_2x: `${IMAGE_DIR}mountainview@2x.jpg`,
            title: 'Mountain View',
        },
        {
            id: 3,
            src: `${IMAGE_DIR}air.jpg`,
            src_2x: `${IMAGE_DIR}air@2x.jpg`,
            title: 'Air',
        },
        {
            id: 4,
            src: `${IMAGE_DIR}racecar.jpg`,
            src_2x: `${IMAGE_DIR}racecar@2x.jpg`,
            title: 'Racecar',
        },
        {
            id: 5,
            src: `${IMAGE_DIR}desks.jpg`,
            src_2x: `${IMAGE_DIR}desks@2x.jpg`,
            title: 'Desks',
        },
        {
            id: 6,
            src: `${IMAGE_DIR}lounge.jpg`,
            src_2x: `${IMAGE_DIR}lounge@2x.jpg`,
            title: 'Lounge',
        },
        {
            id: 7,
            src: `${IMAGE_DIR}hive.jpg`,
            src_2x: `${IMAGE_DIR}hive@2x.jpg`,
            title: 'Hive',
        },
        {
            id: 8,
            src: `${IMAGE_DIR}logo.jpg`,
            src_2x: `${IMAGE_DIR}logo@2x.jpg`,
            title: 'Logo',
        },
    ],
    addedPhotos: [],
};

export default initialState;
