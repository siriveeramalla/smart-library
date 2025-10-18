const libraries = [
  { name: "State Central Library", lat: 17.3845, lon: 78.4803 },
  { name: "British Council Library", lat: 17.4202, lon: 78.4575 },
  { name: "Ink Readers", lat: 17.4421, lon: 78.4987 },
  { name: "The Book Shelf", lat: 17.4443, lon: 78.3922 },
  { name: "Treasure House", lat: 17.4248, lon: 78.4376 },
  { name: "Just Books", lat: 17.4934, lon: 78.3912 },
  { name: "Books n More", lat: 17.4478, lon: 78.4819 },
  { name: "Vivekanand Institute & Library", lat: 17.3634, lon: 78.5079 },
  { name: "City Central Library", lat: 17.3850, lon: 78.4867 },
  { name: "Sri Krishnadevaraya Telugu Bhasha Nilyam", lat: 17.3956, lon: 78.4692 }
];

document.getElementById("findLibrary").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showNearest, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
});

function showNearest(position) {
  const { latitude, longitude } = position.coords;
  const sorted = libraries
    .map(lib => ({
      ...lib,
      distance: getDistance(latitude, longitude, lib.lat, lib.lon)
    }))
    .sort((a, b) => a.distance - b.distance);

  const listDiv = document.getElementById("libraryList");
  listDiv.innerHTML = "<h2>Nearest Libraries:</h2>";

  sorted.forEach(lib => {
    const div = document.createElement("div");
    div.className = "library";
    div.innerHTML = `
      <p><strong>${lib.name}</strong> - ${lib.distance.toFixed(2)} km away</p>
      <button onclick="selectLibrary('${lib.name}')">Select</button>
    `;
    listDiv.appendChild(div);
  });
}

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function showError(error) {
  alert("Unable to fetch your location. Please allow location access.");
}

function selectLibrary(libraryName) {
  localStorage.setItem("selectedLibrary", libraryName);
  window.location.href = "index.html";
}
