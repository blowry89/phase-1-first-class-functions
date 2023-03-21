function receivesAFunction(callback) {
    const spy = prompt('007');
    callback(spy);
}
function returnsANamedFunction() {
    return returnsANamedFunction
}
function returnsAnAnonymousFunction() {
    return () => console.log('Hi everybody!')
}