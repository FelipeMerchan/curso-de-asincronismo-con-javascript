import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, payload) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return response;
};

const payload = {
  "title": "New Product Course",
  "price": 99999999990,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placehold.co/600x400"]
}

postData(`${API}/products`, payload)
  .then((response) => response.json())
  .then(console.log)
  .catch(console.error);