//Test Suite - Mathematical Operations

//Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

let assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests',function(){
        console.log('Execute After All Tests')
    });

    afterEach('Execute After Each Test',function(){
        console.log('Execute After Each Test')
    });

    it('Addition of two numbers', function(){
        let a = 10;
        let b = 10;

        let c = a + b;

        assert.equal(c, 20)
    });

    it('Subtraction of two numbers', function(){
        let a = 10;
        let b = 10;

        let c = a - b;

        assert.equal(c,0)
    });

    it('Multiplication of two numbers', function(){
        let a = 10;
        let b = 10;

        let c = a * b
        assert.equal(c, 100)
    });

    it('Division of two numbers', function(){
        let a = 10;
        let b = 10;

        let c = a / b
        assert.equal(c, 1)
    });

});