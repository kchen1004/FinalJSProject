let map;
map = L.map("map");

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=f631c310-c6fd-453d-985f-556628c41cd2', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

map.setView([40.7128, -74.0060], 12);

L.geoJson(zipcode, {
    style: function (feature) {
        return {
            stroke: false,
        };
    }
}).addTo(map);

// Using centering function to get the center of each zipcode polygon
function centerMapOnZipcode(layer) {
    let center = layer.getBounds().getCenter();
    let zipcodeLabel = layer.feature.properties.postalCode;

    L.marker(center)
        .bindPopup("<h3>" + zipcodeLabel + "</h3>")
        .addTo(map)
        .openPopup();
}

// create a function to find the grocery store density per 10000 people.

function density(i, j) {
    // i is census index
    // j is grocery store index
    let stores = Number(storeCount[j].numberStores);
    let people = Number(censusData[i].totalPopulation);
    return 10000 * stores / people;
}

// (1,1) #E8E8E8
// (2,1) #D2B5C8
// (3,1) #BB82A8
// (1,2) #AECAD9
// (2,2) #9897B9
// (3,2) #816499
// (1,3) #74ADC9
// (2,3) #5E7AA9
// (3,3) #474789

const a1 = '#c900a1';
const a2 = '#9600a1';
const a3 = '#0000a1';
const b1 = '#dc8ecd';
const b2 = '#968ecd';
const b3 = '#008ecd';
const c1 = '#E8E8E8';
const c2 = '#96e3e3';
const c3 = '#00d9d9';
const otherColor = '#FF4E4E';

// NEXT STEPS
// create a legend
// finish the other two pages, including references
// make look pretty?

function fillColor(i, j) {
    if (density(i, j) > 30) {
        if (censusData[i].percentInPoverty > 30) {
            return c3;
        }
        if (censusData[i].percentInPoverty > 15) {
            return c2;
        }
        else {
            return c1;
        }
    }
    if (density(i, j) > 15) {
        if (censusData[i].percentInPoverty > 30) {
            return b3;
        }
        if (censusData[i].percentInPoverty > 15) {
            return b2;
        }
        else {
            return b1;
        }
    }
    else {
        if (censusData[i].percentInPoverty > 30) {
            return a3;
        }
        if (censusData[i].percentInPoverty > 15) {
            return a2;
        }
        else {
            return a1;
        }
    }

}


// Start setup for finding unique zipcodes

let uniqueZipcodes = [];
let allDensity = [];

// The code below is being used to check for the number of zipcodes that exist across all three sets of data, starting with the zipcode geojson data, then population data, then the grocery store data, then census poverty data.
L.geoJSON(zipcode, {
    style: function (feature) {
        // go through each postalCode in zipcode
        // then use for loop to look for the Zipcode in census data
        for (i = 0; i < censusData.length; i++) {
            // check if the postalCode exists in the census data
            if (feature.properties.postalCode === censusData[i].zipcode) {
                // if it exists in census data, then we also check it exists in grocery data
                for (j = 0; j < storeCount.length; j++) {
                    if (feature.properties.postalCode === storeCount[j].zipcode) {
                        if (!uniqueZipcodes.includes(feature.properties.postalCode)) {
                            // creates an array of zipcodes that are in datasets
                            uniqueZipcodes.push(feature.properties.postalCode);
                            // calculate the grocery store density per 10000 people (from function above) and push it into the density array to find max and min.
                            if (isFinite(density(i, j))) {
                                // console.log(feature.properties.postalCode + " has " + storeCount[j].numberStores + " stores and " + censusData[i].totalPopulation + " people.")
                                allDensity.push(density(i, j));
                                return {
                                    color: 'white',
                                    weight: 1,
                                    fillColor: fillColor(i, j),
                                    fillOpacity: 1
                                };
                            }
                        }
                    }
                } // end of for loop
            }

        }
        return {
            color: 'white',
            weight: 1,
            fillColor: otherColor,
            fillOpacity: 0.8
        };
    }
}
).addTo(map);

// // console.log(uniqueZipcodes);
// console.log(uniqueZipcodes.length);
// // currently 184 matches between all 4 datasets

// // check for max grocery store density
// console.log("Max density is " + Math.max(...allDensity));

// // check for max percent in poverty
// let allPercent = [];
// for (i = 0; i < censusData.length; i++) {
//     if (isFinite(censusData[i].percentInPoverty) && censusData[i].percentInPoverty != 100) {
//         allPercent.push(censusData[i].percentInPoverty);
//     }
// }
// console.log("Max percent is " + Math.max(...allPercent));



L.geoJSON(zipcode, {
    style: function (feature) {
        return {
            stroke: false
        }
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.postalCode + "</h3>");

        layer.on('click', function (mouse) {
            centerMapOnZipcode(mouse.target);
            // layer.on('mouseout', function () {
            //     layer.closePopup();
            // })
        })
    }

}).addTo(map);

// Check the matches between zipcode and population data by adding the population to each zipcode.

// Find the zipcode in zipcode.js and if it exists, count the number times it appears in the grocery store data, divide by the population in that zip code.