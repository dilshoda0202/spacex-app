const request = require('supertest');
// const test = require('../index');
const { app, PORT } = require('../index');
const axios = require('axios');


// home
describe('GET /', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// capsules
describe('GET /capsules', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/capsules')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/capsules')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// company
describe('GET /company', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/company')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/company')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// cores
describe('GET /cores', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/cores')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/cores')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// crew
describe('GET /crew', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/crew')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/crew')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// dragons
describe('GET /dragons', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/dragons')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/dragons')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// landpads
describe('GET /landpads', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/landpads')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/landpads')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// launches
describe('GET /launches', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/launches')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/launches')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// launchpads
describe('GET /launchpads', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/launchpads')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/launchpads')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// payloads
describe('GET /payloads', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/payloads')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/payloads')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// roadster
describe('GET /roadster', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/roadster')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/roadster')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// rockets
describe('GET /rockets', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/rockets')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/rockets')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// ships
describe('GET /ships', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/ships')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/ships')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// starlink
describe('GET /starlink', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/starlink')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/starlink')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// history
describe('GET /history', function () {
    it('respond with 200', function (done) {
        request(app)
            .get('/history')
            .expect(200, done);
    });
    it('should respond with json', () => {
        request(app)
            .get('/history')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
        // .expect(200, done);
    });
});

// //////////////////////////////////
// capsules
describe('GET /capsules/*', function () {
    it('response with 200', (done) => {
        request(app)
            .get('/capsules/*')
            .expect(200, done);
    });

    it('Should respond with JSON', () => {
        request(app)
            .get('/capsules/*')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
    });
    it('Serial Value should return TRUE as a boolean', () => {
        //console.log('app', app);
        return axios.get('http://localhost:8000/capsules/serial/C103')
            .then(function (response) {
                let serialValue = response.data.capsule.serial;
                // console.log('Serial Value ->', serialValue);
                expect(Boolean(serialValue)).toBe(true);
            })
            .catch(function (error) {
                console.log('error here', error);
            })
    });
    it('Capsule Length should return as a message', () => {
        //console.log('app', app);
        return axios.get('http://localhost:8000/capsules/serial/C99')
            .then(function (response) {
                console.log("Response ->", response.data);
                expect(response.data.message).toBe('Capsule not found, Please try again');
            })
            .catch(function (error) {
                console.log('error here', error);
            })
    });

});

// cores/*
describe('GET /cores/*', function () {
    it('response with 200', (done) => {
        request(app)
            .get('/cores/*')
            .expect(200, done);
    });

    it('Should respond with JSON', () => {
        request(app)
            .get('/cores/*')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
    });
});

// dragons active
describe('GET /dragons/active', function () {
    it('response with 200', (done) => {
        request(app)
            .get('/dragons/active')
            .expect(200, done);
    });

    it('Should respond with JSON', () => {
        request(app)
            .get('/dragons/active')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
    });
});

// dragons 


// describe('GET /cores/*', function () {
//     it('respond should not be undefined', () {
//         try {
//             const response = axios.get('http://localhost:8000/cores/serial/B1051');
//             const serialValue = response.data.capsule.serial;
//             expect(Boolean(serialValue)).toBe(true);
//         } catch (error) {
//             console.log(error);
//         }
//     });

//     it('should return not found for non capsule serial', () => {
//         try {
//             const response = axios.get('http://localhost:8000/cores/serial/B111');
//             expect(response.data.message).toBe('No matching capsules');
//         } catch (error) {
//             console.log(error);
//         }
//     });
// });
