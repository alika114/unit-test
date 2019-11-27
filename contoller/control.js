var expect  = require('chai').expect;
var request = require('request');

exports.status =() => {
    request('http://localhost:8080/', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
    });
}

exports.content = () => {
    request('http://localhost:8080/' , function(error, response, body) {
        expect(body).to.equal('Hello World');
    });
}