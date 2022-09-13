const sauces = [
    { name: 'Truff', spicyness: 'mild' }
];

export default {
    name: 'sauces',
    get(req, res) {
      res.write(JSON.stringify(sauces));
      res.end();
    },
    post(req, res) {
        sauces.push(req.body);
        res.write(JSON.stringify(req.body));
        res.end();
    },
    put(req, res) {},
    delete(req, res) {
      res.statusCode = 400;
      res.send('Nope');
      res.end();
    },
  };
