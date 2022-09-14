import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('GET will return cat object', async () => {
  await request(app)
  .get('/api/cats')
  .expect(200);
});

it('GET will return candy object', async () => {
  await request(app)
  .get('/api/candies')
  .expect(200);
});

it('GET will return sauce object', async () => {
  await request(app)
  .get('/api/sauces')
  .expect(200);
});

it('POST / cats will add new cat', async () => {
  const newCat ={
    color: 'grey tabby',
    thickness: 'thiC',
  };
  const res = await request(app).post('/api/v1/cats').send(newCat);
  expect(res.status).toBe(200);
});

it('POST / candies will add new candy', async () => {
  const newCandy ={
    name: 'Skittles',
    category: 'fruity',
  };
  const res = await request(app).post('/api/v1/candies').send(newCandy);
  expect(res.status).toBe(200);
});

it('POST / sauces will add new sauce', async () => {
  const newSauce  ={
    name: 'Ketchup',
    spiciness: 'none',
  };
  const res = await request(app).post('/api/v1/sauces').send(newSauce);
  expect(res.status).toBe(200);
});

it('PUT /cats updates details', async () => {
  const updateCat = {
    thickness: 'thiCC'
  };
  const res = await request(app).put('/api/v1/cats').send(updateCat);
  expect(res.status).toBe(200);
});

it('PUT /candies updates details', async () => {
  const updateCandy = {
    name: 'Twix'
  };
  const res = await request(app).put('/api/v1/candies').send(updateCandy);
  expect(res.status).toBe(200);
});

it('PUT /sauces updates details', async () => {
  const updateSauce = {
    name: 'Truff'
  };
  const res = await request(app).put('/api/v1/sauces').send(updateSauce);
  expect(res.status).toBe(200);
});

it('DELETE /cats deletes cat object', async () => {
  const deleteCat = {
    color: 'orange tabby',
    thickness: 'thiCC'
  };
  const res = await request(app).delete('/api/v1/cats').send(deleteCat);
  expect(res.status).toBe(200);
});

it('DELETE /candies deletes candy object', async () => {
  const deleteCandy = {
    name: 'Twix',
    category: 'chocolate'
  };
  const res = await request(app).delete('/api/v1/candies').send(deleteCandy);
  expect(res.status).toBe(200);
});

it('DELETE /sauces deletes candy object', async () => {
  const deleteSauce = {
    name: 'Truff',
    spicyness: 'mild'
  };
  const res = await request(app).delete('/api/v1/sauces').send(deleteSauce);
  expect(res.status).toBe(200);
});
