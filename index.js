const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/company')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('index', { company: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/capsules', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/capsules')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('capsules', { capsules: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/capsules-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/capsules')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

// Scenario 1 - return a single capsule
// app.get('/capsules/:serial', function (req, res) {
//     axios.get('https://api.spacexdata.com/v4/capsules')
//         .then(function (response) {
//             // handle success
//             // console.log(response.data);
//             // 
//             for (let i = 0; i < response.data.length; i++) {
//                 let capsule = response.data[i];
//                 let splitSerial = req.params.serial.split(''); // array ['c', '1', ...]
//                 let finalSerial = splitSerial[0].toUpperCase() + splitSerial.slice(1).join('');
//                 // upperCaseSerial[0].toUpperCase()
//                 // upperCaseSerial.join('');
//                 console.log('UpperCase Serial', finalSerial);
//                 // console.log('capsule', capsule); // { serial: 'C101', ...}
//                 if (capsule.serial === finalSerial) {
//                     return res.json({ capsule: capsule });
//                 }
//             }
//             return res.json({ message: 'Capsule does not exist' });
//         })
//         .catch(function (error) {
//             // console.log(error);
//             return res.json({ message: 'Data not found. Please try again later.' });
//         });
// });

app.get('/capsules/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/capsules')
        .then(function (response) {
            // print req.params
            // console.log('req.params', req.params); // print an object
            // console.log('api response', response.data); // print an array of capsules
            // run a for loop to search based of the key from req.params
            const capsuleArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let capsule = response.data[i];
                let userRequest = req.params['0'].split('/'); // ['serial', 'c103'] ['reuse_count', '0'] parsing -> getting it into the format the will serve us...
                if (req.params['0'].includes('serial')) {
                    if (capsule.serial === userRequest[1].toUpperCase()) {
                        return res.json({ capsule });
                    }
                } else if (userRequest[0] === 'id') {
                    if (capsule.id === userRequest[1]) {
                        return res.json({ capsule });
                    }
                } else if (userRequest[0] === 'reuse_count') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...
                    let countValue = parseInt(userRequest[1]); // Number(userRequest[1])
                    // check the count value
                    if (capsule.reuse_count === countValue) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'water_landings') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...
                    let countValue = parseInt(userRequest[1]); // Number(userRequest[1])
                    // check the count value
                    if (capsule.water_landings === countValue) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'land_landings') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...
                    let countValue = parseInt(userRequest[1]); // Number(userRequest[1])
                    // check the count value
                    if (capsule.land_landings === countValue) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'last_update') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...
                    let countValue = parseInt(userRequest[1]); // Number(userRequest[1])
                    // check the count value
                    if (capsule.last_update === countValue) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'status') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...
                    let value = userRequest[1]; // Number(userRequest[1])
                    // check the count value
                    if (capsule.status === value) {
                        capsuleArray.push(capsule);
                    }
                } else if (userRequest[0] === 'type') {
                    // check to see which capsule have the reuse count
                    // question: is the value of reuse_count a string or number when it comes in
                    // from the user...
                    let value = userRequest[1]; // Number(userRequest[1])
                    // check the count value
                    if (capsule.type === value) {
                        capsuleArray.push(capsule);
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again.' });
                }
            }
            return res.json({ capsules: capsuleArray });
        })
});


app.get('/company', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/company')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('index', { compsany: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/cores', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/cores')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('cores', { cores: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/cores-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/cores')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});


app.get('/cores/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/cores')
        .then(function (response) {
            console.log('req.params', req.params);
            console.log('api response', response.data);
            const coresArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let core = response.data[i];
                let userRequest = req.params['0'].split('/');
                if (req.params['0'].includes('serial')) {
                    if (core.serial === userRequest[1].toUpperCase()) {
                        return res.json({ core });
                    }
                } else if (userRequest[0] === 'block') {
                    if (core.block === userRequest[1]) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'reuse_count') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.reuse_count === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'rtls_attempts') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.rtls_attempts === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'asds_attempts') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.asds_attempts === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'last_update') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.last_update === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'status') {
                    let value = userRequest[1];
                    if (core.status === value) {
                        coresArray.push(core);
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again.' });
                }

            }
            return res.json({ cores: coresArray });
        })
        .catch(function (error) {
            res.json({ message: 'Data not found. Please try again later' });
        })
});

// query route
// app.get("/search", (req, res) => {
//     let printout = '';
//     console.log('Query:', req.query);
//     for (let key in req.query) {
//       printout += key + ": " + req.query[key] + "<br />";
//     }
//     res.send("Here's what they sent: <br /><br />" + printout);
// });

app.get("/search", (req, res) => {
    let result = {};
    // { name: 'capsules', serial: 'C103' }
    // How would we make an axios when the item is different?
    axios.get(`https://api.spacexdata.com/v4/${req.query.item}`)
        .then(function (response) {
            for (let key in req.query) {
                if (key === 'item') {
                    // do nothing
                    continue;
                } else {
                    // run for loop to search for key and value
                    // key -> serial
                    // req.query[key] -> C103
                    for (let i = 0; i < response.data.length; i++) {
                        let responseValue = response.data[i];
                        if (responseValue.serial === req.query[key]) { // if the response capsule.serial is equal the search item C103
                            return res.json({ responseValue });
                        } else if (responseValue.name === req.query[key]) {
                            return res.json({ responseValue });
                        }
                    }
                }
            }
            return res.json({ message: 'Data not found. Please try again...' })
        })
        .catch(function (error) {
            // console.log(error);
            return res.json({ message: 'Data not found. Please try again later.' });
        });
});






