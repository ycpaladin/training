// export function createEffect() {
//     return function ofType
// }
// effect :[]
const effects = {};

function addEffect(type, effect) {
    const group = getEffect(type);
    group.push(effect);
    return group;
}

export function getEffect(type) {
    const group = effects[type] || [];
    effects[type] = group;
    return group;
}

export function ofType(type, effect) {
    // const p = [];
    // const effect = {
    //     getState(predicate) {
    //         if(predicate === undefined || predicate === null){
    //             p.push({});
    //         } else {
    //             const _result = predicate({});
    //             p.push(_result);
    //         }
    //         return this;
    //     }, effect(func){
    //         func()
    //     }
    // };
    addEffect(type, effect);
}