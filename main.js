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
  zoom: 4,
  center: position,
  mapId: "DEMO_MAP_ID",
  });

  const image = "./icons/city_marker.png";

  const mapContainer = document.getElementById('mapCont');

  const div = document.createElement('div');
  div.id = "cityInfo";
  div.style.display = 'none';

  mapContainer.appendChild(div);


  const cities = [
    "./cityData/Chang'an.html",
    "./cityData/Samarkand.html",
  ];

  cities.forEach(city => {
    $("#cityInfo").load("./cityData/test.html");
    let cityName = document.getElementById("cityName").innerText;
    let lat = document.getElementById("coords").getAttribute("lat");
    let long = document.getElementById("coords").getAttribute("long");
    let position = {lat, long};

    new google.maps.Marker({
      position: position,
      map,
      title: cityName,
      icon: image,
      }).addListener("click", () => {
        map.setCenter(position);
        map.setZoom(6);
        let pop = document.getElementById("cityInfo");
        pop.style.display ='block';
    });

  });




}

initMap();