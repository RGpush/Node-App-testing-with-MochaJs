const expect = require('expect');
const rewire = require('rewire');

let app = rewire('../app');// with this we can use these two function app.__set__; app.__get__;

describe('App',()=>{

   it('should call the spy correctly called',()=>{
      let spy = expect.createSpy();
      spy();
      expect(spy).toHaveBeenCalled();
   });

    it('should call the spy correctly called with arguments',()=>{
        let spy = expect.createSpy();
        spy('Rahul',25);
        expect(spy).toHaveBeenCalledWith('Rahul',25);
    });

    // now we will be using rewire means we have method saveUser in db in app.js so we have test it in app.js
    // for this we will be using rewire so instead of calling db.saveuser rewire will call spy
    it('should check saveUser with rewire saveUser with user object',()=>{
        let db = {
            saveUsers: expect.createSpy()
        };
        app.__set__('db',db);

       let email = 'rg.rahul@example.co';
       let password = '123@abc';
       app.handleSignUp(email,password);
       expect(db.saveUsers).toHaveBeenCalledWith({email,password});
    });
});