let map;
map = L.map("map");

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=f631c310-c6fd-453d-985f-556628c41cd2', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
}).addTo(map);

map.setView([40.7128, -74.0060], 10);

L.geoJson(zipcode, {
    style: function (feature) {
        return {
            stroke: false,
        };
    }
}).addTo(map);

// Using centering function to get the center of each zipcode polygon
// function centerMapOnZipcode(layer) {
//     let center = layer.getBounds().getCenter();
//     let zipcodeLabel = layer.feature.properties.postalCode;

//     L.marker(center)
//         .bindPopup("<h3>" + zipcodeLabel + "</h3>")
//         .addTo(map)
//         .openPopup();
// }

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

// NEXT STEPS
// create a legend
// finish the other two pages, including references

function fillColor(i, j) {
    if (density(i, j) > 40) {
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
    if (density(i, j) > 18) {
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
// Below that is code for adding popups
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
                }
            }

        }
        return {
            color: 'white',
            weight: 1,
            fillColor: 'black',
            fillOpacity: 1
        };
    },
    onEachFeature: function (feature, layer) {
        // create the popups for each zip code
        // reuse for loops from above to store information
        let thisZipcode = feature.properties.postalCode;
        let thisPovertyPercent;
        let thisPopulation;
        let thisStoreDensity;
        let thisNumberStores;
        let markerColor;

        for (i = 0; i < censusData.length; i++) {
            if (feature.properties.postalCode === censusData[i].zipcode) {
                thisPovertyPercent = censusData[i].percentInPoverty;
                thisPopulation = censusData[i].totalPopulation;
                for (j = 0; j < storeCount.length; j++) {
                    if (feature.properties.postalCode === storeCount[j].zipcode) {
                        if (isFinite(density(i, j))) {
                            // store the info
                            thisStoreDensity = +(Math.round(density(i, j) + "e+2") + "e-2");
                            thisNumberStores = storeCount[j].numberStores;
                            markerColor = fillColor(i, j);
                        };
                    }
                }
            }
        }

        if (thisPovertyPercent && thisStoreDensity) {
            let popupContent = "<h3>Zipcode: " + thisZipcode + "<h3> <hr/> <h4>Population: " + thisPopulation + "<br/>Grocery Stores: " + thisNumberStores + "<br/>Percent in Poverty: " + thisPovertyPercent + "%<h4/>";

            // find center of each zip code
            let center = layer.getBounds().getCenter();

            layer.on(
                {
                    'click': function () {
                        L.marker(center)
                            .bindPopup(popupContent)
                            .addTo(map)
                            .openPopup();
                    },
                    'popupclose': function () {
                        map.removeLayer(marker);
                    }
                }
            )
        }
    }
}).addTo(map);


// Create a legend

const legend = L.control({ position: 'bottomright' });
const gridColors = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

legend.onAdd = function (map) {
    const container = L.DomUtil.create('div', 'legendInfo');

    container.style.backgroundColor = 'white';
    container.style.padding = '5px';
    container.style.borderRadius = '4px';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';

    const contentWrapper = L.DomUtil.create('div', 'legendVertical', container);
    contentWrapper.style.display = 'flex';
    contentWrapper.style.flexDirection = 'row';
    contentWrapper.style.alignItems = 'center';

    const verticalLabelContainer = L.DomUtil.create('div', 'verticalLabelContainer', contentWrapper);
    verticalLabelContainer.style.display = 'flex';
    verticalLabelContainer.style.flexDirection = 'column';
    verticalLabelContainer.style.justifyContent = 'center';
    verticalLabelContainer.style.marginRight = '8px';

    const verticalLabel = L.DomUtil.create('div', 'verticalLabel', verticalLabelContainer);
    verticalLabel.innerHTML = 'Grocery Store Density';
    verticalLabel.style.writingMode = 'vertical-rl';
    verticalLabel.style.transform = 'rotate(180deg)';
    verticalLabel.style.whiteSpace = 'nowrap';
    verticalLabel.style.fontSize = '12px';
    verticalLabel.style.textAlign = 'center';
    verticalLabel.style.height = '120px';

    const rightSideContainer = L.DomUtil.create('div', 'rightSideContainer', contentWrapper);
    rightSideContainer.style.display = 'flex';
    rightSideContainer.style.flexDirection = 'column';

    const grid = L.DomUtil.create('div', 'legendGrid', rightSideContainer);
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(3, 30px)';
    grid.style.gridTemplateRows = 'repeat(3, 30px)';
    grid.style.gap = '2px';

    for (let i = 0; i < 9; i++) {
        const cell = L.DomUtil.create('div', 'legendCell', grid);
        cell.style.backgroundColor = gridColors[i];
        cell.style.width = '30px';
        cell.style.height = '30px';
    }

    const horizontalLabel = L.DomUtil.create('div', 'horizontalLabel', rightSideContainer);
    horizontalLabel.innerHTML = 'Percent in Poverty';
    horizontalLabel.style.textAlign = 'center';
    horizontalLabel.style.marginTop = '8px';
    horizontalLabel.style.fontSize = '12px';
    horizontalLabel.style.whiteSpace = 'nowrap';

    return container;
};

legend.addTo(map);



// // Old code for checking max numbers
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
