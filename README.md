# leaflet-challenge
Overview
(educational practice) USGS need help building a new set of tools that allows them to visualize their earthquake data. I am tasked with developing a way to visualize the data that will allow to better educate the pubic and other government organizations.

Features
Interactive map with zoom and pan functions.
Earthquakes are represented as circles with sizes proportional to their magnitudes.
The color of each circle indicates the depth of the earthquake.
Clickable markers that display the magnitude and depth of each earthquake.
A legend explaining the color coding of earthquake depth.

Data Source
The earthquake data is sourced from the USGS GeoJSON Feed, which provides real-time data about earthquake events:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

Technologies Used
Leaflet.js for interactive maps.
D3.js for fetching and parsing the GeoJSON data.
OpenStreetMap for the base map tiles.
