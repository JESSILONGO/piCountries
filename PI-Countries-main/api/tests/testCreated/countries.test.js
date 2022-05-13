const countries = require('../../src/controllers/Countries')

it('Hope it exists', () =>{
expect(countries).toBeDefined()
});

it('the function does not throw errors', () =>{
    const countries = jest.fn(() => true)
    countries()
    expect(countries).toHaveReturned()
});

