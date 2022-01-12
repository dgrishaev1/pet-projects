// will wait until the done callback is called before finishing the test
test('the data is peanut butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

// Promises
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
});

// .resolves / .rejects
test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter'); // if rejected = test failed
});

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error'); // if resolved = test failed
});

// async / await
test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

// combined with resolves / rejects
// syntactic sugar for line 15-25 (Promises)
test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});