export const UPDATE_CAR = 'UPDATE_CAR';
export const REMOVE_UPDATE = 'REMOVE_UPDATE';

export function buyItem(newCar) {
    console.log(newCar);
    return {
        type: UPDATE_CAR,
        payload: newCar,

    }
}
export function removeFeature(newCar) {
    console.log(newCar);
    return {
        type: REMOVE_UPDATE,
        payload: newCar,

    }
}