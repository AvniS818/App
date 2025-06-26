const districtDescriptions = {
  East: "Home to the capital city Gangtok, East Sikkim blends modern tech with heritage. Visit Rumtek Monastery and smart urban projects like e-buses and sensor-based waste systems.",
  West: "Known for its scenic beauty and heritage, West Sikkim has Pemayangtse Monastery and preserved cultural routes in Pelling. Great for spiritual tourism and trekking.",
  South: "A leader in organic farming and green villages, South Sikkim offers views from Namchi and historic Tashiding Monastery. Also home to solar-powered facilities.",
  North: "High altitude, rich biodiversity. North Sikkim includes Lachen, Lachung, Yumthang Valley. Smart tourism projects aim to preserve this fragile environment."
};
function showDistrict(name) {
  const infoBox = document.getElementById("district-info");
  infoBox.style.display = "block";
  infoBox.innerHTML = `<h3>${name} Sikkim</h3><p>${districtDescriptions[name]}</p>`;
}

document.getElementById("planner-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const location = document.getElementById("location").value;
  const interest = document.getElementById("interest").value;
const plans = {
    temples: "Start from " + location + " → Visit Rumtek, Pemayangtse, and Tashiding. These ancient monasteries are also part of the Smart Tourism Initiative.",
    nature: "From " + location + ", head to North Sikkim for Yumthang Valley and Gurudongmar Lake — with eco-tourist trails and waste monitoring systems.",
    food: location + " is a great base to try organic produce in South Sikkim and traditional cuisines in Gangtok’s smart food hubs.",
    culture: "Explore cultural hubs in Pelling, Namchi, and Gangtok. Visit museums, heritage sites, and smart villages from " + location + "."
  };