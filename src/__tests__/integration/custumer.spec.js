const request = require('supertest');
const { MongoClient } = require('mongodb');

const app = require('../../app');

describe('Custumer Rout', () => {
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
    await db.collection('customers').deleteMany({});
    await connection.close();
    await db.close();
  });

  it('should insert customer ok', async () => {
    const mockCustomer = { name: 'Andre', email: "andreluiz@gea.inatel.br" };
    const response = await request(app)
      .post('/api/customer')
      .set('Accept', 'application/json')
      .send(mockCustomer)
    expect(response.status).toBe(201);
  });

  it('should insert customer error', async () => {
    const mockCustomer = { name: 'Andre', email: "andreluiz@gea.inatel.br" };
    const response = await request(app)
      .post('/api/customer')
      .set('Accept', 'application/json')
      .send(mockCustomer)
    expect(response.status).toBe(409);
  });

  it('should have "200" on get customer', async () => {
    const response = await request(app)
      .get('/api/customer/Andre')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });

  it('should have customer equal send', async () => {
    const mockCustomer = { _id: 0, name: 'Andre', email: "andreluiz@gea.inatel.br" };
    const response = await request(app)
      .get('/api/customer/Andre')
      .set('Accept', 'application/json');
    response.body._id = 0;
    expect(response.body).toStrictEqual(mockCustomer);
  });

  it('should have "200" on update customer', async () => {
    const mockCustomer = { name: 'Carvalho' };
    const response = await request(app)
      .patch('/api/customer/Andre')
      .set('Accept', 'application/json')
      .send(mockCustomer)
    expect(response.status).toBe(200);
  });

  it('should have "200" on delete customer', async () => {
    const response = await request(app)
      .delete('/api/customer/Carvalho')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });
});
