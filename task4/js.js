function initMap() {
	var element = document.getElementById("map");
	var options = {
		zoom: 20,
		center: {lat: 49.8393088, lng: 24.0336896}
	};

	var myMap = new google.maps.Map(element, options);

	var marker = new google.maps.Marker({
		position: {lat: 49.8393088, lng: 24.0336896},
		map: myMap
	});
};