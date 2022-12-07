function receivesAFunction (fn) {
    fn()
}

function returnsANamedFunction () {
    return function fn(){
        console.log('awesome')
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('Anonymous')
    }
}