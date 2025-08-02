const {sum,fromEuroToDollar,fromYenToDollar} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js

    // Use the function like its supposed 

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
test('156.5 JPY should be 1.07 USD', () => {
    let conversion = fromYenToDollar(156.5)

    expect(conversion).toBeCloseTo(1.07,2);
})