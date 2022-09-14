const cats = [
  { color: 'orange tabby', thickness: 'thiCC' }
];

export default {
  name: 'cats',
  get(req, res) {
    res.write(JSON.stringify(cats));
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.write(JSON.stringify(req.body));
    res.end();
},
put(req, res) {
  const updatedCat = cats[cats.findIndex((cat) => cat.thickness === req.body.thickness)]
  updatedCat.thickness = req.body.newThickness
  res.write(JSON.stringify(cats))
  res.end()
},
  delete(req, res) {
    res.statusCode = 400;
    res.send('Nope');
    res.end();
  },
};
