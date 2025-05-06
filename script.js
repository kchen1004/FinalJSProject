let map;
map = L.map("map");

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=f631c310-c6fd-453d-985f-556628c41cd2', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

map.setView([40.7128, -74.0060], 12);

L.geoJson(zipcode).addTo(map);

// create a function to find the grocery store density per 1000 people.

function density(i, j) {
    // i is census index
    // j is grocery store index
    let stores = Number(storeCount[j].numberStores);
    let people = Number(censusData[i].totalPopulation);
    return stores / people;
}

console.log(density(79,6));

// Start setup for finding unique zipcodes

let uniqueZipcodes = [];
let counter = 0;

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
                        };
                        // check the number of matches
                        counter++;
                        // change color of regions so we know which ones we have so far, we'll use this space to do the chloropeth later
                        return {
                            color: "red",
                            fillColor: "red",
                            fillOpacity: "0.3"
                        };

                    };
                };
            };
        };
    }
}
).addTo(map);

console.log(counter);
console.log(uniqueZipcodes);
console.log(uniqueZipcodes.length);
// currently 184 matches between all 4 datasets


// Using centering function to get the center of each zipcode polygon
function centerMapOnZipcode(layer) {
    let center = layer.getBounds().getCenter();
    let zipcodeLabel = layer.feature.properties.postalCode;

    L.marker(center)
        .bindPopup("<h3>" + zipcodeLabel + "</h3>")
        .addTo(map)
        .openPopup();
}

L.geoJSON(zipcode, {
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