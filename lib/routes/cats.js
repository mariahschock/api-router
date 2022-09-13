const cats = [
  { color: 'orange tabby', thickness: 'thiCC' }
];

export default {
  name: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
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
