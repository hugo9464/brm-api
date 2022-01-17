import fetch from "node-fetch";

export async function getAll(req, res, next) {
  // const response = await fetch("https://veloenfrance.fr/ajax/json/events.json")
  fetch("https://veloenfrance.fr/ajax/json/events.json")
    .then((res) => res.json())
    .then((json) => {
      res.status(200).json(json);
    });
}

export async function getAllBrevets(req, res, next) {
  // const response = await fetch("https://veloenfrance.fr/ajax/json/events.json")
  fetch("https://veloenfrance.fr/ajax/json/events.json")
    .then((res) => res.json())
    .then((json) => {
      var markers = [];
      json.features
        .filter(
          (feature) =>
            feature.properties.typenone.includes("Brevets") &&
            feature.properties.dateyear === "2022"
        )
        .map((feature) => {
          var marker = markers.find(
            (marker) => JSON.stringify(marker.coordinates) === JSON.stringify(feature.geometry.coordinates)
          );

          if (!marker) {
            var events = [];
            events.push(feature.properties);
            markers.push({
              coordinates: feature.geometry.coordinates,
              events: events,
            });
          } else {
            marker.events.push(feature.properties)
          }
        });

      res.status(200).json(markers);
    });
}
