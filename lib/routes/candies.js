const candies = [
  { name: 'Twix', category: 'chocolate' }
];

export default {
  name: 'candies',
  get(req, res) {
    res.write(JSON.stringify(candies));
    res.end();
  },
  post(req, res) {},
  put(req, res) {},
  delete(req, res) {
    res.statusCode = 400;
    res.send('Nope');
    res.end();
  },
};
