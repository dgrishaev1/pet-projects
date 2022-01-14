function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);
forEach([0, 1], mockCallback);

test('mock function is called twice', () => expect(mockCallback.mock.calls.length).toBe(2))

test('first argument of the first call to the function was 0', () => expect(mockCallback.mock.calls[0][0]).toBe(0))

test('first argument of the second call to the function was 1', () => expect(mockCallback.mock.calls[1][0]).toBe(1))

test('return value of the first call to the function was 42', () => expect(mockCallback.mock.results[0].value).toBe(42))

// All mock functions have this special .mock property includes data:
// - how the function has been called
// - what the function returned is kept
// - value of this for each call, so it is possible to inspect this as well
// https://jestjs.io/docs/mock-functions#mock-property