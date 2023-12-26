var myMap = L.map("map", {
    center: [0, 0],
    zoom: 2
  });
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  function getColor(depth) {
    return depth > 90 ? "#ea2c2c" :
           depth > 70 ? "#ea822c" :
           depth > 50 ? "#ee9c00" :
           depth > 30 ? "#eecc00" :
           depth > 10 ? "#d4ee00" :
                        "#98ee00" ;
  }
  
  function getRadius(magnitude) {
    return magnitude ? magnitude * 20000 : 1;
  }
  
  d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
        return L.circle(latlng, {
          fillOpacity: 0.75,
          color: "white",
          fillColor: getColor(feature.geometry.coordinates[2]), 
          radius: getRadius(feature.properties.mag) 
        });
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(`<h1>Magnitude: ${feature.properties.mag}</h1> <hr> <h3>Depth: ${feature.geometry.coordinates[2]} km</h3>`);
      }
    }).addTo(myMap);
  }).catch(function(error) {
    console.log("Error fetching or parsing data: ", error);
  });
  
  var legend = L.control({ position: 'bottomright' });
  
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-10, 10, 30, 50, 70, 90];
  
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + ' km<br>' : '+ km');
    }
  
    return div;
  };
  
  legend.addTo(myMap);
  