const data = {
  key1: 'value1',
  key2: 'value2',
};

fetch('http://localhost:2030/sendData', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});
