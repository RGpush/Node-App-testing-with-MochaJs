const expect = require('expect');
const utils = require('../utils');

//describe --> we use it for grouping the different test cases into one unit and it --> tests particular subunit test
describe('Utils test cases',()=> {

    describe('add numbers',()=> {
        //mocha basic testing and throwing user defined error
        it('should add two numbers', () => {
            let res = utils.add(8, 10);
            if (res !== 18) {
                throw new Error(`res should be 19 but received ${res}`);
            }
        });

        // test cases using assertion library
        it('should add two numbers', () => {
            let res = utils.add(8, 10);
            expect(res).toBe(18);
            //check weather res is a number with chaining also
            expect(res).toBe(18).toBeA('number');
        });
    });

    describe('Square a number',()=> {
        it('should square two numbers', () => {
            let res = utils.square(3);
            if (res !== 9) {
                throw new Error(`res should be 9 but received ${res}`);
            }
        });

        // test cases using assertion library
        it('should get square of a number', () => {
            let res = utils.square(5);
            expect(res).toBe(25).toBeA('number');
            expect(res).toNotBe(625);
        });
    });

// test cases using assertion library
    describe('setName',()=> {
        it('should check some random constants and user in setName', () => {
            let user = {
                name: "Rahul",
                age: 25,
                location: 'Delhi'
            };

            expect(user.name).toEqual('Rahul');
            expect({name: 'rahul'}).toNotEqual({name: 'Rahul'});
            expect([2, 4, 6]).toInclude(6);
            expect([2, 4, 6]).toExclude(5);
            expect(user).toInclude({
                age: 25
            }).toExclude({age: 27});

            let res = utils.setName(user, 'Rahul Gaur');
            expect(res).toInclude({firstName: 'Rahul'});
            expect(res.lastName).toEqual('Gaur');
        });
    });


    describe('Async Add',()=> {
        /*this test case is not valid this is just for showing wrong behaviour
        it('should async add two numbers',()=>{
            utils.asyncAdd(4,3,(sum)=>{
                /*now if we run npm test mocha will pass this test case becuase test case will be
                will passed before going into the callback function i.e. it didn't went inside our test case 'sum' so to resolve this we have
                to pass done to tell mocha its a async fn.
                expect(sum).toBe(10).toBeA('number');
            });
        });
        */


        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });

    });

    describe('Async square',()=> {
        it('should async square of a number', (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).toBe(16).toBeA('number');
                done();
            })
        });
    });

});
