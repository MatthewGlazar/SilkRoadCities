let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 41.013889, lng: 28.955556 };
  const position2 = { lat: 39.654722, lng: 66.975833 };
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

  let close = document.createElement('button');
  close.innerText = "X";
  close.addEventListener("click", () => {
	close.parentElement.style.display = 'none';
  });

  div.appendChild(close);

  mapContainer.appendChild(div);


  new google.maps.Marker({
  position: position,
  map,
  title: "City Name",
  icon: image,
  }).addListener("click", () => {
	map.setCenter(position);
	map.setZoom(6);
	$("#cityInfo").load("./cityData/test.html");
	let pop = document.getElementById("cityInfo");
	pop.style.display ='block';
  });

  new google.maps.Marker({
  position: position2,
  map,
  title: "City Name 2",
  icon: image,
  }).addListener("click", () => {
	map.setCenter(position2);
	map.setZoom(6);
	$("#cityInfo").load("./cityData//test2.html");
	let pop = document.getElementById("cityInfo");
	pop.style.display ='block';
  });


}

initMap();