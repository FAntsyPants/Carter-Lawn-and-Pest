
// Initialize and add the map
function initMap() {
  // The location of Harvest
  const harvest = { lat: 34.855, lng: --86.750 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: harvest,
  });

  // The marker, positioned at Harvest
  const marker = new google.maps.Marker({
    position: harvest,
    map: map,
  });
