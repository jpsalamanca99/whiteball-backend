export class HttpRequestError extends Error {
    constructor(error: Error) {
        super('Http request error');
        this.stack += '\n\nOriginal Stack Trace:\n' + error.stack;
    }
}
