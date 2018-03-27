export default function myMiddleware() {
    return function (store) {
        return function (next) {
            return function(action){
                const _action = next(action);
                return _action;
            }
        }
    };
}