// Scenario 2 - return a single core
// app.get('/cores/:serial', function (req, res) {
//     axios.get('https://api.spacexdata.com/v4/cores')
//         .then(function (response) {
//             // handle success
//             // console.log(response.data);
//             // 
//             for (let i = 0; i < response.data.length; i++) {
//                 let capsule = response.data[i];
//                 let splitSerial = req.params.serial.split(''); // array ['c', '1', ...]
//                 let finalSerial = splitSerial[0].toUpperCase() + splitSerial.slice(1).join('');
//                 // upperCaseSerial[0].toUpperCase()
//                 // upperCaseSerial.join('');
//                 console.log('UpperCase Serial', finalSerial);
//                 // console.log('capsule', capsule); // { serial: 'C101', ...}
//                 if (capsule.serial === finalSerial) {
//                     return res.json({ capsule: capsule });
//                 }
//             }
//             return res.json({ message: 'Capsule does not exist' });
//         })
//         .catch(function (error) {
//             // console.log(error);
//             return res.json({ message: 'Data not found. Please try again later.' });
//         });
// });


app.get('/crew', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('crew', { crew: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/crew-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/dragons', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/dragons')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('dragons', { dragons: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/dragons-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/dragons')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/dragons/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/dragons')
        .then(function (response) {
            console.log('req.params', req.params);
            console.log('api response', response.data);
            const dragonsArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let dragon = response.data[i];
                let userRequest = req.params['0'].split('/');
                if (userRequest[0] === 'id') {
                    if (dragon.id === userRequest[1]) {
                        return res.json({ dragon });
                    }
                } else if (userRequest[0] === 'crew_capacity') {
                    let countValue = parseInt(userRequest[1]);
                    if (dragon.crew_capacity === countValue) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'dry_mass_kg') {
                    let countValue = parseInt(userRequest[1]);
                    if (dragon.dry_mass_kg === countValue) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'dry_mass_lb') {
                    let countValue = parseInt(userRequest[1]);
                    if (dragon.dry_mass_lb === countValue) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'type') {
                    let value = userRequest[1];
                    if (dragon.type === value) {
                        dragonsArray.push(dragon);
                    }
                } else if (userRequest[0] === 'active') {
                    let value = userRequest[1];
                    if (dragon.active === value) {
                        dragonsArray.push(dragon);
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again' });
                }

            }
            return res.json({ dragons: dragonsArray });
        })
        .catch(function (error) {
            res.json({ message: 'Data not found. Please try again later' });
        })
});




app.get('/landpads', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/landpads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('landpads', { landpads: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/landpads-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/landpads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

// remember to finish
app.get('/landpads/*', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/landpads')
        .then(function (response) {
            console.log('req.params', req.params);
            console.log('api response', response.data);
            const landpadsArray = [];
            for (let i = 0; i < response.data.length; i++) {
                let landpad = response.data[i];
                let userRequest = req.params['0'].split('/');
                if (req.params['0'].includes('serial')) {
                    if (core.serial === userRequest[1].toUpperCase()) {
                        return res.json({ core });
                    }
                } else if (userRequest[0] === 'block') {
                    if (core.block === userRequest[1]) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'reuse_count') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.reuse_count === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'rtls_attempts') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.rtls_attempts === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'asds_attempts') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.asds_attempts === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'last_update') {
                    let countValue = parseInt(userRequest[1]);
                    if (core.last_update === countValue) {
                        coresArray.push(core);
                    }
                } else if (userRequest[0] === 'status') {
                    let value = userRequest[1];
                    if (landpad.status === value) {
                        landpadsArray.push(landpad);
                    }
                } else {
                    return res.json({ message: 'Data is not found... Please try again.' });
                }

            }
            return res.json({ cores: coresArray });
        })
        .catch(function (error) {
            res.json({ message: 'Data not found. Please try again later' });
        })
});



app.get('/launches', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/launches')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('launches', { launches: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/launches-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/launches')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/launchpads', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/launchpads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('launchpads', { launchpads: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/launchpads-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/launchpads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/payloads', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/payloads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.render('payloads', { payloads: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/payloads-data', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/payloads')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/roadster', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/roadster')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/rockets', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/rockets')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/ships', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/ships')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/starlink', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/starlink')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});

app.get('/history', function (req, res) {
    axios.get('https://api.spacexdata.com/v4/history')
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.json({ data: response.data });
        })
        .catch(function (error) {
            // console.log(error);
            res.json({ message: 'Data not found. Please try again later' });
        })
});



// /////////////////////////////////
// VIEWS //

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/blog-directory', function (req, res) {
    res.sendFile(__dirname + '/views/blog-directory.html');
});



// ///////////////////////////
const PORT = process.env.PORT || 8000;

module.exports = { app, PORT }

app.listen(PORT, function () {
    console.log('Server is running on PORT', PORT);
});

// needs to remain below port
app.get('/:input', function (req, res) {
    console.log('REQ.PARAMS ->', req.params);

    res.json({ message: 'Testing /:input' });
});


