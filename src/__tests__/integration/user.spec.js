const request = require('supertest');
const { MongoClient } = require('mongodb');

const app = require('../../app');

describe('User Rout', () => {
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
    await db.collection('users').deleteMany({});
    await connection.close();
    await db.close();
  });

  // beforeEach(async () => {
  //   await db.collection('users').deleteMany({});
  // });

  it('should insert user ok', async () => {
    const mockUser = { name: 'Andre', password: "123456", email: "andreluiz@gea.inatel.br" };
    const response = await request(app)
      .post('/api/user')
      .set('Accept', 'application/json')
      .send(mockUser)
    expect(response.status).toBe(201);
  });

  it('should insert user error', async () => {
    const mockUser = { name: 'Carvalho', password: "654321", email: "andreluiz@gea.inatel.br" };
    const response = await request(app)
      .post('/api/user')
      .set('Accept', 'application/json')
      .send(mockUser)
    expect(response.status).toBe(409);
  });

  it('should have "200" on get user', async () => {
    const response = await request(app)
      .get('/api/user/Andre')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });

  it('should have user equal send', async () => {
    const mockUser = { _id: 0, name: 'Andre', password: "123456", email: "andreluiz@gea.inatel.br" };
    const response = await request(app)
      .get('/api/user/Andre')
      .set('Accept', 'application/json');
    response.body._id = 0;
    expect(response.body).toStrictEqual(mockUser);
  });

  it('should have "200" on update user', async () => {
    const mock = { name: 'Andre Carvalho' };
    const response = await request(app)
      .patch('/api/user/Andre')
      .set('Accept', 'application/json')
      .send(mock)
    expect(response.status).toBe(200);
  });

  it('should have "200" on delete user', async () => {
    const response = await request(app)
      .delete('/api/user/Andre')
      .set('Accept', 'application/json')
    expect(response.status).toBe(200);
  });
});
