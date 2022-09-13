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
        const newSauce = {
            name: 'Ketchup',
            spicyness: 'no'
        }
        sauces.push(newSauce);
        res.write(JSON.stringify(newSauce));
        res.end();
    },
    put(req, res) {},
    delete(req, res) {
      res.statusCode = 400;
      res.send('Nope');
      res.end();
    },
  };
