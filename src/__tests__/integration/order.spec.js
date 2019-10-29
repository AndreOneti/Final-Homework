const request = require('supertest');
const { MongoClient } = require('mongodb');

const app = require('../../app');

describe('Order Rout', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL_DEPLOY, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await db.collection('orders').deleteMany({});
    await connection.close();
    await db.close();
  });

  it('should insert order ok', async () => {
    const mockOrder = { description: 'Mouse', quantity: 1, price: 14.95 };
    const response = await request(app)
      .post('/api/order')
      .set('Accept', 'application/json')
      .send(mockOrder)
    expect(response.status).toBe(201);
  });

  it('should insert order error', async () => {
    const mockOrder = { description: 'Mouse', quantity: 1, price: 14.95 };
    const response = await request(app)
      .post('/api/order')
      .set('Accept', 'application/json')
      .send(mockOrder)
    expect(response.status).toBe(409);
  });

  it('should have "200" on get order', async () => {
    const response = await request(app)
      .get('/api/order/Mouse')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });

  it('should have order equal saved', async () => {
    const mockOrder = { _id: 0, description: 'Mouse', quantity: 1, price: 14.95 };
    const response = await request(app)
      .get('/api/order/Mouse')
      .set('Accept', 'application/json');
    response.body._id = 0;
    expect(response.body).toStrictEqual(mockOrder);
  });

  it('should have "200" on update order', async () => {
    const mockOrder = { price: 15.75 };
    const response = await request(app)
      .patch('/api/order/Mouse')
      .set('Accept', 'application/json')
      .send(mockOrder)
    expect(response.status).toBe(200);
  });

  it('should have "200" on delete order', async () => {
    const response = await request(app)
      .delete('/api/order/Mouse')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });
});
