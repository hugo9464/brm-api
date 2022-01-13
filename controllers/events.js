import fetch from 'node-fetch';

export async function getAll(req, res, next) {
  // const response = await fetch("https://veloenfrance.fr/ajax/json/events.json")
  fetch('https://veloenfrance.fr/ajax/json/events.json')
    .then(res => res.json())
    .then(json => res.status(200).json(json));
}
