//Mocha has features to note what tests should be executed and 
//what tests should not be executed

// Exclusive Tests - If you want to only run specified suite(s) and test case(s)
// use .only()

// Inclusive Tests - you can tell mocha to ignore suite(s) and test cases(s)
// use .skip()

// Pending Tests - Pending tests will be included in the test results but
// are marked as pending

let assert = require('assert')

describe('Mathematical Operations - 2 Operations', function(){

    it.only('Add two numbers', function(){
        let a = 5;
        let b = 10;

        let c = a + b;

        assert.equal(c, 15);

    });

    it('Subtract two numbers', function(){
        let a = 10;
        let b = 35;

        let c = a - b;

        assert.equal(c, -25);

    });

});
