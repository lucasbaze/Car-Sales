import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: [],
    },
    features: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 },
    ],
};

export default function(state = initialState, action) {
    console.log('made it here');
    switch (action.type) {
        case ADD_ITEM:
            console.log('Made it here!');

            let features = state.car.features;
            features.push(action.payload);

            return {
                ...state,
                car: { ...state.car, features },
            };

        case REMOVE_ITEM:
            return {
                ...state,
            };

        default:
            return state;
    }
}
