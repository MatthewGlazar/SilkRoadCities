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


	new google.maps.Marker({
	position: position,
	map,
	title: "Hello World!",
	icon: image,
	}).addListener("click", () => {
	map.setZoom(8);
	});

	new google.maps.Marker({
	position: position2,
	map,
	title: "Hello World 2!",
	icon: image,
	}).addListener("click", () => {
	map.setZoom(8);
	});


}

initMap();