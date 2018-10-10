// Type definitions for is-promise 2.1
// Project: https://github.com/then/is-promise
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isPromise;

declare function isPromise(obj: any): obj is PromiseLike<any>;
