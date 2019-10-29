const request = require('supertest');
const { MongoClient } = require('mongodb');

const app = require('../../app');

describe('Delivery Rout', () => {
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
    await db.collection('deliverys').deleteMany({});
    await db.collection('customers').deleteMany({});
    await db.collection('orders').deleteMany({});
    await connection.close();
    await db.close();
  });

  it('should insert delivery ok', async () => {
    // Order creation
    const mockOrder = { description: 'MouseGamer', quantity: 10, price: 15.60 };
    const responseOrder = await request(app)
      .post('/api/order')
      .set('Accept', 'application/json')
      .send(mockOrder)

    // Customer creation
    const mockCustomer = { name: 'Carvalho', email: "andreluiz.onete@gea.inatel.br" };
    const responseCustomer = await request(app)
      .post('/api/customer')
      .set('Accept', 'application/json')
      .send(mockCustomer)

    // Delivery creation - _id
    const mockDelivery = {
      orderId: responseOrder.body._id, custumerId: responseCustomer.body._id,
      recieveName: "Andre", recieveVatNumber: '11225930669',
      isBuyer: true, deliveryDate: '30/10/2019-13:54:20',
      location: "Conceicao dos ouros - MG"
    };
    setTimeout(async () => {
      const response = await request(app)
        .post('/api/delivery')
        .set('Accept', 'application/json')
        .send(mockDelivery)
      expect(response.status).toBe(201);
    }, 150);
  });

  it('should have "200" on get delivery', async () => {
    const response = await request(app)
      .get('/api/delivery/Andre')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });

  it('should have "200" on update delivery', async () => {
    const mockDelivery = { recieveName: "Carvalho" };
    const response = await request(app)
      .patch('/api/delivery/Andre')
      .set('Accept', 'application/json')
      .send(mockDelivery)
    expect(response.status).toBe(200);
  });

  it('should have "200" on delete delivery', async () => {
    const response = await request(app)
      .delete('/api/delivery/Carvalho')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });
});
