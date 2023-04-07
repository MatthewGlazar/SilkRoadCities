import json from './cityData/cities.json' assert { type: 'json' };
let map;

async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");

  //The Map
  map = new Map(document.getElementById("map"), {
  zoom: 3,
  center: {lat: 39.533599785886885, lng: 83.49064664524137}, //Eyeballed Center
  mapId: "DEMO_MAP_ID",
  });

  const icon = "./icons/city_marker.png";
  const detailedIcon = "./icons/detailed_marker.png";

  const mapContainer = document.getElementById('mapCont');

  const div = document.createElement('div');
  div.id = "cityInfo";
  div.style.display = 'none';


  let cities = json["cities"];

  Object.keys(cities).forEach(cityName => {
    let city = cities[cityName];
    let pos = {lat: city["lat"], lng: city["long"]};

    if (city['detailed'] != null){
        new google.maps.Marker({
            position: pos,
            map,
            title: cityName,
            icon: detailedIcon,
            }).addListener("click", () => {
                $("#cityInfo").load("./cityData/" + cityName + ".html");
                map.setCenter(pos);
                map.setZoom(6);
                let pop = document.getElementById("cityInfo");
                pop.style.display ='block';
            });
    }
    else {
        new google.maps.Marker({
            position: pos,
            map,
            title: cityName,
            icon: icon,
        });
    }
  });


  mapContainer.appendChild(div);

}


//$("#cityInfo").load(city);
initMap();