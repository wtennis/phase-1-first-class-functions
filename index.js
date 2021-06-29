function receivesAFunction(innerFunction) {
innerFunction();
}

function returnsANamedFunction() {
    const returnedFunction = x => x+2;
    return returnedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log(`anonymous function returned!`);
      }
    }