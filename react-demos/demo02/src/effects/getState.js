
export function getState(state){
    return function (predicate) {
        return predicate(state);
    }
}