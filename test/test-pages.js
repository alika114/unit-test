const control = require('../contoller/control')

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', control.status);

        it('content', control.content);
    });

    /*describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8080/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });*/
});