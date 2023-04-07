import json from './cityData/cities.json' assert { type: 'json' };
let map;

async function initMap() {
// The location of Uluru
  //const position = { lat: 41.013889, lng: 28.955556 };
  //const position2 = { lat: 39.654722, lng: 66.975833 };
  // Request needed libraries.
  //@ts-ignore

  const { Map } = await google.maps.importLibrary("maps");
  //const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
  zoom: 3,
  center: {lat: 39.533599785886885, lng: 83.49064664524137},
  mapId: "DEMO_MAP_ID",
  });

  const icon = "./icons/city_marker.png";
  const detailedIcon = "./icons/detailed_marker.png";

  const mapContainer = document.getElementById('mapCont');

  const div = document.createElement('div');
  div.id = "cityInfo";
  div.style.display = 'none';


  let cities = json["cities"];
  console.log(Object.keys(cities));

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

  div.addEventListener('change', ()=> {
    console.log("City Info Loaded");
    let cityName = document.getElementById("cityName").innerText;
    let lat = document.getElementById("coords").getAttribute("lat");
    let long = document.getElementById("coords").getAttribute("long");
    let position = {lat: lat, lng: long};

    new google.maps.Marker({
        position: position,
        map,
        title: cityName,
        icon: image,
        }).addListener("click", () => {
        $("#cityInfo").load("./cityData/test.html");
        map.setCenter(position);
        map.setZoom(6);
        let pop = document.getElementById("cityInfo");
        pop.style.display ='block';
    });
  });

  mapContainer.appendChild(div);


  //console.log(cities);

}


//$("#cityInfo").load(city);
initMap();