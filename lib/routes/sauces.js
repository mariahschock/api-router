const sauces = [
    { name: 'Truff', spicyness: 'mild' }
];

export default {
    name: 'sauces',
    get(req, res) {
      res.write(JSON.stringify(sauces));
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
