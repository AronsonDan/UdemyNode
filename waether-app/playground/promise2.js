const request = require('request');

var geocodeAddress = (address, resolve, reject) => {
    var encodeAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
            request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
                json: true
            }, (error, response, body) => {
                if (error) {
                    reject('Unable to connect to Google servers.')
                } else if (body.status === "ZERO_RESULTS") {
                    reject('Unable to find that address.')
                } else if (body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        Latitude: body.results[0].geometry.location.lat,
                        Longtitude: body.results[0].geometry.location.lat
                    });
                }
            })
        }
    )
};

geocodeAddress('sderot').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});