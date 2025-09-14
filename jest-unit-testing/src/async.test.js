// api mock
const fetchData = (success) => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('peanut butter');
            } else {
                reject('error');
            }
        }, 100);
    });


// will wait until the done callback is called before finishing the test
test('callback: the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(true).then(callback);
});

// Promises
test('promise: the data is peanut butter', () => {
    return fetchData(true).then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('promise: the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});

// .resolves / .rejects
test('res/rej: the data is peanut butter', () => {
    return expect(fetchData(true)).resolves.toBe('peanut butter'); // if rejected = test failed
});

test('res/rej: the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error'); // if resolved = test failed
});

// async / await
test('async/await: the data is peanut butter', async () => {
    const data = await fetchData(true);
    expect(data).toBe('peanut butter');
});

test('async/await: the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

// combined with resolves / rejects
// syntactic sugar for line 15-25 (Promises)
test('await res/rej: the data is peanut butter', async () => {
    await expect(fetchData(true)).resolves.toBe('peanut butter');
});

test('await res/rej: the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});
