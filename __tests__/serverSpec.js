const request = require('supertest');
const expect = require('expect');

let app = require('../server').app;

describe('server test cases',()=>{

    describe('Get /',()=>{
        it('should return hello world response',(done)=>{
            request(app)
            .get('/')
            .expect(200)
            .expect('Hello World!')
            .end(done);
        });
    });

    describe('Get /bad',()=> {
        it('should return bad error response', (done) => {
            request(app)
                .get('/bad')
                .expect(404)
                .expect({error: 'Page not found.'})
                .end(done);
        });
    });

    describe('Get /users',()=> {
        it('should return users response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({name: 'Rahul'})
                })
                .end(done);
        });
    });

});